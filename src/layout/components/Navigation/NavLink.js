import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  text-transform: capitalize;
  border-bottom: 2px solid rgba(0, 0, 0, 0);
  transition: all 0.2s ease 0s;
  color: #ff6600;
  position: relative;

  &:active,
  &:visited {
    color: #ff6600;
  }

  &::after {
    content: '';
    background-image: linear-gradient(to right, #ff6600 0%, #ff8800 100%);
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    transition: transform 0.2s ease-out;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`

export default NavLink
