import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import {setQuery, getMovies} from '../../actions'

import './styles.scss'

class Search extends Component {
  componentWillMount () {
    let query = new URLSearchParams(this.props.location.search).get('query') || ''
    if (query !== this.props.query) {
      this.props.setQuery(query)
      this.props.getMovies({query})
    }
  }

  onSubmit (e) {
    e.preventDefault()
    let queryUrl = `/results?query=${this.props.query}`
    this.props.history.push(queryUrl)
    this.props.getMovies({query: this.props.query})
  }

  render () {
    return (
      <div>
        <form className='form' onSubmit={e => this.onSubmit(e)}>
          <input
            type='text'
            name='query'
            placeholder='Search for a movie...'
            onChange={e => this.props.setQuery(e.target.value)}
            value={this.props.query}
          />
          <input type='submit' value='Search' />
        </form>
      </div>
    )
  }
}

Search.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func.isRequired,
  getMovies: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({ query: state.query })
const mapDispatchToProps = (dispatch) => (bindActionCreators({ setQuery, getMovies }, dispatch))

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
