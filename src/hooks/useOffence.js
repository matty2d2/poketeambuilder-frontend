import {useState} from 'react'

const useOffence = () => {
    const [offence, setOffence] = useState([])

    return {offence, setOffence}
}

export default useOffence