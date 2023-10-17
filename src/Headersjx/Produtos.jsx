import logofleur from "..//imagens/logofleur.jpeg"
import icons01 from "..//imagens/icons01.png"
import styles from "..//Headercss/produtos.module.css"
import { Link } from "react-router-dom"
import { Products } from '..//Products.js'
import { ProductsWoman } from "..//Products.js"
import { Product } from '..//Product.jsx'
import React, { useState } from "react";




function Produtos() {
    const [mostrarMasculino, setMostrarMasculino] = useState(true);
    const [mostrarFeminino, setMostrarFeminino] = useState(false);

    const mostrarProdutosMasculinos = () => {
        setMostrarMasculino(true);
        setMostrarFeminino(false);
      };
    
      const mostrarProdutosFemininos = () => {
        setMostrarMasculino(false);
        setMostrarFeminino(true);
      };

    return (
        <div>
            <div className={styles.headerProdutos}>
              <Link to="/"><img src={logofleur} alt="Logo da fleur"></img></Link> 

               <li><Link to="/Carrinho"><img  src={icons01} alt="Icone de carrinho"></img></Link></li>
            </div>

         <div className={styles.pro}>


            <div className={styles.titulo}>
                <h1>Bem-vindo à nossa coleção de moda deslumbrante!</h1>
                <h3>Explore as tendências mais recentes e encontre o estilo perfeito para você</h3>
                 <div className={styles.btn}>      
                <button className={styles.bllt} onClick={mostrarProdutosMasculinos}>Produtos Masculino</button>
                <button className={styles.bllt} onClick={mostrarProdutosFemininos}>Produtos Feminino</button>
                </div> 
            </div>

            {mostrarMasculino && (
            <div className={styles.masculino}>        
            <div className={styles.mercadoria}>
                <div className={styles.products}>{Products.map((product) => <Product data={product} />)}</div>
                
            </div>
            </div>
         )}

            {mostrarFeminino && (
            <div className={styles.feminino}>
            <div className={styles.mercadoria}>

                

            <div className={styles.products}>{ProductsWoman.map((product) => <Product data={product} />)}</div>



            </div>
            
            </div>
            )}


            <div className={styles.footer}>
                <h1>+55 21 9555-7838</h1>
                <h1>Teresópolis RJ</h1>
                <h1>@fleurBrecho</h1>
                <div className={styles.divisoria}></div>
                <h5>todos os direitos reservados a Fleur Brecho.</h5>
            </div>

         </div>
        </div>
    )
}

export default Produtos