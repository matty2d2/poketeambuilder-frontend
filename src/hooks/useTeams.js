import {useState} from 'react'

const useTeams = () => {
    const [teams, setTeams] = useState([])

    const removeTeam = (id) => {
        const newTeam = [...teams].filter(team => team.id !== id)
        setTeams(newTeam)
        return teams
    }

    const updateStat = (teamId, pokemonId, stat, value) => {
        const cloneTeam = [...teams]
        const updatedTeam = cloneTeam.map(team => {
            if (team.id !==teamId) return team 

            let newTeam = {}
            Object.keys(team).forEach( key => {
                if (key !== 'team_pokemons') {
                    newTeam[key] = team[key]
                } 
                newTeam['team_pokemons'] = updateTeam(team, pokemonId, stat, value)
            })
            return newTeam
        })
        setTeams(updatedTeam)
    }

    const updateTeam = (team, pokemonId, stat, val) => {
        return team.team_pokemons.map(tp => {
            if (tp.id !== pokemonId) return tp
            return updatePokemon(tp, stat, val)
        })
    }

    const updatePokemon = (pokemon, stat, val) => {

        let newPokeObj = {}

        Object.keys(pokemon).forEach( key => {
            if (key !== stat) {
                newPokeObj[key] = pokemon[key]
                return newPokeObj
            } 
            newPokeObj[stat] = parseInt(val)
            return newPokeObj
        })

        return newPokeObj
    }

    return {teams, setTeams, removeTeam, updateStat}
}

export default useTeams
