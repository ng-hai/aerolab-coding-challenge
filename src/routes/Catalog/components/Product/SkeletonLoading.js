import React from 'react'
import styled, { keyframes } from 'styled-components'

const placeHolderShimmer = keyframes`
  0% {
    transform: translateX(-360px);
  }
  100% {
    transform: translateX(360px);
  }
`

const Container = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.05);

  & > div {
    background: rgb(246, 247, 249);
    overflow: hidden;
    position: relative;
  }

  & > div::before {
    content: '';
    background-image: linear-gradient(
      to right,
      rgb(246, 247, 249) 0%,
      rgb(233, 235, 238) 20%,
      rgb(246, 247, 249) 40%,
      rgb(246, 247, 249) 100%
    );
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    animation: 1s ${placeHolderShimmer} linear infinite;
  }
`

const Image = styled.div`
  width: 252px;
  height: 182px;
  margin: 1rem;
`

const Name = styled.div`
  width: 130px;
  height: 27px;
`

const Price = styled.div`
  margin: 5px;
  height: 40px;
  width: 80px;
`

export default function ProductSkeleton () {
  return (
    <Container>
      <Image />
      <Name />
      <Price />
    </Container>
  )
}
