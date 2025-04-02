import React, { useState, useEffect } from 'react';
import './style.css';
import RandomJokes from './RandomJokes';
import CreatePlaylist from './CreatePlaylist';
import Playlists from './Playlists';


const App = () => {
    const [playLists, setPlayLists] = useState([]);

    return (
        <div className='app'>
            <h1>Joke App</h1>
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