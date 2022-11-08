import {useState, useContext} from 'react'

import {LoginContext} from "../context/loginContext";

interface loginData {
    myEmail: string
    myPassword: string
}


export function useLoginValidation() {
    const {auth, redirect} = useContext(LoginContext)
    const [error, setError] = useState('')

    function validateLogin(props: loginData) {
        setError('')
        if (props.myEmail.trim().length === 0 || props.myPassword.trim().length === 0) {
            setError('Error, email or password is empty')
            return
        }
        if (props.myEmail == 'admin@gmail.com' && props.myPassword == '123') {
            auth()
            redirect()
        } else {
            setError('INCORRECT ADMIN PASSWORD OR LOGIN ')
            return
        }
    }

    return {validateLogin, error}
}
