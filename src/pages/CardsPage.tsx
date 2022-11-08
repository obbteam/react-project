import {Header} from "../components/Header";
import {Cards} from "../components/Cards";
import React, {useContext} from "react";
import {useProduct} from "../hooks/useProduct";
import {Text} from "../components/Text";
import {MyForm} from "../components/MyForm";
import {IProduct} from "../model";
import {LoginContext} from "../context/loginContext";


export function CardsPage() {
    const {products, addProduct} = useProduct()
    const {isLoggedIn} = useContext(LoginContext)


    const createHandler = (product: IProduct) => {
        addProduct(product)
    }

    return (
        <>
            <Header/>
            <Text></Text>
            {isLoggedIn && <MyForm onCreate={createHandler}></MyForm>}
            <div className="container mx-auto max-w-2xl mb-5 pt-5 d-flex gap-2 flex-wrap">
                {
                    products.map(products => <Cards product={products} key={products.id}/>)
                }
            </div>
        </>
    )
}
