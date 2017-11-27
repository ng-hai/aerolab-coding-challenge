import { connect } from 'react-redux'

import { getProducts } from '../modules/reducer'

const mapStateToProps = state => {
  return {
    ...state.catalog,
  }
}

const mapDispatchToProps = {
  getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)
