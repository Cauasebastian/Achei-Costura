import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; 

// GARANTE QUE ELE RECEBE 'tipo' E USA PARA CRIAR O LINK
function Card({ item, tipo = 'empresas' }) {
 console.log("3. Card recebeu o tipo:", tipo, "para o item:", item.nome);
 return (
  
    <div className="card-empresa">
      <img src={item.imageUrl || 'https://via.placeholder.com/300x200'} alt={item.nome} />
      <div className="card-info">
        <h3>{item.nome}</h3>
        <p>{item.categoria}</p>
        <span>{item.contato}</span>
        
        <Link to={`/${tipo}/${item.id}`}>
          <button>Saiba mais</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;