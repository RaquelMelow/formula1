import Pilot from '../models/pilotsModel.js';
import Team from '../models/teamModel.js';
import { countries} from '../constants/pilotsConstants.js';

const checkCountry = (country) => {
    return countries.includes(country);
}

export const createPilot = async (req, res) => {
    try {
        const { name, team, country } = req.body;

        const teamId = team; 

        const teamExists = await Team.findById(teamId);
        if (!teamExists) {
            return res.status(400).json({ error: 'Equipo no válido' });
        }

        if (!checkCountry(country)) {
            return res.status(400).json({ error: 'País no válido' });
        }

        const pilot = new Pilot({ name, team: teamId, country });
        await pilot.save();

        const populatedPilot = await Pilot.findById(pilot._id).populate('team');

        res.status(201).json(populatedPilot);
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

        if (team) {
            const teamExits = await Team.findById
            if (!teamExits) {
            return res.status(400).json({ error: 'Equipo no encontrado' })
            }
        }

        if (country && !checkCountry(country)) {
            return res.status(400).json({ error: 'País no válido'})
        }

        const pilot = await Pilot.findByIdAndUpdate(
            req.params.id,
            { name, team, country },
            { new: true }
            );
        if (pilot) {
            res.status(200).json(pilot);
        } else {
            res.status(404).json({ error: 'Píloto no encontrado' })
        } 
    } catch (error) {
        res.status(400).json({ error: error.message })
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
