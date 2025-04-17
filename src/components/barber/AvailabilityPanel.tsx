
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { CheckCheck, Clock, Plus, Trash2 } from 'lucide-react';

// Mock availability data (timeSlots for each day)
const initialTimeSlots = {
  'Monday': ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
  'Tuesday': ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
  'Wednesday': ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
  'Thursday': ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
  'Friday': ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'],
  'Saturday': ['10:00', '11:00', '12:00', '14:00', '15:00'],
  'Sunday': []
};

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const AvailabilityPanel = () => {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [availableTimeSlots, setAvailableTimeSlots] = useState(initialTimeSlots);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([]);
  
  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
    setSelectedTimeSlots(availableTimeSlots[day]);
  };
  
  const handleTimeSlotToggle = (timeSlot: string) => {
    setSelectedTimeSlots(prev => {
      if (prev.includes(timeSlot)) {
        return prev.filter(slot => slot !== timeSlot);
      } else {
        return [...prev, timeSlot].sort();
      }
    });
  };
  
  const saveAvailability = () => {
    setAvailableTimeSlots(prev => ({
      ...prev,
      [selectedDay]: selectedTimeSlots
    }));
    
    toast({
      title: "Availability updated",
      description: `Your availability for ${selectedDay} has been updated.`,
      duration: 3000
    });
  };
  
  const addSpecialDay = () => {
    if (!selectedDate) return;
    
    const formattedDate = selectedDate.toISOString().split('T')[0];
    
    toast({
      title: "Special day added",
      description: `Your availability for ${formattedDate} has been set to custom hours.`,
      duration: 3000
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-serif text-white mb-2">Manage Availability</h2>
        <p className="text-gray-400">Set your working hours and special days</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Schedule */}
        <Card className="bg-dark border-gold/20 lg:col-span-2">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif text-white mb-4">Weekly Schedule</h3>
            
            <div className="grid grid-cols-7 gap-2 mb-6">
              {weekdays.map(day => (
                <Button
                  key={day}
                  variant="outline"
                  className={`${
                    selectedDay === day 
                      ? 'bg-gold text-white border-gold' 
                      : 'bg-dark text-white/70 border-gold/30 hover:bg-gold/20'
                  }`}
                  onClick={() => handleDaySelect(day)}
                >
                  {day.slice(0, 3)}
                </Button>
              ))}
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg text-white mb-3">Available Time Slots for {selectedDay}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'].map(time => (
                  <div key={time} className="flex items-center space-x-2">
                    <Checkbox
                      id={`time-${time}`}
                      checked={selectedTimeSlots.includes(time)}
                      onCheckedChange={() => handleTimeSlotToggle(time)}
                      className="border-gold/50 data-[state=checked]:bg-gold data-[state=checked]:border-gold"
                    />
                    <Label
                      htmlFor={`time-${time}`}
                      className="text-white cursor-pointer"
                    >
                      {time}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <Button
              onClick={saveAvailability}
              className="bg-gold hover:bg-gold-dark text-white"
            >
              <CheckCheck size={18} className="mr-2" />
              Save Availability
            </Button>
          </CardContent>
        </Card>
        
        {/* Special Days */}
        <Card className="bg-dark border-gold/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif text-white mb-4">Special Days</h3>
            <div className="mb-4">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="bg-dark-light rounded border border-gold/20 p-3"
                classNames={{
                  day_selected: "bg-gold text-white hover:bg-gold-dark focus:bg-gold-dark",
                  day_today: "bg-gold/20 text-white",
                  day: "text-gray-400 hover:bg-gold/20 hover:text-white"
                }}
              />
            </div>
            
            <div className="flex flex-col space-y-2 mb-4">
              <p className="text-white text-sm">Selected: {selectedDate?.toLocaleDateString()}</p>
              <div className="flex items-center space-x-2">
                <Clock size={18} className="text-gold" />
                <span className="text-white text-sm">Set custom hours or time off</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start border-gold/30 text-white hover:bg-gold/20"
                onClick={addSpecialDay}
              >
                <Plus size={18} className="mr-2 text-gold" />
                Add Special Hours
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start border-red-500/30 text-red-400 hover:bg-red-500/10"
              >
                <Trash2 size={18} className="mr-2" />
                Mark as Day Off
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default AvailabilityPanel;
