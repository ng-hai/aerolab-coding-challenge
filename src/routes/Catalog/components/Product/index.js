import React from 'react'

import { Typography, Button } from '../../../../components'

import Paper from './Paper'
import Image from './Image'
import Description from './Description'
import Coin from './Coin'
import { ProductPropTypes } from './propTypes'

function Product (props) {
  const { name, category, cost, img: { url } } = props
  return (
    <Paper>
      <Image src={url} alt={name} />
      <Description>
        <Typography.Caption>{category}</Typography.Caption>
        <Typography.Body gutterBottom>{name}</Typography.Body>
        <Button>
          <Coin />
          <Typography.SubHeading>{cost}</Typography.SubHeading>
        </Button>
      </Description>
    </Paper>
  )
}

Product.propTypes = ProductPropTypes

export default Product
