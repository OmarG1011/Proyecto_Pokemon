import pikachu from '../assets/pikachu.gif';
import React, { useState, useEffect } from 'react';
import './Bienvenida.css';

const Bienvenida = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    
    setTimeout(() => {
      setAnimationComplete(true);  // Mostrar Pikachu después de 3 segundos
    }, 3000);
  }, []);

  return (
    <div className="bienvenida-container">
      {/* Animación de la Pokébola */}
      <div className={`pokebola ${animationComplete ? 'opened' : ''}`}></div>

      {/* Animación de Pikachu */}
      <div className={`pikachu ${animationComplete ? 'show' : ''}`}>
      <img src={pikachu} alt="Pikachu" />   
      </div>
    </div>
  );
};

export default Bienvenida;
