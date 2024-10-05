import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SlideShow from './components/SlideShow';
import Catalogo from './components/Catalogo';
import FormularioCadastro from './components/Cadastro';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<><SlideShow /><Catalogo /></>} /> {/* Rota principal */}
          <Route path="/cadastro" element={<FormularioCadastro />} /> {/* Rota de cadastro */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
