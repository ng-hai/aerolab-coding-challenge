import { connect } from 'react-redux'

import { getCatalog } from '../modules/reducer'

const mapStateToProps = ({ catalog }) => {
  return {
    ...catalog,
  }
}

const mapDispatchToProps = { getCatalog }

export default connect(mapStateToProps, mapDispatchToProps)
