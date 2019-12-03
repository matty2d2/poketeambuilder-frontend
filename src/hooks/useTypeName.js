import {useState} from 'react'

const useTypeName = () => {
    const [typeName, setTypeName] = useState('')

    const storeTypeName = (string) => setTypeName(string.charAt(0).toUpperCase() + string.slice(1)) 

    return {typeName, storeTypeName, setTypeName}
}

export default useTypeName
