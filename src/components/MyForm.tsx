import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {IProduct} from "../model";
import axios from "axios";


const productData: IProduct = {
    id: parseInt(''),
    title: '',
    price: parseInt(''),
    category: 'electric',
    description: 'asdasdasd',
    image: 'https://i.pravatar.cc',
    rating: {
        rate: 10,
        count: 123,
    },
}

interface createProductsProps {
    onCreate: (product: IProduct) => void
}

export function MyForm({onCreate}: createProductsProps) {
    const [validator, setValidator] = useState('');
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        setError('')
        event.preventDefault()

        if (title.trim().length === 0 || price.trim().length === 0 || description.trim().length === 0 || validator.trim().length === 0) {
            setError('Error, please enter valid title')
            return
        }

        productData.id = parseInt(validator)
        if (productData.id <= 20) {
            const response = await axios.get(`https://fakestoreapi.com/products/${productData.id}`)
            response.data.title = title
            response.data.price = parseInt(price)
            response.data.description = description
            onCreate(response.data)
        } else {
            productData.title = title
            productData.price = parseInt(price)
            productData.description = description
            const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
            response.data.id = productData.id
            onCreate(response.data)
        }

    }

    return (
        <>
            <Form className="w-25 mx-auto" onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="validator">
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter id"
                        value={validator}
                        onChange={event => {
                            setValidator(event.target.value)
                        }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title"
                                  value={title}
                                  onChange={event => {
                                      setTitle(event.target.value)
                                  }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        value={price}

                        placeholder="Enter price"
                        onChange={event => {
                            setPrice(event.target.value)
                        }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        value={description}
                        placeholder="Enter Description"
                        onChange={event => {
                            setDescription(event.target.value)
                        }}/>
                </Form.Group>

                {error && <p>{error}</p>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}
