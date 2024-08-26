import DoGameTeams from "../components/DoGameTeam/DoGameTeam";
import PilotList from "../components/Pilots/PilotsList";

const GameTeams = () => {
    return (
        <>
        <main className="pt-16">
            <PilotList />
            <DoGameTeams />
        </main>
        </>
    )
}

export default GameTeams;