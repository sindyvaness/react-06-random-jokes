import React, { useState, useEffect } from 'react';
import './style.css';

const Joke = (props) => {
    return (
        <div className='joke'>
            <div>
                <p>{props.joke.setup}</p>
                <h3>{props.joke.punchline}</h3>
            </div>
            <form>
                <span>Add to list</span>
                <select>
                    <option>-- choose a list --</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                </select>
                <input type='submit' value='add'></input>
            </form>
        </div>
    )
};

export default Joke;
