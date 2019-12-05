import React from 'react'
import PokemonCard from '../components/PokemonCard'
import { Card } from 'semantic-ui-react'
import { GridLoader } from 'react-spinners';

const PokemonCollection = ({pokemon, addToTeam, loading}) => {

  const renderCards = () => {
    return pokemon.map(poke => 
      <PokemonCard key={poke.id} pokemon={poke} addToTeam={addToTeam}/>
      )
  }

  const chooseRender = () => {
    if (loading){
      return (
        <div className='loader'>
          <GridLoader
          css={`
          display: block;
          margin: 0 auto;
          border-color: red;
      `}
          sizeUnit={"px"}
          size={75}
          color={'#123abc'}
          loading={loading}
        />
        </div>
        
      )
    } else {
      return (
        <Card.Group itemsPerRow={5} className='collection-scroll'>
          {renderCards()}
        </Card.Group>
      )
    }
  }


  return (
    chooseRender()
  )
}

export default PokemonCollection
