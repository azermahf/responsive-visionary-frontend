
import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Logo Section */}
        <motion.section 
          className="py-16 bg-dark-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4 text-center">
            <motion.div
              className="flex flex-col items-center justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img 
                src="/lovable-uploads/87ab9ab6-0df5-4d6a-88fb-ba2d9e52156f.png" 
                alt="Logo" 
                className="h-32 mb-6" 
              />
              <h2 className="text-white font-serif text-4xl mb-4">Welcome</h2>
              <div className="h-1 w-24 bg-gold mb-6"></div>
              <p className="text-gray-300 max-w-2xl mb-8">
                Experience premium grooming services tailored to your unique style. 
                Our skilled barbers blend traditional techniques with modern trends 
                to create the perfect look for you.
              </p>
              <Link 
                to="/appointment" 
                className="py-3 px-8 bg-gold text-white font-medium tracking-wide transition-all duration-300 hover:bg-gold-dark hover:shadow-lg"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Barber Logo Section */}
        <motion.section
          className="py-20 bg-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="/lovable-uploads/49f5560c-6642-46ee-9f7a-98f25ed953ea.png" 
                alt="Barber Shop Logo" 
                className="w-full max-w-xl mx-auto mb-10" 
              />
              <div className="h-1 w-24 bg-gold mb-8"></div>
              <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
                Our expert barbers are masters of their craft, providing exceptional 
                services that leave you looking and feeling your best.
              </p>
              <Link 
                to="/appointment" 
                className="py-4 px-10 bg-gold text-white font-medium tracking-wide transition-all duration-300 hover:bg-gold-dark hover:shadow-lg text-lg"
              >
                Book Your Appointment Now
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
