import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './PokeTV.css';
import series1 from './Image/6.jpg';
import series2 from './Image/7.jpg';
import tip from './Image/tip.jpg';
import list from './Image/list.jpg';
class PokeSeries extends Component {
    constructor() {
        super();
        this.state = {
            watch: 1
        }
    }

    onClick = (num) => {
        console.log(num);
        if (num === 1)
            this.setState({
                watch: 1
            });
        else
            this.setState({
                watch: 2
            });

    }

    render() {
        let watchList = "";
        if (this.state.watch === 1)
            watchList = <iframe width="650" height="450" src="https://www.youtube.com/embed/?listType=playlist&list=PLhav23ysc0OzWUAkUzEidyhVcKKTMEcfg" frameBorder="0" allowFullScreen></iframe>;
        else
            watchList = <iframe width="650" height="450" src="https://www.youtube.com/embed/?listType=playlist&list=PL5ExfNV2G6RS9KFDZ0KDbXgMw8KNxo-UM" frameBorder="0" allowFullScreen></iframe>;

        return (
            <div className="container poke-box movie">

                <div className="row" width="100%" height="100%">
                    <div className="col-md-8">
                        {watchList}
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex flex-row series-box" onClick={() => this.onClick(1)}>
                            <div className="series-1" style={{ backgroundImage: "url(" + series1 + ")" }}>
                                <p className="overlay">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>

                                </p>
                            </div>
                            <p className="d-flex justify-content-center align-items-center p-2 text-center">
                                Watch Pokemon Episodes 1-184</p>
                        </div>
                        <div className="d-flex flex-row series-box mt-3" onClick={() => this.onClick(2)}>
                            <div className="series-1" style={{ backgroundImage: "url(" + series2 + ")" }}>
                                <p className="overlay">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>

                                </p>
                            </div>
                            <p className="d-flex justify-content-center align-items-center text-center">
                                Watch Pokemon Episodes 185-329</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PokeSeries;
