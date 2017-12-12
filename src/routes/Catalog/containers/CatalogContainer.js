import { connect } from 'react-redux'

import {
  getProducts,
  changeSorting,
  changePage,
  SortOption,
} from '../modules/reducer'

const SORT_OPTIONS = [
  { text: 'Lowest Price', value: SortOption.LOWEST },
  { text: 'Highest Price', value: SortOption.HIGHEST },
]

const sortProducts = sortBy => {
  const compareCost = (productA, productB) => {
    let result = 0
    sortBy === SortOption.LOWEST && (result = productA.cost - productB.cost)
    sortBy === SortOption.HIGHEST && (result = productB.cost - productA.cost)

    return result
  }

  return compareCost
}

const filterProducts = (products, sortBy, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = itemsPerPage * currentPage

  return products.allIds
    .map(productId => products.byId[productId])
    .sort(sortProducts(sortBy))
    .slice(startIndex, endIndex)
}

const mapStateToProps = ({ catalog }) => {
  const { products, sortBy, paging } = catalog

  const filteredProducts = filterProducts(
    products,
    sortBy,
    paging.currentPage,
    paging.itemsPerPage
  )

  return {
    sortBy,
    paging,
    products: filteredProducts,
    sortOptions: SORT_OPTIONS,
  }
}

const mapDispatchToProps = {
  getProducts,
  changeSorting,
  changePage,
}

export default connect(mapStateToProps, mapDispatchToProps)
