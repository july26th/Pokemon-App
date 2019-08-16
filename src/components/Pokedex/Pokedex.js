import React, { Component } from "react";
import PokemonList from './PokemonList';
import Search from './Search';
import GetPokemon from './GetPokemon';
import PokemonDetail from './PokemonDetail';
import pokemon from 'pokemon';
import { pokeClasses } from './pokeClasses';
class Pokedex extends Component {
    constructor() {
        super();
        this.state = {
            pokemon: {},
            test: [],
            pokeList: []
        };
    }

    componentWillMount() {
        this.setPKM();

    }
    setPKM = (name) => {
        let temp = [];
        let index = 1;
        pokeClasses.forEach(item => {
            const singleItem = { ...item };
            singleItem.name = pokemon.getName(index);
            temp = [...temp, singleItem];
            index++;
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
        if (keyword) {
            var findPoke = this.state.pokeList.filter(key => {
                return key.name.toLowerCase().includes(keyword.toLowerCase());
            });
            this.setState({
                pokeList: findPoke
            });
        } else {
            this.setPKM();
        }
    }
    render() {

        return (
            <div className="container poke-box">


               {/* <img width="380" height="60" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png" /> */}
                <Search onSearch={this.onSearch} />
                <div className=" layout">
                    <PokemonList pokeList={this.state.pokeList} handleOnClick={this.handleOnClick} />
                    <PokemonDetail pokemon={this.state.pokemon} />
                </div>

            </div>
        );
    }
}
export default Pokedex;
