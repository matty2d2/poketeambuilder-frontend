import React from 'react';
import PokemonIndex from './containers/PokemonIndex'
import './App.css';
import NavBar from './components/NavBar'
import { Route, withRouter } from 'react-router-dom';
import LogInPage from './containers/LogInPage'


const App = () => {
  return (
    <div className='site'>
      <div className="App">
      <NavBar/>
        <Route path='/create-team' render={(routerProps) => <PokemonIndex {...routerProps} />} />  
        <Route path='/log-in' render={(routerProps) => <LogInPage {...routerProps} />} />  
      </div>
    </div>
  );
}

export default withRouter(App);
