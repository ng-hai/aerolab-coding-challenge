import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import hoistNonReactStatics from 'hoist-non-react-statics'

import { injectSaga } from '../store/sagas'

export default ({ key, saga }) => WrappedComponent => {
  class SagaInjector extends PureComponent {
    static contextTypes = {
      store: PropTypes.object.isRequired,
    }

    static displayName = `withSaga(${WrappedComponent.displayName ||
      WrappedComponent.name ||
      'Component'})`

    componentWillMount () {
      injectSaga(this.context.store, { key, saga })
    }

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

  return hoistNonReactStatics(SagaInjector, WrappedComponent)
}
