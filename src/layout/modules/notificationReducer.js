/**
 * Constants
 */
export const SHOW_NOTIFICATION = '@@aero/SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = '@@aero/HIDE_NOTIFICATION'

export const showNotification = (message, timeout = 5000) => ({
  type: SHOW_NOTIFICATION,
  message,
  timeout,
})

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
})

/**
 * Handler
 */
const ActionHandler = {
  [SHOW_NOTIFICATION]: (currentState, action) => ({
    ...currentState,
    active: true,
    message: action.message,
    timeout: action.timeout || 5000,
  }),
  [HIDE_NOTIFICATION]: (currentState, action) => ({
    ...currentState,
    active: false,
    message: '',
  }),
}

/**
 * Initial State
 */
const initialState = {
  active: false,
  message: '',
  timeout: 5000,
}

/**
 * Reducer
 */
export default function notification (currentState = initialState, action) {
  const handler = ActionHandler[action.type]
  return handler ? handler(currentState, action) : currentState
}
