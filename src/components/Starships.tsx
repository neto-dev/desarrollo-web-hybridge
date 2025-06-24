import { useState, useEffect } from "react";

export function Starships(){
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<any[]>([]);
    const hola = "Hola";

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://swapi.py4e.com/api/starships/");
                const data = await response.json();
                setData(data.results);
            } catch (error) {
                console.error(error);
                setError("Error al cargar los datos");
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [])
    // Si loading es true, se muestra un spinner
    if (loading) {
        return (
        <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
            <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
            </div>
        </div>
        );
    }

    if (error !== null){
        return(
            <>
                <div className="bg-red-300 text-white">Error encontrado</div>
            </>
        )
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
            <h1 className="text-3xl font-bold mb-8 text-yellow-400 text-center">
                Naves de Star Wars
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((ship) => (
                    <div
                        key={ship.model}
                        className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-yellow-400 transition-colors"
                    >
                        <h2 className="text-xl font-bold mb-2 text-yellow-400">
                        {ship.name}
                        </h2>
                        <div className="space-y-2 text-sm">
                        <p>
                            <span className="font-semibold text-gray-400">Modelo:</span>{" "}
                            {ship.model}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-400">Fabricante:</span>{" "}
                            {ship.manufacturer}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-400">Clase:</span>{" "}
                            {ship.starship_class}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-400">Velocidad:</span>{" "}
                            {ship.max_atmosphering_speed}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-400">
                            Tripulación:
                            </span>{" "}
                            {ship.crew}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-400">Pasajeros:</span>{" "}
                            {ship.passengers}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-400">
                            Capacidad de carga:
                            </span>{" "}
                            {ship.cargo_capacity}
                        </p>
                        <p>
                            <span className="font-semibold text-gray-400">
                            Clasificación del hiperimpulsor:
                            </span>{" "}
                            {ship.hyperdrive_rating}
                        </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}