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

  submitSpell = (event) => {
    const newSpell = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description
    }
    this.props.addSpell(newSpell)

    this.clearInputs = () => {
      this.setState({ title: '', description: ''})
    }
  }

  render() {
    return(
      <form>
        <input>
      </form>
    )
  }
}
