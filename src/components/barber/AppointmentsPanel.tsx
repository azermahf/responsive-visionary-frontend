
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Scissors, CheckCheck, XCircle, Edit } from 'lucide-react';
import { appointmentService } from '../../services/api';
import { useToast } from '../../hooks/use-toast';
import RescheduleDialog from './RescheduleDialog';
import { format, isToday, isThisWeek, isThisMonth, parseISO } from 'date-fns';

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
  createdAt?: string;
}

const AppointmentsPanel = () => {
  const [statusFilter, setStatusFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  const [timeFilter, setTimeFilter] = useState<'all' | 'today' | 'this-week' | 'this-month'>('all');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [isRescheduleOpen, setIsRescheduleOpen] = useState(false);
  const { toast } = useToast();

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await appointmentService.getAppointments();
      
      // Map appointments and determine status based on date
      const mappedAppointments = response.map((apt: any) => ({
        ...apt,
        clientName: apt.name || apt.clientName,
        status: new Date(apt.date) > new Date() ? 'upcoming' : 'completed'
      }));
      
      setAppointments(mappedAppointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toast({
        title: "Error",
        description: "Failed to load appointments. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const filteredAppointments = appointments.filter(apt => {
    // Status filter
    if (statusFilter !== 'all' && apt.status !== statusFilter) {
      return false;
    }

    // Time filter
    if (timeFilter !== 'all') {
      try {
        const appointmentDate = parseISO(apt.date);
        
        switch (timeFilter) {
          case 'today':
            return isToday(appointmentDate);
          case 'this-week':
            return isThisWeek(appointmentDate);
          case 'this-month':
            return isThisMonth(appointmentDate);
          default:
            return true;
        }
      } catch (error) {
        console.error('Error parsing date:', apt.date);
        return true;
      }
    }

    return true;
  });

  const handleReschedule = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsRescheduleOpen(true);
  };

  const handleRescheduleSuccess = () => {
    fetchAppointments();
    setIsRescheduleOpen(false);
    setSelectedAppointment(null);
    toast({
      title: "Success",
      description: "Appointment rescheduled successfully.",
    });
  };

  const handleCancel = async (appointmentId: string) => {
    // In a real app, you'd call an API to cancel the appointment
    console.log('Canceling appointment:', appointmentId);
    toast({
      title: "Cancelled",
      description: "Appointment has been cancelled.",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="text-white">Loading appointments...</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-serif text-white mb-2">Your Appointments</h2>
          <p className="text-gray-400">View and manage your schedule ({filteredAppointments.length} appointments)</p>
        </div>
        
        <div className="flex items-center space-x-4 flex-wrap gap-2">
          <Button
            onClick={fetchAppointments}
            variant="outline"
            className="border-gold/30 text-gold hover:bg-gold/10"
          >
            Refresh
          </Button>
          
          {/* Time Filter */}
          <Select
            value={timeFilter}
            onValueChange={(value) => setTimeFilter(value as any)}
          >
            <SelectTrigger className="w-[140px] bg-dark border-gold/30">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent className="bg-dark-light border-gold/30">
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
            </SelectContent>
          </Select>
          
          {/* Status Filter */}
          <Select
            value={statusFilter}
            onValueChange={(value) => setStatusFilter(value as any)}
          >
            <SelectTrigger className="w-[140px] bg-dark border-gold/30">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent className="bg-dark-light border-gold/30">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="bg-dark-light rounded border border-gold/10 overflow-hidden">
        <Table>
          <TableHeader className="bg-dark">
            <TableRow className="border-b border-gold/10 hover:bg-dark/60">
              <TableHead className="text-gold">Client</TableHead>
              <TableHead className="text-gold">Service</TableHead>
              <TableHead className="text-gold">Date & Time</TableHead>
              <TableHead className="text-gold">Status</TableHead>
              <TableHead className="text-gold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAppointments.length > 0 ? (
              filteredAppointments.map((appointment) => (
                <TableRow 
                  key={appointment.id} 
                  className="border-b border-gold/10 hover:bg-dark/30"
                >
                  <TableCell className="font-medium text-white">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gold/70" />
                      <div>
                        <div>{appointment.clientName}</div>
                        {appointment.email && (
                          <div className="text-xs text-gray-400">{appointment.email}</div>
                        )}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-300">
                    <div className="flex items-center gap-2">
                      <Scissors size={16} className="text-gold/70" />
                      {appointment.service}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-300">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gold/70" />
                        {appointment.date}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock size={16} className="text-gold/70" />
                        {appointment.time}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      appointment.status === 'upcoming' 
                        ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-green-500/20 text-green-400'
                    }`}>
                      {appointment.status === 'upcoming' ? (
                        <>
                          <Clock size={12} />
                          Upcoming
                        </>
                      ) : (
                        <>
                          <CheckCheck size={12} />
                          Completed
                        </>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    {appointment.status === 'upcoming' ? (
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleReschedule(appointment)}
                          className="border-gold/30 text-gold hover:bg-gold/10"
                        >
                          <Edit size={16} className="mr-1" />
                          Reschedule
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleCancel(appointment.id)}
                          className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                        >
                          <XCircle size={16} className="mr-1" />
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-gold/30 text-gold hover:bg-gold/10"
                      >
                        Details
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-gray-400">
                  No appointments found for the selected filters
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {selectedAppointment && (
        <RescheduleDialog
          appointment={selectedAppointment}
          isOpen={isRescheduleOpen}
          onClose={() => {
            setIsRescheduleOpen(false);
            setSelectedAppointment(null);
          }}
          onSuccess={handleRescheduleSuccess}
        />
      )}
    </motion.div>
  );
};

export default AppointmentsPanel;
