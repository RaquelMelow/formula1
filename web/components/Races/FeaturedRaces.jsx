import { useEffect, useState } from 'react';
import { getRaces } from '../../services/api.services.js';

const FeaturedRaces = () => {
    const [races, setRaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRaces = async () => {
            try {
                const data = await getRaces();
                setRaces(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRaces();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="bg-gray-900 text-white py-10 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-8">
                    <div className="flex items-center">
                        <span className='italic'>Próxima carrera</span>
                        <img
                            src="https://fantasy.formula1.com/static-assets/build/images/patterns/tracker-arrow-filler.svg?v=1.17"
                            alt="Próxima carrera"
                            loading="lazy"
                            className="ml-2"
                        />
                    </div>
                </h2>


                <div className="flex flex-wrap justify-center gap-6">
                    {races.map((race, index) => (
                        <div
                            key={race._id}
                            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        >
                            <h3 className="text-lg font-bold text-red-600 mb-2">
                                {`ROUND ${index + 1}`}
                            </h3>
                            <p className="text-black text-xl mb-4">{race.name}</p>
                            <p className="mb-3 text-black text-lg">
                                {new Date(race.date).toLocaleDateString()}
                            </p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-[1em] h-[1em] ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedRaces;

