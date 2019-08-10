import React, { Component } from 'react';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import GetPokemon from '../GetPokemon';

import './styles/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {}
    };
  }

  handleOnClick = (id) => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new GetPokemon(data);
        this.setState({ 
          pokemon
         });
         //console.log(pokemon.stats);
      })
      .catch(err => console.log(err));
  } 

  render() {
    const { keyword } = this.state;
    return (
      <div className="App">
        <div className="container poke-box">
        <img width="380" height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"/>
      
        <input name="" id=""  value={keyword} onChange={this.onChange} 
         className="btn btn-primary" type="text"  />
        <div className=" layout">
    
        <PokemonList handleOnClick={this.handleOnClick}/>
        <PokemonDetail pokemon={this.state.pokemon}/>
        </div>
        </div>
      </div>
    );
  }
}


export default App;