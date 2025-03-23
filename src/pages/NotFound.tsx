
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-dark text-white py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold mb-6 text-gold">404</h1>
          <p className="text-2xl mb-8">Oops! Page not found</p>
          <p className="text-gray-400 max-w-md mx-auto mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="inline-block py-3 px-8 bg-gold text-white font-medium tracking-wide transition-all duration-300 hover:bg-gold-dark hover:shadow-lg"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
