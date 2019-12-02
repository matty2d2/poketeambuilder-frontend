import {useState} from 'react'

const useGenFilter = () => {
    const [genFilter, setGenFilter] = useState(0)

    
    return {genFilter, setGenFilter}
}

export default useGenFilter