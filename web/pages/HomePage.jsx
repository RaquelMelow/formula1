import FeaturedRaces from "../components/FeaturedRaces"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const HomePage = () => {
    return (
        <>
        <Navbar/>
        <main>
            <Hero/>
            <FeaturedRaces/>
        </main>
        <Footer/>
        </>
    )
}

export default HomePage;