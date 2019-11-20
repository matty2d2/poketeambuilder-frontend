import React from 'react';
import PokemonIndex from './containers/PokemonIndex'
import './App.css';
import NavBar from './components/NavBar'
import { Route, withRouter } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path='/create-team' render={(routerProps) => <PokemonIndex {...routerProps} />} />  
    </div>
  );
}

export default withRouter(App);
