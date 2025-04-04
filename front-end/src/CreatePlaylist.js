import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './style.css';
import { UserContext } from './UserContext';

const apiURL = 'http://localhost:3000/playlists';

const CreatePlaylist = (props) => {
    const { getPlaylists } = useContext(UserContext);
    const [listName, setListName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(apiURL, { name: listName, jokes: []}) 
        .then( result => {
            getPlaylists();               
        })
        .catch( error => {
            console.log(error);
        });
    };

    const handleInputChange = (setInput, event) => {
        setInput(event.target.value);
    };

    return (<div>
        <h2>Create Playlist</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Name of list
                <input type='text' name='listName' id='form-listName' value={listName}
                    onChange={ (event) => handleInputChange(setListName, event) }
                ></input>
            </label>
            <input type='submit' value='create playlist'></input>
        </form>
    </div>)
};

export default CreatePlaylist;