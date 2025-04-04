import React, { useState, useContext } from 'react';
import './style.css';
import RandomJokes from './RandomJokes';
import CreatePlaylist from './CreatePlaylist';
import Playlists from './Playlists';
import FeaturedJoke from './FeaturedJoke';
import { UserContext } from './UserContext';
import axios from 'axios';

const apiURL = 'http://localhost:3000/playlists';

const App = () => {
    const [playLists, setPlayLists] = useState([]);
    const [showFeatJoke, setShowFeatJoke] = useState(false);

    const getPlaylists = () => {
            axios.get(apiURL) 
            .then( result => {
                setPlayLists([...result.data]);            
            })
            .catch( error => {
                console.log(error);
            });
    };

    const handleShowFeature = (event) => {
        event.preventDefault();
        showFeatJoke ? setShowFeatJoke(false) : setShowFeatJoke(true);
    };

    return (
        <UserContext.Provider className='app' value={ {getPlaylists} }>
            <h1>Joke App</h1>
            <div>
                <button onClick={ (event) => handleShowFeature(event) }>Show Featured</button>
            </div>
            {
                showFeatJoke ?  <FeaturedJoke 
                                    playLists = { playLists }
                                ></FeaturedJoke> : ""
            }
            <RandomJokes
                playLists = { playLists }
            ></RandomJokes>

            <CreatePlaylist
                setPlayLists = { setPlayLists }              
            ></CreatePlaylist>

            <Playlists
                playLists = { playLists }
            ></Playlists>
        </UserContext.Provider>);
        
        
}

export default App;