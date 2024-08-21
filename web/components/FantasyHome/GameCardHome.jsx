import { Link } from 'react-router-dom';
import './GameCardHome.css'; // Importa el archivo CSS

const GameCardHome = () => {
  return (
    <div className="game-card-home">
      {/* Contenedor del fondo */}
      <div className="game-card-home-background">
        <div className="game-card-home-background-overlay" />
        <div className="game-card-home-image" />
      </div>

      {/* Contenido */}
      <div className="game-card-home-content">
        <div className="col-span-1">
          <img
            className="game-card-home-img"
            src="https://res.cloudinary.com/dznumjlzc/image/upload/v1724158975/formula1/5_f7sh4a.jpg"
            alt="Juego"
          />
        </div>

        <div className="col-span-2 flex flex-col justify-between">
          <div>
            <h2 className="game-card-home-title">F1 Fantasy Game</h2>
            <p className="game-card-home-description">
              Crea tu equipo de ensueño y compite contra otros jugadores.
            </p>
          </div>

          <div className="mt-auto">
            <Link
              to="/gameteams"
              className="game-card-home-link"
            >
              Jugar Ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCardHome;


