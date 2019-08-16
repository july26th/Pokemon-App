import React, { Component } from "react";
import { movieList } from './movielist';
import MovieItem from './MovieItem';
import './PokeTV.css';
class PokeMovies extends Component {
    constructor() {
        super();
        this.state = {
            link: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FLadyphim%2Fvideos%2F2226648804253322%2F&show_text=0&width=560"
        }
    }
    getLink = (link) => {
        this.setState({
            link: link
        })
    }


    render() {
        const { link } = this.state;
        const movieItem = movieList.map(item => {
            return (
                <MovieItem key={item.movie} item={item} getLink={this.getLink} />
            )
        });
        return (
            <div className="container poke-box movie">

                <div className="row" width="100%" height="100%">
                    <div className="col-md-8 d-flex justify-content-center align-items-center ">
                        <iframe className="video" src={link} width="650" height="450" scrolling="no" frameBorder="0" allowFullScreen={true}></iframe>
                    </div>
                    <div className="col-md-4">
                        <h2 className="title text-uppercase">Movies List</h2>
                        <div className="d-flex flex-column movie-list">
                            {movieItem}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default PokeMovies;
