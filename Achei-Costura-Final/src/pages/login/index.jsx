import React from 'react';

import './style.css'; 

export function LoginPage() { // Lembre-se de usar o nome correto da sua função
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Login</h1>
        
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          
          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" name="senha" required />
          </div>
          
          <button type="submit" className="auth-button">
            Entrar
          </button>
        </form>

        <div className="auth-links">
          <a href="/esqueci-senha">Esqueceu a sua senha?</a>
          <a href="/cadastro">Não possui um cadastro?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;