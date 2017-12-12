import React from 'react'
import { Link } from 'react-router-dom'
import { Notification } from 'react-notification'

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
              <Link style={{ textDecoration: 'none' }} to='/user'>
                <UserInfo name={user.name} points={user.points} />
              </Link>
            </NavSection>
          )}
        </NavSection>
      </NavBar>

      <Header />

      <Main>
        <Routes />
      </Main>

      <Notification
        isActive={notification.active}
        message={notification.message}
        dismissAfter={notification.timeout}
        onDismiss={hideNotification}
        barStyle={{ zIndex: 100 }}
      />
    </Container>
  )
}

Layout.propTypes = LayoutPropTypes
