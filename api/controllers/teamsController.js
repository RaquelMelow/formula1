import Team from '../models/teamModel.js';

export const createTeam = async (req, res) => {
    try {
        const { name } = req.body;
        const team = new Team({ name });
        await team.save();
        res.status(201).json(team);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getTeamById = async (req, res) => {
    try {
        const team = await Team.findById(req.params.id);
        if (team) {
            res.status(200).json(team);
        } else {
            res.status(404).json({ error: 'Equipo no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateTeamById = async (req, res) => {
    try {
        const { name } = req.body;
        const team = await Team.findByIdAndUpdate(
            req.params.id,
            { name },
            { new: true, runValidators: true }
        );
        if (team) {
            res.status(200).json(team);
        } else {
            res.status(404).json({ error: 'Equipo no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteTeamById = async (req, res) => {
    try {
        const team = await Team.findByIdAndDelete(req.params.id);
        if (team) {
            res.status(200).json({ message: 'Equipo eliminado' });
        } else {
            res.status(404).json({ error: 'Equipo no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
