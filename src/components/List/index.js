import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import './styles.scss'

const List = (props) => (
  <div className='list'>
    <img src={props.fullPosterPath} alt={props.title} />
    <div className='list__text'>
      <h2>{props.title}</h2>
      <p className='info'>year: {props.releaseYear} | rate: {props.voteAverage} | votes: {props.voteCount}</p>
      <p className='summary'>{props.summary}</p>
      <Link to={`/details/${props.index}`} className='list__button'>see more</Link>
    </div>
  </div>
)

List.propTypes = {
  fullPosterPath: PropTypes.string,
  summary: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
  voteAverage: PropTypes.number.isRequired
}

export default List
