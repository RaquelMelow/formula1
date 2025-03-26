import { useState, useEffect } from 'react';
import { getAllPilots } from '../../services/api.services';
import './PilotsList.css';

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
                setLoading(false);
            }
        };

        fetchPilots();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Pilots List</h1>
            <div className="pilots-container">
                {pilots.map((pilot) => (
                    <div key={pilot._id} className="pilot-card">
                        <div className="pilot-image-placeholder">
                            {/* Aquí puedes agregar la imagen en el futuro */}
                        </div>
                        <h2 className="pilot-name">{pilot.name}</h2>
                        <div className="pilot-info-container">
                            <p className="pilot-info">Team: {pilot.team.name}</p>
                            <p className="pilot-info">Country: {pilot.country}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PilotsList;









