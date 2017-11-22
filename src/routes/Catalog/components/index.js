import React, { PureComponent } from 'react'

import { Divider } from '../../../components'

import Grid from './Grid'
import Container from './Container'
import Sort from './Sort'
import Product from './Product'
import { CatalogPropTypes } from './propTypes'

class Catalog extends PureComponent {
  static propTypes = CatalogPropTypes

  static defaultProps = {}

  componentDidMount () {
    this.props.getCatalog()
  }

  render () {
    const { products } = this.props
    return (
      <Container>
        <Sort />
        <Divider />
        <Grid>
          {products.allIds.map(productId => (
            <Product key={productId} {...products.byId[productId]} />
          ))}
        </Grid>
        <Divider />
      </Container>
    )
  }
}

export default Catalog
