import { compose } from 'redux'

import withReducer from '../../utils/withReducer'
import withSaga from '../../utils/withSaga'

import Catalog from './components'
import reducer from './modules/reducer'
import saga from './modules/saga'

import withConnect from './containers/CatalogContainer'

export default compose(
  withReducer({ key: 'catalog', reducer }),
  withSaga({ key: 'catalog', saga }),
  withConnect
)(Catalog)
