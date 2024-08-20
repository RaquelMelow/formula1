import { Link } from 'react-router-dom';

const GameCardHome = () => {
  return (
    <div className="relative max-w-screen-md mx-auto rounded-lg overflow-hidden transform transition-transform duration-300">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dznumjlzc/image/upload/v1724072310/formula1/4-removebg-preview_o2m4mp.png)',
          height: '100%',
          zIndex: -1, // Coloca la imagen de fondo detrás del contenido
        }}
      ></div>
      
      {/* Contenedor del contenido */}
      <div className="relative bg-white rounded-lg shadow-md p-4">
        <div className="grid grid-cols-3 gap-4">
          {/* Imagen del juego */}
          <div className="col-span-1">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src="https://via.placeholder.com/300" // Reemplaza con la URL de la imagen del juego
              alt="Juego"
            />
          </div>

          {/* Información y botón */}
          <div className="col-span-2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">F1 Fantasy Game</h2>
              <p className="text-gray-700 mb-4">
                Crea tu equipo de ensueño y compite contra otros jugadores.
              </p>
              <p>¡Juega ahora!</p>
            </div>

            <div className="mt-auto">
              <Link
                to="/gameteams"
                className="inline-block px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
              >
                Jugar Ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCardHome;
