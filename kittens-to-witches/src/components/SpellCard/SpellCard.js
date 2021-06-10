import React from 'react';
import './spellCard.css'

const SpellCard = () => {
  return(
    <article className='card'>
      <p className='spell'>This moments spell: I am safe;</p>
      <button className='love-button'>Favorite</button>
    </article>
  )
}

export default SpellCard;
