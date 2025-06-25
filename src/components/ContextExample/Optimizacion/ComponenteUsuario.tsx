import React from 'react';
import { useUsuario } from './ContextosOptimizados';

// Este componente solo se re-renderizará cuando cambie el contexto del usuario
const ComponenteUsuario: React.FC = () => {
  // Usamos nuestro hook personalizado para acceder al contexto del usuario
  const { nombre, estaAutenticado, iniciarSesion, cerrarSesion } = useUsuario();
  
  console.log('ComponenteUsuario renderizado');
  
  return (
    <div className="p-4 border-2 border-purple-500 rounded-lg mb-4 bg-purple-50">
      <h2 className="text-xl font-bold mb-2">Componente Usuario</h2>
      <p className="mb-4">Este componente solo usa el contexto del usuario.</p>
      
      {estaAutenticado ? (
        <div>
          <p className="mb-2">Bienvenido, <strong>{nombre}</strong>!</p>
          <button 
            onClick={cerrarSesion}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Cerrar Sesión
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-2">Por favor, inicia sesión</p>
          <button 
            onClick={iniciarSesion}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Iniciar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default ComponenteUsuario;
