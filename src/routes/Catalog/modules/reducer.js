/**
 * Constants
 */
const CATALOG_REQUEST = '@@aero/CATALOG_REQUEST'
const CATALOG_FAILURE = '@@aero/CATALOG_FAILURE'
const CATALOG_SUCCESS = '@@aero/CATALOG_SUCCESS'

export const CONSTANTS = {
  CATALOG_REQUEST,
  CATALOG_FAILURE,
  CATALOG_SUCCESS,
}

/**
 * Actions
 */
export const getCatalog = () => ({
  type: CATALOG_REQUEST,
})

/**
 * Handlers
 */
const ActionHandler = {
  [CATALOG_REQUEST]: (currentState, action) => ({
    ...currentState,
    gettingCatalog: true,
  }),
  [CATALOG_FAILURE]: (currentState, action) => ({
    ...currentState,
    gettingCatalog: false,
  }),
  [CATALOG_SUCCESS]: (currentState, action) => ({
    ...currentState,
    gettingCatalog: false,
    products: {
      byId: { ...action.productById },
      allIds: [...action.allProductIds],
    },
  }),
}

/**
 * Initial State
 */
const initialState = {
  // Show loading when making request
  gettingCatalog: false,
  paging: {
    currentPage: 1,
    itemsPerPage: 16,
  },
  products: {
    byId: {},
    allIds: [],
  },
  sorting: [
    {
      name: 'Most Recent',
      value: 'MOSTRECENT',
      active: true,
    },
    {
      name: 'Lowest Price',
      value: 'LOWESTPRICE',
      active: false,
    },
    {
      name: 'Highest Price',
      value: 'HIGHESTPRICE',
      active: false,
    },
  ],
}

/**
 * Reducer
 */
export default function catalog (currentState = initialState, action) {
  const handler = ActionHandler[action.type]
  return handler ? handler(currentState, action) : currentState
}
