import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import AppRoutes from '../routes/AppRoutes';

function App() {
    return (
        <div className="App">
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1 pt-16">
                    <div className="container mx-auto px-4 py-8">
                        <h1>Bienvenido a F1 Fantasy</h1>
                        <p>Contenido principal de la página...</p>
                        <AppRoutes />
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default App;
