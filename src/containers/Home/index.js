
import React from 'react'
import Search from '../../components/Search'
import './styles.scss'

const LOGO_IMG = require('../../img/logo.png')

const Home = () => (
  <div className='home'>
    <img src={LOGO_IMG} alt='Find your movie' />
    <Search />
  </div>
)

export default Home
