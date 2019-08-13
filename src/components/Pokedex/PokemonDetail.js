import React, { Component } from "react";

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
};

class PokemonDetail extends Component {

    render() {
        const { pokemon } = this.props;

        var color = [];
        var { id, name, sprite, height, types, weight, hp, attack, backSprite, speed } = pokemon;
        if (types) {
            types.map((type, index) => {
                color.push(type.type.name);
            });
        } if (pokemon.id) {
            return (
                <section className="detail-view">
                     
                    <div className='sprite-box' style={color.length === 2 ?
                    { background: `linear-gradient(90deg, #${TYPE_COLORS[color[0]]} 50%, #${TYPE_COLORS[color[1]]} 50%)` }
                    : { background: `#${TYPE_COLORS[color[0]]}` }
                } >
                    <div class="flip-box">
                        <div class="flip-box-inner">
                            <div class="flip-box-front">
                            <img src={sprite} className='sprite-image' alt="sprite" />
                            </div>
                            <div class="flip-box-back">
                            <img src={backSprite} className='sprite-image' alt="sprite" />
                            </div>
                        </div>
                    </div>
                    <h3 className='sprite-name'>{name}</h3>
                </div>
                  
                       
                    <div className='data-wrapper'>
                        <p className="data-name">Type: {types ? (types.map((type, index) => {
                            return <span key={index} style={{
                                backgroundColor: `#${TYPE_COLORS[type.type.name]}`,
                                color: 'white'
                            }}>{type.type.name}</span>
                        })) : ''} </p>
                        <div className="info">
                            <p className='data-name'>Height: {height * 10} cm</p>
                            <p className='data-name'>Weight: {weight / 10} kg</p>
                        </div>
                        <div className="info">
                            <p className='data-name flex-16'>HP:</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={hp}
                                    aria-valuemin="0" aria-valuemax="200" style={{ width: `${hp / 2}%` }}>
                                    <p className='info-name'>{hp}</p>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <p className='data-name flex-16'>Attack:</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={attack}
                                    aria-valuemin="0" aria-valuemax="200" style={{ width: `${attack / 2}%` }}>
                                    <p className='info-name'>{attack}</p>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <p className='data-name flex-16'>Speed:</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={speed}
                                    aria-valuemin="0" aria-valuemax="200" style={{ width: `${speed / 2}%` }}>
                                    <p className='info-name'>{speed}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
        else return (
            <section className="detail-view">
                <div className='sprite-box'  >
                    <img src='https://sickr.files.wordpress.com/2013/09/pokeball.png' className='sprite-image' alt="sprite" />
                    <h3 className='sprite-name'>Pokedex</h3>
                </div>
                <div className='data-wrapper'>

                </div>
            </section>
        );

    }
}

export default PokemonDetail;