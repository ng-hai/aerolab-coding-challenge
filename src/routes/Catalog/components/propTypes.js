import {
  func,
  shape,
  objectOf,
  string,
  number,
  arrayOf,
  bool,
} from 'prop-types'

/**
 * Catalog PropTypes
 */
export const CatalogPropTypes = {
  getCatalog: func.isRequired,
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
        }),
      })
    ).isRequired,
    allIds: arrayOf(string).isRequired,
  }).isRequired,
  sorting: arrayOf(
    shape({
      name: string.isRequired,
      value: string.isRequired,
      active: bool.isRequired,
    })
  ).isRequired,
}
