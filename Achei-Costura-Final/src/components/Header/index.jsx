import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logoAcheiCostura from '../../assets/logo.png'; // Importa a imagem

function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/">
          <div className="logo-container">
            {/* Usa a imagem importada */}
            <img src={logoAcheiCostura} alt="Logo Achei Costura" className="logo-imagem" />
          </div>
        </Link>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre-nos">Sobre nós</Link>
        </nav>
        <div className="header-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <Link to="/login" className="login-btn">Login</Link>
        </div>
      </div>
    </header>
  );
}
export default Header;