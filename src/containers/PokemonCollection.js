import React from 'react'
import PokemonCard from '../components/PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = ({pokemon, addToTeam}) => {

  return (
    <Card.Group itemsPerRow={5}>
      {pokemon.map(poke => 
        <PokemonCard key={poke.id} {...poke} addToTeam={addToTeam}/>
        )}
    </Card.Group>
  )
}

export default PokemonCollection
