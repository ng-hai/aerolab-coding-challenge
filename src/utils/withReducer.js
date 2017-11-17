import React, { Component } from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'

import { injectReducer } from '../store/reducers'

export default ({ key, reducer }) => WrappedComponent => {
  class ReducerInjector extends Component {
    static contextTypes = {
      store: PropTypes.object.isRequired,
    }

    static displayName = `withReducer(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`

    componentWillMount () {
      injectReducer(this.context.store, { key, reducer })
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent)
}
