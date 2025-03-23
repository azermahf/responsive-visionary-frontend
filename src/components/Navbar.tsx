
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'navbar-glass py-3' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-gold text-2xl font-bold">Wajdi Coiff</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/about" className="nav-link">About us</Link>
          <Link to="/pages" className="nav-link">Pages</Link>
          <Link to="/contacts" className="nav-link">Contacts</Link>
          <Link to="/appointment" className="nav-link">Appointment</Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-screen bg-dark py-4' : 'max-h-0'
      }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="nav-link active" 
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="nav-link" 
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className="nav-link" 
            onClick={() => setIsOpen(false)}
          >
            About us
          </Link>
          <Link 
            to="/pages" 
            className="nav-link" 
            onClick={() => setIsOpen(false)}
          >
            Pages
          </Link>
          <Link 
            to="/contacts" 
            className="nav-link" 
            onClick={() => setIsOpen(false)}
          >
            Contacts
          </Link>
          <Link 
            to="/appointment" 
            className="button-gold w-full text-center mt-2 py-2 px-4 bg-gold text-white rounded transition-all hover:bg-gold-dark" 
            onClick={() => setIsOpen(false)}
          >
            Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
