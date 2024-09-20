import React from 'react'
import './styles/Navbar.css';


const Navbar = () => {
    return (
        <nav>
            <h1>Santa Pizza</h1>
            <ul>
                <li><a href='/'>< i className= "fa fa-home fa-lg"></i> Início</a></li>
                <li><a href='/catalogo'><i className = "fa fa-th-list fa-lg"></i> Catálogo</a></li>
                <li><a href='/carrinho'><i className = "fa fa-shopping-cart fa-lg"></i> Carrinho</a></li>
            </ul>
        </nav>
    )
}

export default Navbar