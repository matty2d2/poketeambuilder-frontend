import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    flipped: false
  }

  randomNum = (startVal = 0, max = 1) => {
    return Math.floor(Math.random() * max + startVal)
  }


  renderSprite = () => {
    const {back_sprite, front_sprite} = this.props
    if (this.state.flipped){
      return (back_sprite)?back_sprite: require(`../img/Missingno${this.randomNum(1,5)}.png`)//'https://vignette.wikia.nocookie.net/nintendo/images/8/85/MissingNoNormal.png/revision/latest?cb=20131114211037&path-prefix=en'
      // return back_sprite
      
    }
    return front_sprite
  }

  flipCard = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  showPokeName = (name) => name.charAt(0).toUpperCase() + name.slice(1)

  render() {
    const {name, generation, id} = this.props
    //const hp = stats.find(stat => stat.name === 'hp')
    // onClick={this.flipCard}
    return (
        <Card  className='poke-card' onDoubleClick={() => this.props.addToTeam(id)}> 
        <div>
          <div className="image">
            <img src={this.renderSprite()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.showPokeName(name)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heart red" />
              Gen: {(generation)?generation:'HERREEEE'}
            </span>
          </div>
        </div>
      </Card>
        
    )
  }
}

export default PokemonCard
