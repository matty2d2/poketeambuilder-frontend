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

  showPokeName = (name) => {
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
