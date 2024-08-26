import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-red-600 w-full z-50 shadow-lg h-16">
      <div className="container mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-white text-2xl font-bold">
          F1 Fantasy
        </div>
        <div className="hidden sm:flex space-x-8">
          <a href="/" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
            My Team
          </a>
          <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">
            Leaderboard
          </a>
        </div>
        <div className="flex items-center">
          <button className="bg-white text-red-600 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
