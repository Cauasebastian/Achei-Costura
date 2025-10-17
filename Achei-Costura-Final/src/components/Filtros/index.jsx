import React from 'react';
import './style.css'; 

// Este componente agora recebe o estado de ambos os filtros
function Filtros({ activeTab, setActiveTab, selectedCity, setSelectedCity }) {
  const cidades = ["Todas as Cidades", "Caruaru - PE", "Toritama - PE", "Santa Cruz do Capibaribe - PE"];

  return (
    <div className="filtros-container">
      {/* Botões de Tab à esquerda */}
      <div className="tabs-container">
        <button 
          className={activeTab === 'Geral' ? 'active' : ''}
          onClick={() => setActiveTab('Geral')}
        >
          Geral
        </button>
        <button 
          className={activeTab === 'Costureiros' ? 'active' : ''}
          onClick={() => setActiveTab('Costureiros')}
        >
          Costureiros
        </button>
        <button 
          className={activeTab === 'Empresas' ? 'active' : ''}
          onClick={() => setActiveTab('Empresas')}
        >
          Empresas
        </button>
      </div>

      {/* Seletor de Localização à direita */}
      <div className="location-select-container">
        <select 
          className="location-select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          {cidades.map(cidade => (
            <option key={cidade} value={cidade === "Todas as Cidades" ? "" : cidade}>
              {cidade}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filtros;