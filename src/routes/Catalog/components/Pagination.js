import React from 'react'

import { PaginationPropTypes } from './propTypes'
import PaginationButton from './PaginationButton'

function Pagination ({ prevDisabled, nextDisabled, onPrevClick, onNextClick }) {
  return [
    <PaginationButton
      key='prev'
      type='prev'
      disabled={prevDisabled}
      onClick={onPrevClick}
    />,
    <PaginationButton
      key='next'
      type='next'
      disabled={nextDisabled}
      onClick={onNextClick}
    />,
  ]
}

Pagination.propTypes = PaginationPropTypes

export default Pagination
