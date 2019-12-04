import React from 'react'
import { Card } from 'semantic-ui-react'
import '../Types.css'

class PokemonCard extends React.Component {
  
  state = {
    flipped: false
  }

  randomNum = (startVal = 0, max = 1) => {
    return Math.floor(Math.random() * max + startVal)
  }


  renderSprite = () => {
    const {back_sprite, front_sprite} = this.props.pokemon
    if (this.state.flipped){
      return (back_sprite)?back_sprite: require(`../img/Missingno${this.randomNum(1,5)}.png`)//'https://vignette.wikia.nocookie.net/nintendo/images/8/85/MissingNoNormal.png/revision/latest?cb=20131114211037&path-prefix=en'
      
    }
    return front_sprite
  }

  flipCard = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  showPokeName = (name) => name.charAt(0).toUpperCase() + name.slice(1)

  showTypes = (array) => {
    return array.map((type) => <div className={'type-icon' + ' ' + type.name + ' aligned'}>{type.name}</div>)
    }

  render() {
    const {name, id, types} = this.props.pokemon
    return (
    
        <Card  className='poke-card' onClick={() => this.props.addToTeam(id)}>
        <div>
          <div className="image">
            <img src={this.renderSprite()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.showPokeName(name)}</div>
          </div>
          <div className="spaced">
            <div className='to-center'>
              {this.showTypes(types)}
            </div>
          </div>
        </div>
      </Card>
        
    )
  }
}

export default PokemonCard
