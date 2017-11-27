import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-auto-rows: minmax(300px, auto);
  margin: 1rem 1rem 4rem;
`

export default Grid
