const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>F1 Fantasy</h1>
            </div>

            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/pilots">Pilots</a></li>
                <li><a href="/teams">Teams</a></li>
                <li><a href="/races">Races</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
