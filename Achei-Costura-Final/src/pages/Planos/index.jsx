import React from 'react';
import { Link } from 'react-router-dom';
import SpeechButton from '../../components/SpeechButton';
import './style.css';

// IMPORTANTE: Importe a imagem da moeda aqui
import coinsImg from '../../assets/coins.png';

const BeneficioItem = ({ texto, disponivel = true }) => (
  <li className={disponivel ? 'disponivel' : 'indisponivel'}>
    <span className="check-icon">{disponivel ? '✔' : '✖'}</span>
    <span>{texto}</span>
  </li>
);

function PlanosPage() {
  // ... (Seus textos de planos anteriores mantêm-se iguais) ...
  const textoPlanoMensal = `
    Plano Mensal. 
    Benefícios: Desbloqueie todos os contatos por 1 mês. 
    Navegação sem anúncios de terceiros, item indisponível. 
    Ideal para projetos rápidos e imediatos.
  `;
  const textoPlanoTrimestral = `
    Plano Trimestral, o mais popular.
    Benefícios: Desbloqueie todos os contatos por 3 meses. 
    Navegação sem anúncios de terceiros. 
    Suporte prioritário. 
    Ótimo custo-benefício para projetos recorrentes.
  `;
  const textoPlanoSemestral = `
    Plano Semestral.
    Benefícios: Desbloqueie todos os contatos por 6 meses.
    Navegação sem anúncios de terceiros.
    Suporte prioritário.
    Máxima economia com o melhor valor a longo prazo.
  `;
  const textoPlanoAnualNovo = `
    Plano Anual.
    Benefícios: Acesso anual.
    Desbloqueie todos os contatos durante 1 ano inteiro.
    Suporte Premium e acesso antecipado a novidades.
    Navegação sem anúncios de terceiros.
  `;

  // NOVO: Texto para o botão de áudio dos Coins
  const textoCoins = `
    Comprar Coins.
    Sistema pré-pago avulso.
    Compre moedas para desbloquear facções individualmente.
    Uma moeda equivale a um desbloqueio.
    Sem mensalidade ou fidelidade.
  `;

  return (
    <div className="planos-container">
      <h1 className="planos-titulo">Planos de Assinatura</h1>
      <div className="planos-grid">

        {/* ... (Os seus 4 cards de Planos Anteriores ficam AQUI sem alterações) ... */}
        
        {/* Card do Plano Mensal */}
        <div className="plano-card">
          <span className="plano-tag flexivel">FLEXÍVEL</span>
          <div className="card-header">
            <h2>Mensal</h2>
            <SpeechButton textToSpeak={textoPlanoMensal} />
          </div>
          <ul>
            <BeneficioItem texto="Desbloqueie todos os contatos por 1 mês" />
            <BeneficioItem texto="Navegação sem anúncios de terceiros" disponivel={false} />
            <BeneficioItem texto="Ideal para projetos rápidos e imediatos" />
          </ul>
          <Link to="/pagamento">
            <button className="btn-assinar">Assinar Agora</button>
          </Link>
        </div>

        {/* Card do Plano Trimestral */}
        <div className="plano-card popular">
          <span className="plano-tag popular">MAIS POPULAR</span>
          <div className="card-header">
            <h2>Trimestral</h2>
            <SpeechButton textToSpeak={textoPlanoTrimestral} />
          </div>
          <ul>
            <BeneficioItem texto="Desbloqueie todos os contatos por 3 meses" />
            <BeneficioItem texto="Navegação sem anúncios de terceiros" />
            <BeneficioItem texto="Suporte prioritário" />
            <BeneficioItem texto="Ótimo custo-benefício para projetos recorrentes" />
          </ul>
          <Link to="/pagamento">
            <button className="btn-assinar">Assinar Agora</button>
          </Link>
        </div>

        {/* Card do Plano Semestral */}
        <div className="plano-card">
          <span className="plano-tag economia">ECONOMIA</span>
          <div className="card-header">
            <h2>Semestral</h2>
            <SpeechButton textToSpeak={textoPlanoSemestral} />
          </div>
          <ul>
            <BeneficioItem texto="Desbloqueie todos os contatos por 6 meses" />
            <BeneficioItem texto="Navegação sem anúncios de terceiros" />
            <BeneficioItem texto="Suporte prioritário" />
            <BeneficioItem texto="Máxima economia com o melhor valor a longo prazo" />
          </ul>
          <Link to="/pagamento">
            <button className="btn-assinar">Assinar Agora</button>
          </Link>
        </div>

        {/* Card do Plano Anual */}
        <div className="plano-card">
          <span className="plano-tag valor">MELHOR VALOR</span>
          <div className="card-header">
            <h2>Anual</h2>
            <SpeechButton textToSpeak={textoPlanoAnualNovo} />
          </div>
          <ul>
            <BeneficioItem texto="Acesso anual" />
            <BeneficioItem texto="Desbloqueie todos os contatos durante 1 ano inteiro" />
            <BeneficioItem texto="Suporte Premium e acesso antecipado a novidades" />
            <BeneficioItem texto="Navegação sem anúncios de terceiros" />
          </ul>
          <Link to="/pagamento">
            <button className="btn-assinar">Assinar Agora</button>
          </Link>
        </div>

        {/* === NOVO CARD: COMPRAR COINS === */}
        <div className="plano-card card-coins">
          <div className="card-header">
            <h2>Comprar Coins</h2>
            <SpeechButton textToSpeak={textoCoins} />
          </div>
          
          {/* Imagem da Moeda */}
          <div className="coin-image-container">
            <img src={coinsImg} alt="Moedas Achei Costura" className="coin-img" />
          </div>

          <ul>
            <BeneficioItem texto="Pague apenas pelo que usar" />
            <BeneficioItem texto="1 Moeda = 1 Facção desbloqueada" />
            <BeneficioItem texto="Sem renovação automática" />
            <BeneficioItem texto="Acumulativo: suas moedas nunca expiram" />
          </ul>
          
          <Link to="/pagamento?tipo=coins">
            <button className="btn-assinar btn-coins">Comprar Moedas</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default PlanosPage;