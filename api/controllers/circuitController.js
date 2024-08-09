// controllers/circuitController.js
import Circuit from '../models/circuitModel.js';

export const createCircuit = async (req, res) => {
    try {
        const { name, location, country, length, laps } = req.body;
        const circuit = new Circuit({ name, location, country, length, laps });
        await circuit.save();
        res.status(201).json(circuit);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

export const getAllCircuits = async (req, res) => {
    try {
        const circuits = await Circuit.find();
        res.status(200).json(circuits);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getCircuitById = async (req, res) => {
    try {
        const circuit = await Circuit.findById(req.params.id);
        if (circuit) {
            res.status(200).json(circuit);
        } else {
            res.status(404).json({ error: 'Circuito no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateCircuitById = async (req, res) => {
    try {
        const { name, location, country, length, laps } = req.body;
        const circuit = await Circuit.findByIdAndUpdate(
            req.params.id,
            { name, location, country, length, laps },
            { new: true, runValidators: true }
        );
        if (circuit) {
            res.status(200).json(circuit);
        } else {
            res.status(404).json({ error: 'Circuito no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteCircuitById = async (req, res) => {
    try {
        const circuit = await Circuit.findByIdAndDelete(req.params.id);
        if (circuit) {
            res.status(200).json({ message: 'Circuito eliminado' });
        } else {
            res.status(404).json({ error: 'Circuito no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};