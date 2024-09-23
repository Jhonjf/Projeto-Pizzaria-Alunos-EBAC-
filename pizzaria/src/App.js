import React from 'react';
import Navbar from './components/Navbar';
import SlideShow from './components/SlideShow';
import Catalogo from './components/Catalogo';
import FormularioCadastro from './components/Cadastro';

const App = () => {
  return (
    <div>
      <Navbar />
      <SlideShow />
      <Catalogo /> 
      <FormularioCadastro />
    </div>
  )
}

export default App;
