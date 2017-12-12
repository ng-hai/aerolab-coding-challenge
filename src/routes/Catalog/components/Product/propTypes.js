import { string, shape, number } from 'prop-types'

export const ProductPropTypes = {
  layout: string,
  _id: string.isRequired,
  name: string.isRequired,
  cost: number.isRequired,
  category: string.isRequired,
  img: shape({
    url: string.isRequired,
    hdUrl: string.isRequired,
  }).isRequired,
}

export const DescriptionPropTypes = {
  name: string.isRequired,
  cost: number.isRequired,
}
