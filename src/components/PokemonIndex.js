import React from 'react'
import PokemonCollection from './PokemonCollection'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const randomNum = (startVal = 0, max = 1) => {
  return Math.floor(Math.random() * max + startVal)
}

const restructurePokemon = (pokemon) => {
  const newPokemon = {
    height: randomNum(8, 20),
    weight: randomNum(25, 100),
    name: pokemon.name,
    abilities: ['splash', 'run-away'],
    moves: [],
    stats: [
      {
        value: randomNum(50, 60),
        name: 'defense'
      },
      {
        value: randomNum(50, 60),
        name: 'special-defense'
      },
      {
        value: randomNum(50, 60),
        name: 'special-attack'
      },
      {
        value: randomNum(50, 60),
        name: 'attack'
      },
      {
        value: pokemon.hp,
        name: 'hp'
      },
      {
        value: randomNum(50, 60),
        name: 'speed'
      }
    ],
    types: ['normal'],
    sprites: {
      front: pokemon.frontUrl,
      back: pokemon.backUrl
    }
  }

  return newPokemon
}

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: undefined
  }

  componentDidMount(){
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    //   .then(resp => resp.json())
    //   .then(json=> this.setState({
    //     pokemon: json.results
    //   }))
    
    // fetch('http://localhost:3000/stealdata')
    //   .then(resp => resp.json())
    //   .then(json=> this.setState({
    //     pokemon: json
    //   }))
  }

  onSearchChange = (e, {value}) => {
    this.setState({
      search: value
    })
  }

  handleSearchChange = (e) => {
    e.persist()
    this.func = this.func || _.debounce(this.onSearchChange, 500)
    this.func(e)
  }

  render() {
    const {pokemon, search} = this.state
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.onSearchChange, 500)} showNoResults={false} />
        <br />
        {/* {pokemon.map(poke=>
          <h4>{poke.name}</h4>
          )} */}
        {/* <PokemonCollection pokemon={(search)?pokemon.filter(poke=> poke.name.includes(search)):pokemon}/> */}
      </div>
    )
  }
}

export default PokemonPage
