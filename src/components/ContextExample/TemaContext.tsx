import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

// Definimos el tipo para nuestro contexto
// Esto ayuda a TypeScript a entender qué datos y funciones tendrá nuestro contexto
type TemaContextType = {
  temaOscuro: boolean;  // Un booleano que indica si el tema es oscuro o claro
  cambiarTema: () => void;  // Una función para cambiar entre temas
};

// Creamos el contexto con un valor inicial
// El valor por defecto solo se usa cuando un componente consume el contexto
// pero no está dentro de un Provider
export const TemaContext = createContext<TemaContextType>({
  temaOscuro: false,
  cambiarTema: () => {}, // Función vacía como valor inicial
});

// Props que acepta nuestro componente Provider
type TemaProviderProps = {
  children: ReactNode;  // Los componentes hijos que tendrán acceso al contexto
};

// Componente Provider que proporciona el contexto a sus hijos
export const TemaProvider: React.FC<TemaProviderProps> = ({ children }) => {
  // Estado local para controlar si el tema es oscuro o claro
  const [temaOscuro, setTemaOscuro] = useState<boolean>(false);

  // Función para cambiar entre tema oscuro y claro
  const cambiarTema = () => {
    setTemaOscuro(prevTema => !prevTema);
  };

  // El valor que proporcionaremos a los componentes consumidores
  const value = {
    temaOscuro,
    cambiarTema,
  };

  // El Provider envuelve a los children y les proporciona acceso al contexto
  return (
    <TemaContext.Provider value={value}>
      {children}
    </TemaContext.Provider>
  );
};

// Hook personalizado para facilitar el uso del contexto
export const useTema = () => {
  // Usamos useContext para acceder al valor actual del contexto
  const context = React.useContext(TemaContext);
  
  // Verificamos que el hook se esté usando dentro de un Provider
  if (context === undefined) {
    throw new Error('useTema debe usarse dentro de un TemaProvider');
  }
  
  return context;
};
