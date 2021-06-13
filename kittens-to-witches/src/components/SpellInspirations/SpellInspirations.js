import React from 'react';
import SpellCard from '../SpellCard/SpellCard'
import './spellInspirations.css';


const SpellInspirations = ({ spells, favoriteSpell }) => {

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
    </article>
  )
}

export default SpellInspirations;
