
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Scissors, CheckCheck, XCircle } from 'lucide-react';

// Mock appointment data
const MOCK_APPOINTMENTS = [
  {
    id: 1,
    clientName: "Michael Johnson",
    service: "Haircut & Beard Trim",
    date: "2025-04-18",
    time: "10:00 AM",
    status: "upcoming"
  },
  {
    id: 2,
    clientName: "Sarah Williams",
    service: "Hair Styling",
    date: "2025-04-18",
    time: "11:30 AM",
    status: "upcoming"
  },
  {
    id: 3,
    clientName: "David Brown",
    service: "Beard Trim",
    date: "2025-04-19",
    time: "09:00 AM",
    status: "upcoming"
  },
  {
    id: 4,
    clientName: "Emily Davis",
    service: "Full Package",
    date: "2025-04-17",
    time: "02:00 PM",
    status: "completed"
  },
  {
    id: 5,
    clientName: "Robert Wilson",
    service: "Haircut",
    date: "2025-04-16",
    time: "04:30 PM",
    status: "completed"
  }
];

const AppointmentsPanel = () => {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  const [appointments, setAppointments] = useState(MOCK_APPOINTMENTS);
  
  useEffect(() => {
    // Filter appointments based on selection
    if (filter === 'all') {
      setAppointments(MOCK_APPOINTMENTS);
    } else {
      setAppointments(MOCK_APPOINTMENTS.filter(app => app.status === filter));
    }
  }, [filter]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-serif text-white mb-2">Your Appointments</h2>
          <p className="text-gray-400">View and manage your schedule</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Select
            defaultValue="all"
            onValueChange={(value) => setFilter(value as any)}
          >
            <SelectTrigger className="w-[180px] bg-dark border-gold/30">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent className="bg-dark-light border-gold/30">
              <SelectItem value="all">All Appointments</SelectItem>
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
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <TableRow 
                  key={appointment.id} 
                  className="border-b border-gold/10 hover:bg-dark/30"
                >
                  <TableCell className="font-medium text-white">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-gold/70" />
                      {appointment.clientName}
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
                          className="border-gold/30 text-gold hover:bg-gold/10"
                        >
                          Reschedule
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
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
                  No appointments found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};

export default AppointmentsPanel;
