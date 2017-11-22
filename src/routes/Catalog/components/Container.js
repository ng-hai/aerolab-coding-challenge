import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 0 10%;

  @media (max-width: 720px) {
    padding: 0 7%;
  }
`

export default Container
