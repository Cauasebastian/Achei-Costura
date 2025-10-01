import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GridDeItens from '../../components/GridDeItens'; // NOME NOVO
import Filtros from '../../components/Filtros';
import AnuncioCarrossel from '../../components/AnuncioCarrossel';
import { getCostureiros } from '../../data/api';
import '../Empresas/style.css'; 

function CostureirosPage() {
  const [costureiros, setCostureiros] = useState([]);
  const [filtros, setFiltros] = useState({ localizacao: 'Todas' });
  const navigate = useNavigate();

  useEffect(() => {
    setCostureiros(getCostureiros());
  }, []);
  
  const handleFiltroChange = (nomeDoFiltro, valor) => {
    setFiltros(filtrosAnteriores => ({
      ...filtrosAnteriores,
      [nomeDoFiltro]: valor,
    }));
  };

  const costureirosFiltrados = costureiros.filter(costureiro => {
      const passouNoFiltroDeLocalizacao =
        filtros.localizacao === 'Todas' || costureiro.cidade === filtros.localizacao;
      return passouNoFiltroDeLocalizacao;
  });

  const irParaEmpresas = () => {
    navigate('/empresas');
  };

  return (
    <main className="main-content">
      <AnuncioCarrossel />

      <div className="filtros-section">
        <div className="tipo-filtros">
          <button className="tipo-btn" onClick={irParaEmpresas}>
            Empresas
          </button>
          <button className="tipo-btn active">
            Costureiro
          </button>
        </div>
        <Filtros 
          filtrosAtuais={filtros}
          onFiltroChange={handleFiltroChange}
          itens={costureiros} // Passando os itens para o filtro
        />
      </div>

      {/* USANDO O NOVO COMPONENTE COM A PROP "itens" */}
      <GridDeItens itens={costureirosFiltrados} tipo="costureiros" />
    </main>
  );
}

export default CostureirosPage;