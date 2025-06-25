import React from 'react';
import Nivel3Context from './Nivel3Context.tsx';

// Componente de nivel 2 que NO necesita recibir el tema como prop
const Nivel2Context: React.FC = () => {
  // Este componente no necesita el tema ni la función para cambiarlo
  console.log('Nivel2Context renderizado');
  
  return (
    <div className="p-4 border-2 border-green-500 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">Componente Nivel 2 (Con Context)</h2>
      <p className="mb-2">Este componente no necesita recibir el tema como prop.</p>
      
      {/* Ya no pasamos props al siguiente nivel */}
      <Nivel3Context />
    </div>
  );
};

export default Nivel2Context;
