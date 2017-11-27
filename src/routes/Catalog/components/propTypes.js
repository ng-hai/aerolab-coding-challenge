import { shape, string, number, arrayOf, objectOf } from 'prop-types'

export const CatalogPropTypes = {
  products: shape({
    byId: objectOf(
      shape({
        _id: string.isRequired,
        name: string.isRequired,
        cost: number.isRequired,
        category: string.isRequired,
        img: shape({
          url: string.isRequired,
          hdUrl: string.isRequired,
        }).isRequired,
      })
    ).isRequired,
    allIds: arrayOf(string).isRequired,
  }),
}
