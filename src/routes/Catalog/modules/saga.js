import { takeLatest, call, put, all } from 'redux-saga/effects'

import { getAllProducts } from '../../../api'

import { CONSTANTS } from './reducer'

function * onGetProducts () {
  try {
    const products = yield call(getAllProducts)

    const allProductIds = products.map(product => product['_id'])

    const productById = products.reduce((byId, currentProduct) => {
      byId[currentProduct['_id']] = currentProduct
      return byId
    }, {})

    yield put({ type: CONSTANTS.PRODUCTS_SUCCESS, allProductIds, productById })
  } catch (error) {
    yield put({ type: CONSTANTS.PRODUCTS_FAILURE })
  }
}

function * catalogWatcher () {
  yield all([takeLatest(CONSTANTS.PRODUCTS_REQUEST, onGetProducts)])
}

export default [catalogWatcher()]
