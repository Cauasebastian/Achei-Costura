import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // 1. Importar o contexto
import './style.css';
import logoAcheiCostura from '../../assets/logo.png';
import coinsImg from '../../assets/coins.png'; // 2. Importar a imagem da moeda

function Header() {
  // 3. Pegar o estado de login e os dados do user
  const { isLoggedIn, user } = useAuth();

  return (
    <header className="main-header">
      <div className="header-content">
        
        <div className="logo-container">
          <Link to="/">
            <img src={logoAcheiCostura} alt="Logo Achei Costura" className="logo-imagem" />
          </Link>
        </div>

        <nav className="main-nav">
          <Link to="/">Início</Link>
          <Link to="/planos">Planos</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre-nos">Sobre nós</Link>
        </nav>

        <div className="header-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>

          {/* 4. LÓGICA: Se estiver logado, mostra as moedas */}
          {isLoggedIn && user && (
            <div className="coin-balance-card">
              <span className="coin-count">{user.coins}</span>
              <img src={coinsImg} alt="Coins" className="header-coin-icon" />
            </div>
          )}

          {/* Altera o botão de Login para "Sair" ou "Perfil" se estiver logado (opcional) */}
          <Link to={isLoggedIn ? "/meu-perfil" : "/login"} className="login-btn">
            {isLoggedIn ? "Meu Perfil" : "Login"}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;