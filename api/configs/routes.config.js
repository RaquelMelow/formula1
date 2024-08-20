import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import { createPilot, getAllPilots, getPilotById, updatePilotById, deletePilotById } from '../controllers/pilotsController.js';
import { createTeam, getAllTeams, getTeamById, updateTeamById, deleteTeamById } from '../controllers/teamsController.js';
import { createCircuit, getAllCircuits, getCircuitById, updateCircuitById, deleteCircuitById } from '../controllers/circuitController.js';
import { createGameTeam, getUserGameTeams, updateGameTeam, deleteGameTeam } from '../controllers/gameTeamController.js';
import { createRace, addRaceResults, calculatePoints, publishRace, getAllRaces, getRacesId } from '../controllers/raceController.js';


const router = express.Router();

//usuarios
router.get('/users', getUsers);          
router.post('/users', createUser);       
router.put('/users/:id', updateUser);    
router.delete('/users/:id', deleteUser); 

//pilots
router.post('/pilots', createPilot); 
router.get('/pilots', getAllPilots);
router.get('/pilots/:id', getPilotById); 
router.put('/pilots/:id', updatePilotById);
router.delete('/pilots/:id', deletePilotById); 

//teams
router.post('/teams', createTeam);
router.get('/teams', getAllTeams);
router.get('/teams/:id', getTeamById);
router.put('/teams/:id', updateTeamById);
router.delete('/teams/:id', deleteTeamById);

//circuits
router.post('/circuits', createCircuit);
router.get('/circuits', getAllCircuits);
router.get('/circuits/:id', getCircuitById);
router.put('/circuits/:id', updateCircuitById);
router.delete('/circuits/:id', deleteCircuitById);

//gameTeam
router.post('/gameteams', createGameTeam);
router.get('/users/:userId/gameteams', getUserGameTeams);
router.put('/gameteams/:gameTeamId', updateGameTeam);
router.delete('/gameteams/:gameTeamId', deleteGameTeam);


//races
router.post('/races', createRace);
router.get('/races', getAllRaces);
router.get('/races/:raceId', getRacesId);
router.put('/races/:raceId/publish', publishRace);
router.put('/races/:raceId/results', addRaceResults);
router.post('/races/:raceId/calculatePoints', calculatePoints);


export default router;
