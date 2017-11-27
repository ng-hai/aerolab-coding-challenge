/**
 * Constants
 */
const PRODUCTS_REQUEST = '@@aero/PRODUCTS_REQUEST'
const PRODUCTS_FAILURE = '@@aero/PRODUCTS_FAILURE'
const PRODUCTS_SUCCESS = '@@aero/PRODUCTS_SUCCESS'

export const CONSTANTS = {
  PRODUCTS_REQUEST,
  PRODUCTS_FAILURE,
  PRODUCTS_SUCCESS,
}

/**
 * Actions
 */
export const getProducts = () => ({
  type: PRODUCTS_REQUEST,
})

/**
 * Handler
 */
const ActionHandler = {
  [PRODUCTS_REQUEST]: (currentState, action) => ({
    ...currentState,
    isLoading: true,
  }),
  [PRODUCTS_FAILURE]: (currentState, action) => ({
    ...currentState,
    isLoading: false,
  }),
  [PRODUCTS_SUCCESS]: (currentState, action) => ({
    ...currentState,
    isLoading: false,
    products: {
      byId: action.productById,
      allIds: action.allProductIds,
    },
  }),
}

/**
 * Initial State
 */
const initialState = {
  products: {
    byId: {},
    allIds: [],
  },
}

/**
 * Reducer
 */
export default function catalog (currentState = initialState, action) {
  const handler = ActionHandler[action.type]
  return handler ? handler(currentState, action) : currentState
}
