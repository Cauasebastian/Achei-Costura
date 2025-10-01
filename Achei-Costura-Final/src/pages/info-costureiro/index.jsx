import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCostureiroById } from '../../data/api';
import StarRating from '../../components/StarRating';
import FeedbackForm from '../../components/FeedbackForm';
import './style.css';

function InfoCostureiroPage() {
  const { id } = useParams();
  const [costureiro, setCostureiro] = useState(null);

  useEffect(() => {
    const costureiroEncontrado = getCostureiroById(id);
    setCostureiro(costureiroEncontrado);
  }, [id]);

  if (!costureiro) {
    return <div>Carregando profissional...</div>;
  }

  return (
    <div className="detalhes-container">
      <div className="coluna-perfil">
        <img src={costureiro.imageUrl} alt={costureiro.nome} className="foto-perfil" />
        <h1 className="nome-perfil">{costureiro.nome}</h1>
        <p className="categoria-perfil">{costureiro.categoria}</p>
        <p className="contato-perfil">Contato: {costureiro.contato}</p>
        <p className="endereco-perfil">Endereço: {costureiro.endereco}</p>
        <button className="btn-desbloquear">Desbloquear contato</button>
      </div>
      <div className="coluna-feedbacks">
        <div className="avaliacao">
          <h2>Avaliação <span>{costureiro.avaliacao}/5</span></h2>
          <div className="estrelas">
            {"★".repeat(costureiro.avaliacao)}{"☆".repeat(5 - costureiro.avaliacao)}
          </div>
        </div>
        <div className="feedbacks-lista">
          <h3>Feedbacks</h3>
          <div className="feedback-item">
            <div className="feedback-usuario-avatar"></div>
            <div className="feedback-conteudo">
              <strong className="feedback-usuario-nome">usuario_223</strong>
              <span className="feedback-texto">Entrega no prazo!</span>
            </div>
          </div>
          <div className="feedback-item">
            <div className="feedback-usuario-avatar"></div>
            <div className="feedback-conteudo">
              <strong className="feedback-usuario-nome">usuario_225</strong>
              <span className="feedback-texto">Muito Eficiente!</span>
            </div>
          </div>
          <div className="coluna-feedbacks">
            <div className="avaliacao">
              <h2>Avalie este profissional</h2>
              <StarRating />
            </div>
            <FeedbackForm />
            <div className="feedbacks-lista">
              <h3>Feedbacks</h3>
              <div className="feedback-item">
                {/* ... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCostureiroPage;