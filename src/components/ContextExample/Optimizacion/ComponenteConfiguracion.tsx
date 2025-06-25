import React from 'react';
import { useConfiguracion } from './ContextosOptimizados';

// Este componente solo se re-renderizará cuando cambie el contexto de configuración
const ComponenteConfiguracion: React.FC = () => {
  // Usamos nuestro hook personalizado para acceder al contexto de configuración
  const { idioma, cambiarIdioma } = useConfiguracion();
  
  console.log('ComponenteConfiguracion renderizado');
  
  return (
    <div className="p-4 border-2 border-yellow-500 rounded-lg mb-4 bg-yellow-50">
      <h2 className="text-xl font-bold mb-2">Componente Configuración</h2>
      <p className="mb-4">Este componente solo usa el contexto de configuración.</p>
      
      <div>
        <p className="mb-2">Idioma actual: <strong>{idioma === 'es' ? 'Español' : 'Inglés'}</strong></p>
        
        <div className="flex gap-2">
          <button 
            onClick={() => cambiarIdioma('es')}
            className={`px-4 py-2 rounded-md transition-colors ${
              idioma === 'es' 
                ? 'bg-yellow-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Español
          </button>
          
          <button 
            onClick={() => cambiarIdioma('en')}
            className={`px-4 py-2 rounded-md transition-colors ${
              idioma === 'en' 
                ? 'bg-yellow-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Inglés
          </button>
        </div>
      </div>
      
      <p className="mt-4 text-sm text-gray-600">
        Nota: Este componente solo se renderiza cuando cambia el idioma,
        no cuando cambian otros contextos.
      </p>
    </div>
  );
};

export default ComponenteConfiguracion;
