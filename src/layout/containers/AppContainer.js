import { connect } from 'react-redux'

import { getUserInfo } from '../modules/userReducer'
import { hideNotification } from '../modules/notificationReducer'

const mapStateToProps = ({ authentication, notification }) => {
  return {
    notification,
    user: authentication.user,
  }
}

const mapDispatchToProps = { getUserInfo, hideNotification }

export default connect(mapStateToProps, mapDispatchToProps)
