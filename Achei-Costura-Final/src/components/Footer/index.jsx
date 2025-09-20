import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
// Importando o logo
import logoAcheiCostura from '../../assets/logo.png'; 

function Footer() {
  return (
    <footer className="main-footer">
      {/* AGORA SÓ TEMOS UM CONTAINER PRINCIPAL */}
      <div className="footer-content">
        
        {/* Bloco da Esquerda: Logo */}
        <div className="footer-logo">
          <img src={logoAcheiCostura} alt="Achei Costura" />
        </div>

        {/* Bloco Central: Links */}
        <nav className="footer-links">
          <Link to="/empresas">Achei costura</Link>
          <Link to="/costureiros">Costureiros</Link>
          <Link to="/login">Login</Link>
          <Link to="/anuncie">Cadastrar</Link>
        </nav>

        {/* Bloco da Direita: Direitos Reservados (movido para cá) */}
        <div className="footer-direitos">
          <p>Todos os direitos reservados © Achei Costura</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;