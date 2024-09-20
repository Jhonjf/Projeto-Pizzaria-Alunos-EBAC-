import React from 'react'
import './styles/Navbar.css';


const Navbar = () => {
    return (
        <nav>
            <h1>Pizzaria</h1>
            <ul>
                <li><a href='/'>Início</a></li>
                <li><a href='/catalogo'>Catálogo</a></li>
                <li><a href='/carrinho'> Carrinho</a></li>
            </ul>
        </nav>
    )
}

export default Navbar