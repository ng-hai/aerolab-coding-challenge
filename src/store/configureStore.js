import { compose, applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import createRootReducer from './reducers'
import createRootSaga from './sagas'

function configureStore (initialState = {}, history) {
  /**
   * Middleware Configuration
   */
  const sagaMiddleware = createSagaMiddleware()
  const middlwares = [sagaMiddleware, routerMiddleware(history)]

  /**
   * Enhancer Configuration
   */
  const enhancers = []

  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if (
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  /**
   * Create Store
   */
  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(...middlwares), ...enhancers)
  )

  /**
   * Extension Configuration
   */
  store.runSaga = sagaMiddleware.run
  store.injectedReducers = {}
  store.injectedSagas = {}

  /**
   * Hot Reload Configuration
   */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(store.injectedReducers))
    })

    module.hot.accept('./sagas', () => {
      store.runSaga(createRootSaga(store.injectedSagas))
    })
  }

  return store
}

export default configureStore
