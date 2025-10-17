import React, { useState, useEffect } from 'react';
import { getAllItems } from '../../data/api'; // Usando a função que pega tudo de uma vez
import GridDeItens from '../../components/GridDeItens';
import Filtros from '../../components/Filtros';
import AnuncioCarrossel from '../../components/AnuncioCarrossel';
import './style.css'; 

function HomePage() {
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  
  // Estados de controle para os filtros
  const [activeTab, setActiveTab] = useState('Geral');
  const [selectedCity, setSelectedCity] = useState('');

  // 1. Busca os dados uma vez
  useEffect(() => {
    setAllItems(getAllItems());
  }, []);

  // 2. Filtra a lista sempre que um dos filtros mudar
  useEffect(() => {
    let itemsToFilter = allItems;

    // Filtra por TIPO (Geral, Costureiros, Empresas)
    if (activeTab === 'Empresas') {
      itemsToFilter = allItems.filter(item => item.tipo === 'empresas');
    } else if (activeTab === 'Costureiros') {
      itemsToFilter = allItems.filter(item => item.tipo === 'costureiros');
    }

    // Pega o resultado do filtro anterior e filtra por CIDADE
    if (selectedCity) {
      itemsToFilter = itemsToFilter.filter(item => item.cidade === selectedCity);
    }

    setFilteredItems(itemsToFilter);
    
  }, [activeTab, selectedCity, allItems]); // Roda o filtro se qualquer um destes mudar

  return (
    <div className="home-container">
      {/* O Carrossel continua no topo */}
      <AnuncioCarrossel items={allItems} />

      {/* A HomePage agora renderiza UM SÓ componente de Filtros */}
      <Filtros
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />

      {/* E o grid exibe os itens já filtrados */}
      <GridDeItens itens={filteredItems} />
    </div>
  );
}

export default HomePage;