import React from 'react'
import { Card } from 'semantic-ui-react'

const ChosenPokemonCard = ({id, front_sprite, name, removeFromTeam}) => {

    const useImage = (image) => {
        if (image) return image
    
        return require(`../img/Missingno2.png`)
    }

    const showPokeName = (name) => name.charAt(0).toUpperCase() + name.slice(1)

    const handleDoubleClick = () => {
        if (!name) return

        removeFromTeam()
    }

    return (
        <Card  
        className='chosen-poke' 
        color='red'
        onDoubleClick={handleDoubleClick}
        >
            <div >
                <img className='selected-poke-img'src={useImage(front_sprite)} alt="oh no!"/>
            </div>
            <Card.Header>{(name)? showPokeName(name): 'Name'}</Card.Header>
      </Card>
        
    )
}

export default ChosenPokemonCard
