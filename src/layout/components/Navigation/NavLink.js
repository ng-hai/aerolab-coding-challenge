import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: capitalize;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  transition: all 0.2s ease 0s;

  &:active,
  &:visited {
    color: rgba(0, 0, 0, 0.87);
  }

  &:hover {
    border-bottom-color: rgba(0, 0, 0, 0.87);
  }
`

export default NavLink
