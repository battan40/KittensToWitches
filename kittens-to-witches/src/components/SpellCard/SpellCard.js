import React from 'react';
import './spellCard.css'

const SpellCard = ({ kittenFamiliar, swanspiration }) => {
  return(
    <article className='card'>
      <h2 className='title'></h2>
      <img className='cat-pic' src={kittenFamiliar} alt='Adorable kitten familiar'/>
      <p className='ronspiration'>{swanspiration}</p>
      <h3 className='invocation'>Cast✨</h3>
      <p className='spell'>I am safe</p>
      <button className='love-button'>Keep 🪄</button>
    </article>
  )
}

export default SpellCard;
