import GameCardHome from "../components/FantasyHome/GameCardHome";
import FeaturedRaces from "../components/Races/FeaturedRaces";


const HomePage = () => {
    return (
        <>
        <main className="pt-16">
            <GameCardHome />
            <FeaturedRaces />
        </main>
        </>
    )
}

export default HomePage;