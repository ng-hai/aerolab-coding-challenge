/**
 * Constants
 */
export const USER_INFO_REQUEST = '@@aero/USER_INFO_REQUEST'
export const USER_INFO_FAILURE = '@@aero/USER_INFO_FAILURE'
export const USER_INFO_SUCCESS = '@@aero/USER_INFO_SUCCESS'

/**
 * Actions
 */
export const getUserInfo = () => ({
  type: USER_INFO_REQUEST,
})

/**
 * Handlers
 */
const ActionHandler = {
  [USER_INFO_REQUEST]: (currentState, action) => ({
    ...currentState,
    isLoading: true,
  }),
  [USER_INFO_FAILURE]: (currentState, action) => ({
    ...currentState,
    isLoading: false,
  }),
  [USER_INFO_SUCCESS]: (currentState, action) => ({
    ...currentState,
    isLoading: false,
    user: { ...action.user },
  }),
}

/**
 * Initial State
 */
const initialState = {
  isLoading: false,
  user: null,
}

/**
 * Reducer
 */
export default function user (currentState = initialState, action) {
  const handler = ActionHandler[action.type]
  return handler ? handler(currentState, action) : currentState
}
