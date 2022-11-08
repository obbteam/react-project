import React, {useState, createContext} from 'react'

import {useNavigate} from "react-router-dom";

interface ILoginContext {
    isLoggedIn: boolean
    alert: string
    auth: () => void
    redirect: () => void
}

export const LoginContext = createContext<ILoginContext>({
    isLoggedIn: false,
    alert: '',
    auth: () => {
    },
    redirect: () => {
    }
})


export const LoginState = ({children}: { children: React.ReactNode }) => {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [alert, setAlert] = useState('');
    const auth = () => {
        setIsLoggedIn(true)
        setAlert('User successfully logged in!')
    }
    const redirect = () => {
        navigate('/')
    }
    return (
        <LoginContext.Provider value={{isLoggedIn, alert, auth, redirect}}>
            {
                children
            }
        </LoginContext.Provider>

    )
}
