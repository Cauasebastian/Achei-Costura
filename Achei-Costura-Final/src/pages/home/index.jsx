import React, { useState, useEffect } from 'react';
import { getEmpresas, getCostureiros } from '../../data/api';
import GridDeEmpresas from '../../components/GridDeEmpresas';
import AnuncioCarrossel from '../../components/AnuncioCarrossel';
import './style.css'; 

function HomePage() {
  const [todosOsItens, setTodosOsItens] = useState([]);
  const [itensFiltrados, setItensFiltrados] = useState([]);
  const [filtroAtivo, setFiltroAtivo] = useState('Geral');

  useEffect(() => {
    const empresas = getEmpresas().map(item => ({ ...item, tipo: 'empresas' }));
    const costureiros = getCostureiros().map(item => ({ ...item, tipo: 'costureiros' }));
    setTodosOsItens([...empresas, ...costureiros]);
  }, []);

  useEffect(() => {
    if (filtroAtivo === 'Geral') {
      setItensFiltrados(todosOsItens);
    } else if (filtroAtivo === 'Empresas') {
      setItensFiltrados(todosOsItens.filter(item => item.tipo === 'empresas'));
    } else if (filtroAtivo === 'Costureiros') {
      setItensFiltrados(todosOsItens.filter(item => item.tipo === 'costureiros'));
    }
  }, [filtroAtivo, todosOsItens]);

  return (
    <div className="home-container">
      <AnuncioCarrossel />

      <div className="filtros-principais">
        <button 
          className={`filtro-btn ${filtroAtivo === 'Geral' ? 'active' : ''}`}
          onClick={() => setFiltroAtivo('Geral')}
        >
          Geral
        </button>
        <button 
          className={`filtro-btn ${filtroAtivo === 'Costureiros' ? 'active' : ''}`}
          onClick={() => setFiltroAtivo('Costureiros')}
        >
          Costureiros
        </button>
        <button 
          className={`filtro-btn ${filtroAtivo === 'Empresas' ? 'active' : ''}`}
          onClick={() => setFiltroAtivo('Empresas')}
        >
          Empresas
        </button>
      </div>
      
      {/* O GridDeEmpresas é genérico, então podemos passar qualquer lista para a prop "empresas" */}
      <GridDeEmpresas empresas={itensFiltrados} />
    </div>
  );
}

export default HomePage;