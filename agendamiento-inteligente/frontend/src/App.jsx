import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🚀 Agendamiento Inteligente
          </h1>
          <p className="text-gray-600">
            Sistema de agendamiento inteligente que optimiza la gestión de citas y recursos
          </p>
        </header>

        <main className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Bienvenido al Sistema
            </h2>
            <p className="text-gray-600 mb-6">
              Esta es la interfaz principal del sistema de agendamiento inteligente.
              Aquí podrás gestionar citas, recursos y optimizar horarios de manera eficiente.
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Contador: {count}
              </button>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">📅 Agendamiento</h3>
                <p className="text-blue-600 text-sm">
                  Gestiona citas y horarios de manera inteligente
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">🎯 Optimización</h3>
                <p className="text-green-600 text-sm">
                  Algoritmos IA para optimizar recursos
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">📊 Analytics</h3>
                <p className="text-purple-600 text-sm">
                  Reportes y análisis en tiempo real
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-center mt-8 text-gray-500">
          <p>&copy; 2024 Agendamiento Inteligente. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App; 