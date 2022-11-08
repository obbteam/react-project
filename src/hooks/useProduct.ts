import {useEffect, useState} from "react";
import {IProduct} from "../model";
import axios from "axios";

export function useProduct() {
    const [products, setProducts] = useState<IProduct[]>([]);

    function addProduct(product: IProduct) {
        setProducts(prev => [...prev, product])
    }

    async function fetchProduct() {
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
        setProducts(response.data)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return {products, addProduct}
}
