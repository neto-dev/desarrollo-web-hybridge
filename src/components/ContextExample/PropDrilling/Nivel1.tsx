import React from 'react';
import Nivel2 from './Nivel2.tsx';

// Componente de nivel 1 que recibe el tema y la función para cambiarlo
// y los pasa al siguiente nivel
const Nivel1: React.FC<{
  temaOscuro: boolean;
  cambiarTema: () => void;
}> = ({ temaOscuro, cambiarTema }) => {
  
  // Este componente no usa directamente el tema, solo lo pasa hacia abajo
  console.log('Nivel1 renderizado');
  
  return (
    <div className="p-4 border-2 border-blue-500 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">Componente Nivel 1</h2>
      <p className="mb-2">Este componente no usa el tema, solo lo pasa hacia abajo.</p>
      
      {/* Pasamos las props al siguiente nivel */}
      <Nivel2 temaOscuro={temaOscuro} cambiarTema={cambiarTema} />
    </div>
  );
};

export default Nivel1;
