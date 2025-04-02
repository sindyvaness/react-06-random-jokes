import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Joke from './Joke';

const apiUrl = 'http://localhost:3005/jokes/programming/random'; //'https://official-joke-api.appspot.com/jokes/programming/random';

const FeaturedJoke= () => {
    const [joke, setJoke] = useState({});

    useEffect( () => {        
        
        const interval = setInterval( () => {
            axios.get(apiUrl)
            .then( result => {
                setJoke(result.data[0]);
            })
            .catch( error => {
                console.log(error);
            });            
        }, 2000);  
       
        return () => clearInterval(interval); // this clear the interval

    }, []);

    return (
        <div id='featured-joke' className='featured-joke joke'>
            <h2>Featured Joke</h2>
            <Joke joke = { joke }/>           
        </div>
    );    
};

export default FeaturedJoke;