import React from 'react'
import { Grid, List } from 'react-feather'

import { Button } from '../../../components'
import { ViewOptionsPropTypes } from './propTypes'

function ViewOptions ({ active, onClick }) {
  return [
    <Button
      key='Grid'
      active={active === 'Grid'}
      secondary
      style={{ marginLeft: 10 }}
      onClick={onClick('Grid')}
    >
      <Grid />
    </Button>,
    <Button
      key='List'
      active={active === 'List'}
      secondary
      style={{ marginLeft: 10 }}
      onClick={onClick('List')}
    >
      <List />
    </Button>,
  ]
}

ViewOptions.propTypes = ViewOptionsPropTypes

export default ViewOptions
