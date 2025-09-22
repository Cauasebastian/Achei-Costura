import React from 'react';
import './style.css'; // Conectando com nosso arquivo de design

function EsqueciSenhaPage() {
  return (
    <div className="esqueci-senha-container">
      <form className="esqueci-senha-form">
        <h2>Esqueceu sua senha?</h2>
        <p className="instrucoes">
          Não se preocupe! Informe seu email de cadastro, o mesmo utilizado para acesso à Nuuvem, que lhe enviaremos as instruções para a troca da senha por email.
        </p>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <div className="input-com-icone">
            <i className="bi bi-envelope"></i> {/* <-- SEU ÍCONE AQUI */}
            <input type="email" id="email" name="email" required />
          </div>
        </div>

        <button type="submit" className="btn-enviar-email">Enviar</button>
      </form>
    </div>
  );
}