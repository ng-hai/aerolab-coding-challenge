import React, { PureComponent } from 'react'

import { Button } from '../../../../components'

import Paper from './Paper'
import Image from './Image'
import Description from './Description'
import { ProductPropTypes } from './propTypes'

class Product extends PureComponent {
  static propTypes = ProductPropTypes
  render () {
    const { name, cost, img: { url } } = this.props
    return (
      <Paper>
        <Image src={url} alt={name} />
        <Description name={name} cost={cost} />
        <Button>Redeem now</Button>
      </Paper>
    )
  }
}

export default Product
