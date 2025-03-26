import { useEffect, useState } from 'react';
import { getRaces } from '../../services/api.services.js';
import './FeaturedRaces.css';

const FeaturedRaces = () => {
    const [races, setRaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRaces = async () => {
            try {
                const data = await getRaces();
                setRaces(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRaces();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="featured-races-section">
            <div className="featured-races-container">
                <h2 className="featured-races-title">
                    <div className="featured-races-header">
                        <span className="italic">Próxima carrera</span>
                        <img
                            src="https://res.cloudinary.com/dznumjlzc/image/upload/v1724072313/formula1/2-removebg-preview_chlaex.png"
                            alt="Próxima carrera"
                            loading="lazy"
                            className="featured-races-img"
                        />
                    </div>
                </h2>

                <div className="featured-races-grid">
                    {races.map((race, index) => (
                        <div key={race._id} className="featured-race-card">
                            <h3 className="featured-race-round">{`ROUND ${index + 1}`}</h3>
                            <p className="featured-race-name">{race.name}</p>
                            <p className="featured-race-date">
                                {new Date(race.date).toLocaleDateString()}
                            </p>
                            <a href="#" className="featured-race-link">
                                Read more
                                <svg
                                    className="featured-race-icon"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedRaces;
