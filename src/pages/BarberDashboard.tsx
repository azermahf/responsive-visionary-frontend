
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AppointmentsPanel from '../components/barber/AppointmentsPanel';
import ClientsPanel from '../components/barber/ClientsPanel';
import AvailabilityPanel from '../components/barber/AvailabilityPanel';
import CoworkersPanel from '../components/barber/CoworkersPanel';

const BarberDashboard = () => {
  const navigate = useNavigate();
  const [barberName, setBarberName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  
  useEffect(() => {
    // Check if user is logged in
    const storedName = localStorage.getItem('barberName');
    const storedRole = localStorage.getItem('barberRole');
    
    if (!storedName) {
      navigate('/barber-login');
      return;
    }
    
    setBarberName(storedName);
    setIsAdmin(storedRole === 'admin');
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('barberId');
    localStorage.removeItem('barberName');
    localStorage.removeItem('barberRole');
    navigate('/barber-login');
  };

  if (!barberName) {
    return <div className="min-h-screen bg-dark flex items-center justify-center">
      <p className="text-white">Loading...</p>
    </div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <Navbar />
      
      <div className="flex-grow py-20 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-light rounded-lg border border-gold/20 overflow-hidden"
          >
            {/* Dashboard Header */}
            <div className="p-6 md:p-8 border-b border-gold/20 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xl font-bold">
                  {barberName.charAt(0)}
                </div>
                <div className="ml-4">
                  <h1 className="text-xl md:text-2xl font-serif text-white">Welcome, {barberName}</h1>
                  <p className="text-gold/80">{isAdmin ? 'Admin Dashboard' : 'Barber Dashboard'}</p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="border-gold/40 text-gold hover:bg-gold/10"
              >
                Logout
              </Button>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-6 md:p-8">
              <Tabs defaultValue="appointments" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-dark mb-8">
                  <TabsTrigger 
                    value="appointments" 
                    className="data-[state=active]:bg-gold data-[state=active]:text-white"
                  >
                    Appointments
                  </TabsTrigger>
                  <TabsTrigger 
                    value="clients" 
                    className="data-[state=active]:bg-gold data-[state=active]:text-white"
                  >
                    Statistics
                  </TabsTrigger>
                  <TabsTrigger 
                    value="availability" 
                    className="data-[state=active]:bg-gold data-[state=active]:text-white"
                  >
                    Availability
                  </TabsTrigger>
                  {isAdmin && (
                    <TabsTrigger 
                      value="coworkers" 
                      className="data-[state=active]:bg-gold data-[state=active]:text-white"
                    >
                      Coworkers
                    </TabsTrigger>
                  )}
                </TabsList>
                
                <TabsContent value="appointments">
                  <AppointmentsPanel />
                </TabsContent>
                
                <TabsContent value="clients">
                  <ClientsPanel isAdmin={isAdmin} />
                </TabsContent>
                
                <TabsContent value="availability">
                  <AvailabilityPanel />
                </TabsContent>
                
                {isAdmin && (
                  <TabsContent value="coworkers">
                    <CoworkersPanel />
                  </TabsContent>
                )}
              </Tabs>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BarberDashboard;
