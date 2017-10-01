import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Empty = ({value}) => (
  <div className='empty'>
    <span> :( </span>
    <p>{value}</p>
  </div>
)

Empty.propTypes = {
  value: PropTypes.string.isRequired
}
export default Empty
