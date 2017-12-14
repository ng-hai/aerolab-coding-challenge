export const ProductsPerPage = 16
/**
 * Constants
 */
const PRODUCTS_REQUEST = '@@aero/PRODUCTS_REQUEST'
const PRODUCTS_FAILURE = '@@aero/PRODUCTS_FAILURE'
const PRODUCTS_SUCCESS = '@@aero/PRODUCTS_SUCCESS'

const PRODUCTS_SORTING = '@@aero/PRODUCTS_SORTING'
const PAGE_CHANGE = '@@aero/PAGE_CHANGE'

const PRODUCT_REDEEM_REQUEST = '@@aero/PRODUCT_REDEEM_REQUEST'
const PRODUCT_REDEEM_FAILURE = '@@aero/PRODUCT_REDEEM_FAILURE'
const PRODUCT_REDEEM_SUCCESS = '@@aero/PRODUCT_REDEEM_SUCCESS'

export const CONSTANTS = {
  PRODUCTS_REQUEST,
  PRODUCTS_FAILURE,
  PRODUCTS_SUCCESS,
  PRODUCT_REDEEM_REQUEST,
  PRODUCT_REDEEM_FAILURE,
  PRODUCT_REDEEM_SUCCESS,
}

/**
 * Actions
 */
export const getProducts = () => ({
  type: PRODUCTS_REQUEST,
})

export const changeSorting = sortOption => ({
  type: PRODUCTS_SORTING,
  sortOption,
})

export const changePage = page => ({
  type: PAGE_CHANGE,
  page,
})

export const redeemProduct = (productId, cost, userPoints) => ({
  type: PRODUCT_REDEEM_REQUEST,
  productId,
  cost,
  userPoints,
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
    paging: {
      ...currentState.paging,
      totalItems: action.totalItems,
      totalPages: action.totalPages,
    },
  }),
  [PRODUCTS_SORTING]: (currentState, action) => ({
    ...currentState,
    sortBy: action.sortOption,
    paging: {
      ...currentState.paging,
      currentPage: 1,
    },
  }),
  [PAGE_CHANGE]: (currentState, action) => ({
    ...currentState,
    paging: {
      ...currentState.paging,
      currentPage: action.page,
    },
  }),
  [PRODUCT_REDEEM_REQUEST]: (currentState, action) => ({
    ...currentState,
    redeemLoading: action.productId,
  }),
  [PRODUCT_REDEEM_SUCCESS]: (currentState, action) => ({
    ...currentState,
    redeemLoading: null,
  }),
  [PRODUCT_REDEEM_FAILURE]: (currentState, action) => ({
    ...currentState,
    redeemLoading: null,
  }),
}

/**
 * Initial State
 */
export const SortOption = {
  LOWEST: 'LOWEST_PRICE',
  HIGHEST: 'HIGHEST_PRICE',
}

const initialState = {
  isLoading: false,
  redeemLoading: null,
  sortBy: SortOption.LOWEST,
  products: {
    byId: {},
    allIds: [],
  },
  paging: {
    currentPage: 1,
    itemsPerPage: ProductsPerPage,
    totalPages: 1,
    totalItems: 0,
  },
}

/**
 * Reducer
 */
export default function catalog (currentState = initialState, action) {
  const handler = ActionHandler[action.type]
  return handler ? handler(currentState, action) : currentState
}
