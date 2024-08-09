import { useEffect, useState } from 'react';
import { getRaces } from '../services/api.services.js'; 

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
        <section className='featured-races'>
            <h2>Upcoming Races</h2>
            <ul>
                {races.map((race) => (
                    <li key={race._id}>
                        {race.name} - {new Date(race.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default FeaturedRaces;

