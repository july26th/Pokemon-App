import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Pokedex from './Pokedex/Pokedex';
import PokeNews from './PokemonTV/PokeNews';
import GameOption from './MemoryCard/GameOption';
import Game from './MemoryCard/Game';
import PokeTV from './PokemonTV/PokeTV';
import Default from './Default';
import SlideBar from './SlideBar';

import './styles/App.css';


class App extends Component {


  // static duplicateCard = () => {
  //   let tempArr = [];
  //   for (let i = 0; i < 10; i++) {
  //     var item = pokeClasses[Math.floor(Math.random() * pokeClasses.length)];
  //     tempArr.push(item);
  //   }
  //   return tempArr.reduce((preValue, current, index, array) => {
  //     return preValue.concat([current, current])
  //   }, []);
  // };


  render() {
    return (
      <React.Fragment>
        <SlideBar />
        <Switch>
          <Route path="/" exact component={PokeTV} />
          <Route path="/pokedex" component={Pokedex} />
          <Route path="/gameoption" component={GameOption} />
          <Route path="/game" component={Game} />
          <Route path="/pokenews" component={PokeNews} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}


export default App;