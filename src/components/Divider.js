import styled from 'styled-components'

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #d9d9d9;
  margin: 24px 0;

  ${props =>
    props.vertical &&
    `
    height: 100%;
    min-height: 48px;
    width: 1px;
    margin: 0 24px;
  `};
`

export default Divider
