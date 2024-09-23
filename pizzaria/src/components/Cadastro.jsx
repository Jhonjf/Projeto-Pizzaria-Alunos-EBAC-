import React, { useState, useEffect } from 'react';
import '../components/styles/Cadastro.css'; 
const FormularioCadastro = () => {
  
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [id, setId] = useState('');

  
  useEffect(() => {
    const generatedId = Math.floor(Math.random() * 1000000);
    setId(generatedId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ nome, telefone, endereco, id });
  };

  return (
    <div>
      <h1>
        <strong><u>Cadastro</u></strong>
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          type="text"
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
        
        <label htmlFor="endereco">Endereço</label>
        <input
          id="endereco"
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
        <br />
        
        <label htmlFor="id">ID</label>
        <input
          id="id"
          type="text"
          value={id}
          readOnly
        />
        <br />

        <div className="cadastrar">
          <button className="botao" type="submit">
            <strong>Cadastrar</strong>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioCadastro;
