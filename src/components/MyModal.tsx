import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {IProduct} from "../model";

interface ModalProps {
    product: IProduct
    onClose: () => void
    show: boolean
}

export function MyModal({product, show, onClose}: ModalProps) {
    return (
        <>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{product.title}</Modal.Title>

                </Modal.Header>
                <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                    <img src={product.image} alt="" style={{maxHeight: '150px'}}/>
                    <h3>ID: {product.id}</h3>

                    <p className="fw-bold">
                        {product.price}$
                    </p>
                    <p>
                        <span className="fw-bolder">Description:</span> {product.description}
                        <br/>
                        <span className="fw-bolder">Category: </span> {product.category}
                        <br/>
                    </p>
                    {product.rating !== undefined &&
                        <p className="align-self-start"><span className="fw-bolder">Rate: </span> {product.rating.rate}
                            <br/>
                            <span className="fw-bolder">Count: </span> {product.rating.count}</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={onClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

