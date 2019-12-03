import {useState} from 'react'

const useMoves = () => {
    const [moves, setMoves] = useState([])

    return {moves, setMoves}
}

export default useMoves
