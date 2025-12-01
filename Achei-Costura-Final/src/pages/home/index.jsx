import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

// --- DADOS MOCK ---
const mockUsuarios = [
  { id: 1, nome: "Gabriel Batista", categoria: "Modinha e Moda Praia", cidade: "Caruaru - PE", foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", destaque: true },
  { id: 2, nome: "Sara Gabriely", categoria: "Costureira e Modelista", cidade: "Toritama - PE", foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", destaque: true },
  { id: 3, nome: "Ana Silva", categoria: "Facção de Jeans", cidade: "Santa Cruz - PE", foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", destaque: false },
  { id: 4, nome: "Carlos Malhas", categoria: "Atacado", cidade: "Caruaru - PE", foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", destaque: false }
];

const Home = () => {
  // Lógica do Carrossel
  const destaques = mockUsuarios.filter(u => u.destaque); 
  const [indexDestaque, setIndexDestaque] = useState(0);

  const mudarDestaque = (direcao) => {
    if (direcao === 'prox') {
      setIndexDestaque((prev) => (prev + 1) % destaques.length);
    } else {
      setIndexDestaque((prev) => (prev - 1 + destaques.length) % destaques.length);
    }
  };

  const usuarioDestaque = destaques[indexDestaque];

  return (
    <div className="home-container">
      
      {/* 1. ÁREA DE DESTAQUE PREMIUM */}
      <section className="destaque-section">
        <div className="destaque-card">
          
          <button className="nav-btn prev" onClick={() => mudarDestaque('ant')}>
             &lt;
          </button>
          
          <div className="destaque-conteudo">
            <div className="destaque-foto-wrapper">
               <img src={usuarioDestaque.foto} alt={usuarioDestaque.nome} />
               <span className="badge-vip">⭐ Destaque</span>
            </div>
            
            <div className="destaque-info">
              <h3>{usuarioDestaque.nome}</h3>
              <p className="cargo">{usuarioDestaque.categoria}</p>
              <p className="local">{usuarioDestaque.cidade}</p>
              <Link to={`/perfil/${usuarioDestaque.id}`} className="btn-ver-perfil">
                Ver Perfil
              </Link>
            </div>
          </div>

          <button className="nav-btn next" onClick={() => mudarDestaque('prox')}>
             &gt;
          </button>

        </div>
      </section>

      {/* 2. MIOLO DA PÁGINA */}
      <div className="main-content">
        
        {/* BARRA DE TÍTULO E FILTROS */}
        <div className="top-bar">
          <h2 className="titulo-secao">Facções Disponíveis</h2>
          
          <div className="filtros-modernos">
            <div className="select-wrapper">
              <select>
                <option>Ordenar por</option>
                <option>Mais recentes</option>
                <option>Relevância</option>
              </select>
            </div>
            <div className="select-wrapper">
              <select>
                <option>Todas as Cidades</option>
                <option>Caruaru</option>
                <option>Toritama</option>
                <option>Santa Cruz</option>
              </select>
            </div>
          </div>
        </div>

        {/* GRID DE CARDS */}
        <div className="cards-grid">
          {mockUsuarios.map((user) => (
            <div key={user.id} className="card">
              <div className="card-header">
                <img src={user.foto} alt={user.nome} />
              </div>
              <div className="card-body">
                <h3>{user.nome}</h3>
                <span className="card-categoria">{user.categoria}</span>
                <span className="card-cidade">📍 {user.cidade}</span>
                <button className="btn-card-action">Saiba mais</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;