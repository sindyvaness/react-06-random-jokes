import React, { useState, useEffect } from 'react';
import './style.css';

const CreatePlaylist = () => {
    return (<div>
        <h2>Create Playlist</h2>
        <form>
            <label for='name'>
                Name of list
                <input type='text' name='name'></input>
            </label>
            <input type='submit' value='create playlist'></input>
        </form>
    </div>)
};

export default CreatePlaylist;