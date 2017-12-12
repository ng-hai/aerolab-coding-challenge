import React from 'react'
import styled from 'styled-components'
import { ChevronLeft, ChevronRight } from 'react-feather'

import { PaginationButtonPropTypes } from './propTypes'
import { slidingLeft, slidingRight } from './animations'

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: #999;
  border: 2px solid #999;
  border-radius: 50%;
  transition: all 375ms ease;
  margin: auto 10px auto 0;

  ${({ disabled }) => !disabled && `cursor: pointer;`};

  ${({ disabled }) =>
    disabled &&
    `
      color: #ccc;
      border-color: #ccc;
    `};

  &:hover {
    ${({ disabled, type }) =>
    !disabled &&
      `
        color: #666;
        border-color: #666;

        & > svg {
          ${type === 'prev' && `animation: ${slidingLeft} 1s ease infinite;`};
          ${type === 'next' && `animation: ${slidingRight} 1s ease infinite;`};
        }
      `};
  }

  & > svg {
    fill: none;
  }
`

function PaginationButton (props) {
  return (
    <Button {...props}>
      {props.type === 'prev' && <ChevronLeft />}
      {props.type === 'next' && <ChevronRight />}
    </Button>
  )
}

PaginationButton.propTypes = PaginationButtonPropTypes

export default PaginationButton
