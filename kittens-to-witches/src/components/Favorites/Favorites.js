import React from 'react';
import SpellCard from '../SpellCard/SpellCard'
import { Link } from 'react-router-dom'
import './favorites.css'

const Favorites = ( { spells, favoriteSpell }) => {

  const spellsDisplay = spells.map(spell => {
    return (
        <SpellCard
         key={spell.id}
         id={spell.id}
         title={spell.title}
         description={spell.description}
         keep={spell.keep}
         favoriteSpell={favoriteSpell}
        />
      )
  })

  return(
    <article className='spell-box'>
      { spellsDisplay }
      <Link to='/'>
      <button className='error-home'>Home</button>
      </Link>
    </article>
  )

}

export default Favorites;
