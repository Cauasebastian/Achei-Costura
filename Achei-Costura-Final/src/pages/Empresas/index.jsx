import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnuncioCarrossel from '../../components/AnuncioCarrossel';
import GridDeEmpresas from '../../components/GridDeEmpresas';
import Filtros from '../../components/Filtros';
import './style.css';

function EmpresasPage() {
  const [empresas, setEmpresas] = useState([]);
  const [filtros, setFiltros] = useState({ localizacao: 'Todas' });
  const navigate = useNavigate(); // NOVIDADE: inicializando a ferramenta de navegação

  // ... (seu useEffect e handleFiltroChange continuam aqui, sem alterações) ...
  useEffect(() => {
    const dadosDoServidor = [
        { id: 1, nome: 'Roupas Estilosas', categoria: 'Modinha e Moda Praia', cidade: 'Caruaru - PE', contato: '81 9...****' },
        { id: 2, nome: 'Malhas & Cia', categoria: 'Malharia', cidade: 'Toritama - PE', contato: '81 9...****' },
        { id: 3, nome: 'Jeans da Capital', categoria: 'Jeans', cidade: 'Toritama - PE', contato: '81 9...****' },
        { id: 4, nome: 'Costura Fina', categoria: 'Alta Costura', cidade: 'Caruaru - PE', contato: '81 9...****' },
    ];
    setEmpresas(dadosDoServidor);
  }, []);

  const handleFiltroChange = (nomeDoFiltro, valor) => {
    setFiltros(filtrosAnteriores => ({ ...filtrosAnteriores, [nomeDoFiltro]: valor }));
  };


  const empresasFiltradas = empresas.filter(empresa => {
    const passouNoFiltroDeLocalizacao = 
      filtros.localizacao === 'Todas' || empresa.cidade === filtros.localizacao;
    return passouNoFiltroDeLocalizacao;
  });

  // NOVIDADE: Função que será chamada ao clicar no botão "Costureiro"
  const irParaCostureiros = () => {
    navigate('/costureiros'); // Navega para a rota /costureiros
  };

  return (
    <main className="main-content">
      <Link to="/anuncie" className="anuncie-link">
        <div className="anuncie-banner">
          <button className="arrow-btn"><span>←</span></button>
          <h2>ANUNCIE AQUI</h2>
          <button className="arrow-btn"><span>→</span></button>
        </div>
      </Link>

      <div className="filtros-section">
        <div className="tipo-filtros">
          {/* O botão "Empresas" não faz nada por enquanto, pois já estamos nele */}
          <button className="tipo-btn active">Empresas</button>
          {/* NOVIDADE: Adicionando o onClick ao botão "Costureiro" */}
          <button className="tipo-btn" onClick={irParaCostureiros}>
            Costureiro
          </button>
        </div>
        <Filtros 
          filtrosAtuais={filtros}
          onFiltroChange={handleFiltroChange}
        />
      </div>

      <GridDeEmpresas empresas={empresasFiltradas} tipo="empresas" />
    </main>
  );
}

export default EmpresasPage;