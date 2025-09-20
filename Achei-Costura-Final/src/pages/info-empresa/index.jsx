import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'; 

function InfoEmpresaPage() {
  const { id } = useParams();
  const [empresa, setEmpresa] = useState(null);

  useEffect(() => {
    const dadosDasEmpresas = [
        { id: 1, nome: 'Roupas Estilosas', categoria: 'Modinha e Moda Praia', contato: '(81) 99832-****', endereco: 'Rua Go*******, *******, Centro, Caruaru', imageUrl: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', avaliacao: 5 },
        { id: 2, nome: 'Malhas & Cia', categoria: 'Malharia', contato: '(81) 98765-****', endereco: 'Av. Principal, 456, Centro, Toritama', imageUrl: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', avaliacao: 4 },
        { id: 3, nome: 'Jeans da Capital', categoria: 'Jeans', contato: '(81) 91234-****', endereco: 'Rua da Confecção, 789, Sulanca, Santa Cruz', imageUrl: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', avaliacao: 5 },
    ];
    
    const encontrada = dadosDasEmpresas.find(e => e.id === parseInt(id));
    setEmpresa(encontrada);
  }, [id]);

  if (!empresa) {
    return <div>Carregando informações da empresa...</div>;
  }

  return (
    <div className="detalhes-container"> 
      {/* Coluna da Esquerda (Perfil) */}
      <div className="coluna-perfil">
        <img src={empresa.imageUrl} alt={empresa.nome} className="foto-perfil" />
        <h1 className="nome-perfil">{empresa.nome}</h1>
        <p className="categoria-perfil">{empresa.categoria}</p>
        <p className="contato-perfil">Contato: {empresa.contato}</p>
        <p className="endereco-perfil">Endereço: {empresa.endereco}</p>
        <button className="btn-desbloquear">Desbloquear contato</button>
      </div>

      {/* COLUNA DA DIREITA (AVALIAÇÃO E FEEDBACKS) - ESTA PARTE ESTAVA FALTANDO */}
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