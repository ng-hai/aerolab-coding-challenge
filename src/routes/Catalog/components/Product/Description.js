import React from 'react'
import styled from 'styled-components'

import { Typography, Coin, Button } from '../../../../components'

import { DescriptionPropTypes } from './propTypes'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  ${({ layout }) =>
    layout === 'List' &&
    `
      align-items: flex-start;
      margin: auto 1rem;
      width: auto;
    `};
`

const Price = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`

export default function Description ({ name, cost, category, layout }) {
  return (
    <Container layout={layout}>
      {layout === 'List' && (
        <Typography.Subheading>{category}</Typography.Subheading>
      )}
      <Typography.Body weight='600'>{name}</Typography.Body>
      <Price>
        <Coin style={{ marginRight: 10, marginTop: 3 }} />
        <Typography.Subtitle color='#ff6600'>{cost}</Typography.Subtitle>
      </Price>
      <Button primary>Redeem now</Button>
    </Container>
  )
}

Description.propTypes = DescriptionPropTypes
