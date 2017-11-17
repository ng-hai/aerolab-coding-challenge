import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
/**
 * Make a root reducer that has all injected and global reducers
 * to be replaced everytime mounting new route
 *
 * @author Hai Nguyen <nghai.dev@gmail.com>
 * @param {object} reducers - Reducers to inject to Redux Store
 * @returns Single Reducer Function
 */
function createRootReducer (reducers) {
  return combineReducers({
    ...reducers,
    router,
  })
}

/**
 * Inject new reducer to root reducer
 * Ignore if the `key` is duplicated
 *
 * @author Hai Nguyen <nghai.dev@gmail.com>
 * @export
 * @param {any} store - Redux Store
 * @param {any} { key, reducer }
 */
export function injectReducer (store, { key, reducer }) {
  if (store.injectedReducers[key]) {
    return
  }

  store.injectedReducers[key] = reducer
  store.replaceReducer(createRootReducer(store.injectedReducers))
}

export default createRootReducer
