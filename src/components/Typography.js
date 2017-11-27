import styled from 'styled-components'

const Body = styled.p`
  margin: 0;
  font-size: 1rem;
  letter-spacing: -0.002rem;

  ${({ gutterBottom }) => gutterBottom && `margin-bottom: 1rem`};
  ${({ weight }) => weight && `font-weight: ${weight}`};
  ${({ color }) => color && `color: ${color}`};
`

const Subheading = Body.extend`
  font-size: 0.889rem;
`

const Subtitle = Body.extend`
  font-size: 1.5rem;
`

export default { Body, Subheading, Subtitle }
