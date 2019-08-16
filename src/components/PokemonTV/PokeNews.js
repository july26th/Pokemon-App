import React, { Component } from "react";
import pokeApp from './Image/4.jpg';
import './PokeTV.css';
class PokeNews extends Component {

    render() {

        return (
            <div className="container poke-box news">
                <div className="row" width="100%" height="100%">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="d-flex flex-column m-4">
                            <h2 className="mb-4">Pokémon TV Mobile App</h2>
                            <p>
                                Pokémon TV Mobile App Watch your favorite Pokémon episodes, movies, and more on the updated Pokémon TV app! 
                                Enjoy a fresh new interface that makes it easier to browse and watch.
                            When you finish watching a video, the Pokémon TV app will give you suggestions on what to watch next. 
                            Plus, new Pokémon Trainer Club integration lets you start an episode on one mobile device and continue watching on another.
                            </p>
                            <p>
                            Catch the adventures of Ash, Pikachu, and many amazing characters and Pokémon as they explore, battle, and spar against Team Rocket. 
                            Dozens of episodes are available for you to watch and re-watch as much as you like, all at no charge.
                            </p>
                            <p>
                            The updated Pokémon TV app is available for many mobile devices, including the iPad, iPhone, iPod touch, Android devices, and Kindle Fire. 
                            The apps for Roku, Apple TV, Amazon Fire TV, and select smart TVs will be updated soon.
                            </p>
                            <div className="d-flex justify-content-center m-4">
                            <img alt='' className="shake img-shake" src={pokeApp} />
                            </div>
                            <p>
                            If you're heading somewhere without a reliable internet connection, you can download an episode, movie, or feature for offline viewing. 
                            This video will be stored to your device so you can watch it any time. 
                            There's no limit to how many downloads you can store—with the Pokémon TV app, you're ready to watch wherever and whenever! 
                            The video will automatically be removed from the download section of the app after one week.
                            </p>
                            <p>
                            Optional push notifications let you know when more movies and episodes have been added. 
                            With push notifications enabled, you'll be the first to know what awesome adventures await the next time you watch!
                            </p>
                            <p>
                            Have fun watching the amazing adventures of Ash and friends now on the Pokémon TV app!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default PokeNews;
