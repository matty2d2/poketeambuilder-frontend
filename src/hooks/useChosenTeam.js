import {useState} from 'react'

const useChosenTeam = () => {
    const [chosenTeam, setChosenTeam] = useState([])

    const addToTeam = (pokemonID) => {
        if (chosenTeam.length >= 6) return
        setChosenTeam([...chosenTeam, pokemonID])
    }
    
    const removeFromTeam = (index) => {
        const newChosenTeam = [...chosenTeam]
        newChosenTeam.splice(index,1)
        setChosenTeam(newChosenTeam)
    }

    return {chosenTeam, addToTeam, removeFromTeam}
}

export default useChosenTeam