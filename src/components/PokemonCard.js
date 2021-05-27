import React, {useState, useEffect} from 'react';

const PokemonCard = ({match}) => {
    //useEffect functionality
    useEffect( () => {
        fetchInfo();
    }, );

    //Set individual pokemon state
    const [currentPokemon, setCurrentPokemon] = useState({});

    /*---------Functions------------*/
    const fetchInfo = async () => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}/`);
        const item = await data.json();

        //Update our state
        setCurrentPokemon(item);
    }
    return(
        <div className="pokemon-item">
             <img src={`https://pokeres.bastionbot.org/images/pokemon/${match.params.id}.png`} alt={currentPokemon.name} />
            
            <div className="details">
                <h1>{currentPokemon.name}</h1>
                <h2>This pokemon is {currentPokemon.height} cm tall</h2>
                <h4>It currenly holds position #{currentPokemon.order} in poeple's most favourite pokemon of all time</h4>
                <h6>It holds a base experience of{currentPokemon.base_experience} and some of the moves</h6>
            
                <ul className="abilities">
                    {currentPokemon.abilities.map( item => (
                        <h2>{item.ability.name}</h2>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PokemonCard;