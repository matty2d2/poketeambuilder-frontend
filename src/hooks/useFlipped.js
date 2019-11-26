import {useState} from 'react'

const useFlipped = () => {
    const [flipped, setFlipped] = useState(false)

    const toggleFlipped = () => setFlipped(!flipped)

    return {flipped, toggleFlipped}
}

export default useFlipped
