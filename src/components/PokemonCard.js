import React, {useState, useEffect} from 'react';

const PokemonCard = ({match}) => {
    //useEffect functionality
    useEffect( () => {
        fetchInfo();
        console.log(currentPokemon);
    }, []);

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
            <h1>{currentPokemon.name}</h1>
            <h2>This pokemon is {currentPokemon.height} cm tall</h2>
            <h4>It currenly holds position #{currentPokemon.order} in poeple's most favourite pokemon of all time</h4>
            <h6>It holds a base experience of{currentPokemon.base_experience}</h6>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${match.params.id}.png`} alt={currentPokemon.name} />

        </div>
    );
}

export default PokemonCard;