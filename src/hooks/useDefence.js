import {useState} from 'react'

const useDefence = () => {
    const [defence, setDefence] = useState([])

    return {defence, setDefence}
}

export default useDefence