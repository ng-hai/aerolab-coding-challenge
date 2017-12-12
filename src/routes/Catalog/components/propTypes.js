import { shape, string, number, arrayOf, func, oneOf, bool } from 'prop-types'
import { ProductPropTypes } from './Product/propTypes'

export const CatalogPropTypes = {
  products: arrayOf(shape(ProductPropTypes)).isRequired,
  sortBy: string.isRequired,
  getProducts: func.isRequired,
  changeSorting: func.isRequired,
  changePage: func.isRequired,
  sortOptions: arrayOf(
    shape({
      text: string.isRequired,
      value: string.isRequired,
    })
  ).isRequired,
  paging: shape({
    currentPage: number.isRequired,
    itemsPerPage: number.isRequired,
    totalItems: number.isRequired,
    totalPages: number.isRequired,
  }).isRequired,
}

export const PaginationButtonPropTypes = {
  type: oneOf(['next', 'prev']).isRequired,
  disabled: bool,
}

export const ViewOptionsPropTypes = {
  active: string.isRequired,
  onClick: func.isRequired,
}

export const PaginationPropTypes = {
  prevDisabled: bool.isRequired,
  nextDisabled: bool.isRequired,
  onPrevClick: func.isRequired,
  onNextClick: func.isRequired,
}
