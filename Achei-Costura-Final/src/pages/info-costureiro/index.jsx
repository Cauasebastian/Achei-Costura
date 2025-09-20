import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'; 

function InfoCostureiroPage() {
    const { id } = useParams();
    const [costureiro, setCostureiro] = useState(null);

    useEffect(() => {
        const dadosDosCostureiros = [
            { id: 101, nome: 'Gabriel Batista', categoria: 'Modinha e Moda Praia', contato: '(81) 99832-****', endereco: 'Rua Go*******, *******, Centro, Caruaru', imageUrl: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg', avaliacao: 5 },
            { id: 102, nome: 'Sara Gabriely', categoria: 'Modinha', contato: '(81) 98765-****', endereco: 'Av. Principal, 456, Centro, Toritama', imageUrl: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg', avaliacao: 4 },
        ];

        const encontrado = dadosDosCostureiros.find(c => c.id === parseInt(id));
        setCostureiro(encontrado);
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
                </div>
            </div>
        </div>
    );
}

export default InfoCostureiroPage;