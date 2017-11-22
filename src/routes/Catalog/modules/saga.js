import { takeLatest, call, put, all } from 'redux-saga/effects'

import { getAllProducts } from '../../../api'

import { CONSTANTS } from './reducer'

function * catalogWorker () {
  try {
    const responseData = yield call(getAllProducts)

    const productById = responseData.reduce((accumulator, currentValue) => {
      accumulator[currentValue['_id']] = currentValue
      console.log(accumulator)
      return accumulator
    }, {})

    const allProductIds = responseData.map(product => product['_id'])

    yield put({
      type: CONSTANTS.CATALOG_SUCCESS,
      productById,
      allProductIds,
    })
  } catch (error) {
    yield put({ type: CONSTANTS.CATALOG_FAILURE })
  }
}

function * catalogWatcher () {
  yield all([takeLatest(CONSTANTS.CATALOG_REQUEST, catalogWorker)])
}

export default [catalogWatcher()]
