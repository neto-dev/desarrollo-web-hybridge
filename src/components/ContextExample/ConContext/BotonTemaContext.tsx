import React from 'react';
import { useTema } from '../TemaContext';

// Componente final que usa el contexto directamente
const BotonTemaContext: React.FC = () => {
  // Usamos nuestro hook personalizado para acceder al contexto
  const { temaOscuro, cambiarTema } = useTema();
  
  console.log('BotonTemaContext renderizado');
  
  // Aplicamos clases condicionales según el tema
  const claseBoton = temaOscuro 
    ? "bg-yellow-300 text-gray-900 hover:bg-yellow-400" 
    : "bg-blue-600 text-white hover:bg-blue-700";
  
  return (
    <div className={`p-4 border-2 border-red-500 rounded-lg ${temaOscuro ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-xl font-bold mb-2">Componente BotonTema (Con Context)</h2>
      <p className="mb-4">Este componente accede directamente al contexto usando el hook useTema.</p>
      
      <p className="mb-2">
        Tema actual: <strong>{temaOscuro ? 'Oscuro' : 'Claro'}</strong>
      </p>
      
      <button 
        onClick={cambiarTema}
        className={`${claseBoton} px-4 py-2 rounded-md font-medium transition-colors duration-200`}
      >
        Cambiar a tema {temaOscuro ? 'claro' : 'oscuro'}
      </button>
    </div>
  );
};

export default BotonTemaContext;
