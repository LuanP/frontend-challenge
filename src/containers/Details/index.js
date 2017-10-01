import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Search from '../../components/Search'

import './styles.scss'

const Details = ({movie}) => (
  <div className='details'>
    <Search />
    <div className='details__container'>
      <img src={movie.fullPosterPath} alt='poster' />
      <div className='details__infos'>
        <h1>{movie.title}</h1>
        <small>{movie.originalTitle}</small>
        <p className='info'>year: {movie.releaseYear} | rate: {movie.voteAverage} | votes: {movie.voteCount}</p>
        <p className='overview'>{movie.overview}</p>
      </div>
    </div>
  </div>
)

Details.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.required,
    originalTitle: PropTypes.string.required,
    overview: PropTypes.string.required,
    releaseYear: PropTypes.number,
    voteCount: PropTypes.number,
    voteAverage: PropTypes.number,
    adult: PropTypes.bool,
    fullPosterPath: PropTypes.string
  })
}

const mapStateToProps = (state, {match}) => ({ movie: state.movies[match.params.index] })
export default connect(mapStateToProps)(Details)
