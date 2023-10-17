import styles from '..//Headercss/Carrinho.module.css'
import { Link, useNavigate } from "react-router-dom"
import logofleur from "..//imagens/logofleur.jpeg"
import { allProducts } from '../Contex/ShopContex.jsx'
import { useContext } from "react";
import { CartItem } from '../cartItem';
import { ShopContex } from "..//Contex/ShopContex.jsx";



function Carrinho() {    
    const {  cartItens, getTotalCartAmount, checkout  } = useContext (ShopContex)
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        
        <div className={styles.carti}>
            <div className={styles.headercarrinho}>
            <Link to="/"><img src={logofleur} alt="Logo da fleur"></img></Link> 
            </div>
            <div className={styles.back}>
            <div className={styles.titulo}>
                <h1>carrinho</h1>
            </div>
            
               <div className={styles.cart}>
               {allProducts.map((product) => {
                if (cartItens[ product.id] !== 0 ) {
                    return <CartItem data={product} key={product.id} />
                }    
               })}

                
               </div>
               {totalAmount > 0 ? (
                    <div className={styles.checkout}>
                    <p> Subtotal: R$ {totalAmount} </p>
                    <button onClick={() => navigate("/produtos")}> Continue comprando </button>
                    <button
                        onClick={() => {
                        checkout();
                        navigate("/checkout");
                        }}
                    >

                        Finalizar
                    </button>
                    </div>
                ) : (
                    <h1> Seu Carrinho está vazio</h1>
                )}
               </div>
                
            <div className={styles.footer}>
                <h1>+55 21 9555-7838</h1>
                <h1>Teresópolis RJ</h1>
                <h1>@fleurBrecho</h1>
                <div className={styles.divisoria}></div>
                <h5>todos os direitos reservados a Fleur Brecho.</h5>
            </div>
            </div>
        
    )
}

export default Carrinho