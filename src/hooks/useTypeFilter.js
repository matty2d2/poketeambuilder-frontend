import {useState} from 'react'

const useTypeFilter = () => {
    const [typeFilter, setTypeFilter] = useState(0)

    
    return {typeFilter, setTypeFilter}
}

export default useTypeFilter