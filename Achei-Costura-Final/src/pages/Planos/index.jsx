import React from 'react';
import { Link } from 'react-router-dom';
import SpeechButton from '../../components/SpeechButton';
import './style.css';

// 1. O BeneficioItem volta a ser um componente simples, sem o botão.
const BeneficioItem = ({ texto, disponivel = true }) => (
  <li className={disponivel ? 'disponivel' : 'indisponivel'}>
    <span className="check-icon">{disponivel ? '✔' : '✖'}</span>
    <span>{texto}</span>
  </li>
);

function PlanosPage() {
  // 2. Criamos o texto completo para cada plano
  const textoPlanoMensal = `
    Plano Mensal. 
    Benefícios: Desbloqueie todos os contatos. 
    Navegação sem anúncios de terceiros, item indisponível. 
    Ideal para projetos rápidos e imediatos.
  `;
  const textoPlanoTrimestral = `
    Plano Trimestral, o mais popular.
    Benefícios: Desbloqueie todos os contatos. 
    Navegação sem anúncios de terceiros. 
    Suporte prioritário. 
    Ótimo custo-benefício para projetos recorrentes.
  `;
  const textoPlanoAnual = `
    Plano Anual.
    Benefícios: Desbloqueie todos os contatos.
    Navegação sem anúncios de terceiros.
    Suporte prioritário.
    Máxima economia com o melhor valor a longo prazo.
  `;
  const textoSocioFundador = `
    Plano Sócio Fundador.
    Benefícios: Acesso VITALÍCIO com pagamento único.
    Desbloqueie todos os contatos para sempre.
    Suporte Premium e acesso antecipado a novidades.
    Navegação sem anúncios de terceiros.
  `;

  return (
    <div className="planos-container">
      <h1 className="planos-titulo">Planos de Assinatura</h1>
      <div className="planos-grid">

        {/* Card do Plano Mensal */}
        <div className="plano-card">
          {/* 3. Um cabeçalho para alinhar o título e o botão */}
          <div className="card-header">
            <h2>Mensal</h2>
            <SpeechButton textToSpeak={textoPlanoMensal} />
          </div>
          <ul>
            <BeneficioItem texto="Desbloqueie todos os contatos" />
            <BeneficioItem texto="Navegação sem anúncios de terceiros" disponivel={false} />
            <BeneficioItem texto="Ideal para projetos rápidos e imediatos" />
          </ul>
          <Link to="/pagamento">
            <button className="btn-assinar">Assinar Agora</button>
          </Link>
        </div>

        {/* Card do Plano Trimestral */}
        <div className="plano-card popular">
          <span className="tag-popular">Mais Popular</span>
          <div className="card-header">
            <h2>Trimestral</h2>
            <SpeechButton textToSpeak={textoPlanoTrimestral} />
          </div>
          <ul>
            <BeneficioItem texto="Desbloqueie todos os contatos" />
            <BeneficioItem texto="Navegação sem anúncios de terceiros" />
            <BeneficioItem texto="Suporte prioritário" />
            <BeneficioItem texto="Ótimo custo-benefício para projetos recorrentes" />
          </ul>
          <Link to="/pagamento">
            <button className="btn-assinar">Assinar Agora</button>
          </Link>
        </div>

        {/* Card do Plano Anual */}
        <div className="plano-card">
          <div className="card-header">
            <h2>Anual</h2>
            <SpeechButton textToSpeak={textoPlanoAnual} />
          </div>
          <ul>
            <BeneficioItem texto="Desbloqueie todos os contatos" />
            <BeneficioItem texto="Navegação sem anúncios de terceiros" />
            <BeneficioItem texto="Suporte prioritário" />
            <BeneficioItem texto="Máxima economia com o melhor valor a longo prazo" />
          </ul>
          <Link to="/pagamento">
            <button className="btn-assinar">Assinar Agora</button>
          </Link>
        </div>

        {/* Card do Sócio Fundador */}
        <div className="plano-card">
          <div className="card-header">
            <h2>Sócio Fundador</h2>
            <SpeechButton textToSpeak={textoSocioFundador} />
          </div>
          <ul>
            <BeneficioItem texto="Acesso VITALÍCIO com pagamento único" />
            <BeneficioItem texto="Desbloqueie todos os contatos para sempre" />
            <BeneficioItem texto="Suporte Premium e acesso antecipado a novidades" />
            <BeneficioItem texto="Navegação sem anúncios de terceiros" />
          </ul>
          <Link to="/pagamento">
            <button className="btn-assinar">Seja Fundador</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default PlanosPage;