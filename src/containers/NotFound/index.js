
import React from 'react'
import Search from '../../components/Search'
import Empty from '../../components/Empty'

import './styles.scss'

const NotFound = () => (
  <div className='notFound'>
    <Search />
    <Empty value='Where am I?' />
  </div>
)

export default NotFound
