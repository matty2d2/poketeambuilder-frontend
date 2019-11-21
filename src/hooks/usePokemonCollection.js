import {useState} from 'react'

const usePokemonCollection = () => {
    const [pokemon, setPokemon] = useState([])

    const storePokemon = (array) => setPokemon(array)

    return {pokemon, storePokemon}
}

export default usePokemonCollection