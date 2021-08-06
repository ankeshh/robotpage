import React from 'react';
import './card.css';


const Card = (props) => {
    const {id, name, email} = props;
    return(
        <React.Fragment>
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow=5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </React.Fragment>
        
    );
};

export default Card;