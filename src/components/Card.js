import React from 'react';

const Card = ({pokemon}) => {
    return(
        <div>
            <h1>{pokemon.name}</h1>
        </div>
    );
}

export default Card;