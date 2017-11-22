import styled from 'styled-components'

const Body = styled.p`
  font-size: 1rem;
  letter-spacing: -0.002rem;
  margin: 0;
  ${props => props.gutterBottom && `margin-bottom: 0.5rem`};
`

const SubHeading = styled.h3`
  font-size: 1.3rem;
  letter-spacing: 0.008rem;
  font-weight: 500;
  margin: 0;
  ${props => props.gutterBottom && `margin-bottom: 0.5rem`};
`

const Caption = styled.p`
  font-size: 0.8rem;
  color: #b0bec5;
  letter-spacing: -0.002rem;
  margin: 0;
  ${props => props.gutterBottom && `margin-bottom: 0.5rem`};
`

const Headline = styled.h1`
  font-size: 3.5rem;
  margin: 0;
  ${props => props.gutterBottom && `margin-bottom: 0.5rem`};
`

export default { Body, SubHeading, Caption, Headline }
