import React, { useState, useEffect } from 'react';
import './style.css';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/playlists/'

const Joke = (props) => {
    const [selectedList, setSelectedList] = useState({});;

    const handleChangePlaylist = (event) => {
        setSelectedList(props.playLists.filter( list => list.id == event.target.value)[0]);
        // console.log(props.joke.id);

        // console.log(props.playLists.filter( list => list.id == event.target.value)[0]);
    };

    const updateList = () => {
        axios.patch(apiUrl + selectedList.name,  { newJoke: props.joke })
        .then( result => {
            console.log(result.date);
        })
        .catch( error => {
            console.log(error);
        });
    };

    return (
        <div className='joke'>            
            <div>
                <p>{props.joke.setup}</p>
                <h3>{props.joke.punchline}</h3>
            </div>

            <form>
                <span>Add to list</span>
                <select onChange={ (event) => handleChangePlaylist(event) } defaultValue='default'> 
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
