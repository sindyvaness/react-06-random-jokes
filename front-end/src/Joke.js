import React, { useState, useEffect } from 'react';
import './style.css';

const Joke = (props) => {
    
    const handleChangePlaylist = () => {

    };

    return (
        <div className='joke'>
            <div>
                <p>{props.joke.setup}</p>
                <h3>{props.joke.punchline}</h3>
            </div>
            <form>
                <span>Add to list</span>
                <select onChange={handleChangePlaylist} defaultValue='default'> 
                <option disabled value='default'> -- choose a playlist --</option> 
                    {/* TODO: other <option> elements rendered here */
                        props.playLists.map( (playlist) => (
                            <option key={playlist.id} value={playlist.id}>{ playlist.name }</option> 
                        ))
                    } 
                </select>
                <input type='submit' value='add'></input>
            </form>
        </div>
    )
};

export default Joke;
