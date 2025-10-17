import React, { useState } from 'react';
import SpeechButton from '../../components/SpeechButton'; // 1. IMPORTE O BOTÃO
import './style.css';

function ContatoPage() {
  const [motivo, setMotivo] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Para facilitar, colocamos os textos que serão lidos em constantes
  const textoIntrodutorio = "Sua dúvida, sugestão ou parceria é muito importante para nós. Preencha o formulário abaixo ou utilize um de nossos canais de atendimento. Queremos ouvir o que você tem a dizer para fortalecermos juntos a indústria da confecção no Brasil.";
  const textoMotivo = "Qual o motivo do seu contato?";
  const textoMensagem = "Sua Mensagem:";

  const motivosDeContato = [
    "Sou Profissional e tenho uma dúvida",
    "Sou Empresa e quero saber mais",
    "Reportar um problema técnico na plataforma",
    "Sugestões de melhoria",
    "Imprensa ou Parcerias",
    "Outro Assunto",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!motivo) {
      alert('Por favor, selecione o motivo do seu contato.');
      return;
    }
    if (mensagem.trim() === '') {
      alert('Por favor, escreva sua mensagem.');
      return;
    }
    alert(`Mensagem enviada com sucesso!\n\nMotivo: ${motivo}\nMensagem: ${mensagem}`);
    setMotivo('');
    setMensagem('');
  };

  return (
    <div className="contato-container">
      <h1 className="titulo-pagina">Contato</h1>

      <div className="conteudo-contato">
        {/* 2. ADICIONADO UM WRAPPER E O BOTÃO PARA O TEXTO INTRODUTÓRIO */}
        <div className="readable-section">
          <p>{textoIntrodutorio}</p>
          <SpeechButton textToSpeak={textoIntrodutorio} />
        </div>

        <p>
          <strong>Nós somos:</strong> Allan Silva, Cauã Sebastian, Francisco Sobral e José Gilvan
        </p>
        <p>
          <strong>Email:</strong> acheicostura2026@gmail.com
        </p>

        <form onSubmit={handleSubmit} className="form-contato">
          {/* 3. ADICIONADO UM WRAPPER E O BOTÃO PARA O LABEL DO SELECT */}
          <div className="form-label-container">
            <label htmlFor="motivo">{textoMotivo}</label>
            <SpeechButton textToSpeak={textoMotivo} />
          </div>
          <select 
            id="motivo" 
            value={motivo} 
            onChange={(e) => setMotivo(e.target.value)}
          >
            <option value="" disabled>Selecione um motivo...</option>
            {motivosDeContato.map(mot => (
              <option key={mot} value={mot}>{mot}</option>
            ))}
          </select>

          {/* 4. ADICIONADO UM WRAPPER E O BOTÃO PARA O LABEL DO TEXTAREA */}
          <div className="form-label-container">
            <label htmlFor="mensagem">{textoMensagem}</label>
            <SpeechButton textToSpeak={textoMensagem} />
          </div>
          <textarea 
            id="mensagem" 
            rows="8"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          ></textarea>

          <button type="submit" className="btn-enviar">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ContatoPage;