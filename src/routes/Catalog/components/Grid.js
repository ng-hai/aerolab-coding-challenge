import styled from 'styled-components'

const Grid = styled.div`
  flex: 1;

  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
  grid-auto-rows: minmax(276px, 336px);
`

export default Grid
