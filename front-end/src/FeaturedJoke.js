import React, { useState, useEffect } from 'react';

const FeaturedJoke= (props) => {

    return (
        <div id='featured-joke' className='featured-joke joke'>
            <h2>Featured Joke</h2>
            <div>
                <p>title</p>
                <h3>rest</h3>
            </div>
            <div>
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
        </div>
    );    
};

export default FeaturedJoke;