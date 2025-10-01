import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'; 
// IMPORTANDO A FUNÇÃO DO NOSSO BANCO DE DADOS CENTRAL
import { getEmpresaById } from '../../data/api';

function InfoEmpresaPage() {
  const { id } = useParams();
  const [empresa, setEmpresa] = useState(null);

  useEffect(() => {
    // Agora usamos nossa função central para encontrar a empresa pelo ID
    const empresaEncontrada = getEmpresaById(id);
    setEmpresa(empresaEncontrada);
  }, [id]);

  if (!empresa) {
    return <div>Carregando informações da empresa...</div>;
  }

  // O seu JSX para exibir os detalhes continua o mesmo
  return (
    <div className="detalhes-container">
      <div className="coluna-perfil">
        <img src={empresa.imageUrl} alt={empresa.nome} className="foto-perfil" />
        <h1 className="nome-perfil">{empresa.nome}</h1>
        <p className="categoria-perfil">{empresa.categoria}</p>
        <p className="contato-perfil">Contato: {empresa.contato}</p>
        <p className="endereco-perfil">Endereço: {empresa.endereco}</p>
        <button className="btn-desbloquear">Desbloquear contato</button>
      </div>
      <div className="coluna-feedbacks">
        <div className="avaliacao">
          <h2>Avaliação <span>{empresa.avaliacao}/5</span></h2>
          <div className="estrelas">
            {"★".repeat(empresa.avaliacao)}{"☆".repeat(5 - empresa.avaliacao)}
          </div>
        </div>
        <div className="feedbacks-lista">
          <h3>Feedbacks</h3>
          <div className="feedback-item">
            <div className="feedback-usuario-avatar"></div>
            <div className="feedback-conteudo">
              <strong className="feedback-usuario-nome">usuario_243</strong>
              <span className="feedback-texto">Muito aconchegante</span>
            </div>
          </div>
          <div className="feedback-item">
            <div className="feedback-usuario-avatar"></div>
            <div className="feedback-conteudo">
              <strong className="feedback-usuario-nome">usuario_227</strong>
              <span className="feedback-texto">Ótimo patrão!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoEmpresaPage;