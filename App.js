import React from 'react';
import ListaReceitas from './pages/listReceitas/ListaReceitas';
import DetalhesReceita from './pages/detaReceita/DetalhesReceita';
import NovaReceita from './pages/addReceita/NovaReceita';
import Header from './pages/Header/Header';
import './components/estilo.css';
import logo from './components/imagens/logo.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <header id="cabecalho">
        <div className='Logo  '>
          <img src={logo} width="150" height="100"/>
          <h1><br></br><strong className='coloramr'>Receitas</strong> <strong className="corLogo">Galinacio</strong></h1>
        </div>
      </header>
      <Header/>
      <Routes>
        <Route path="/" element={<ListaReceitas />} />
        <Route path="/detalhes/:id" element={<DetalhesReceita />} />
        <Route path="/adicionar" element={<NovaReceita />} />
      </Routes>
    </Router>
  );
}

export default App;
