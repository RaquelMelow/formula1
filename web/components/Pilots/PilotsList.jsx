import { useState, useEffect } from 'react';
import { getAllPilots } from '../../services/api.services';

const PilotsList = () => {
    const [pilots, setPilots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPilots = async () => {
            try {
                const data = await getAllPilots();
                setPilots(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false); // Asegúrate de que loading se actualiza
            }
        };

        fetchPilots();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Pilots List</h1>
            <ul>
                {pilots.map((pilot) => (
                    <li key={pilot._id}>
                        <h2>{pilot.name}</h2>
                        <p>Team: {pilot.team.name}</p>
                        <p>Country: {pilot.country}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PilotsList;

