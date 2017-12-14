import React, { PureComponent } from 'react'
import EventListener from 'react-event-listener'
import { Notification } from 'react-notification'

import Layout from './Layout'
import { AppPropTypes } from './propTypes'

class App extends PureComponent {
  static propTypes = AppPropTypes

  state = {
    scrollOver: false,
  }

  componentDidMount () {
    this.props.getUserInfo()
  }

  onWindowScroll = event => {
    this.setState({ scrollOver: event.target.scrollingElement.scrollTop > 0 })
  }

  render () {
    const { notification, user, hideNotification } = this.props
    return [
      <Layout key='Layout' user={user} fixNavbar={this.state.scrollOver} />,
      <EventListener
        key='EventListener'
        target='window'
        onScroll={this.onWindowScroll}
      />,
      <Notification
        key='Notification'
        isActive={notification.active}
        message={notification.message}
        action={notification.action}
        onClick={hideNotification}
        dismissAfter={notification.timeout}
        onDismiss={hideNotification}
        actionStyle={{ color: '#ff6600' }}
        activeBarStyle={{
          marginRight: '1rem',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          borderRadius: 2,
          fontFamily: 'Source Sans Pro',
        }}
      />,
    ]
  }
}

export default App
