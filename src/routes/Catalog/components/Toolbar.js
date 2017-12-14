import styled from 'styled-components'

const Toolbar = styled.div`
  height: 57px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0 1rem;

  @media (min-width: 1280px) {
    align-self: center;
    min-width: 1200px;
  }
`

export default Toolbar
