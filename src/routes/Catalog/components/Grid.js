import styled from 'styled-components'

const Grid = styled.div`
  margin: 1rem;
  max-width: 1200px;
  display: grid;
  ${({ layout }) =>
    layout === 'Grid' &&
    `
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      grid-auto-rows: minmax(300px, auto);
      grid-gap: 1.5rem;

      @media (max-width: 992px) {
        grid-auto-rows: minmax(360px, auto);
      }
  `};

  ${({ layout }) =>
    layout === 'List' &&
    `
      grid-template-columns: repeat(2, 0.5fr);
      grid-auto-rows: minmax(200px, auto);
      grid-gap: 1rem;

      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-gap: 0.5rem;
      }
  `};

  @media (min-width: 1280px) {
    align-self: center;
    min-width: 1200px;
  }
`

export default Grid
