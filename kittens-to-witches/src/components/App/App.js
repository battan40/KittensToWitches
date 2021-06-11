import React, { Component } from 'react';
import SpellInspirations from '../SpellInspirations/SpellInspirations';
import { fetchKittens, fetchSwansonQuotes } from '../../utils/apiCalls'
import background from '../../assets/enchantedForest.png'
import './App.css';

class App extends Component{
  constructor() {
    super()
      this.state = {
        spells: [],
        error: ''
      }
  }

  addSpell = (newSpell) => {
    this.setState({ spells: [...this.state.spells, newSpell]})
  }

  componentDidMount = async () => {
    const swanspiration = await fetchSwansonQuotes()
      .then(data => data[0])
    const kittenFamiliar = await fetchKittens()
      .then(data => data.file)
    const organizeKitsNQuotes = {
      id: 0, swanspiration, kittenFamiliar,
    }
    this.setState({ spells: [...this.state.spells, organizeKitsNQuotes]})
  }

  render() {

    return (
      <main className='App' style={{ backgroundImage: `url(${background})`}}>
        <h1 className='app-title'>Kittens To Witches</h1>
        <SpellInspirations spells={this.state.spells}/>
      </main>
    );
  }
}

export default App;
