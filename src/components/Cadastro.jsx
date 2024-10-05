import React, { useState, useEffect } from 'react';
import '../components/styles/Cadastro.css'; 
const FormularioCadastro = () => {
  
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ nome, telefone, endereco});
  };

  return (
    <div>
      <h2>
        <strong><u>Cadastro</u></strong>
      </h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />
        
        <label htmlFor="tel">Telefone</label>
        <input
          id="tel"
          type="tel"
          required
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <br />

        <div className="cadastrar">
          <button className="botao" type="submit">
            <strong>Cadastrar</strong>
          </button>
        </div>
        <div className="edit-erase">
        <div className="editar">
          <button className='editar'type='button'>
          <strong>Editar</strong>
          </button>
        </div>
        <div className="excluir">
          <button className='excluir'type='button'>
          <strong>Excluir</strong>
          </button>
        </div>

        </div>
      </form>
    </div>
  );
};

export default FormularioCadastro;
