import { string, shape, number, func, bool } from 'prop-types'

export const ProductPropTypes = {
  layout: string,
  _id: string.isRequired,
  name: string.isRequired,
  cost: number.isRequired,
  category: string.isRequired,
  userPoints: number,
  onRedeem: func,
  loading: bool,
  img: shape({
    url: string.isRequired,
    hdUrl: string.isRequired,
  }).isRequired,
}

export const DescriptionPropTypes = {
  name: string.isRequired,
  cost: number.isRequired,
  neededPoints: number.isRequired,
  onRedeem: func.isRequired,
  loading: bool,
}
