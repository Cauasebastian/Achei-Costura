import React from 'react';
import Card from '../Card';
import './style.css';

// GARANTE QUE ELE RECEBE 'tipo' E REPASSA PARA O CARD
function GridDeEmpresas({ empresas, tipo }) {
  if (empresas.length === 0) {
    return <p>Nenhum item encontrado.</p>;
  }

  return (
    <div className="grid-container">
      {empresas.map(item => (
        <Card key={item.id} item={item} tipo={tipo} />
      ))}
    </div>
  );
}

export default GridDeEmpresas;