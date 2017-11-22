import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import 'sanitize.css/sanitize.css'
import './index.css'

import App from './layout'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'

const initialState = {}
const history = createHistory()
const store = configureStore(initialState, history)

const MOUNT_NODE = document.getElementById('root')

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  )

if (module.hot) {
  module.hot.accept('./layout', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render()
  })
}

render()

registerServiceWorker()
