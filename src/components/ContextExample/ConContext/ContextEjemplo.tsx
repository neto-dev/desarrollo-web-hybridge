import React from 'react';
import { TemaProvider } from '../TemaContext';
import Nivel1Context from './Nivel1Context';

// Componente principal que demuestra la solución con Context API
const ContextEjemplo: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto my-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4">Ejemplo con Context API</h1>
        
        <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-6">
          <p className="text-sm">
            <strong>Solución:</strong> Usando Context API, ya no necesitamos pasar props a través de 
            componentes intermedios. El estado "temaOscuro" y la función "cambiarTema" 
            están disponibles directamente para cualquier componente que los necesite,
            sin importar qué tan profundo esté en la jerarquía.
          </p>
        </div>
        
        {/* Envolvemos toda la jerarquía con el Provider */}
        <TemaProvider>
          <Nivel1Context />
        </TemaProvider>
      </div>
    </div>
  );
};

export default ContextEjemplo;
