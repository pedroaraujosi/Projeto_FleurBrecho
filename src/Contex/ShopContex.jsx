import { createContext } from "react"
import { useState } from "react"
import { Products } from "../Products"
import { ProductsWoman } from '..//Products'

export const ShopContex = createContext (null)
export const allProducts = [...Products, ...ProductsWoman];

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < allProducts.length + 1; i++ ) {
        cart[i] = 0
    }
    return cart;
}




export const ShopContexProvider = (props) => {
    const[cartItens, setCartItens] = useState(getDefaultCart())

    
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItens) {
      if (cartItens[item] > 0) {
        let itemInfo =   allProducts.find((product)  => product.id === Number(item));
          totalAmount += cartItens[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

    const addToCart = (itemId) => {
        setCartItens((prev) => ({...prev, [itemId]: prev[itemId] + 1}) )
    } 

    const removeFromCart = (itemId) => {
        setCartItens((prev) => ({...prev, [itemId]: prev[itemId] - 1}) )
    }
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItens((prev) => ({...prev, [itemId]: newAmount }))
    }

    const contextValue = {cartItens, addToCart, removeFromCart, updateCartItemCount,  getTotalCartAmount,}

    
   

    return( 
    <ShopContex.Provider value={contextValue}>{props.children}</ShopContex.Provider>
    )
}
