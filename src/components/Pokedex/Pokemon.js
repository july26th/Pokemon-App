import React, { Component } from "react";
import sprites from './sprites.png';

class Pokemon extends Component {

    render() {
        const { pokeClass, handleOnClick } = this.props;
        const { id, backgroundPosition } = pokeClass;
        const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
        return ( <
            button style = { style }
            onClick = {
                () => handleOnClick(id) }
            className = "poke-cell" > < /button>
        );
    }
}

export default Pokemon;