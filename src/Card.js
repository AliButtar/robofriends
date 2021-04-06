import React from 'react';
import './Card.css';

const card = (props)=> {
    const {name, email, id} = props;
    return(
        <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div className = ''>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default card;