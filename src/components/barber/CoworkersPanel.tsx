
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from '@/components/ui/calendar';
import { Scissors, Phone, Mail, Calendar as CalendarIcon, Clock, User } from 'lucide-react';

// Mock coworker data
const MOCK_COWORKERS = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Senior Barber",
    specialty: "Classic Cuts, Beard Styling",
    phone: "+1 (555) 123-4567",
    email: "jane.doe@example.com",
    availability: {
      Monday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      Tuesday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      Wednesday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      Thursday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      Friday: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"],
      Saturday: ["10:00", "11:00", "12:00", "14:00"],
      Sunday: []
    },
    avatar: "/lovable-uploads/87ab9ab6-0df5-4d6a-88fb-ba2d9e52156f.png"
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
    },
    avatar: "/lovable-uploads/87ab9ab6-0df5-4d6a-88fb-ba2d9e52156f.png"
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
    },
    avatar: "/lovable-uploads/87ab9ab6-0df5-4d6a-88fb-ba2d9e52156f.png"
  }
];

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const CoworkersPanel = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedDay, setSelectedDay] = useState('Monday');
  
  // Get day name from date
  const getDayName = (date: Date | undefined) => {
    if (!date) return 'Monday';
    return weekdays[date.getDay() === 0 ? 6 : date.getDay() - 1]; // Adjust to make Monday first day
  };
  
  // Update selected day when date changes
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setSelectedDay(getDayName(date));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-serif text-white mb-2">Coworker Schedules</h2>
        <p className="text-gray-400">View your team's availability</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Calendar Section */}
        <Card className="bg-dark border-gold/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif text-white mb-4">Select Date</h3>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              className="bg-dark-light rounded border border-gold/20 p-3"
              classNames={{
                day_selected: "bg-gold text-white hover:bg-gold-dark focus:bg-gold-dark",
                day_today: "bg-gold/20 text-white",
                day: "text-gray-400 hover:bg-gold/20 hover:text-white"
              }}
            />
            <div className="mt-4">
              <p className="text-white">Selected: <span className="text-gold">{selectedDay}</span></p>
              <p className="text-gray-400 text-sm mt-1">
                {selectedDate?.toLocaleDateString()}
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* Coworkers List */}
        <div className="md:col-span-2 space-y-4">
          {MOCK_COWORKERS.map(coworker => (
            <Card key={coworker.id} className="bg-dark-light border-gold/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-dark flex items-center justify-center overflow-hidden border border-gold/30">
                      <User size={32} className="text-gold" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
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
                  
                  <div className="flex-shrink-0 mt-4 md:mt-0">
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
                </div>
                
                {/* Quick Availability for Selected Day */}
                <div className="mt-4 border-t border-gold/10 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Scissors size={16} className="text-gold/70" />
                      <span className="text-white">Availability ({selectedDay}):</span>
                    </div>
                    <span className={`text-sm ${
                      coworker.availability[selectedDay].length > 0 
                        ? 'text-green-400' 
                        : 'text-red-400'
                    }`}>
                      {coworker.availability[selectedDay].length > 0 
                        ? 'Available' 
                        : 'Not Available'}
                    </span>
                  </div>
                  {coworker.availability[selectedDay].length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {coworker.availability[selectedDay].slice(0, 4).map(time => (
                        <div 
                          key={time} 
                          className="bg-dark px-2 py-1 rounded text-sm border border-gold/20 flex items-center"
                        >
                          <Clock size={14} className="text-gold mr-1" />
                          <span>{time}</span>
                        </div>
                      ))}
                      {coworker.availability[selectedDay].length > 4 && (
                        <div className="bg-dark px-2 py-1 rounded text-sm border border-gold/20">
                          +{coworker.availability[selectedDay].length - 4} more
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CoworkersPanel;
