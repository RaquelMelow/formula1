import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage"
import GameTeams from "../pages/GameTeams"
import PilotList from '../components/Pilots/PilotsList';


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gameteams" element={<GameTeams />} />
                <Route path="/pilots" element={<PilotList />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;