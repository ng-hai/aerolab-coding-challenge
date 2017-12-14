import React from 'react'
import { Link } from 'react-router-dom'

import Routes from '../../routes'

import { NavBar, NavSection } from './Navigation'
import Container from './Container'
import Main from './Main'
import Logo from './Logo'
import UserInfo from './UserInfo'
import Header from './Header'

import { LayoutPropTypes } from './propTypes'

export default function Layout ({
  notification,
  user,
  hideNotification,
  fixNavbar,
}) {
  return (
    <Container>
      {/* Navigation */}
      <NavBar fixed={fixNavbar}>
        <NavSection style={{ width: 1200 }}>
          {/* Logo */}
          <NavSection>
            <Link to='/'>
              <Logo />
            </Link>
          </NavSection>

          {/* User Info */}
          {user && (
            <NavSection>
              <UserInfo name={user.name} points={user.points} />
            </NavSection>
          )}
        </NavSection>
      </NavBar>

      <Header />

      <Main>
        <Routes />
      </Main>
    </Container>
  )
}

Layout.propTypes = LayoutPropTypes
