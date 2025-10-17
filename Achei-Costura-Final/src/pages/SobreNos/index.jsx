import React from 'react';
import { Link } from 'react-router-dom';
import SpeechButton from '../../components/SpeechButton';
import './style.css';

function SobreNosPage() {
  // 1. JUNTAMOS TODOS OS PARÁGRAFOS EM UM ÚNICO TEXTO PARA O PRIMEIRO BOTÃO
  const textoPrincipal = `
    Nós sabemos da sua correria. Sabemos o que é gastar sola de sapato e tempo precioso batendo de porta em porta em busca de uma boa oportunidade na área de facção. Da mesma forma, entendemos a urgência das empresas que precisam encontrar profissionais qualificados para não parar a produção. O mercado de confecções, um dos corações da economia brasileira, pulsava com um problema claro: a dificuldade de conectar quem quer trabalhar com quem precisa de talento. Vimos essa lacuna e tivemos a certeza de que a tecnologia poderia ser o fio que une essas duas pontas.
    Assim nasceu o Achei Costura. Uma plataforma simples, prática e acessível na palma da sua mão. Nossa solução é acabar com o cansaço da procura. Queremos que você, seja de onde for no Brasil, encontre as melhores vagas ou os melhores profissionais da sua região, da sua cidade ou até mesmo do seu bairro, com apenas alguns cliques.
    Nossa grande missão vai além de ser apenas um classificado de empregos. Nós queremos inverter a lógica da contratação. Nossa intenção é que você, profissional competente, não precise mais ir atrás das empresas. Nós queremos que as empresas venham até você! No "Achei Costura", seu perfil é a sua vitrine. É o espaço para você mostrar sua habilidade e sua experiência, permitindo que as melhores oportunidades encontrem o seu talento.
    A força do "Achei Costura" vem da união de dois mundos: a experiência de mercado e a inovação tecnológica.
    Nosso compromisso é com o fortalecimento de toda a cadeia produtiva da confecção no Brasil.
  `;

  // 2. Texto separado para a seção final
  const textoFinal = `
    E você, o que está esperando?
    É profissional da costura? Cadastre seu perfil gratuitamente e seja encontrado pelas melhores empresas.
    É uma empresa ou facção? Anuncie sua vaga e encontre o talento que você precisa para crescer.
  `;

  return (
    <div className="sobre-nos-container">
      <h1 className="titulo-pagina">Sobre Nós</h1>

      <div className="conteudo-sobre-nos">
        {/* 3. UM ÚNICO BOTÃO NO TOPO DO CONTEÚDO */}
        <div className="speech-button-container-top">
          <SpeechButton textToSpeak={textoPrincipal} />
        </div>

        {/* Os parágrafos agora não precisam mais do wrapper 'readable-section' */}
        <p>
          Nós sabemos da sua correria. Sabemos o que é gastar sola de sapato e tempo precioso batendo de porta em porta em busca de uma boa oportunidade na área de facção. Da mesma forma, entendemos a urgência das empresas que precisam encontrar profissionais qualificados para não parar a produção. O mercado de confecções, um dos corações da economia brasileira, pulsava com um problema claro: a dificuldade de conectar quem quer trabalhar com quem precisa de talento. Vimos essa lacuna e tivemos a certeza de que a tecnologia poderia ser o fio que une essas duas pontas.
        </p>
        <p>
          Assim nasceu o Achei Costura. Uma plataforma simples, prática e acessível na palma da sua mão. Nossa solução é acabar com o cansaço da procura. Queremos que você, seja de onde for no Brasil, encontre as melhores vagas ou os melhores profissionais da sua região, da sua cidade ou até mesmo do seu bairro, com apenas alguns cliques.
        </p>
        <p>
          Nossa grande missão vai além de ser apenas um classificado de empregos. Nós queremos inverter a lógica da contratação. Nossa intenção é que você, profissional competente, não precise mais ir atrás das empresas. Nós queremos que as empresas venham até você! No "Achei Costura", seu perfil é a sua vitrine. É o espaço para você mostrar sua habilidade e sua experiência, permitindo que as melhores oportunidades encontrem o seu talento.
        </p>
        <p>
          A força do "Achei Costura" vem da união de dois mundos: a experiência de mercado e a inovação tecnológica.
        </p>
        <p>
          Nosso compromisso é com o fortalecimento de toda a cadeia produtiva da confecção no Brasil.
        </p>
        
        <div className="cta-section">
          <div className="cta-header">
            <h3>E você, o que está esperando?</h3>
            {/* 4. UM SEGUNDO BOTÃO APENAS PARA A SEÇÃO FINAL */}
            <SpeechButton textToSpeak={textoFinal} />
          </div>
          <ul>
            <li>
              É profissional da costura? <Link to="/cadastro">Cadastre seu perfil</Link> gratuitamente e seja encontrado pelas melhores empresas.
            </li>
            <li>
              É uma empresa ou facção? <Link to="/anuncie">Anuncie sua vaga</Link> e encontre o talento que você precisa para crescer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SobreNosPage;