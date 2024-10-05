import React, { useState } from 'react';
import './styles/ItemPizza.css';

const ItemPizza = ({ imagem, sabor, preco }) => {

    return (
        <div className='item-pizza'>
            <img src={imagem} alt={sabor} className="imagem-pizza" />
            <h3 className="sabor-pizza">{sabor}</h3>
            <p className="preco-pizza">Preço: R$ {preco.toFixed(2)}</p>

            <button className='adc-carrinho'>Adicionar ao Carrinho</button>
        </div>
    );
};

export default ItemPizza;
