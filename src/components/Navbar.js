import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
import './styles/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1>Santa Pizza</h1>
            <ul>
                <li><Link to='/'><i className="fa fa-home fa-lg"></i> Início</Link></li>
                <li><Link to='/catalogo'><i className="fa fa-th-list fa-lg"></i> Catálogo</Link></li>
                <li><Link to='/carrinho'><i className="fa fa-shopping-cart fa-lg"></i> Carrinho</Link></li>
                <li><Link to='/cadastro'><i className="fa fa-user-plus fa-lg"></i> Cadastro</Link></li> {/* Alterado para Link */}
            </ul>
        </nav>
    );
}

export default Navbar;
