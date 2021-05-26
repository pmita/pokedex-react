import React from 'react';
//Import project css
import './styles/app.scss';
//Import components
import Cards from './components/Cards';
import PokemonCard from './components/PokemonCard';
//Import react router modules
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route path="/" exact component={Cards} />
            <Route path="/pokemon/:id" component={PokemonCard} />
          </Switch>

      </div>
    </BrowserRouter>

  );
}

export default App;
