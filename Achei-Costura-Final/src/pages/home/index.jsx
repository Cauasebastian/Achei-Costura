import React, { useState, useEffect } from 'react';
import { getCostureiros } from '../../data/api';
import GridDeItens from '../../components/GridDeItens';
import Filtros from '../../components/Filtros';
import AnuncioCarrossel from '../../components/AnuncioCarrossel';
import './style.css'; 

function HomePage() {
  const [allCostureiros, setAllCostureiros] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [sortBy, setSortBy] = useState(''); // Estado para o dropdown de ordenação

  useEffect(() => {
    const costureiros = getCostureiros();
    setAllCostureiros(costureiros);
    setFilteredItems(costureiros); 
  }, []);

  useEffect(() => {
    let itemsToFilter = allCostureiros;

    if (selectedCity) {
      itemsToFilter = allCostureiros.filter(item => item.cidade === selectedCity);
    }

    let itemsToSort = [...itemsToFilter];

    if (sortBy === 'MAIS_AVALIADOS') {
      itemsToSort.sort((a, b) => b.avaliacao - a.avaliacao);
    } else if (sortBy === 'MENOS_AVALIADOS') {
      itemsToSort.sort((a, b) => a.avaliacao - b.avaliacao);
    }

    setFilteredItems(itemsToSort);
    
  }, [selectedCity, sortBy, allCostureiros]);

  return (
    <div className="home-container">
      <AnuncioCarrossel items={allCostureiros} />

      <Filtros
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        sortBy={sortBy} 
        setSortBy={setSortBy}
      />

      <GridDeItens itens={filteredItems} />
    </div>
  );
}

export default HomePage;