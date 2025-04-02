import React, { useState, useEffect } from 'react';
import './style.css';
import RandomJokes from './RandomJokes';
import CreatePlaylist from './CreatePlaylist';
import Playlists from './Playlists';
import FeaturedJoke from './FeaturedJoke';


const App = () => {
    const [playLists, setPlayLists] = useState([]);
    const [showFeatJoke, setShowFeatJoke] = useState(false);

    const handleShowFeature = (event) => {
        event.preventDefault();
        showFeatJoke ? setShowFeatJoke(false) : setShowFeatJoke(true);
    };

    return (
        <div className='app'>
            <h1>Joke App</h1>
            <div>
                <button onClick={ (event) => handleShowFeature(event) }>Show Featured</button>
            </div>
            {
                showFeatJoke ? <FeaturedJoke></FeaturedJoke> : ""
            }
            <RandomJokes></RandomJokes>

            <CreatePlaylist
                setPlayLists = { setPlayLists }                
            ></CreatePlaylist>

            <Playlists
                playLists = { playLists }
            ></Playlists>
        </div>);
        
        
}

export default App;