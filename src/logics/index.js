import { createLogic } from 'redux-logic'

import { connect, subscribe } from 'src/socket'
import { isEmpty } from '../transforms/empty'
import { getMovies, setMovies, endMovies } from '../actions'
import Config from 'Config'

const BASE_URL = Config.urls.movies

const find = createLogic({
  type: `${getMovies}`,
  latest: true,
  process: ({ httpClient, action }, dispatch, done) => {
    let payload = action.payload
    const callbackSocket = (data) => {
      let action = (data.status === 'terminated') ? endMovies() : setMovies(JSON.parse(data))
      dispatch(action)
    }
    httpClient.get(`${BASE_URL}/api/v1/movies?query=${payload.query}`)
      .then(res => res.data)
      .then(res => isEmpty(res))
      .then(res => connect(BASE_URL, res))
      .then(res => subscribe(`movies.${res.callback.listening_token}`, res.socket, callbackSocket, res.callback))
      .then(res => dispatch(setMovies(res)))
      .catch(err => { (err.status === 404) ? dispatch(setMovies([])) : console.error(err) })
  }
})

export default [ find ]
