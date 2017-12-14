import React from 'react'

import { Typography } from '../../../components'

import Toolbar from './Toolbar'
import ToolbarSection from './ToolbarSection'
import Pagination from './Pagination'

import { PaginationToolbarPropTypes } from './propTypes'

export default function PaginationToolbar ({ paging, onChangePage }) {
  const { currentPage, itemsPerPage, totalItems, totalPages } = paging
  return (
    <Toolbar>
      <ToolbarSection>
        <Typography.Subtitle>
          {currentPage * itemsPerPage} of {totalItems} products
        </Typography.Subtitle>
      </ToolbarSection>
      <ToolbarSection>
        <Pagination
          prevDisabled={currentPage === 1}
          nextDisabled={currentPage === totalPages}
          onPrevClick={onChangePage(currentPage === 1, currentPage - 1)}
          onNextClick={onChangePage(
            currentPage === totalPages,
            currentPage + 1
          )}
        />
      </ToolbarSection>
    </Toolbar>
  )
}

PaginationToolbar.propTypes = PaginationToolbarPropTypes
