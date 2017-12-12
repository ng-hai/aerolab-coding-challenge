import { compose } from 'redux'

import withReducer from '../utils/withReducer'
import withSaga from '../utils/withSaga'

import App from './components/App'
import withConnect from './containers/AppContainer'

import notificationReducer from './modules/notificationReducer'
import userReducer from './modules/userReducer'
import userSaga from './modules/userSaga'

export default compose(
  withReducer({ key: 'authentication', reducer: userReducer }),
  withReducer({ key: 'notification', reducer: notificationReducer }),
  withSaga({ key: 'notification', saga: userSaga }),
  withConnect
)(App)
