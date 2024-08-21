import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage"
import GameTeams from "../pages/GameTeams"


const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gameteams" element={<GameTeams />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;