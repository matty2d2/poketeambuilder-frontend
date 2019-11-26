import {useState} from 'react'

const useTeams = () => {
    const [teams, setTeams] = useState([])

    const removeTeam = (id) => {
        const newTeam = [...teams].filter(team => team.id !== id)
        setTeams(newTeam)
        return teams
    }

    return {teams, setTeams, removeTeam}
}

export default useTeams
