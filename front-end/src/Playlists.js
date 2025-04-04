import React, { useState, useEffect } from 'react';
import Joke from './Joke';

const Playlists = (props) => {


    return (<div>
        <h2>Playlists</h2>
        <ul>
            { props.playLists.map( (playList, count = 0) => (
                <li key={ playList.id }><h3>{ playList.name }</h3>
                    <ul>
                        { playList.jokes.map( (joke) => (
                            <li key={joke.id}>
                                <div>
                                    <p>{joke.setup}</p>
                                    <h3>{joke.punchline}</h3>
                                </div>
                            </li>                            
                        )) }
                        
                    </ul>
                </li>
            )) }
        </ul>
    </div>);

};

export default Playlists;