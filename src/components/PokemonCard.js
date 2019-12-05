import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import '../Types.css'

const PokemonCard = ({ pokemon, addToTeam }) => {
  // state = {
  //   flipped: false
  // }


  // randomNum = (startVal = 0, max = 1) => {
  //   return Math.floor(Math.random() * max + startVal)
  // }


  // const renderSprite = () => {
  //   const {back_sprite, front_sprite} = pokemon
  //   if (this.state.flipped){
  //     return (back_sprite)?back_sprite: require(`../img/Missingno${this.randomNum(1,5)}.png`)//'https://vignette.wikia.nocookie.net/nintendo/images/8/85/MissingNoNormal.png/revision/latest?cb=20131114211037&path-prefix=en'
      
  //   }
  //   return front_sprite
  // }

  // flipCard = () => {
  //   this.setState({
  //     flipped: !this.state.flipped
  //   })
  // }

  const showPokeName = (name) => {
    const init = name.charAt(0).toUpperCase() + name.slice(1)

    if (init.slice(-2) === '-m') return init.replace('-m', '♂')
    if (init.slice(-2) === '-f') return init.replace('-f', '♀')
    if (init.slice(-10) === '-incarnate') return init.replace('-incarnate', '')
    if (init.slice(-8) === '-average') return init.replace('-average', '')
    if (init.slice(-8) === '-altered') return init.replace('-altered', '')
    if (init.slice(-9) === '-standard') return init.replace('-standard', '')
    if (init.slice(-9) === '-ordinary') return init.replace('-ordinary', '')
    if (init.slice(-7) === '-normal') return init.replace('-normal', '')
    // if (init.slice(-5) === '-land') return init.replace('-land', '')
    if (init.slice(-12) === '-red-striped') return init.replace('-red-striped', '')
    if (init.slice(-7) === '-shield') return init.replace('-shield', '')
    if (init.slice(-5) === '-male') return init.replace('-male', '')
    return init
  }

  const showTypes = (array) => {
    return array.map((type) => 
    <Link
        to={{
          pathname: "/types",
          state: { type: type.name }
        }}
      >
        <div className={'type-icon' + ' ' + type.name + ' aligned'}>
          {type.name}
        </div>
      </Link>
    
    )}

    return (
      <Card className='poke-card' onClick={()=>{}}>
      <div>
        <div className='team-add' onClick={() => addToTeam(pokemon.id)}>
          <div className="image">
            <img src={pokemon.front_sprite} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{showPokeName(pokemon.name)}</div>
          </div>
        </div>

        <div className="spaced">
          <div className='to-center'>
            {showTypes(pokemon.types)}
          </div>
        </div>
      </div>
    </Card>
        
    )
}

export default PokemonCard
