import React, { PureComponent } from 'react'
import EventListener from 'react-event-listener'

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
      <Layout
        key='Layout'
        notification={notification}
        user={user}
        hideNotification={hideNotification}
        fixNavbar={this.state.scrollOver}
      />,
      <EventListener
        key='EventListener'
        target='window'
        onScroll={this.onWindowScroll}
      />,
    ]
  }
}

export default App
