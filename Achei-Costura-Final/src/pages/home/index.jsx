import React, { useState, useEffect } from 'react';
import { getEmpresas, getCostureiros } from '../../data/api';
import GridDeEmpresas from '../../components/GridDeEmpresas';
import Filtros from '../../components/Filtros'; // Componente do dropdown de localização
import AnuncioCarrossel from '../../components/AnuncioCarrossel';
import './style.css'; 

function HomePage() {
  // Estado para guardar a lista COMPLETA de todos os itens
  const [todosOsItens, setTodosOsItens] = useState([]);
  // Estado para guardar apenas os itens que serão exibidos na tela
  const [itensFiltrados, setItensFiltrados] = useState([]);
  // Estado para saber qual botão de filtro de TIPO está ativo
  const [filtroAtivo, setFiltroAtivo] = useState('Geral');
  // Estado para o filtro de LOCALIZAÇÃO
  const [filtros, setFiltros] = useState({ localizacao: 'Todas' });

  // 1. Busca e junta os dados uma única vez, quando a página carrega
  useEffect(() => {
    const empresas = getEmpresas().map(item => ({ ...item, tipo: 'empresas' }));
    const costureiros = getCostureiros().map(item => ({ ...item, tipo: 'costureiros' }));
    setTodosOsItens([...empresas, ...costureiros]);
  }, []);

  // 2. Filtra a lista sempre que um dos filtros (tipo ou localização) mudar
  useEffect(() => {
    let itensTemporarios = todosOsItens;

    // Etapa A: Filtra por TIPO (Geral, Costureiros, Empresas)
    if (filtroAtivo === 'Empresas') {
      itensTemporarios = todosOsItens.filter(item => item.tipo === 'empresas');
    } else if (filtroAtivo === 'Costureiros') {
      itensTemporarios = todosOsItens.filter(item => item.tipo === 'costureiros');
    }

    // Etapa B: Pega o resultado do filtro de TIPO e filtra por LOCALIZAÇÃO
    if (filtros.localizacao && filtros.localizacao !== 'Todas') {
      itensTemporarios = itensTemporarios.filter(item => item.cidade === filtros.localizacao);
    }

    setItensFiltrados(itensTemporarios);
    
  }, [filtroAtivo, filtros, todosOsItens]); // Roda o filtro se qualquer um destes mudar

  // Função para o dropdown de localização se comunicar com a página
  const handleFiltroChange = (nomeDoFiltro, valor) => {
    setFiltros(filtrosAnteriores => ({
      ...filtrosAnteriores,
      [nomeDoFiltro]: valor,
    }));
  };

  return (
    <div className="home-container">
      <AnuncioCarrossel />

      <div className="filtros-container-geral">
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

        <div className="filtro-localizacao">
          <Filtros 
            filtrosAtuais={filtros}
            onFiltroChange={handleFiltroChange}
            // Passa os itens para o componente de filtros poder gerar a lista de cidades
            itens={todosOsItens}
          />
        </div>
      </div>

      <GridDeEmpresas empresas={itensFiltrados} />
    </div>
  );
}

export default HomePage;