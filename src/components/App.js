import React, { Component } from 'react';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import GetPokemon from '../GetPokemon';
import SlideBar from './SlideBar';
import Search from './Search';
import pokemon from 'pokemon';
import { pokeClasses } from '../pokeClasses';
import './styles/App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      pokeList: [],
    };
  }
  componentDidMount() {
    this.setProducts();
   
  }
  setProducts = (name) => {
    let temp = [];
    pokeClasses.forEach(item => {
      const singleItem = { ...item };
      temp = [...temp, singleItem];
    });
    this.setState(() => {
      return { pokeList: temp };
    });
  };
  handleOnClick = (id) => {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new GetPokemon(data);
        this.setState({
          pokemon
        });
      })
      .catch(err => console.log(err));
  }
  onSearch = (keyword) => {
      let temp = [];
      var findPoke = this.state.pokeList.find(key => {
        try {
          return pokemon.getId(keyword).toString() === key.id;
        } catch (error) {
          return temp = this.state.pokeList;
        }        
      });
      if(findPoke) {
        temp[0] = findPoke;
        this.setState({
          pokeList: temp
        });
      }
    //   if(pokemon.getId(keyword)
    // } catch (error) {
    //   console.log('hi');
    // }
  }
  render() {
    const { pokeList } = this.state;
    return (
      <div className="App">
       <SlideBar />
        <div className="container poke-box">
          <img width="380" height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" />
          <Search onSearch = {this.onSearch} />
          <div className=" layout">
            <PokemonList pokeList = {pokeList} handleOnClick={this.handleOnClick} />
            <PokemonDetail pokemon={this.state.pokemon} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;