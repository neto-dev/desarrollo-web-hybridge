import React, { useState } from 'react';
import PropDrillingEjemplo from './PropDrilling/PropDrillingEjemplo';
import ContextEjemplo from './ConContext/ContextEjemplo';
import OptimizacionEjemplo from './Optimizacion/OptimizacionEjemplo';

// Componente principal que muestra los ejemplos
const ContextTutorial: React.FC = () => {
  // Estado para controlar qué ejemplo mostrar
  // 0: Prop Drilling, 1: Context API, 2: Optimización
  const [ejemploActual, setEjemploActual] = useState<number>(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4">8. Contexto en React</h1>
      </header>

      {/* Botones para cambiar entre ejemplos */}
      <div className="flex justify-center mb-8 gap-4 flex-wrap">
        <button
          onClick={() => setEjemploActual(0)}
          className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
            ejemploActual === 0
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          1. Prop Drilling
        </button>
        <button
          onClick={() => setEjemploActual(1)}
          className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
            ejemploActual === 1
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          2. Context API
        </button>
        <button
          onClick={() => setEjemploActual(2)}
          className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
            ejemploActual === 2
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          3. Optimización y Hooks
        </button>
      </div>

      {/* Explicación del problema o solución */}
      <div className="bg-gray-100 p-6 rounded-lg mb-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">
          {ejemploActual === 0 && '¿Qué es Prop Drilling?'}
          {ejemploActual === 1 && '¿Qué es Context API?'}
          {ejemploActual === 2 && 'Optimización y Hooks Personalizados'}
        </h2>
        
        {ejemploActual === 0 && (
          <div>
            <p className="mb-4">
              <strong>Prop Drilling</strong> es el proceso de pasar datos a través de múltiples 
              componentes que no necesitan esos datos, solo para hacerlos llegar a componentes 
              más profundos en la jerarquía.
            </p>
            <p className="mb-4">
              Problemas del prop drilling:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Código más verboso y difícil de mantener</li>
              <li>Componentes intermedios "contaminados" con props que no usan</li>
              <li>Cambios en la estructura de datos requieren modificar múltiples componentes</li>
            </ul>
            <p>
              En el ejemplo a continuación, los componentes <code>Nivel1</code>, <code>Nivel2</code> y <code>Nivel3</code> 
              solo pasan el tema hacia abajo sin usarlo realmente.
            </p>
          </div>
        )}
        
        {ejemploActual === 1 && (
          <div>
            <p className="mb-4">
              <strong>Context API</strong> es una característica de React que permite compartir datos 
              entre componentes sin tener que pasar props manualmente en cada nivel.
            </p>
            <p className="mb-4">
              Funciona como un sistema de "radiodifusión" donde:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Un <strong>Provider</strong> hace disponible los datos para todos sus componentes hijos</li>
              <li>Los componentes pueden <strong>consumir</strong> estos datos directamente usando el hook <code>useContext</code></li>
              <li>Los componentes intermedios no necesitan saber nada sobre estos datos</li>
            </ul>
            <p>
              En el ejemplo a continuación, el componente <code>BotonTema</code> accede directamente al tema 
              sin que los componentes intermedios tengan que pasarlo como props.
            </p>
          </div>
        )}
        
        {ejemploActual === 2 && (
          <div>
            <p className="mb-4">
              <strong>Optimización de Context API</strong> es crucial para aplicaciones más grandes. 
              Cada vez que el valor de un contexto cambia, todos los componentes que lo consumen se re-renderizan.
            </p>
            <p className="mb-4">
              Técnicas de optimización:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Dividir en múltiples contextos:</strong> En lugar de un contexto monolítico, crear contextos específicos para diferentes dominios</li>
              <li><strong>Usar useMemo:</strong> Para evitar recrear objetos en cada render y causar re-renders innecesarios</li>
              <li><strong>Hooks personalizados:</strong> Encapsulan la lógica de consumo del contexto y proporcionan una interfaz más limpia</li>
            </ul>
            <p>
              En el ejemplo a continuación, tenemos tres contextos separados (Usuario, Contador y Configuración) 
              y cada componente solo se re-renderiza cuando cambia el contexto que utiliza.
            </p>
          </div>
        )}
      </div>

      {/* Mostrar el ejemplo seleccionado */}
      {ejemploActual === 0 && <PropDrillingEjemplo />}
      {ejemploActual === 1 && <ContextEjemplo />}
      {ejemploActual === 2 && <OptimizacionEjemplo />}
    </div>
  );
};

export default ContextTutorial;
