import React from 'react'
import styled from 'styled-components'
import { RefreshCw } from 'react-feather'

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

  ${({ disabled }) => disabled && `filter: grayscale()`};
`

const Attention = styled.div`
  font-style: italic;
  font-weight: bold;
  display: flex;
  align-items: center;
`

export default function Description ({
  name,
  cost,
  category,
  layout,
  neededPoints,
  onRedeem,
  loading,
}) {
  return (
    <Container layout={layout}>
      {layout === 'List' && (
        <Typography.Subheading>{category}</Typography.Subheading>
      )}
      <Typography.Body weight='600'>{name}</Typography.Body>
      <Price disabled={neededPoints < 0}>
        <Coin style={{ marginRight: 10, marginTop: 3 }} />
        <Typography.Subtitle color='#ff6600'>{cost}</Typography.Subtitle>
      </Price>
      {neededPoints >= 0 && (
        <Button primary onClick={onRedeem} loading={loading}>
          {loading ? 'Processing' : 'Redeem now'}
          {loading && <RefreshCw />}
        </Button>
      )}
      {neededPoints < 0 && (
        <Attention className='attention'>
          <Typography.Body color='#ff8800'>{`* Need ${Math.abs(
            neededPoints
          )}`}</Typography.Body>
          <Coin style={{ marginLeft: 5 }} />
        </Attention>
      )}
    </Container>
  )
}

Description.propTypes = DescriptionPropTypes
