import { takeLatest, call, put, all } from 'redux-saga/effects'

import { getAllProducts, redeemProduct } from '../../../api'
import {
  showNotification,
  hideNotification,
} from '../../../layout/modules/notificationReducer'
import { changeUserPoints } from '../../../layout/modules/userReducer'

import { CONSTANTS, ProductsPerPage } from './reducer'

function * onGetProducts () {
  try {
    const products = yield call(getAllProducts)

    /**
     * Normalized State
     */
    const allProductIds = products.map(product => product['_id'])

    const productById = products.reduce((byId, currentProduct) => {
      byId[currentProduct['_id']] = currentProduct
      return byId
    }, {})

    /**
     * Calculate Pagination
     */
    const totalItems = products.length
    const totalPages = Math.ceil(totalItems / ProductsPerPage)

    yield put({
      type: CONSTANTS.PRODUCTS_SUCCESS,
      allProductIds,
      productById,
      totalItems,
      totalPages,
    })
  } catch (error) {
    yield put({ type: CONSTANTS.PRODUCTS_FAILURE })
    yield put(showNotification(error.message, 'Dismiss'))
  }
}

function * onRedeemProduct ({ productId, cost, userPoints }) {
  try {
    yield put(hideNotification())
    const response = yield call(redeemProduct, productId)

    if (response.error) {
      throw new Error(response.error)
    }

    // Deduct user's points
    const deductedPoints = userPoints - cost
    yield put(changeUserPoints(deductedPoints))
    yield put(showNotification(response.message, 'Dismiss', 3000))
    yield put({ type: CONSTANTS.PRODUCT_REDEEM_SUCCESS })
  } catch (error) {
    yield put({ type: CONSTANTS.PRODUCT_REDEEM_FAILURE })
    yield put(showNotification(error.message, 'Dismiss'))
  }
}

function * catalogWatcher () {
  yield all([
    takeLatest(CONSTANTS.PRODUCTS_REQUEST, onGetProducts),
    takeLatest(CONSTANTS.PRODUCT_REDEEM_REQUEST, onRedeemProduct),
  ])
}

export default catalogWatcher
