import React from 'react'
import { Link } from 'react-router-dom'
import './about.css'

const About = () => {
  return(
    <section className='about-box'>
      <h1 className='about-title'>Why Swanspirations?</h1>

      <p className='about-body'>Sometimes inspiration comes from the strangest of places.  This app was created with the intention of offering the ridiculous wisdom and folly of Ron Swanson.  Then it only seemed right to send Ron Swanson messages with a kitten familiar.  The hope is that you feel at home, laugh and then feel inspired to cast a spell.
      </p>
      <Link to='/'>
      <button className='error-home'>Home</button>
      </Link>
    </section>

  )
}

export default About;
