import { all } from 'redux-saga/effects'

/**
 * Make a root saga
 *
 * @author Hai Nguyen <nghai.dev@gmail.com>
 * @param {any} sagas
 * @returns Generator function runned by Saga Middleware
 */
function createRootSaga (sagas = {}) {
  return function * rootSaga () {
    yield all(...Object.keys(sagas).map(key => sagas[key]))
  }
}

/**
 * Inject saga function to rootSaga
 * Ignore if the `key` is duplicated
 *
 * @author Hai Nguyen <nghai.dev@gmail.com>
 * @export
 * @param {any} store Redux Store
 * @param {any} { key, saga }
 */
export function injectSaga (store, { key, saga }) {
  if (store.injectedSagas[key]) {
    return
  }

  store.injectedSagas[key] = saga
  store.runSaga(createRootSaga(store.injectedSagas))
}

export default createRootSaga
