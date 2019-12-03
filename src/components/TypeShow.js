import React, {useEffect} from 'react'
import useMoves from '../hooks/useMoves'
import API from '../helpers/API'
import useTypeName from '../hooks/useTypeName'
import './TypesShow.css'
import '../Types.css'
import { Card, Image } from 'semantic-ui-react'
import usePokemonCollection from '../hooks/usePokemonCollection'
import { Link } from 'react-router-dom';

const TypeShow = ({history}) => {
    const {moves, setMoves} = useMoves()
    const {typeName, setTypeName} = useTypeName()
    const {pokemon, setPokemon} = usePokemonCollection()

    useEffect(
      () => {
        const selectType = (history.location.state)?history.location.state.type:'normal'
        API.getTypeData(selectType)
        .then(data=> {
            setMoves(data.type.moves)
            setTypeName(data.type.name)
            setPokemon(data.type.pokemon)
        })
      },
      [history.location.state]
    )

    const displayMoveName = (name) => {
        const a = name
        const b = a.replace('--special','')
        const c = b.replace('--physical', '')
        const d = c.replace(/-/g, ' ')

        return d.charAt(0).toUpperCase() + d.slice(1)
    }

    const showTypes = (array) => {
        return array.map((type) => 
        <Link 
        to={{
            pathname: '/types',
            state: {type: type.name}
        }}
        >
        <div className={'type-icon' + ' ' + type.name + ' space'}>{type.name}</div>
        </Link>)
    }

    return (
        <div>
            <h1><div className={"large-type-icon" + " " + typeName}> <b>{typeName}</b></div> &nbsp;</h1>

            <div className='main-container'>

                <div className='moves-show'>
                    <h3>Moves</h3>
                    <div className='moves-container'>
                        {moves.map(move => 
                        <div className='move-card'>
                            <Card key={move.id} onClick={()=>{}}>
                                <div className='main-container'>
                                <div className='move-card dmg-icon'><Image src={require('../img/dmg-categories/' + move.damage_class + '-icon.png')}  size='mini'/></div>
                                <div className='move-card move-desc'><Card.Description>{displayMoveName(move.name)}</Card.Description></div>
                                </div>              
                            </Card>   
                        </div>
                        )}
                    </div>
                </div>
                

                <div className='pokemon-show'>
                    <h3>Pokemon</h3>
                    <div className='pokes-container'>
                    {pokemon.map(poke => 
                        <div className='poke-card'>
                            <Card key={poke.id}>
                                <div className='poke-container'>
                                    <div className="image">
                                        <img src={poke.front_sprite} alt="oh no!" />
                                    </div>
                                    <div className='poke-types'>
                                        {showTypes(poke.types)}
                                    </div>
                                        
                                    
                                    <div><Card.Description>{displayMoveName(poke.name)}</Card.Description></div>
                                </div>
                            </Card>   
                        </div>
                    )}
                    </div>
                </div>

                <div>
                    <h3>Chart</h3>
                    <div className='chart-container'>
                        <div className='type-chart'>
                            <div className='my-column'>
                                <h4>Offensive</h4>
                                <div className='power-types'>
                                    <div className='mini-column'>
                                        <div className='title'><h4>Power</h4></div>
                                        <div className='power-lvl two-times'>
                                            2x
                                        </div>
                                        <div className='power-lvl half-times'>
                                            ½x
                                        </div>
                                        <div className='power-lvl zero-times'>
                                            0x
                                        </div>
                                    </div>
                                    
                                    <div className='mini-column'>
                                        <div className ='title'><h4>Types</h4></div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className='my-column'>
                                <h4>Defensive</h4>
                                <div className='power-types'>
                                    <div className='mini-column'>
                                        <div className ='title'><h4>Power</h4></div>
                                        <div className='power-lvl half'>
                                            ½x
                                        </div>
                                        <div className='power-lvl two'>
                                            2x
                                        </div>
                                        <div className='power-lvl zero'>
                                            0x
                                        </div>
                                    </div>

                                    <div className='mini-column'>
                                        <div className ='title'><h4>Types</h4></div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default TypeShow
