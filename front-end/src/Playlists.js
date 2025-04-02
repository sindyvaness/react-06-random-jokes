import React, { useState, useEffect } from 'react';

const Playlists = (props) => {


    return (<div>
        <ul>
            { props.playLists.map( (playList, count = 0) => (
                <li key={count++}><h3>{ playList.name }</h3></li>
            )) }
        </ul>
    </div>);

};

export default Playlists;