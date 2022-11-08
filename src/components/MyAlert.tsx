import React, {useState, useEffect} from 'react'
import {ToastContainer} from "react-bootstrap";
import {Toast} from "react-bootstrap";

interface message {
    myMessage: string
}

export function MyAlert({myMessage}: message) {
    const [show, setShow] = useState(false)
    useEffect(() => {
        setShow(true)
    }, [myMessage])


    return (
        <>
            <ToastContainer className="p-3 position-fixed" position={'top-end'}>
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header closeButton={true} className="text-success">
                        <strong className="me-auto">Congratulations</strong>
                    </Toast.Header>
                    <Toast.Body>{myMessage}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}
