import {useState} from 'react'

const useHidden = () => {
    const [hidden, setHidden] = useState(true)

    const switchHidden = () => setHidden(!hidden)

    return {hidden, switchHidden}
}

export default useHidden
