import React, {useState} from 'react'
import {IProduct} from "../model";
import Button from "react-bootstrap/Button";
import {MyModal} from "./MyModal";

interface ProductProps {
    product: IProduct
}

export function Cards({product}: ProductProps) {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => setShow(false);


    return (
        <>
            <div className="card border-1 rounded px-4 py-2 text-center align-items-center justify-content-center"
                 style={{width: '24.5%'}}>
                <img src={product.image} className="w-50" alt="" style={{maxHeight: '250px'}}/>
                <h3>ID: {product.id}</h3>
                <h4>{product.title}</h4>
                <p className="fw-bold">{product.price}$</p>
                <Button variant="primary" onClick={handleShow}>
                    Show details
                </Button>
                {show && <MyModal show={show} product={product} onClose={handleClose}/>}
            </div>
        </>
    )
}
