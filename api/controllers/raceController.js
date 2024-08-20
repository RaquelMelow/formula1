import Race from "../models/raceModel.js";
import GameTeam from '../models/gameTeamModel.js';
import Pilot from '../models/pilotsModel.js';

export const createRace = async (req, res) => {
    try {

        const { name, date, circuit } = req.body;

        const race = new Race({ name, date, circuit, results: [], status: 'draft' });
        await race.save();

        res.status(201).json(race);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const getAllRaces = async (req, res) => {
    try {
        const races = await Race.find();
        res.status(200).json(races);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getRacesId = async (req, res) => {
    try {
        const races = await Race.find();
        res.status(200).json(races);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const publishRace = async (req, res) => {
    try {
        const { raceId } = req.params;

        const race = await Race.findById(raceId);
        if (!race) {
            return res.status(404).json({ error: "Carrera no encontrada" });
        }

        if (race.status === 'completed') {
            return res.status(400).json({ error: "La carrera ya está completada" });
        }

        race.status = 'published';
        await race.save();

        res.status(200).json(race);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const addRaceResults = async (req, res) => {
    try {
        const { raceId } = req.params;
        const { results } = req.body;

        if (!results || results.length === 0) {
            return res.status(400).json({ error: "Faltan datos necesarios en la solicitud" });
        }

        const race = await Race.findById(raceId);
        if (!race) {
            return res.status(404).json({ error: "Carrera no encontrada" });
        }

        if (race.status === 'draft') {
            return res.status(400).json({ error: "La carrera debe estar publicada antes de añadir resultados" });
        }

        race.results = results;
        race.status = 'completed'; 
        await race.save();

        res.status(200).json(race);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



export const calculatePoints = async (req, res) => {
    try {
        const { raceId } = req.params;

        const race = await Race.findById(raceId).populate('results.pilot');
        if (!race) {
            return res.status(404).json({ error: "Carrera no encontrada" });
        }

        const pointsSystem = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

        for (const result of race.results) {
            const pilot = await Pilot.findById(result.pilot._id);
            const pilotPoints = pointsSystem[result.position - 1] || 0;

            for (const gameTeam of await GameTeam.find({ pilots: pilot._id })) {
                gameTeam.points = (gameTeam.points || 0) + pilotPoints;
                await gameTeam.save();
            }
        }

        res.status(200).json({ message: "Puntos calculados correctamente" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

