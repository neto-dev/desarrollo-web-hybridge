import React from 'react';
import Nivel2Context from './Nivel2Context.tsx';

// Componente de nivel 1 que NO necesita recibir el tema como prop
const Nivel1Context: React.FC = () => {
  // Este componente no necesita el tema ni la función para cambiarlo
  console.log('Nivel1Context renderizado');
  
  return (
    <div className="p-4 border-2 border-blue-500 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-2">Componente Nivel 1 (Con Context)</h2>
      <p className="mb-2">Este componente no necesita recibir el tema como prop.</p>
      
      {/* Ya no pasamos props al siguiente nivel */}
      <Nivel2Context />
    </div>
  );
};

export default Nivel1Context;
