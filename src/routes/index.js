import React from 'react'
// import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Catalog from './Catalog'

export default function Routes (props) {
  return (
    <Switch>
      <Route exact path='/' component={Catalog} />
    </Switch>
  )
}
