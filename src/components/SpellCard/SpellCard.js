import React from 'react';
import PropTypes from 'prop-types';
import './spellCard.css'

const SpellCard = ({ keep, favoriteSpell, id, title, description }) => {
  const chosenSpell = keep ? 'Forget 🔮' : 'Keep 🪄'
  return(
    <article className='spell-card'>
      <h2 className='invocation'>✨Ashe✨</h2>
      <h3 className='title'>{title}</h3>
      <p className='spell'>{description}</p>
      <button className='love-button' onClick={() => favoriteSpell(id)}>{chosenSpell}</button>
    </article>
  )
}

export default SpellCard;

SpellCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  keep: PropTypes.bool,
  favoriteSpell: PropTypes.func
}
