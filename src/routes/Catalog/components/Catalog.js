import React, { PureComponent } from 'react'
import scrollToComponent from 'react-scroll-to-component'

import { Select } from '../../../components'

import Grid from './Grid'
import Product from './Product'
import SkeletonLoading from './Product/SkeletonLoading'
import Container from './Container'
import Toolbar from './Toolbar'
import ToolbarSection from './ToolbarSection'
import ViewOptions from './ViewOptions'
import PaginationToolbar from './PaginationToolbar'

import { CatalogPropTypes } from './propTypes'

class Catalog extends PureComponent {
  static propTypes = CatalogPropTypes

  state = {
    viewBy: 'Grid',
  }

  componentDidMount () {
    this.props.getProducts()
  }

  onSort = option => {
    const { sortBy, changeSorting } = this.props
    option !== sortBy && changeSorting(option)
  }

  onChangePage = (disabled, page) => () => {
    if (!disabled) {
      this.props.changePage(page)
      setTimeout(() => {
        scrollToComponent(this.Toolbar)
      }, 325)
    }
  }

  onChangeView = viewBy => () => {
    this.setState({ viewBy })
  }

  setToolbarRef = node => {
    this.Toolbar = node
  }

  onRedeemProduct = ({ _id, cost }) => () => {
    const { userPoints, redeemProduct, redeemLoading } = this.props

    if (redeemLoading !== _id && userPoints >= cost) {
      redeemProduct(_id, cost, userPoints)
    }
  }

  render () {
    const {
      sortOptions,
      sortBy,
      products,
      paging,
      userPoints,
      isLoading,
      redeemLoading,
    } = this.props
    const { itemsPerPage } = paging

    return (
      <Container>
        <PaginationToolbar paging={paging} onChangePage={this.onChangePage} />

        <Toolbar innerRef={this.setToolbarRef}>
          <ToolbarSection>
            <Select
              options={sortOptions}
              onChange={this.onSort}
              value={sortBy}
            />
            <ViewOptions
              onClick={this.onChangeView}
              active={this.state.viewBy}
            />
          </ToolbarSection>
        </Toolbar>

        <Grid layout={this.state.viewBy}>
          {!isLoading &&
            products.map(product => (
              <Product
                key={product['_id']}
                {...product}
                layout={this.state.viewBy}
                loading={redeemLoading === product['_id']}
                userPoints={userPoints}
                onRedeem={this.onRedeemProduct(product)}
              />
            ))}
          {isLoading && generateSkeletonLoading(itemsPerPage)}
        </Grid>

        <PaginationToolbar paging={paging} onChangePage={this.onChangePage} />
      </Container>
    )
  }
}

function generateSkeletonLoading (itemsPerPage) {
  const result = []
  let i = 0
  for (i; i < itemsPerPage; i++) {
    result.push(<SkeletonLoading key={i} />)
  }

  return result
}

export default Catalog
