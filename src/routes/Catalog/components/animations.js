import { keyframes } from 'styled-components'

const slidingRight = keyframes`
0% {
  transform: translateX(0);
}
50% {
  transform: translateX(3px);
}
100% {
  transform: translateX(0);
}
`

const slidingLeft = keyframes`
0% {
  transform: translateX(0);
}
50% {
  transform: translateX(-3px);
}
100% {
  transform: translateX(0);
}
`

export { slidingLeft, slidingRight }
