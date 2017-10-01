'use strict'

import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Routes components
import Home from 'containers/Home'
import Results from 'containers/Results'
import Details from 'containers/Details'
import NotFound from 'containers/NotFound'

export default () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/results' component={Results} />
      <Route path='/details/:index' component={Details} />
      <Route component={NotFound} />
    </Switch>
  </div>
)
