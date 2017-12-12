import React, { PureComponent } from 'react'
import Transition from 'react-motion-ui-pack'

import Paper from './Paper'
import Image from './Image'
import Description from './Description'
import { ProductPropTypes } from './propTypes'
import { FadeIn, FadeOut } from './transitions'

class Product extends PureComponent {
  static propTypes = ProductPropTypes
  static defaultProps = {
    layout: 'Grid',
  }

  render () {
    const { name, cost, category, img: { url }, layout } = this.props
    return (
      <Transition component={false} enter={FadeIn} leave={FadeOut}>
        <Paper layout={layout} key='paper'>
          <Image src={url} alt={name} />
          <Description
            layout={layout}
            name={name}
            cost={cost}
            category={category}
          />
        </Paper>
      </Transition>
    )
  }
}

export default Product
