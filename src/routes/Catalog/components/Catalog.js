import React, { PureComponent } from 'react'

import Grid from './Grid'
import Product from './Product'
import Container from './Container'

import { CatalogPropTypes } from './propTypes'

class Catalog extends PureComponent {
  static propTypes = CatalogPropTypes

  componentDidMount () {
    this.props.getProducts()
  }

  render () {
    const { products } = this.props

    return (
      <Container>
        <Grid>
          {products.allIds.map(productId => (
            <Product key={productId} {...products.byId[productId]} />
          ))}
        </Grid>
      </Container>
    )
  }
}

export default Catalog
