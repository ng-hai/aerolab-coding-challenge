import { takeLatest, call, put, all } from 'redux-saga/effects'

import { showNotification } from './notificationReducer'

import {
  USER_INFO_FAILURE,
  USER_INFO_REQUEST,
  USER_INFO_SUCCESS,
} from './userReducer'

import { getUser } from '../../api'

function * userWorker () {
  try {
    const response = yield call(getUser)

    if (response.success && response.success === false) {
      throw new Error(response.message)
    }

    yield put({ type: USER_INFO_SUCCESS, user: response })
  } catch (error) {
    yield put({ type: USER_INFO_FAILURE })
    yield put(showNotification(error.message, 'Dismiss'))
  }
}

function * userWatcher () {
  yield all([takeLatest(USER_INFO_REQUEST, userWorker)])
}

export default userWatcher
