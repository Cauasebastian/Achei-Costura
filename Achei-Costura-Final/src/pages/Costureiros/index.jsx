import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GridDeEmpresas from '../../components/GridDeEmpresas';
import Filtros from '../../components/Filtros';
import AnuncioCarrossel from '../../components/AnuncioCarrossel';
import '../Empresas/style.css'; 

function CostureirosPage() {
  const [costureiros, setCostureiros] = useState([]);
  const [filtros, setFiltros] = useState({ localizacao: 'Todas' });
  const navigate = useNavigate();

  useEffect(() => {
    // Seus dados de exemplo de costureiros
    const dadosDosCostureiros = [
      { id: 101, nome: 'Gabriel Batista', categoria: 'Modinha e Moda Praia', contato: '81 94589-****', imageUrl: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 102, nome: 'Sara Gabriely', categoria: 'Modinha', contato: '81 94589-****', imageUrl: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    ];
    setCostureiros(dadosDosCostureiros);
  }, []);
  
  const handleFiltroChange = (nomeDoFiltro, valor) => {
    setFiltros(filtrosAnteriores => ({ ...filtrosAnteriores, [nomeDoFiltro]: valor }));
  };

  const costureirosFiltrados = costureiros; // Sua lógica de filtro virá aqui

  // Função para navegar para a página de Empresas
  const irParaEmpresas = () => {
    navigate('/empresas');
  };

  return (
    // Usamos a mesma classe 'main-content' da página de Empresas
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
          {/* O botão "Empresas" agora te leva para a página de empresas */}
          <button className="tipo-btn" onClick={irParaEmpresas}>
            Empresas
          </button>
          {/* O botão "Costureiro" agora é o ativo */}
          <button className="tipo-btn active">
            Costureiro
          </button>
        </div>
        <Filtros 
          filtrosAtuais={filtros}
          onFiltroChange={handleFiltroChange}
        />
      </div>

      <GridDeEmpresas empresas={costureirosFiltrados} tipo="costureiros" />
    </main>
  );
}

export default CostureirosPage;