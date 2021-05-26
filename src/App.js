import React from 'react';
//Import project css
import './styles/app.scss';
//Import components
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      <h1>Here are some of my favourite pokemons</h1>
      <Cards />
    </div>
  );
}

export default App;
