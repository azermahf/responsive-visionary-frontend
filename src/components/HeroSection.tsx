
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="hero-content">
        <motion.div
          className="flex justify-center md:justify-start mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <img 
            src="/lovable-uploads/49f5560c-6642-46ee-9f7a-98f25ed953ea.png" 
            alt="Barber Shop Logo" 
            className="h-28 md:h-32 filter brightness-110 contrast-125 saturate-150"
          />
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-7xl text-white font-serif mb-4 opacity-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A smooth barber experience
        </motion.h1>
        
        <motion.h2
          className="text-4xl md:text-5xl lg:text-7xl text-white font-serif mb-12 opacity-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          in your town
        </motion.h2>
        
        <motion.div
          className="flex items-center justify-center md:justify-start mb-10 opacity-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="h-px w-8 bg-gold mr-4"></div>
          <span className="text-white uppercase tracking-wider font-medium">Since 1995</span>
          <div className="h-px w-8 bg-gold ml-4"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link 
            to="/appointment" 
            className="inline-block py-3 px-8 bg-gold text-white font-medium tracking-wide transition-all duration-300 hover:bg-gold-dark hover:shadow-lg"
          >
            Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
