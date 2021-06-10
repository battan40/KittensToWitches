import React, { Component } from 'react';
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
  render() {
    return (
      <main className='App' style={{ backgroundImage: `url(${background})`}}>
        <h1 className='app-title'>Kittens To Witches</h1>
      </main>
    );
  }
}

export default App;