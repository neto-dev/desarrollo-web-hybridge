import React, { createContext, useState, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';

// En lugar de tener un solo contexto para todo, creamos contextos separados
// para diferentes partes de nuestro estado

// Contexto para datos del usuario
type UsuarioContextType = {
  nombre: string | null;
  estaAutenticado: boolean;
  cambiarNombre: (nombre: string | null) => void;
  iniciarSesion: () => void;
  cerrarSesion: () => void;
};

const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

// Contexto para el contador (que cambia frecuentemente)
type ContadorContextType = {
  contador: number;
  incrementar: () => void;
  decrementar: () => void;
};

const ContadorContext = createContext<ContadorContextType | undefined>(undefined);

// Contexto para la configuración (que cambia con poca frecuencia)
type ConfiguracionContextType = {
  idioma: string;
  cambiarIdioma: (idioma: string) => void;
};

const ConfiguracionContext = createContext<ConfiguracionContextType | undefined>(undefined);

// Props para nuestros providers
type ProviderProps = {
  children: ReactNode;
};

// Provider para el usuario
export const UsuarioProvider: React.FC<ProviderProps> = ({ children }) => {
  const [nombre, setNombre] = useState<string | null>(null);
  const [estaAutenticado, setEstaAutenticado] = useState<boolean>(false);

  // Funciones para manipular el estado
  const cambiarNombre = (nuevoNombre: string | null) => {
    setNombre(nuevoNombre);
  };

  const iniciarSesion = () => {
    setEstaAutenticado(true);
    setNombre('Estudiante');
  };

  const cerrarSesion = () => {
    setEstaAutenticado(false);
    setNombre(null);
  };

  // Usamos useMemo para evitar recrear el objeto en cada render
  const value = useMemo(() => ({
    nombre,
    estaAutenticado,
    cambiarNombre,
    iniciarSesion,
    cerrarSesion
  }), [nombre, estaAutenticado]);

  return (
    <UsuarioContext.Provider value={value}>
      {children}
    </UsuarioContext.Provider>
  );
};

// Provider para el contador
export const ContadorProvider: React.FC<ProviderProps> = ({ children }) => {
  const [contador, setContador] = useState<number>(0);

  // Funciones para manipular el estado
  const incrementar = () => {
    setContador(prevContador => prevContador + 1);
  };

  const decrementar = () => {
    setContador(prevContador => prevContador - 1);
  };

  // Usamos useMemo para evitar recrear el objeto en cada render
  const value = useMemo(() => ({
    contador,
    incrementar,
    decrementar
  }), [contador]);

  return (
    <ContadorContext.Provider value={value}>
      {children}
    </ContadorContext.Provider>
  );
};

// Provider para la configuración
export const ConfiguracionProvider: React.FC<ProviderProps> = ({ children }) => {
  const [idioma, setIdioma] = useState<string>('es');

  // Función para cambiar el idioma
  const cambiarIdioma = (nuevoIdioma: string) => {
    setIdioma(nuevoIdioma);
  };

  // Usamos useMemo para evitar recrear el objeto en cada render
  const value = useMemo(() => ({
    idioma,
    cambiarIdioma
  }), [idioma]);

  return (
    <ConfiguracionContext.Provider value={value}>
      {children}
    </ConfiguracionContext.Provider>
  );
};

// Hooks personalizados para consumir los contextos
export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (context === undefined) {
    throw new Error('useUsuario debe usarse dentro de un UsuarioProvider');
  }
  return context;
};

export const useContador = () => {
  const context = useContext(ContadorContext);
  if (context === undefined) {
    throw new Error('useContador debe usarse dentro de un ContadorProvider');
  }
  return context;
};

export const useConfiguracion = () => {
  const context = useContext(ConfiguracionContext);
  if (context === undefined) {
    throw new Error('useConfiguracion debe usarse dentro de un ConfiguracionProvider');
  }
  return context;
};

// Componente que combina todos los providers
export const AppProviders: React.FC<ProviderProps> = ({ children }) => {
  return (
    <UsuarioProvider>
      <ConfiguracionProvider>
        <ContadorProvider>
          {children}
        </ContadorProvider>
      </ConfiguracionProvider>
    </UsuarioProvider>
  );
};
