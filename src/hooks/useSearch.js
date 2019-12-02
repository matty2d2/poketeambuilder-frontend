import {useState} from 'react'

const useSearch = () => {
    const [search, setSearch] = useState(undefined)

    const filterPokemon = (array) => {return search? array.filter(poke => poke.name.includes(search.toLowerCase())): array}

    return {setSearch, filterPokemon}
}

export default useSearch