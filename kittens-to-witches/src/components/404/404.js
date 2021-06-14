import React from 'react'
import { Link } from 'react-router-dom'
import './404.css'

const FourOFour = () => {
  return(
    <section>
      <h1 className='error-page'>404 Page Not Found</h1>
      <Link to='/'>
      <button className='error-home'>Home 🪄</button>
      </Link>
    </section>
  )
}

export default FourOFour;
