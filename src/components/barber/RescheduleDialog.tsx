
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface Appointment {
  id: string;
  clientName?: string;
  name?: string;
  service: string;
  barber: string;
  date: string;
  time: string;
  status: string;
  email?: string;
  phone?: string;
  notes?: string;
}

interface RescheduleDialogProps {
  appointment: Appointment;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const RescheduleDialog = ({ appointment, isOpen, onClose, onSuccess }: RescheduleDialogProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const availableTimes = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"
  ];

  const handleReschedule = async () => {
    if (!selectedDate || !selectedTime) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // In a real app, you would call an API to update the appointment
      console.log('Rescheduling appointment:', {
        appointmentId: appointment.id,
        newDate: format(selectedDate, 'yyyy-MM-dd'),
        newTime: selectedTime
      });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSuccess();
    } catch (error) {
      console.error('Error rescheduling appointment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSelectedDate(undefined);
    setSelectedTime('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-dark-light border-gold/20">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif text-white">
            Reschedule Appointment
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Current Appointment Info */}
          <div className="bg-dark rounded-lg p-4 border border-gold/10">
            <h3 className="text-gold font-medium mb-3">Current Appointment</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex justify-between">
                <span>Client:</span>
                <span className="text-white">{appointment.clientName || appointment.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Service:</span>
                <span className="text-white">{appointment.service}</span>
              </div>
              <div className="flex justify-between">
                <span>Current Date:</span>
                <span className="text-white">{appointment.date}</span>
              </div>
              <div className="flex justify-between">
                <span>Current Time:</span>
                <span className="text-white">{appointment.time}</span>
              </div>
            </div>
          </div>

          {/* New Date Selection */}
          <div className="space-y-4">
            <h3 className="text-gold font-medium">Select New Date & Time</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Date Picker */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300">New Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-dark border-gold/30",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-dark-light border-gold/30" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300">New Time</label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger className="bg-dark border-gold/30">
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Select time" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-dark-light border-gold/30">
                    {availableTimes.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4">
            <Button
              variant="outline"
              onClick={handleClose}
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button
              onClick={handleReschedule}
              disabled={!selectedDate || !selectedTime || isSubmitting}
              className="bg-gold hover:bg-gold-dark text-white"
            >
              {isSubmitting ? 'Rescheduling...' : 'Reschedule Appointment'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RescheduleDialog;
