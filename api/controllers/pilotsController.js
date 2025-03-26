import Pilot from '../models/pilotsModel.js';
import Team from '../models/teamModel.js';
import { teams } from '../constants/pilotsConstants.js';


export const createPilots = async (req, res) => {
    try {
        const { pilots } = req.body; // Expecting an array of pilots
        console.log(req.body);

        // Verificar que la lista de pilotos no esté vacía
        if (!Array.isArray(pilots) || pilots.length === 0) {
            return res.status(400).json({ error: 'Se requiere un array de pilotos' });
        }

        // Procesar cada piloto individualmente
        const createdPilots = [];
        for (const pilotData of pilots) {
            const { name, team } = pilotData;

            // Verificar que el equipo esté en la lista de equipos
            if (!teams.includes(team)) {
                return res.status(400).json({ error: 'Equipo no válido: ' + team });
            }

            // Buscar el equipo por nombre para obtener su ObjectId
            const teamExists = await Team.findOne({ name: team });
            if (!teamExists) {
                return res.status(400).json({ error: 'Equipo no encontrado en la base de datos' });
            }

            // Crear el piloto con el ObjectId del equipo
            const pilot = new Pilot({ name, team: teamExists._id });
            await pilot.save();

            // Obtener el piloto con su equipo poblado
            const populatedPilot = await Pilot.findById(pilot._id).populate('team');
            createdPilots.push(populatedPilot);
        }

        // Devolver la lista de pilotos creados
        res.status(201).json(createdPilots);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


export const getAllPilots = async (req, res) => {
    try {
        const pilots = await Pilot.find().populate('team');
        res.status(200).json(pilots);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getPilotById = async (req, res) => {
    try {
        const pilot = await Pilot.findById(req.params.id);
        if (pilot) {
            res.status(200).json(pilot);
        } else {
            res.status(404).json({ error: 'Píloto no encontrado' })
            }
    } catch (error) {
            res.status(400).json({ error: error.message })
    }
};

export const updatePilotById = async (req, res) => {
    try {
        const { name, team, country } = req.body;

        // Check if the team is valid if provided
        if (team) {
            // If team is a string, check if it's a valid ObjectId
            if (!ObjectId.isValid(team)) {
                return res.status(400).json({ error: 'ID de equipo no válido' });
            }

            const teamExists = await Team.findById(team);
            if (!teamExists) {
                return res.status(400).json({ error: 'Equipo no encontrado' });
            }
        }

        // Verify that the country is valid if provided
        if (country && !checkCountry(country)) {
            return res.status(400).json({ error: 'País no válido' });
        }

        // Update the pilot
        const pilot = await Pilot.findByIdAndUpdate(
            req.params.id,
            { name, team, country },
            { new: true }
        );

        if (pilot) {
            res.status(200).json(pilot);
        } else {
            res.status(404).json({ error: 'Píloto no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deletePilotById = async (req, res) => {
    try {
        const pilot = await Pilot.findByIdAndDelete(req.params.id);
        if (pilot) {
            res.status(200).json({ message: 'Píloto eliminado' })
        } else {
            res.status(400).json({ error: 'Píloto no encontrado'})
        }
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
};
