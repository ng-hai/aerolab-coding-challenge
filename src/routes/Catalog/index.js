import { compose } from 'redux'

import withReducer from '../../utils/withReducer'
import withSaga from '../../utils/withSaga'

import Component from './components/Catalog'
import withConnect from './containers/CatalogContainer'

import reducer from './modules/reducer'
import saga from './modules/saga'

export default compose(
  withReducer({ key: 'catalog', reducer }),
  withSaga({ key: 'catalog', saga }),
  withConnect
)(Component)
