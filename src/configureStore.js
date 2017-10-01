/* global devToolsExtension:false */

import axios from 'axios'
import { compose, createStore, applyMiddleware } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import reducers from './reducers'
import logic from './logics'

const deps = { httpClient: axios } // injected dependencies for logic
const logicMiddleware = createLogicMiddleware(logic, deps)
const middleware = applyMiddleware(logicMiddleware)

// using compose to allow for applyMiddleware, just add it in
const enhancer = (typeof devToolsExtension !== 'undefined')
  ? compose(middleware, devToolsExtension())
  : middleware

export default function configureStore () {
  const store = createStore(reducers, enhancer)
  return store
}
