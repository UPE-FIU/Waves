/**
 * 404 page
 */

import React from 'react'
import { AnimatedWaves } from '../../components'
import { Link } from 'react-router-dom'
import './styles.css'
const P_404 = () => {
  return (
    <AnimatedWaves>
      <div className='no-match'>
        <h1>
          Ohh no!
          <span role='img' aria-label='waving hands'>
            😬
          </span>
        </h1>
        <p>Beach is so empty, there must not be anything here</p>
        <br />
        <span>
          <Link className='link' to='/'>
            Home Page
          </Link>
          <a className='link' href='https://discordapp.com/invite/upefiu'>
            Discord
          </a>
        </span>
      </div>
    </AnimatedWaves>
  )
}
export default P_404
