import React, { useState } from 'react';
import './style.css';

function StarRating() {
  const [rating, setRating] = useState(0); // Guarda a nota clicada
  const [hover, setHover] = useState(0); // Guarda a nota do mouse-over

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <button
            type="button"
            key={ratingValue}
            className={ratingValue <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}
export default StarRating;