import { shape, string, number, bool, func } from 'prop-types'

const notificationShape = {
  message: string.isRequired,
  timeout: number.isRequired,
  active: bool.isRequired,
  action: string,
}

const userShape = {
  name: string.isRequired,
  points: number.isRequired,
}

export const LayoutPropTypes = {
  user: shape(userShape),
  fixNavbar: bool,
}

export const AppPropTypes = {
  ...LayoutPropTypes,
  notification: shape(notificationShape).isRequired,
  hideNotification: func.isRequired,
  getUserInfo: func.isRequired,
}

export const UserInfoPropTypes = {
  name: string.isRequired,
  points: number.isRequired,
}
