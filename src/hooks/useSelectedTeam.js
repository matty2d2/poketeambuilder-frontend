import {useState} from 'react'

const useSelectedTeam = () => {
    const [selectedTeam, setSelectedTeam] = useState(undefined)

    return {selectedTeam, setSelectedTeam}
}

export default useSelectedTeam
