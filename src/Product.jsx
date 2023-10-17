import React from "react"
import { ShopContex } from "./Contex/ShopContex.jsx";
import { useContext } from "react";


export const Product = (props) => {

    const {id, productName, productImage, price } = props.data;
    const { addToCart, cartItens  } = useContext (ShopContex)
    const cartItemCount = cartItens[id]    
    
    return <div className="products">
            <img src={productImage}></img>
            <div className="description">
            <h1>{productName}</h1>
            <h3>R$ {price}</h3>
            <button onClick={() => addToCart(id)} >Adicione ao carrinho {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
            </div>
    </div>
    
}

