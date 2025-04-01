import React from 'react';
import './style.css';
import RandomJokes from './RandomJokes';
import CreatePlaylist from './CreatePlaylist';


const App = () => {   

    return (
        <div className='app'>
            <h1>Joke App</h1>
            <RandomJokes></RandomJokes>
            <CreatePlaylist></CreatePlaylist>
        </div>);
        
        
}

export default App;