import React, {useState} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useLoginValidation} from "../hooks/useLoginValidation";
import {loginType} from "../model";

const loginData: loginType = {
    myEmail: '',
    myPassword: ''
}

export function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {validateLogin, error} = useLoginValidation()


    const sendData = () => {
        loginData.myEmail = email
        loginData.myPassword = password
    }

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        validateLogin(loginData)
    }


    return (
        <>
            <Form className="w-25 mx-auto" onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter id"
                        value={email}
                        onChange={event => {
                            setEmail(event.target.value)
                        }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password"
                                  value={password}
                                  onChange={event => {
                                      setPassword(event.target.value)
                                  }}/>
                </Form.Group>
                <p>{error}</p>

                <Button variant="primary" type="submit" onClick={sendData}>
                    Login
                </Button>
            </Form>
        </>
    )
}
