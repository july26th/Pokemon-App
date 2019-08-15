import React, { Component } from "react";
import PokeNews from './PokeNews';
import bigImg from './Image/1.jpg';
import { Link } from 'react-router-dom';
import './PokeTV.css';
import mediumImg1 from  './Image/2.jpg';
import mediumImg2 from  './Image/3.jpg';
class PokeTV extends Component {

    render() {

        return (
            <div className="container poke-box">
                {/* <iframe width="720" height="450" src="https://www.youtube.com/embed/?listType=playlist&list=PLdhrcCVXurgIVbQnCSn-Ilp_cpoTJVWVq" frameborder="0" allowfullscreen></iframe> */}
                <div className="row" width="100%" height="100%">
                    <div className="col-md-7">
                        <Link to='/pokenews'>
                        <div className="poketv-box">
                            <img src={bigImg} className="big-image" alt='' />
                            <div className="box-info black-box">
                                <h3 className="">A New Look for Pokemon TV</h3>
                                <p className="text-muted">Check out the new Pokémon TV mobile app, updated with a fresh interface and new features.</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-md-5">
                    <Link to='/'>
                        <div className="poketv-box d-flex flex-row">
                            <img src={mediumImg1} className="medium-image" alt='' />
                            <div className="box-info box-red">
                                <h3 className="">Watch Pokemon Movies Online</h3>
                            </div>
                        </div>
                        </Link>
                        <Link to='/'>
                        <div className="poketv-box d-flex flex-row">
                            <div className="box-info box-orange">
                                <h3 className="pl-3">Watch New Episodes of Pokemon the Series Online</h3>
                            </div>
                            <img src={mediumImg2} className="medium-image" alt='' />
                
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default PokeTV;
