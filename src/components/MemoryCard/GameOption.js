import React, { Component } from 'react';
import './Game.css';
import { Link } from 'react-router-dom';
import gameTitle from './option/Pokemon.png';
import easy from './option/easy.png';
import normal from './option/normal.png';
import hard from './option/hard.png';
import '../../ihover.min.css'
class GameOption extends Component {

    render() {

        return (
            <div className='container poke-box'>
                <img src={gameTitle} alt=''/>
                <div className="mode">
                    <div class="ih-item square colored effect6 from_top_and_bottom">
                        <Link to={{ pathname: '/game', state: { mode: 'easy' } }}>
                            <p className="img" style={{ backgroundImage: "url(" + easy + ")" }}></p>

                            <p className="text" style={{ border: "5px solid #fff400" }}>Easy</p>
                            <div class="info">
                                <h3>Easy Mode</h3>
                                <h4>You have to find 6 pairs of pokemon in 20 turns</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="ih-item square colored effect6 from_top_and_bottom">
                        <Link to={{ pathname: '/game', state: { mode: 'normal' } }}>
                            <p className="img" style={{ backgroundImage: "url(" + normal + ")" }}></p>
                            <p className="text" style={{ border: "5px solid #00c7ff" }}>Normal</p>
                            <div class="info">
                                <h3>Normal Mode</h3>
                                <h4>You have to find 9 pairs of pokemon in 25 turns</h4>
                            </div>
                        </Link>
                    </div>
                    <div class="ih-item square colored effect6 from_top_and_bottom">
                        <Link to={{ pathname: '/game', state: { mode: 'hard' } }}>
                            <p className="img" style={{ backgroundImage: "url(" + hard + ")" }}></p>
                            <p className="text" style={{ border: "5px solid #ff0000" }}>hard</p>
                            <div class="info">
                                <h3>Hard Mode</h3>
                                <h4>You have to find 12 pairs of pokemon in 30 turns</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default GameOption;