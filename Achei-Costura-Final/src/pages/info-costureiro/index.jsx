import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCostureiroById, getUserProfileImageById } from '../../data/api'; // 👈 import adicionado
import { useAuth } from '../../context/AuthContext';
import StarRating from '../../components/StarRating';
import coinsImg from '../../assets/coins.png';
import './style.css';

function InfoCostureiroPage() {
  const { id } = useParams();
  const { user, unlockProfile } = useAuth();
  
  const [costureiro, setCostureiro] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [contatoVisivel, setContatoVisivel] = useState(false);
  const [activeTab, setActiveTab] = useState('sobre');
  const [desbloqueando, setDesbloqueando] = useState(false);
  const [imagemUrl, setImagemUrl] = useState(null); // 👈 estado para a imagem
  const [imagemCarregada, setImagemCarregada] = useState(false); // controle para evitar loops

  // Busca os dados do costureiro na API
  useEffect(() => {
    const fetchCostureiro = async () => {
      try {
        setLoading(true);
        const data = await getCostureiroById(id);
        if (data) {
          setCostureiro(data);
          if (data.unlocked) {
            setContatoVisivel(true);
          }
        } else {
          setError('Costureiro não encontrado');
        }
      } catch (err) {
        console.error('Erro ao buscar costureiro:', err);
        setError('Erro ao carregar dados. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchCostureiro();
  }, [id]);

  // Carrega a imagem quando o contato está visível e ainda não foi carregada
  useEffect(() => {
    const carregarImagem = async () => {
      if (contatoVisivel && costureiro?.id && !imagemCarregada) {
        try {
          const url = await getUserProfileImageById(costureiro.id);
          if (url) {
            setImagemUrl(url);
          }
        } catch (error) {
          console.error('Erro ao carregar imagem:', error);
        } finally {
          setImagemCarregada(true); // marca como tentada, mesmo se falhar
        }
      }
    };
    carregarImagem();
  }, [contatoVisivel, costureiro?.id, imagemCarregada]);

  // Função para desbloquear
  const handleDesbloquear = async () => {
    if (!user) {
      alert("Você precisa fazer login para usar suas moedas.");
      return;
    }
    if (user.role !== 'EMPRESA') {
      alert("Apenas empresas podem desbloquear perfis.");
      return;
    }
    setDesbloqueando(true);
    try {
      const result = await unlockProfile(id);
      if (result.success) {
        setContatoVisivel(true);
        setCostureiro(prev => ({ ...prev, unlocked: true }));
        // A imagem será carregada pelo useEffect acima
        alert(`Contato desbloqueado! Você agora tem ${user.coins - 1} coins.`);
      } else {
        alert(result.message || "Erro ao desbloquear. Tente novamente.");
      }
    } catch (error) {
      alert("Erro inesperado. Tente novamente.");
    } finally {
      setDesbloqueando(false);
    }
  };

  // Formata os dados recebidos da API
  const formatCostureiroData = (apiData) => {
    const enderecoParts = [];
    if (apiData.street) enderecoParts.push(apiData.street);
    if (apiData.city) enderecoParts.push(apiData.city);
    if (apiData.state) enderecoParts.push(apiData.state);
    if (apiData.zipCode) enderecoParts.push(apiData.zipCode);
    const enderecoCompleto = enderecoParts.join(', ') || 'Endereço não informado';

    const cidadeFormatada = apiData.city && apiData.state 
      ? `${apiData.city} - ${apiData.state}`
      : (apiData.city || 'Cidade não informada');

    const contatoMascarado = apiData.phone 
      ? apiData.phone.replace(/(\d{2})(\d{4,5})(\d{4})/, '$1****-$3')
      : '(**) ****-****';

    const avaliacao = apiData.ratingAverage || 0;

    return {
      nome: apiData.name,
      categoria: apiData.category || 'Costura Geral',
      cidade: cidadeFormatada,
      avaliacao: avaliacao,
      contato: contatoMascarado,
      endereco: enderecoCompleto,
      imageUrl: imagemUrl || 'https://via.placeholder.com/150', // usa imagem real ou placeholder
      phoneReal: apiData.phone,
      emailReal: apiData.email,
    };
  };

  // Se estiver carregando
  if (loading) {
    return <div className="loading">Carregando perfil...</div>;
  }

  // Se houve erro ou não encontrou
  if (error || !costureiro) {
    return (
      <div className="error-container">
        <h2>Ops! Algo deu errado</h2>
        <p>{error || 'Costureiro não encontrado'}</p>
        <Link to="/" className="btn-voltar">Voltar para home</Link>
      </div>
    );
  }

  const dadosFormatados = formatCostureiroData(costureiro);

  // Mock de portfólio (pode ser substituído quando a API tiver esse recurso)
  const portfolioItems = [
    { type: 'foto', url: 'https://images.pexels.com/photos/461035/pexels-photo-461035.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { type: 'foto', url: 'https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { type: 'foto', url: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { type: 'video', url: 'https://videos.pexels.com/video-files/4325372/4325372-hd_1920_1080_30fps.mp4' },
    { type: 'foto', url: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <div className="info-costureiro-container">
      {/* Cabeçalho do Perfil */}
      <div className="perfil-header">
        <img src={dadosFormatados.imageUrl} alt={dadosFormatados.nome} className="perfil-avatar" />
        <div className="perfil-dados">
          <h1>{dadosFormatados.nome}</h1>
          <p className="categoria">{dadosFormatados.categoria}</p>
          <p className="localizacao">📍 {dadosFormatados.cidade}</p>
          <div className="rating-display">
            <span>Avaliação: </span>
            <span className="stars">
              {'★'.repeat(Math.floor(dadosFormatados.avaliacao))}
              {dadosFormatados.avaliacao % 1 !== 0 && '½'}
            </span>
            <span>({dadosFormatados.avaliacao.toFixed(1)})</span>
          </div>
        </div>
      </div>

      {/* Sistema de Abas */}
      <div className="profile-tabs">
        <button 
          className={`tab-btn ${activeTab === 'sobre' ? 'active' : ''}`}
          onClick={() => setActiveTab('sobre')}
        >
          Sobre
        </button>
        <button 
          className={`tab-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveTab('portfolio')}
        >
          Portfólio (Trabalhos)
        </button>
      </div>

      {/* Conteúdo das Abas */}
      <div className="tab-content">
        
        {/* ABA 1: SOBRE E CONTATO */}
        {activeTab === 'sobre' && (
          <div className="sobre-section animate-fade">
            <div className="info-card">
              <h3>Informações de Contato</h3>
              
              {contatoVisivel ? (
                <div className="contato-revelado">
                  <p><strong>Whatsapp:</strong> {dadosFormatados.phoneReal || 'Não informado'}</p>
                  <p><strong>Email:</strong> {dadosFormatados.emailReal || 'Não informado'}</p>
                  <p><strong>Endereço:</strong> {dadosFormatados.endereco}</p>
                  <div className="sucesso-msg">✔ Contato liberado!</div>
                </div>
              ) : (
                <div className="bloqueio-area">
                  <p className="blur-text">{dadosFormatados.contato}</p>
                  <p className="aviso-bloqueio">Informações de contato ocultas</p>
                  
                  <div className="unlock-options">
                    <button 
                      onClick={handleDesbloquear} 
                      className="btn-unlock coin-unlock"
                      disabled={desbloqueando || (user && user.role !== 'EMPRESA')}
                    >
                      <img src={coinsImg} alt="Coin" />
                      {desbloqueando ? 'Desbloqueando...' : 'Desbloquear com 1 Coin'}
                    </button>
                    
                    <Link to="/planos" className="btn-link-planos">
                      Não tem coins? Comprar agora
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Seção de Avaliação do Usuário */}
            <div className="user-rating-section">
              <h3>Avalie este profissional</h3>
              <StarRating rating={0} onRatingChange={() => {}} allowHalf={true} />
            </div>
          </div>
        )}

        {/* ABA 2: PORTFÓLIO */}
        {activeTab === 'portfolio' && (
          <div className="portfolio-section animate-fade">
            <h3>Trabalhos Recentes</h3>
            <div className="portfolio-grid">
              {portfolioItems.map((item, index) => (
                <div key={index} className="portfolio-item">
                  {item.type === 'video' ? (
                    <div className="video-wrapper">
                      <video controls>
                        <source src={item.url} type="video/mp4" />
                        Seu navegador não suporta vídeos.
                      </video>
                      <span className="type-badge video">Vídeo</span>
                    </div>
                  ) : (
                    <div className="image-wrapper">
                      <img src={item.url} alt={`Trabalho ${index}`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoCostureiroPage;