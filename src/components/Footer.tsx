
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fadeInUp animate-delay-100">
            <div className="mb-6">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/87ab9ab6-0df5-4d6a-88fb-ba2d9e52156f.png" 
                  alt="Wajdi Coiff Logo" 
                  className="h-12 mr-2" 
                />
                <span className="font-serif text-white text-2xl font-bold">Wajdi Coiff</span>
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              Experience premium grooming services tailored to your unique style. Our skilled barbers blend traditional techniques with modern trends.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fadeInUp animate-delay-200">
            <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-400 hover:text-gold transition-colors">Contacts</Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-400 hover:text-gold transition-colors">Appointment</Link>
              </li>
            </ul>
          </div>

          <div className="animate-fadeInUp animate-delay-300">
            <h3 className="text-white text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Haircut</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Beard Trim</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Hot Towel Shave</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Hair Styling</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-gold transition-colors">Hair Coloring</Link>
              </li>
            </ul>
          </div>

          <div className="animate-fadeInUp animate-delay-400">
            <h3 className="text-white text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-gold mt-1 mr-3" size={18} />
                <span className="text-gray-400">123 Barber Street, Your City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-gold mr-3" size={18} />
                <span className="text-gray-400">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-gold mr-3" size={18} />
                <span className="text-gray-400">info@wajdicoiff.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="text-gold mt-1 mr-3" size={18} />
                <div className="text-gray-400">
                  <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
                  <p>Sat-Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Wajdi Coiff. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
