import React from 'react'
import './404.css'

const FourOFour = () => {
  return(
    <section>
      <h1 className='error-page'>404 Page Not Found</h1>
      <button className='error-home' onClick={() => goHome()}>Home</button>
    </section>
  )
}

export default FourOFour;
