import React from 'react';
import ItemPizza from './ItemPizza';
import calabresa from '../images/calabresa.jpeg';
import vegetariana from '../images/vegetariana.jpg';
import pepperoni from '../images/pepperoni.jpeg';
import './styles/Catalogo.css'

const Catalogo = () => {
    const pizzas = [
        { imagem: calabresa, sabor: 'Calabresa', preco: 29.90 },
        { imagem: vegetariana, sabor: 'Vegetariana', preco: 32.90 },
        { imagem: pepperoni, sabor: 'Pepperoni', preco: 34.90 },
        { imagem: calabresa, sabor: 'Calabresa', preco: 29.90 },
        { imagem: vegetariana, sabor: 'Vegetariana', preco: 32.90 },
        { imagem: pepperoni, sabor: 'Pepperoni', preco: 34.90 },
        { imagem: calabresa, sabor: 'Calabresa', preco: 29.90 },
        { imagem: vegetariana, sabor: 'Vegetariana', preco: 32.90 },
        { imagem: pepperoni, sabor: 'Pepperoni', preco: 34.90 },
        { imagem: calabresa, sabor: 'Calabresa', preco: 29.90 },
        { imagem: vegetariana, sabor: 'Vegetariana', preco: 32.90 },
        { imagem: pepperoni, sabor: 'Pepperoni', preco: 34.90 }
    ];

    return (
        <div>
            <h2 className='h2'>Pizzas</h2>
            <div className="catalogo">
                {pizzas.map((pizza, index) => (
                    <ItemPizza 
                        key={index} 
                        imagem={pizza.imagem} 
                        sabor={pizza.sabor} 
                        preco={pizza.preco} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Catalogo;
