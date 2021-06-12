import React from 'react';
import './swanspiration.css'

const Swanspiration = ({ swanspiration, loading }) => {
  return(
    <article className='kit-card'>
      <img className='cat-pic'
         src={swanspiration.kittenFamiliar} alt='Adorable kitten familiar'
         />
      <p className='ronspiration'>{swanspiration.swanspiration}</p>
    </article>
  )
}

export default Swanspiration;
