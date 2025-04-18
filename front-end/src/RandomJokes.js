import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Joke from './Joke';
import './style.css';

const apiUrl = 'http://localhost:3005/jokes/';

const RandomJokes = (props) => {
    const [initRandomJokes, setInitRandomJokes] = useState([]);

    useEffect(() => {
            axios.get(apiUrl + 'programming/6') 
            .then(results => {
                setInitRandomJokes([...results.data]);
            }) 
            .catch(error => console.log(error));
        }, []);

    return (
        <div>
            <h2>Random Jokes</h2>

            <div className='random-jokes'>
                <ul>
                    {initRandomJokes.map( (joke) => (
                        <li className='featured-joke' id={ joke.id } key={ joke.id }>
                            <Joke  
                                joke = { joke }
                                playLists = { props.playLists }
                            />
                        </li>
                    ))}            
                </ul>
            </div>           
            
        </div>
        
    );
}

export default RandomJokes;

