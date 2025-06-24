import { useState, useEffect } from 'react';

export function Counter2() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("Hola")
  }, []);

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}