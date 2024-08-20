import mongoose from 'mongoose';
import GameTeam from '../models/gameTeamModel.js';
import User from '../models/userModel.js';
import Pilot from '../models/pilotsModel.js';
import Team from '../models/teamModel.js';

export const createGameTeam = async (req, res) => {
    try {
        const { userId, name, pilotsIds, constructorIds } = req.body;


        if (!userId || !name || !Array.isArray(pilotsIds) || !Array.isArray(constructorIds)) {
            return res.status(400).json({ error: 'Faltan datos necesarios en la solicitud' });
        }

        if (pilotsIds.length > 5) {
            return res.status(400).json({ error: 'No se pueden seleccionar más de 5 pilotos' });
        }

        if (constructorIds.length > 2) {
            return res.status(400).json({ error: 'No se pueden seleccionar más de 2 equipos de constructores' });
        }

        const userObjectId = new mongoose.Types.ObjectId(userId);
        const user = await User.findById(userObjectId);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        const pilotsObjectIds = pilotsIds.map(id => new mongoose.Types.ObjectId(id));
        const pilots = await Pilot.find({ _id: { $in: pilotsObjectIds } });
        if (pilots.length !== pilotsIds.length) {
            return res.status(400).json({ error: 'Uno o más pilotos no son válidos' });
        }

        const constructorsObjectIds = constructorIds.map(id => new mongoose.Types.ObjectId(id));
        const constructors = await Team.find({ _id: { $in: constructorsObjectIds } });
        if (constructors.length !== constructorIds.length) {
            return res.status(400).json({ error: 'Uno o más equipos no son válidos' });
        }

        const gameTeam = new GameTeam({
            user: userObjectId,
            name,
            pilots: pilotsObjectIds,
            constructors: constructorsObjectIds
        });

        await gameTeam.save();

        res.status(201).json(gameTeam);
    } catch (error) {
        console.error('Error en createGameTeam:', error); 
        res.status(400).json({ error: error.message });
    }
};



export const getUserGameTeams = async (req, res) => {
    try {
        const { userId } = req.params;
        const gameTeams = await GameTeam.find({ user: userId })
            .populate('pilots')
            .populate('constructors');

        if (!gameTeams) {
            return res.status(404).json({ error: 'Equipos de juego no encontrados' });
        }

        res.status(200).json(gameTeams);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateGameTeam = async (req, res) => {
    try {
        const { gameTeamId, name, pilotIds, constructorIds } = req.body;

        if (pilotIds.length > 5) {
            return res.status(400).json({ error: 'No se pueden seleccionar más de 5 pilotos' });
        }

        if (constructorIds.length > 2) {
            return res.status(400).json({ error: 'No se pueden seleccionar más de 2 equipos de constructores' });
        }

        const gameTeam = await GameTeam.findById(gameTeamId);
        if (!gameTeam) {
            return res.status(404).json({ error: 'Equipo de juego no encontrado' });
        }

        gameTeam.name = name || gameTeam.name;
        gameTeam.pilots = pilotIds || gameTeam.pilots;
        gameTeam.constructors = constructorIds || gameTeam.constructors;

        await gameTeam.save();

        const populatedGameTeam = await GameTeam.findById(gameTeamId)
            .populate('pilots')
            .populate('constructors');

        res.status(200).json(populatedGameTeam);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteGameTeam = async (req, res) => {
    try {
        const { gameTeamId } = req.params;
        const gameTeam = await GameTeam.findByIdAndDelete(gameTeamId);

        if (!gameTeam) {
            return res.status(404).json({ error: 'Equipo de juego no encontrado' });
        }

        res.status(200).json({ message: 'Equipo de juego eliminado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
