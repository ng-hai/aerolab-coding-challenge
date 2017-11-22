import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Catalog from './Catalog'

const ConnectedSwitch = connect(({ router: { location } }) => ({ location }))(
  Switch
)

export default function Routes (props) {
  return (
    <ConnectedSwitch>
      <Route exact path='/' component={Catalog} />
    </ConnectedSwitch>
  )
}
