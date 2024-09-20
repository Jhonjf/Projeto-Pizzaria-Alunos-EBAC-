import React, { useState } from 'react';
import './styles/ItemPizza.css';

const ItemPizza = ({ imagem, sabor, preco }) => {
    const [quantidade, setQuantidade] = useState(1);

    const aumentarQuantidade = () => {
        setQuantidade(quantidade + 1);
    };

    const diminuirQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    };

    return (
        <div className='item-pizza'>
            <img src={imagem} alt={sabor} className="imagem-pizza" />
            <h3 className="sabor-pizza">{sabor}</h3>
            <p className="preco-pizza">Preço: R$ {preco.toFixed(2)}</p>

            <div className="controle-quantidade">
                <button onClick={diminuirQuantidade} className="quantidade-btn">-</button>
                <input 
                    type="number" 
                    min="1" 
                    value={quantidade} 
                    readOnly 
                    className="quantidade-pizza" 
                />
                <button onClick={aumentarQuantidade} className="quantidade-btn">+</button>
            </div>

            <button className='adc-carrinho'>Adicionar ao Carrinho</button>
        </div>
    );
};

export default ItemPizza;
