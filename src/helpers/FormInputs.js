import useUsername from '../hooks/useUsername'
import usePassword from '../hooks/usePassword'

const FormInputs = () => {
    const {username, setUsername} = useUsername
    const {password, setPassword} = usePassword

    const getFormInputs = () => {
        return {username, password}
    }

    const storeUsername = (name) => setUsername(name)
    const storePassword = (pass) => setPassword(pass)

    return {getFormInputs, storeUsername, storePassword}
}

export default FormInputs
