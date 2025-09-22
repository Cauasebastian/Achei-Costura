import React from 'react';
import './style.css'; // Conectando com nosso arquivo de design

function CadastroPage() {
  return (
    <div className="cadastro-container">
      <form className="cadastro-form">
        <h1>Crie sua Conta</h1>
        
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="sobrenome">Sobrenome:</label>
          <input type="text" id="sobrenome" name="sobrenome" required />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Número (telefone):</label>
          <input type="tel" id="telefone" name="telefone" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required />
        </div>

        <button type="submit" className='btn-cadastrar'>Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroPage;