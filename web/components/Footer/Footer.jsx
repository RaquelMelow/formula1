const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h5 className="font-bold mb-4">OUR PARTNERS</h5>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 mb-10">
                    <img src="/path-to-logo1.png" alt="Logo 1" className="h-8 mx-auto" />
                    <img src="/path-to-logo2.png" alt="Logo 2" className="h-8 mx-auto" />
                    <img src="/path-to-logo3.png" alt="Logo 3" className="h-8 mx-auto" />
                    <img src="/path-to-logo4.png" alt="Logo 4" className="h-8 mx-auto" />
                    <img src="/path-to-logo5.png" alt="Logo 5" className="h-8 mx-auto" />
                    <img src="/path-to-logo6.png" alt="Logo 6" className="h-8 mx-auto" />
                    <img src="/path-to-logo7.png" alt="Logo 7" className="h-8 mx-auto" />
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 mb-10 text-sm">
                    <div>
                        <h5 className="font-bold mb-4">Latest News</h5>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">What is F1?</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Video</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Drivers</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Teams</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Schedule</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-4">Results</h5>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">2024 Season</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Driver Standings</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Constructor Standings</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">F1 Awards</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-4">Gaming</h5>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Esports</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Fantasy</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">F1 23</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">F1 Manager 2023</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">F1 Play</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-4">Live Timing</h5>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Live Timing</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">F1 TV</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-4">Tickets</h5>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">F1 Experiences</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Store</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Paddock Club</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">F1 TV</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-4">More</h5>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contacts</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Cookies Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
                    <p>&copy; 2024 Formula One World Championship Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
