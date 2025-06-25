import React from 'react';
import { AppProviders } from './ContextosOptimizados';
import ComponenteUsuario from './ComponenteUsuario.tsx';
import ComponenteContador from './ComponenteContador.tsx';
import ComponenteConfiguracion from './ComponenteConfiguracion.tsx';

// Componente principal que demuestra la optimización con múltiples contextos
const OptimizacionEjemplo: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto my-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4">Optimización con Múltiples Contextos</h1>
        
        <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6">
          <p className="text-sm">
            <strong>Optimización:</strong> En lugar de tener un solo contexto para toda la aplicación,
            dividimos el estado en múltiples contextos más pequeños y específicos. De esta manera,
            cuando un valor cambia en un contexto, solo los componentes que consumen ese contexto
            específico se re-renderizarán.
          </p>
        </div>
        
        {/* Envolvemos los componentes con nuestros providers */}
        <AppProviders>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ComponenteUsuario />
            </div>
            <div>
              <ComponenteConfiguracion />
              <ComponenteContador />
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-bold mb-2">Observaciones:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Abre la consola del navegador para ver qué componentes se renderizan cuando:
                <ul className="list-circle pl-5 mt-1">
                  <li>Incrementas o decrementas el contador</li>
                  <li>Cambias el idioma</li>
                  <li>Inicias o cierras sesión</li>
                </ul>
              </li>
              <li>
                Notarás que solo el componente que usa un contexto específico se re-renderiza
                cuando ese contexto cambia, mientras que los demás componentes permanecen sin cambios.
              </li>
              <li>
                Los hooks personalizados (useUsuario, useContador, useConfiguracion) hacen que
                el código sea más limpio y fácil de mantener.
              </li>
            </ul>
          </div>
        </AppProviders>
      </div>
    </div>
  );
};

export default OptimizacionEjemplo;
