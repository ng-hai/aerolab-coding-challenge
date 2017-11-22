import React from 'react'

import { Typography, Divider, Button } from '../../../../components'

import Container from './Container'

export default function Sort (props) {
  return (
    <Container>
      <Typography.SubHeading>16 of 32 products</Typography.SubHeading>
      <Divider vertical />
      <Typography.SubHeading>Sort by:</Typography.SubHeading>
      <Button style={{ margin: '0 8px' }} active>
        Most Recent
      </Button>
      <Button style={{ margin: '0 8px' }}>Lowest Price</Button>
      <Button style={{ margin: '0 8px' }}>Highest Price</Button>
    </Container>
  )
}
