import React, {useEffect} from 'react';
import PokemonIndex from './containers/PokemonIndex'
import './App.css';
import NavBar from './components/NavBar'
import { Route, withRouter } from 'react-router-dom';
import LogInPage from './containers/LogInPage'
import MyTeamsIndex from './containers/MyTeamsIndex'
import API from "./helpers/API";
import TypeChartsPage from './components/TypeChartsPage';

class App extends React.Component{

  state = {
    username: ''
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      API.validates()
        .then(data => {
          if (data.error) throw Error(data.error)
          this.signIn(data)
        })
        .catch(error => {
          console.log(error)
          localStorage.removeItem('token')
        })
    } else {
      this.props.history.push('/log-in')
    }
  }

  signIn = ({user, token}) => {
    this.setState({
      username: user
    })
    localStorage.setItem('token', token)
  }

  signOut = () => {
    this.setState({
      username: ''
    })
    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  render(){
    const {signOut, signIn, state} = this
    const {username} = state
    return (
      <div className='site'>
        <div className="App">
        <NavBar user={username} signOut={signOut}/>
          <Route path='/create-team' render={(routerProps) => <PokemonIndex {...routerProps} />} />  
          <Route path='/log-in' render={(routerProps) => <LogInPage {...routerProps} signIn={signIn} />} /> 
          <Route path='/my-teams' render={(routerProps) => <MyTeamsIndex {...routerProps} />} />
          <Route path='/type-charts' render={(routerProps) => <TypeChartsPage {...routerProps}/>   } />   
          
        </div>
      </div>
    );
  }
}

export default withRouter(App);
