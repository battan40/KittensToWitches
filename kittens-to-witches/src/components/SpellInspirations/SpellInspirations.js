import React from 'react';
import SpellCard from '../SpellCard/SpellCard'
import './spellInspirations.css';


const SpellInspirations = ({ spells }) => {

  const cardDisplay = spells.map(spell => {
    return (
        <SpellCard
         key={spell.id}
         id={spell.id}
         kittenFamiliar={spell.kittenFamiliar}
         swanspiration={spell.swanspiration}
         keep={spell.keep}
        />
      )

  })

  return(
    <article className='spell-box'>
      { cardDisplay }
    </article>
  )
}

export default SpellInspirations;
