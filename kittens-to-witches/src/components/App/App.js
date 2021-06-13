import React, { Component } from 'react';
import SpellInspirations from '../SpellInspirations/SpellInspirations';
import Form from '../Form/Form'
import Swanspiration from '../Swanspiration/Swanspiration'
import About from '../About/About'
import FourOFour from '../404/404'
import { Route, Switch, Link } from 'react-router-dom'
import { fetchKittens, fetchSwansonQuotes } from '../../utils/apiCalls'
import background from '../../assets/enchantedForest.png'
import './App.css';

class App extends Component{
  constructor() {
    super()
      this.state = {
        keep: false,
        loading: true,
        swanspiration: '',
        spells: [],
        error: ''
      }
  }

  addSpell = (newSpell) => {
    newSpell.id = this.state.spells.length + 1
    console.log(newSpell)
    this.setState({ spells: [...this.state.spells, newSpell]})
  }

  renderSpells = () => {
    if(this.state.spells.length) {
      return    <SpellInspirations spells={this.state.spells} favoriteSpell={this.favoriteSpell}/>
    } else {
      return <h1 className='invitation'>Cast your hearts desire</h1>
    }
  }

  favoriteSpell = (id) => {
    const findSpell = this.state.spells.find(spell => spell.id === id)
      findSpell.keep = !findSpell.keep
      this.setState({ spells: [...this.state.spells]})

  }

  componentDidMount = async () => {
    const swanspiration = await fetchSwansonQuotes()
      .then(data => data[0])
    const kittenFamiliar = await fetchKittens()
      .then(data => data.file)
    const organizeKitsNQuotes = {
     swanspiration, kittenFamiliar,
    }
    this.setState({ swanspiration:  organizeKitsNQuotes})
    this.setState({loading: false})
  }

  render() {

    return (
      <Switch>
        <Route path='/favorites' render={() => {
          return  <h1>Favorites Go Here</h1>
        }}/>
      

        <Route exact path='/' render={() => {

          return <main className='App' style={{
            backgroundImage: `url(${background})`}}>
            <h1 className='app-title'>Kittens To Witches</h1>
            {this.state.loading && <p className='loading'>Loading...</p>}


            {this.state.swanspiration &&

              <Swanspiration
                swanspiration={this.state.swanspiration}
                />}

              <Form
              addSpell={this.addSpell}
              />

            {this.state.error && <h2>{this.state.error}</h2>}
            {this.renderSpells()}


             </main>
        }}/>



      </Switch>

    );
  }
}

export default App;
