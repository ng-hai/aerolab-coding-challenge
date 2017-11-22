import { string, number, shape } from 'prop-types'

export const ProductPropTypes = {
  _id: string.isRequired,
  name: string.isRequired,
  cost: number.isRequired,
  category: string.isRequired,
  img: shape({
    url: string.isRequired,
    hdUrl: string.isRequired,
  }),
}
