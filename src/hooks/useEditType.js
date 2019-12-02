import {useState} from 'react'

const useEditType = () => {
    const [editType, setEditType] = useState(undefined)

    return {editType, setEditType}
}

export default useEditType
