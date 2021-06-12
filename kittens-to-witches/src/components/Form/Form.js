import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      description: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]:
    event.target.value})
  }

  sendSpell = event => {

    const newSpell = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description
    }
    this.props.addSpell(newSpell)
    this.clearInputs()

    }

    clearInputs = () => {
    this.setState({ title: '', description: ''})

  }

  render() {

    return(
      <form className='form-box'>
        <input
          className='title-input'
          type='text'
          placeholder='Name Spell'
          name='title'
          value={this.state.title}
          onChange={event => this.handleChange(event)}
        />

          <input
            className='spell-composition'
            type='text'
            placeholder='Compose Spell'
            name='description'
            value={this.state.description}
            onChange={(event) => this.handleChange(event)}
          />

          <button className='send-spell' type='button' onClick={ () => this.sendSpell()}>Cast Spell</button>

      </form>
    )
  }
}

export default Form;
