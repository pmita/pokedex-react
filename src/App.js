import React from 'react';
//Import project css
import './styles/app.scss';
//Import components
import Cards from './components/Cards';
import PokemonCard from './components/PokemonCard';

function App() {
  return (
    <div className="App">
      <h1>Here are some of my favourite pokemons</h1>
      <Cards />
      <PokemonCard />
    </div>
  );
}

export default App;
