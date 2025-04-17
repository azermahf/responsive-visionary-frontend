
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Scissors, Phone, Mail, Calendar as CalendarIcon, Clock, User, PlusCircle, DollarSign, TrendingUp } from 'lucide-react';
import AddCoworkerDialog from './AddCoworkerDialog';

// Define weekdays array for schedule display
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const MOCK_COWORKERS = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Senior Barber",
    specialty: "Classic Cuts, Beard Styling",
    phone: "+1 (555) 123-4567",
    email: "jane.doe@example.com",
    monthlyIncome: 4200,
    lastMonthIncome: 3800,
    topClients: [
      { name: "John Smith", visits: 8, spent: 320 },
      { name: "Emma Davis", visits: 6, spent: 240 }
    ],
    availability: {
      Monday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      Tuesday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      Wednesday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      Thursday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      Friday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      Saturday: ["10:00", "11:00", "12:00", "14:00"],
      Sunday: []
    }
  },
  {
    id: 2,
    name: "Mark Johnson",
    role: "Master Barber",
    specialty: "Fades, Modern Styles",
    phone: "+1 (555) 987-6543",
    email: "mark.johnson@example.com",
    availability: {
      Monday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      Tuesday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      Wednesday: [],
      Thursday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      Friday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      Saturday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      Sunday: []
    }
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Junior Barber",
    specialty: "Basic Cuts, Shaves",
    phone: "+1 (555) 456-7890",
    email: "sarah.williams@example.com",
    availability: {
      Monday: ["14:00", "15:00", "16:00", "17:00", "18:00"],
      Tuesday: ["14:00", "15:00", "16:00", "17:00", "18:00"],
      Wednesday: ["14:00", "15:00", "16:00", "17:00", "18:00"],
      Thursday: ["14:00", "15:00", "16:00", "17:00", "18:00"],
      Friday: ["14:00", "15:00", "16:00", "17:00", "18:00"],
      Saturday: ["10:00", "11:00", "12:00", "13:00", "14:00"],
      Sunday: []
    }
  }
];

const CoworkersPanel = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [timeFrame, setTimeFrame] = useState('monthly');
  const [coworkers, setCoworkers] = useState(MOCK_COWORKERS);
  
  const handleAddCoworker = (newCoworker: any) => {
    setCoworkers([...coworkers, newCoworker]);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-serif text-white mb-2">Coworker Management</h2>
          <p className="text-gray-400">Manage your team and track performance</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Select
            value={timeFrame}
            onValueChange={setTimeFrame}
          >
            <SelectTrigger className="w-[180px] bg-dark border-gold/30">
              <SelectValue placeholder="Time frame" />
            </SelectTrigger>
            <SelectContent className="bg-dark-light border-gold/30">
              <SelectItem value="daily">Today</SelectItem>
              <SelectItem value="weekly">This Week</SelectItem>
              <SelectItem value="monthly">This Month</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gold hover:bg-gold/90 text-white">
                <PlusCircle className="w-4 h-4 mr-2" />
                Add Coworker
              </Button>
            </DialogTrigger>
            <AddCoworkerDialog onClose={() => {}} onAdd={handleAddCoworker} />
          </Dialog>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        {coworkers.map(coworker => (
          <Card key={coworker.id} className="bg-dark-light border-gold/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-dark flex items-center justify-center overflow-hidden border border-gold/30">
                      <User size={32} className="text-gold" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-serif text-white">{coworker.name}</h3>
                      <p className="text-gold">{coworker.role}</p>
                      <p className="text-gray-400 text-sm mt-1">{coworker.specialty}</p>
                      
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div className="flex items-center gap-2 text-gray-300">
                          <Phone size={16} className="text-gold/70" />
                          {coworker.phone}
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Mail size={16} className="text-gold/70" />
                          {coworker.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-64 p-4 bg-dark rounded-lg border border-gold/20">
                  <h4 className="text-white font-serif mb-2">Monthly Income</h4>
                  <div className="text-2xl font-bold text-gold mb-2">
                    ${coworker.monthlyIncome}
                  </div>
                  <div className="flex items-center text-sm">
                    <TrendingUp size={16} className="text-green-400 mr-1" />
                    <span className="text-green-400">
                      +{((coworker.monthlyIncome - coworker.lastMonthIncome) / coworker.lastMonthIncome * 100).toFixed(1)}%
                    </span>
                    <span className="text-gray-400 ml-2">vs last month</span>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="text-white text-sm mb-2">Top Clients</h5>
                    <div className="space-y-2">
                      {coworker.topClients.map((client, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-gray-400">{client.name}</span>
                          <span className="text-gold">${client.spent}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gold/10">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-gold/30 text-white hover:bg-gold/10"
                    >
                      <CalendarIcon size={16} className="mr-2 text-gold" />
                      View Schedule
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-dark-light border-gold/20 text-white max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-serif text-gold">{coworker.name}'s Schedule</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <h4 className="text-lg mb-3">Availability for {selectedDay}</h4>
                      {coworker.availability[selectedDay].length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                          {coworker.availability[selectedDay].map(time => (
                            <div 
                              key={time} 
                              className="bg-dark px-3 py-2 rounded border border-gold/20 flex items-center justify-center"
                            >
                              <Clock size={16} className="text-gold mr-2" />
                              <span>{time}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-400">Not available on this day</p>
                      )}
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg mb-3">Weekly Overview</h4>
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {weekdays.map(day => (
                          <div key={day} className="space-y-2">
                            <div className={`rounded px-2 py-1 ${
                              day === selectedDay ? 'bg-gold text-white' : 'bg-dark text-white/70'
                            }`}>
                              {day.slice(0, 3)}
                            </div>
                            <div className={`text-sm ${
                              coworker.availability[day].length > 0 
                                ? 'text-green-400' 
                                : 'text-red-400'
                            }`}>
                              {coworker.availability[day].length > 0 
                                ? `${coworker.availability[day].length} slots` 
                                : 'Off'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default CoworkersPanel;
