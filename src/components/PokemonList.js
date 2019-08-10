import React, { Component} from "react";
import Pokemon from './Pokemon';
import { pokeClasses } from '../pokeClasses';

class PokemonList extends Component {

    render() {
        const { handleOnClick } = this.props;
        const pokemon = pokeClasses.map(pokeClass => {
            return (
                <Pokemon
                    key={pokeClass.id}
                    pokeClass={pokeClass}
                    handleOnClick = {handleOnClick}
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
