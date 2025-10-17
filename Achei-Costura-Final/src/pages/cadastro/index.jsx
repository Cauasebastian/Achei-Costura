import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SpeechButton from '../../components/SpeechButton';
import './style.css';

function CadastroPage() {
  const [userType, setUserType] = useState('Profissional');
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    nomeEmpresa: '',
    telefone: '',
    email: '',
    senha: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setFormData(prev => ({ 
      ...prev, 
      nome: '', 
      sobrenome: '',
      nomeEmpresa: '' 
    }));
  };

  // ======================================================
  // AQUI ESTÁ A ÚNICA MUDANÇA NECESSÁRIA
  // ======================================================
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ userType, ...formData });
    alert('Primeira etapa concluída! Redirecionando para a próxima etapa...');
    
    // O destino do 'navigate' foi corrigido para levar à etapa 2
    navigate('/cadastrostep2'); 
  };
  
  const textoTitulo = "Crie sua Conta";
  const textoVoceE = "Você é:";
  const textoNome = "Nome";
  const textoSobrenome = "Sobrenome";
  const textoNomeEmpresa = "Nome da Empresa";
  const textoTelefone = "Número de telefone";
  const textoEmail = "Email";
  const textoSenha = "Senha";

  return (
    <div className="cadastro-container">
      <form onSubmit={handleSubmit} className="cadastro-card">
        <div className="form-header">
          <h2>{textoTitulo}</h2>
          <SpeechButton textToSpeak={textoTitulo} />
        </div>

        <div className="form-group">
          <div className="form-label-container">
            <label>{textoVoceE}</label>
            <SpeechButton textToSpeak={textoVoceE} />
          </div>
          <div className="user-type-toggle">
            <button
              type="button"
              className={userType === 'Profissional' ? 'active' : ''}
              onClick={() => handleUserTypeChange('Profissional')}
            >
              Profissional
            </button>
            <button
              type="button"
              className={userType === 'Empresa' ? 'active' : ''}
              onClick={() => handleUserTypeChange('Empresa')}
            >
              Empresa
            </button>
          </div>
        </div>

        {userType === 'Profissional' && (
          <>
            <div className="form-group">
              <div className="form-label-container">
                <label htmlFor="nome">{textoNome}</label>
                <SpeechButton textToSpeak={textoNome} />
              </div>
              <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <div className="form-label-container">
                <label htmlFor="sobrenome">{textoSobrenome}</label>
                <SpeechButton textToSpeak={textoSobrenome} />
              </div>
              <input type="text" id="sobrenome" name="sobrenome" value={formData.sobrenome} onChange={handleChange} required />
            </div>
          </>
        )}

        {userType === 'Empresa' && (
          <div className="form-group">
            <div className="form-label-container">
              <label htmlFor="nomeEmpresa">{textoNomeEmpresa}</label>
              <SpeechButton textToSpeak={textoNomeEmpresa} />
            </div>
            <input type="text" id="nomeEmpresa" name="nomeEmpresa" value={formData.nomeEmpresa} onChange={handleChange} required />
          </div>
        )}

        <div className="form-group">
          <div className="form-label-container">
            <label htmlFor="telefone">{textoTelefone}</label>
            <SpeechButton textToSpeak={textoTelefone} />
          </div>
          <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <div className="form-label-container">
            <label htmlFor="email">{textoEmail}</label>
            <SpeechButton textToSpeak={textoEmail} />
          </div>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <div className="form-label-container">
            <label htmlFor="senha">{textoSenha}</label>
            <SpeechButton textToSpeak={textoSenha} />
          </div>
          <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn-avancar">Avançar</button>
        
        <p className="login-redirect">
          Já possui uma conta? <Link to="/login">Faça login</Link>
        </p>
      </form>
    </div>
  );
}

export default CadastroPage;