import React,{useState, useEffect} from 'react';
//Import our smaller components
import Card from './Card';

const Cards = () => {
    //Set our useEffect functionality
    useEffect( () =>{
        fetchPokemon();
        console.log(typeof allPokemon);
    }, []);


    //Set our project State
    const [allPokemon, setAllPokemon] = useState([]);

    const fetchPokemon = async () => {
        const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
        const pokemonItems = await pokemonData.json();

        setAllPokemon(pokemonItems.results);
    }
    return(
        <div className="cards-container">
            {allPokemon.map( (pokemon,index) => (
                <div className="card">
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`} alt={pokemon.name} />
                    <h1>{pokemon.name}</h1>
                </div>
            ))}
        </div>
    );
}

export default Cards;