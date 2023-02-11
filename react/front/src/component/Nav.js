import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <h1 className='nav-head'>Equim  Blog</h1>
        <Link className='link' to="/step">STEPS PAGE</Link>
    </div>
  )
}

export default Nav