import styled from 'styled-components'

import coin from '../assets/coin.svg'

const Coin = styled.img.attrs({
  src: coin,
  alt: 'coin',
})`
  ${({ size }) =>
    size &&
    `
    width: ${size}px;
    height: ${size}px;
  `};
`

export default Coin
