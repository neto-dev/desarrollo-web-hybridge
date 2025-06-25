import React from 'react';
import BotonTemaContext from './BotonTemaContext.tsx';

// Componente de nivel 3 que NO necesita recibir el tema como prop
const Nivel3Context: React.FC = () => {
  // Este componente no necesita el tema ni la función para cambiarlo
  console.log('Nivel3Context renderizado');
  
  return (
    <div className="p-4 border-2 border-yellow-500 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">Componente Nivel 3 (Con Context)</h2>
      <p className="mb-2">Este componente no necesita recibir el tema como prop.</p>
      
      {/* Ya no pasamos props al componente final */}
      <BotonTemaContext />
    </div>
  );
};

export default Nivel3Context;
