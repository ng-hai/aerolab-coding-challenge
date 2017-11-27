import React from 'react'
import styled from 'styled-components'

import { Typography, Coin } from '../../../../components'

import { DescriptionPropTypes } from './propTypes'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const Price = styled.div`
  display: flex;
`

export default function Description ({ name, cost }) {
  return (
    <Container>
      <Typography.Body weight='600'>{name}</Typography.Body>
      <Price>
        <Coin style={{ marginRight: 10, marginTop: 3 }} />
        <Typography.Subtitle color='#ff6600'>{cost}</Typography.Subtitle>
      </Price>
    </Container>
  )
}

Description.propTypes = DescriptionPropTypes
