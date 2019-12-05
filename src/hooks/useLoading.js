import {useState} from 'react'

const useLoading = () => {
    const [loading, setLoading] = useState(true)

    const turnOffLoading = () => setLoading(false)

    return {loading, turnOffLoading}
}

export default useLoading
