import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import Search from '../../components/Search'
import List from '../../components/List'
import Empty from '../../components/Empty'

import './styles.scss'

const Results = ({movies, isLoading}) => (
  <div className='results'>
    <Search />
    {
      movies.length > 0
        ? movies.map((item, index) => <List key={item.id} index={index} {...item} />)
        : (isLoading)
          ? <span className='results__loading'>Loading...</span>
          : <Empty value='There are no movies that matched your query.' />
    }
  </div>
)

Results.propTypes = {
  movies: PropTypes.array.required,
  isLoading: PropTypes.bool.required
}

const mapStateToProps = (state) => ({ movies: state.movies, isLoading: state.isLoading })
export default withRouter(connect(mapStateToProps)(Results))
