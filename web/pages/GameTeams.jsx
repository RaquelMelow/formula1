import { useEffect, useState } from 'react';
import { getUser, createGameTeam, deleteGameTeam, getUserGameTeams, updateGameTeam } from '../services/api.services';

const GameTeams = ({ userId }) => {
    const [teams, setTeams] = useState([]);
    const [newTeam, setNewTeam] = useState({ name: '', pilotsIds: [], constructorIds: [] });
    const [editTeam, setEditTeam] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUser(userId);
                setUser(userData);
            } catch (error) {
                setError(error.message);
            }
        };

        const fetchTeams = async () => {
            try {
                const data = await getUserGameTeams(userId);
                setTeams(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
        fetchTeams();
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTeam((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (editTeam) {
                await updateGameTeam(editTeam._id, newTeam);
            } else {
                await createGameTeam({ ...newTeam, userId });
            }
            const data = await getUserGameTeams(userId);
            setTeams(data);
            setNewTeam({ name: '', pilotsIds: [], constructorIds: [] });
            setEditTeam(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (team) => {
        setEditTeam(team);
        setNewTeam({ name: team.name, pilotsIds: team.pilots, constructorIds: team.constructors });
    };

    const handleDelete = async (teamId) => {
        setLoading(true);
        try {
            await deleteGameTeam(teamId);
            const data = await getUserGameTeams(userId);
            setTeams(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>{user?.name}'s Game Teams</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={newTeam.name}
                    onChange={handleInputChange}
                    placeholder="Team Name"
                />
                <button type="submit">{editTeam ? 'Update Team' : 'Create Team'}</button>
            </form>
            <ul>
                {teams.map((team) => (
                    <li key={team._id}>
                        <h2>{team.name}</h2>
                        <button onClick={() => handleEdit(team)}>Edit</button>
                        <button onClick={() => handleDelete(team._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GameTeams;

