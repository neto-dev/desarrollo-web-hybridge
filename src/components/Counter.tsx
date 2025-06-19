import { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false)
    const [textLoading, setTextLoading] = useState("Mostrar")

    function handlerIsLoading(){
        if (isLoading){
            setTextLoading("Mostrar")
            setIsLoading(false)
        }else {
            setTextLoading("Ocultar")
            setIsLoading(true)
        }
    }

    function increment() {
        setCount(count + 1)
    }

    function decremet() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }

  return (
    <div className="max-w-md mx-auto p-8 my-10 bg-white rounded-lg shadow-sm">
        <div className="">{ isLoading ? 'Se esta mostrando el texto' : ''}</div>
      <button onClick={handlerIsLoading} className="flex items-center justify-center py-3 px-4 bg-blue-500 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
          <span className="text-gray-700">{textLoading}</span>
        </button>
      <div className="mb-8">
        <h1 className="text-2xl font-normal text-gray-800">Contador</h1>
      </div>

      <div className="flex items-center justify-center py-10">
        <span className="text-6xl font-light text-gray-800">{count}</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        <button onClick={decremet} className="flex items-center justify-center py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors cursor-pointer">
          <span className="text-gray-700">Restar</span>
        </button>

        <button onClick={reset} className="flex items-center justify-center py-3 px-4 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors cursor-pointer">
          <span className="text-white">Reiniciar</span>
        </button>

        <button onClick={increment} className="flex items-center justify-center py-3 px-4 bg-orange-500 hover:bg-orange-600 rounded-md transition-colors cursor-pointer">
          <span className="text-white">Sumar</span>
        </button>
      </div>
    </div>
  );
}

