import React from 'react';
import BotonTema from './BotonTema.tsx';

// Componente de nivel 3 que recibe el tema y la función para cambiarlo
// y los pasa al componente final
const Nivel3: React.FC<{
  temaOscuro: boolean;
  cambiarTema: () => void;
}> = ({ temaOscuro, cambiarTema }) => {
  
  // Este componente tampoco usa directamente el tema, solo lo pasa hacia abajo
  console.log('Nivel3 renderizado');
  
  return (
    <div className="p-4 border-2 border-yellow-500 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">Componente Nivel 3</h2>
      <p className="mb-2">Este componente tampoco usa el tema, solo lo pasa hacia abajo.</p>
      
      {/* Pasamos las props al componente final */}
      <BotonTema temaOscuro={temaOscuro} cambiarTema={cambiarTema} />
    </div>
  );
};

export default Nivel3;
