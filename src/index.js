'use strict'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import configureStore from './configureStore'
import Routes from './routes'
import './styles/styles.scss'

const store = configureStore()

// App initialization
const renderApp = NextApp => {
  render(
    <Provider store={store}>
      <AppContainer>
        <BrowserRouter>
          <NextApp />
        </BrowserRouter>
      </AppContainer>
    </Provider>,
    document.querySelector('[data-js="app"]')
  )
}
renderApp(Routes)

// Hot Reload
if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default
    renderApp(NextApp)
  })
}
