import React, { PureComponent } from 'react'
import scrollToComponent from 'react-scroll-to-component'

import { Select, Typography } from '../../../components'

import Grid from './Grid'
import Product from './Product'
import Container from './Container'
import Toolbar from './Toolbar'
import ToolbarSection from './ToolbarSection'
import Pagination from './Pagination'
import ViewOptions from './ViewOptions'

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

  render () {
    const { sortOptions, sortBy, products, paging } = this.props
    const { currentPage, totalPages } = paging

    return (
      <Container>
        <Toolbar>
          <ToolbarSection>
            <Typography.Subtitle>
              {paging.currentPage * paging.itemsPerPage} of {paging.totalItems}{' '}
              products
            </Typography.Subtitle>
          </ToolbarSection>
          <ToolbarSection>
            <Pagination
              prevDisabled={currentPage === 1}
              nextDisabled={currentPage === totalPages}
              onPrevClick={this.onChangePage(
                currentPage === 1,
                currentPage - 1
              )}
              onNextClick={this.onChangePage(
                currentPage === totalPages,
                currentPage + 1
              )}
            />
          </ToolbarSection>
        </Toolbar>

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
          {products.map(product => (
            <Product
              key={product['_id']}
              layout={this.state.viewBy}
              {...product}
            />
          ))}
        </Grid>

        <Toolbar>
          <ToolbarSection>
            <Typography.Subtitle>
              {paging.currentPage * paging.itemsPerPage} of {paging.totalItems}{' '}
              products
            </Typography.Subtitle>
          </ToolbarSection>
          <ToolbarSection>
            <Pagination
              prevDisabled={currentPage === 1}
              nextDisabled={currentPage === totalPages}
              onPrevClick={this.onChangePage(
                currentPage === 1,
                currentPage - 1
              )}
              onNextClick={this.onChangePage(
                currentPage === totalPages,
                currentPage + 1
              )}
            />
          </ToolbarSection>
        </Toolbar>
      </Container>
    )
  }
}

export default Catalog
