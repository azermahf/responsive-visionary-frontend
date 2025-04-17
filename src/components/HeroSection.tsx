
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';
import { Scissors } from 'lucide-react';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative h-screen bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="hero-content flex flex-col md:flex-row md:items-center md:gap-8">
        <motion.div
          className="w-full md:w-1/3 flex justify-center md:justify-start mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <img 
            src="/lovable-uploads/9fb47422-55ac-413b-a4e4-592a81b760f3.png" 
            alt="Wajdi Coiff Barber Shop Logo" 
            className={`${isMobile ? 'h-40' : 'h-[450px]'} filter invert brightness-200 contrast-125`}
          />
        </motion.div>
        
        <div className="w-full md:w-2/3">
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
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          >
            <Link 
              to="/appointment" 
              className="inline-block py-3 px-8 bg-gold text-white font-medium tracking-wide transition-all duration-300 hover:bg-gold-dark hover:shadow-lg text-center"
            >
              Book Appointment
            </Link>
            
            <Link 
              to="/barber-login" 
              className="inline-block py-3 px-8 bg-transparent border border-gold text-white font-medium tracking-wide transition-all duration-300 hover:bg-gold/10 hover:shadow-lg flex items-center justify-center"
            >
              <Scissors size={18} className="mr-2" />
              Barber Login
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
