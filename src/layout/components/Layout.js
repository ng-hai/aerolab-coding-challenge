import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import Routes from '../../routes'

import { NavBar, NavSection } from './Navigation'
import Container from './Container'
import Main from './Main'
import Logo from './Logo'

export default function Layout (props) {
  return (
    <Container>
      {/* Navigation */}
      <NavBar>
        {/* Logo */}
        <NavSection>
          <Link to='/'>
            <Logo src={logo} alt={`Aerolab's Logo`} />
          </Link>
        </NavSection>

        {/* User Info */}
        <NavSection />
      </NavBar>

      <Main>
        <Routes />
      </Main>
    </Container>
  )
}
