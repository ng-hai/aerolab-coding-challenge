import { takeLatest, call, put, all } from 'redux-saga/effects'

import { getAllProducts } from '../../../api'

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
  }
}

function * catalogWatcher () {
  yield all([takeLatest(CONSTANTS.PRODUCTS_REQUEST, onGetProducts)])
}

export default catalogWatcher
