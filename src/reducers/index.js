import {createReducer} from 'redux-act'
import {setQuery, getMovies, setMovies, endMovies} from '../actions'
import { transformMovieContract } from '../transforms/movieContract'

const INITIAL_STATE = {
  query: '',
  isLoading: false,
  movies: []
}

export default createReducer({
  [setQuery]: (state, payload) => ({...state, query: payload}),
  [getMovies]: (state, payload) => ({...state, isLoading: true, movies: []}),
  [setMovies]: (state, payload) => ({...state, isLoading: false, movies: state.movies.concat(transformMovieContract(payload))}),
  [endMovies]: (state, payload) => ({...state, isLoading: false})
}, INITIAL_STATE)
