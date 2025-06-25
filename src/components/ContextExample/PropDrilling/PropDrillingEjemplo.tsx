import React, { useState } from 'react';
import Nivel1 from './Nivel1';

// Componente principal que demuestra el problema del prop drilling
const PropDrillingEjemplo: React.FC = () => {
  // Estado que queremos pasar a componentes profundos en la jerarquía
  const [temaOscuro, setTemaOscuro] = useState<boolean>(false);

  // Función para cambiar el tema
  const cambiarTema = () => {
    setTemaOscuro(prevTema => !prevTema);
  };

  return (
    <div className="max-w-3xl mx-auto my-8">
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-2xl font-bold mb-4">Ejemplo de Prop Drilling</h1>
        
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-sm">
            <strong>Problema:</strong> Necesitamos pasar el estado "temaOscuro" y la función "cambiarTema" 
            desde este componente hasta el componente BotonTema, que está varios niveles más abajo.
            Para hacerlo, tenemos que pasar estas props a través de componentes intermedios (Nivel1, Nivel2, Nivel3)
            que no necesitan estos datos para su funcionamiento.
          </p>
        </div>
        
        {/* Pasamos las props al primer nivel */}
        <Nivel1 temaOscuro={temaOscuro} cambiarTema={cambiarTema} />
      </div>
    </div>
  );
};

export default PropDrillingEjemplo;
