import React, { Component } from "react";
import './PokeTV.css';
class MovieItem extends Component {
    onClick = (link) => {
        this.props.getLink(link);
    }
    render() {
        const { item } = this.props;
        return (
                           <div className="d-flex flex-row movie-item" onClick={() => this.onClick(item.link)}>
                                <div className="movie-img" >
                                    <img className="" src={item.img} />
                                <p className="overlay">
                                    <i className="fa fa-play-circle" aria-hidden="true"></i>
                                </p>
                                </div>
                                <p className="d-flex justify-content-center align-items-center p-2 text-center">
                                    Pokemon Movie {item.movie}</p>
                            </div>

        );
    }
}
export default MovieItem;
