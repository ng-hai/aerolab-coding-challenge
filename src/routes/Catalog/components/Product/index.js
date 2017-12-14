import React, { PureComponent } from 'react'
import Transition from 'react-motion-ui-pack'
import LazyLoad from 'react-lazyload'

import Paper from './Paper'
import Image from './Image'
import Description from './Description'
import { ProductPropTypes } from './propTypes'
import { FadeIn, FadeOut } from './transitions'

class Product extends PureComponent {
  static propTypes = ProductPropTypes
  static defaultProps = {
    layout: 'Grid',
    userPoints: 0,
  }

  render () {
    const {
      name,
      cost,
      category,
      img: { url },
      layout,
      userPoints,
      onRedeem,
      loading,
    } = this.props

    return (
      <LazyLoad height={320} once>
        <Transition component={false} enter={FadeIn} leave={FadeOut}>
          <Paper layout={layout} key='paper'>
            <Image src={url} alt={name} />
            <Description
              layout={layout}
              name={name}
              cost={cost}
              category={category}
              neededPoints={userPoints - cost}
              onRedeem={onRedeem}
              loading={loading}
            />
          </Paper>
        </Transition>
      </LazyLoad>
    )
  }
}

export default Product
