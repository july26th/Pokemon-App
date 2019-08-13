import React, { Component } from 'react';
import './Game.css';
import { Link } from 'react-router-dom';

class GameOption extends Component {



    render() {

        return (
            <div className='container poke-box'>
                <Link  to={{ pathname: '/game', state: { mode: 'easy'} }}>
                <p className="btn btn-primary" >Easy</p>
                </Link>
                <Link to={{ pathname: '/game', state: { mode: 'normal'} }}>
                <p className="btn btn-primary" >Normal</p>
                </Link>
                <Link to={{ pathname: '/game', state: { mode: 'hard'} }}>
                <p className="btn btn-primary" >Hard</p>
                </Link>
            </div>
        );
    }
}

export default GameOption;