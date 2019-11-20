import React from 'react'
import PokemonCard from '../components/PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={5}>
        {this.props.pokemon.map(poke => 
          <PokemonCard key={poke.id} {...poke}/>
          )}
      </Card.Group>
    )
  }
}

export default PokemonCollection
