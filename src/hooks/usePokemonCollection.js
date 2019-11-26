import {useState} from 'react'

const usePokemonCollection = () => {
    const [pokemon, setPokemon] = useState([])

    return {pokemon, setPokemon}
}

export default usePokemonCollection