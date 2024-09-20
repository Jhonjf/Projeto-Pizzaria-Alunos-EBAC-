import React from 'react';
import Navbar from './components/Navbar';
import SlideShow from './components/SlideShow';
import Catalogo from './components/Catalogo';

const App = () => {
  return (
    <div>
      <Navbar />
      <SlideShow />
      <Catalogo /> 
    </div>
  )
}

export default App;
