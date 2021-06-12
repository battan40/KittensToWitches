import React, { Component } from 'react';
import SpellInspirations from '../SpellInspirations/SpellInspirations';
import Form from '../Form/Form'
import Swanspiration from '../Swanspiration/Swanspiration'
import { Route } from 'react-router-dom'
import { fetchKittens, fetchSwansonQuotes } from '../../utils/apiCalls'
import background from '../../assets/enchantedForest.png'
import './App.css';

class App extends Component{
  constructor() {
    super()
      this.state = {
        loading: true,
        swanspiration: '',
        spells: [],
        error: ''
      }
  }

  addSpell = (newSpell) => {
    console.log(newSpell)
    this.setState({ spells: [...this.state.spells, newSpell]})
  }

  renderSpells = () => {
    if(this.state.spells.length) {
      return    <SpellInspirations spells={this.state.spells}/>
    } else {
      return <h1 className='invitation'>Cast your hearts desire</h1>
    }
  }

  componentDidMount = async () => {
    const swanspiration = await fetchSwansonQuotes()
      .then(data => data[0])
    const kittenFamiliar = await fetchKittens()
      .then(data => data.file)
    const organizeKitsNQuotes = {
      id: 0, swanspiration, kittenFamiliar,
    }
    this.setState({ swanspiration:  organizeKitsNQuotes})
    this.setState({loading: false})
  }

  render() {

    return (
      <main className='App' style={{ backgroundImage: `url(${background})`}}>
        <h1 className='app-title'>Kittens To Witches</h1>
        {this.state.loading && <p>Loading...</p>}

        {this.state.swanspiration && <Swanspiration
          swanspiration={this.state.swanspiration}
        />}
        <Form
          addSpell={this.addSpell}
        />

        {this.state.error && <h2>{this.state.error}</h2>}
        {this.renderSpells()}

      </main>
    );
  }
}

export default App;
