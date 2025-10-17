import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

// 1. Removemos a prop 'tipo' daqui, pois vamos descobrir a partir do 'item'.
function Card({ item }) {
  
  // 2. Lógica inteligente: Verificamos se o item tem a propriedade 'tipo'.
  // Se tiver (ex: 'costureiros'), usamos ela. Se não, o padrão será 'empresas'.
  const tipoDoLink = item.tipo || 'empresas';

  // O console.log continua aqui para ajudar a verificar
  console.log("Card está criando um link para:", `/${tipoDoLink}/${item.id}`, "para o item:", item.nome);

  return (
    <div className="card-empresa">
      <img src={item.imageUrl || 'https://via.placeholder.com/300x200'} alt={item.nome} />
      <div className="card-info">
        <h3>{item.nome}</h3>
        <p>{item.categoria}</p>
        <span>{item.contato}</span>
        
        {/* 3. Usamos a nossa nova variável para montar o link. */}
        <Link to={`/${tipoDoLink}/${item.id}`}>
          <button>Saiba mais</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;