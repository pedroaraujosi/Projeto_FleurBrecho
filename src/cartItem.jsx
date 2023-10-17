import styles from '..//src/Headercss/carrinho.module.css'
import React, { useContext } from "react";
import { ShopContex } from "..//src/Contex/ShopContex.jsx";

export const CartItem = (props) => {
    const {id, productName, productImage, price } = props.data;
    const { cartItens, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContex);


   return <div className={styles.cartItem}><img src={productImage}></img>
        <div className={styles.description}>
            <h1>{productName}</h1>
            <h3>R$ {price}</h3>
            <div className={styles.countHandler}>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItens[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
        </div>
   </div>

}