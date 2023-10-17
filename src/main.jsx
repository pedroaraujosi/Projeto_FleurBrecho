import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Inicio from './Headersjx/Inicio.jsx'
import Produtos from './Headersjx/Produtos.jsx'
import Sobre from './Headersjx/Sobre.jsx'
import Contatos from './Headersjx/Contatos.jsx'
import Carrinho from './Headersjx/Carrinho.jsx'
import { ShopContexProvider } from "./Contex/ShopContex.jsx"




const router = createBrowserRouter([
  {
    path: "/", element: <Inicio />,
  },
  {
    path: "Produtos", element: <Produtos />,
  },
  {
    path: "Sobre", element: <Sobre />,
  },
  {
    path: "Contatos", element: <Contatos />,
  },
  {
    path: "Carrinho", element: <Carrinho />,
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <ShopContexProvider>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </ShopContexProvider>
)
