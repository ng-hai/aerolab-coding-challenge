import styled from 'styled-components'

const NavBar = styled.nav`
  display: flex;
  height: 64px;
  justify-content: center;
  transition: all 0.3s ease 0s;
  background: white;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  ${({ fixed }) =>
    fixed &&
    `
    z-index: 60;
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.05);
  `};

  @media (max-width: 1280px) {
    padding: 0 1rem;
  }
`

export default NavBar
