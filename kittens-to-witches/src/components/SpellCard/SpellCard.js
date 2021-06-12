import React from 'react';
import './spellCard.css'

const SpellCard = ({ title, description }) => {
  return(
    <article className='spell-card'>
      <h2 className='invocation'>✨Cast✨</h2>
      <h3 className='title'>{title}</h3>
      <p className='spell'>{description}</p>
      <button className='love-button'>Keep 🪄</button>
    </article>
  )
}

export default SpellCard;
