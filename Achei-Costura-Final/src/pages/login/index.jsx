import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para a navegação
import './style.css'; 

function LoginPage() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Login</h1>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required />
        </div>

        <button type="submit" className="btn-login">Entrar</button>

        <div className="links-auxiliares">
          <Link to="/esqueci-senha">Esqueceu a sua senha?</Link>
          <Link to="/cadastro">Não possui um cadastro?</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;