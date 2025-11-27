import React, { useState } from 'react';
import './style.css';

// 1. Recebe 'rating' (valor atual), 'onRatingChange' (função para atualizar) e 'allowHalf' (nova prop)
function StarRating({ rating, onRatingChange, allowHalf = false }) {
  const [hover, setHover] = useState(0); // Estado para o hover
  const totalStars = 5;

  // Função para calcular o valor da estrela com base na posição do rato
  const calculateRating = (e, index) => {
    if (!allowHalf) return index + 1; // Se não permitir meia estrela, só inteiras

    const star = e.currentTarget;
    const { left, width } = star.getBoundingClientRect();
    const x = e.clientX - left; // Posição do rato dentro da estrela
    
    // Se estiver na primeira metade, é meia estrela, se não, é estrela inteira
    return (x < width / 2) ? index + 0.5 : index + 1;
  };

  const handleClick = (ratingValue) => {
    // Se clicar na mesma estrela, e for 0.5, pode querer desmarcar
    if (ratingValue === rating && allowHalf) {
      onRatingChange(0); // Limpa a avaliação
    } else {
      onRatingChange(ratingValue);
    }
  };

  const handleMouseMove = (e, index) => {
    if (!allowHalf) {
      setHover(index + 1);
    } else {
      setHover(calculateRating(e, index));
    }
  };

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1; // Valor inteiro da estrela
        
        // Determina se a estrela deve estar "ligada" (cheia ou meia)
        let isOn = false;
        let isHalf = false;

        if (hover !== 0) { // Se estiver a passar o rato
          isOn = starValue <= hover;
          isHalf = allowHalf && (hover > index) && (hover < starValue); // Se o hover for, por ex, 2.5
        } else { // Se não estiver a passar o rato (usa a avaliação atual)
          isOn = starValue <= rating;
          isHalf = allowHalf && (rating > index) && (rating < starValue);
        }

        return (
          <button
            type="button"
            key={index}
            // Chama o handler de clique
            onClick={() => handleClick(allowHalf ? calculateRating(null, index) : index + 1)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => setHover(0)}
            className="star-button" // Adicionamos uma classe para facilitar o CSS
          >
            {/* O ícone da estrela */}
            <span className={`star ${isOn ? 'on' : 'off'} ${isHalf ? 'half' : ''}`}>
              &#9733; {/* Unicode para estrela */}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;