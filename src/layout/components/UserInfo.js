import React from 'react'
import styled from 'styled-components'
import AnimatedNumber from 'react-animated-number'

import { Coin } from '../../components'
import { UserInfoPropTypes } from './propTypes'

const Points = styled.div`
  background: transparent;
  color: #ff8800;
  padding: 0.3rem 0.5rem;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
  text-align: right;
  line-height: 1;

  &:hover {
    color: #ff6600;
  }

  & > span:last-child {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`

function UserInfo ({ name, points }) {
  return (
    <Points>
      <span>{name}</span>
      <span>
        <Coin style={{ marginTop: -2, marginRight: 5 }} size={20} />
        <AnimatedNumber component='span' value={points} stepPrecision={0} />
      </span>
    </Points>
  )
}

UserInfo.propTypes = UserInfoPropTypes

export default UserInfo
