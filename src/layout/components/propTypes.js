import { shape, string, number, bool, func } from 'prop-types'

const notificationShape = {
  message: string.isRequired,
  timeout: number.isRequired,
  active: bool.isRequired,
}

const userShape = {
  name: string.isRequired,
  points: number.isRequired,
}

export const LayoutPropTypes = {
  notification: shape(notificationShape).isRequired,
  user: shape(userShape),
  hideNotification: func.isRequired,
  fixNavbar: bool,
}

export const AppPropTypes = {
  ...LayoutPropTypes,
  getUserInfo: func.isRequired,
}

export const UserInfoPropTypes = {
  name: string.isRequired,
  points: number.isRequired,
}
