import React, { useState, useEffect } from 'react';
import './style.css';

// Dados de exemplo que viriam do seu backend quando o usuário estivesse logado
const dadosDoUsuarioLogado = {
  nome: 'Gabriel Batista',
  email: 'gabriel.b@email.com',
  contato: '(81) 94589-****',
  cidade: 'Caruaru - PE',
  endereco: 'Rua Governador, 123, Centro, Caruaru',
  especialidade: 'Moda Praia, Lingerie, Jeans',
  habilidadeMaquina: 'Máquina Reta, Overloque',
  anosExperiencia: '4 a 6 anos',
  imageUrl: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
};

function MeuPerfilPage() {
  // Estado para guardar os dados do perfil do usuário
  const [perfil, setPerfil] = useState({});

  // Opções para o dropdown de experiência
  const opcoesExperiencia = ["0 a 2 anos", "2 a 4 anos", "4 a 6 anos", "6 a 8 anos", "8 a 10 anos", "Mais de 10 anos"];

  // Simula a busca dos dados do usuário quando a página carrega
  useEffect(() => {
    // Em um app real, aqui você faria uma chamada à sua API
    setPerfil(dadosDoUsuarioLogado);
  }, []);

  // Função para atualizar o estado quando o usuário digita em um campo
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil(dadosAnteriores => ({
      ...dadosAnteriores,
      [name]: value
    }));
  };

  // Função para "salvar" as alterações
  const handleSubmit = (e) => {
    e.preventDefault();
    // Em um app real, aqui você enviaria os dados atualizados para a API
    alert('Perfil salvo com sucesso!');
    console.log('Dados salvos:', perfil);
  };

  return (
    <div className="meu-perfil-container">
      <h1 className="titulo-pagina">Meu Perfil</h1>
      
      <div className="foto-perfil-container">
        <img src={perfil.imageUrl} alt="Foto de Perfil" className="foto-perfil-grande" />
        {/* Futuramente, aqui poderia ter um botão para trocar a foto */}
      </div>

      <form onSubmit={handleSubmit} className="perfil-card">
        <h2>Biografia</h2>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="nome">Seu Nome:</label>
            <input type="text" id="nome" name="nome" value={perfil.nome || ''} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="especialidade">Especialidade:</label>
            <textarea id="especialidade" name="especialidade" value={perfil.especialidade || ''} onChange={handleChange} placeholder="Ex: Moda Praia, Lingerie..."></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="contato">Contato:</label>
            <input type="text" id="contato" name="contato" value={perfil.contato || ''} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="habilidadeMaquina">Habilidade com Máquina:</label>
            <textarea id="habilidadeMaquina" name="habilidadeMaquina" value={perfil.habilidadeMaquina || ''} onChange={handleChange} placeholder="Ex: Máquina Reta, Overloque..."></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="cidade">Sua cidade:</label>
            <input type="text" id="cidade" name="cidade" value={perfil.cidade || ''} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="anosExperiencia">Anos de Experiência:</label>
            <select id="anosExperiencia" name="anosExperiencia" value={perfil.anosExperiencia || ''} onChange={handleChange}>
              <option value="" disabled>Selecione uma opção</option>
              {opcoesExperiencia.map(opcao => <option key={opcao} value={opcao}>{opcao}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="endereco">Endereço:</label>
            <input type="text" id="endereco" name="endereco" value={perfil.endereco || ''} onChange={handleChange} />
          </div>
        </div>
        
        <button type="submit" className="btn-salvar">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default MeuPerfilPage;