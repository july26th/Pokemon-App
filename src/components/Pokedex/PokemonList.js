import React, { Component } from "react";
import Pokemon from './Pokemon';
class PokemonList extends Component {
    
    render() {
        const { handleOnClick, pokeList } = this.props;
        const pokemon = pokeList.map(pokeClass => {
            return (
                <Pokemon
                    key={pokeClass.id}
                    pokeClass={pokeClass}
                    handleOnClick={handleOnClick}
                />
            );
        });
        return (
            <section className="poke-list">
               
                {pokemon}
            </section>
        );
    }
}
export default PokemonList;
