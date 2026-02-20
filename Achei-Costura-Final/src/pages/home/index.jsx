import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCostureiros, getCostureirosDestaque } from '../../data/api';
import Card from '../../components/Card';
import './style.css';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
  const { user } = useAuth();
  const [costureiros, setCostureiros] = useState([]);
  const [destaques, setDestaques] = useState([]);
  const [loading, setLoading] = useState(true);
  const [indexDestaque, setIndexDestaque] = useState(0);

  // Busca dados ao montar o componente
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Busca todos os costureiros
        const todos = await getCostureiros();
        setCostureiros(todos);

        // Busca os destaques (top-rated)
        const tops = await getCostureirosDestaque(5); // limit 5
        setDestaques(tops.length > 0 ? tops : todos.slice(0, 2)); // fallback
      } catch (error) {
        console.error('Erro ao carregar home:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Navegação do carrossel
  const mudarDestaque = (direcao) => {
    if (destaques.length === 0) return;
    if (direcao === 'prox') {
      setIndexDestaque((prev) => (prev + 1) % destaques.length);
    } else {
      setIndexDestaque((prev) => (prev - 1 + destaques.length) % destaques.length);
    }
  };

  // Prepara os dados para exibição
  const prepararDados = (item) => ({
    id: item.id,
    nome: item.name,
    foto: item.profileImageUrl || 'https://via.placeholder.com/150', // Ajuste conforme backend
    categoria: item.category || 'Costura Geral',
    cidade: item.city && item.state ? `${item.city} - ${item.state}` : (item.city || 'Local não informado'),
    avaliacao: item.ratingAverage || 0,
    servicos: item.category ? [item.category] : ['Costura'], // fallback
    verified: item.verified || false,
  });

  // Se estiver carregando, mostra um skeleton ou loading
  if (loading) {
    return <div className="loading">Carregando...</div>;
  }

  const usuarioDestaque = destaques.length > 0 ? prepararDados(destaques[indexDestaque]) : null;

  return (
    <div className="home-container">

      {/* --- SEÇÃO DE DESTAQUE --- */}
      {destaques.length > 0 && usuarioDestaque && (
        <section className="destaque-section">
          <div className="destaque-card">
            
            <button className="nav-btn prev" onClick={() => mudarDestaque('ant')}>&lt;</button>

            <div className="destaque-conteudo">
              <div className="destaque-foto-wrapper">
                <img src={usuarioDestaque.foto} alt={usuarioDestaque.nome} />
                <span className="badge-vip">⭐ Destaque</span>
              </div>
              <div className="destaque-info">
                <h3>{usuarioDestaque.nome}</h3>
                <p className="cargo">{usuarioDestaque.categoria}</p>
                <p className="local">{usuarioDestaque.cidade}</p>
                <Link to={`/costureiros/${usuarioDestaque.id}`} className="btn-ver-perfil">
                  Ver Perfil
                </Link>
              </div>
            </div>

            <button className="nav-btn next" onClick={() => mudarDestaque('prox')}>&gt;</button>
          </div>
        </section>
      )}

      {/* --- GRID DE CARDS --- */}
      <div className="home-grid-area">

        {/* Barra de Filtros */}
        <div className="top-bar">
          <h2 className="titulo-secao">Facções Disponíveis</h2>
          <div className="filtros-modernos">
            <div className="select-wrapper">
              <select defaultValue="">
                <option value="" disabled>Ordenar por</option>
                <option value="recentes">Mais recentes</option>
                <option value="relevancia">Relevância</option>
              </select>
            </div>
            <div className="select-wrapper">
              <select defaultValue="">
                <option value="" disabled>Filtrar por Cidade</option>
                <option value="todas">Todas as Cidades</option>
                {/* Opções dinâmicas poderiam ser geradas a partir dos dados */}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="cards-grid"> 
          {costureiros.map((costureiro) => {
            const item = prepararDados(costureiro);
            return (
              <Card
                key={item.id}
                id={item.id}
                nome={item.nome}
                imagem={item.foto}
                cidade={item.cidade}
                avaliacao={item.avaliacao}
                servicos={item.servicos}
                premiumRequired={true} // ou baseado em verified
                jaDesbloqueou={false} // lógica futura
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;