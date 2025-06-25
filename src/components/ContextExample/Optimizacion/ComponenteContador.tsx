import React from 'react';
import { useContador } from './ContextosOptimizados';

// Este componente solo se re-renderizará cuando cambie el contexto del contador
const ComponenteContador: React.FC = () => {
  // Usamos nuestro hook personalizado para acceder al contexto del contador
  const { contador, incrementar, decrementar } = useContador();
  
  console.log('ComponenteContador renderizado');
  
  return (
    <div className="p-4 border-2 border-blue-500 rounded-lg mb-4 bg-blue-50">
      <h2 className="text-xl font-bold mb-2">Componente Contador</h2>
      <p className="mb-4">Este componente solo usa el contexto del contador.</p>
      
      <div className="flex items-center justify-center gap-4">
        <button 
          onClick={decrementar}
          className="bg-red-500 text-white w-10 h-10 rounded-full hover:bg-red-600 transition-colors text-xl font-bold"
        >
          -
        </button>
        
        <span className="text-2xl font-bold">{contador}</span>
        
        <button 
          onClick={incrementar}
          className="bg-green-500 text-white w-10 h-10 rounded-full hover:bg-green-600 transition-colors text-xl font-bold"
        >
          +
        </button>
      </div>
      
      <p className="mt-4 text-sm text-gray-600">
        Nota: Este componente se renderiza frecuentemente cuando cambia el contador,
        pero no afecta a los otros componentes.
      </p>
    </div>
  );
};

export default ComponenteContador;
