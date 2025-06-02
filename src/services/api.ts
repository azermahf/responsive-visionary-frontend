
// Mock API service using localStorage for demo purposes
const STORAGE_KEYS = {
  APPOINTMENTS: 'barbershop_appointments',
  CONTACTS: 'barbershop_contacts'
};

// Helper function to get data from localStorage
const getStorageData = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return [];
  }
};

// Helper function to save data to localStorage
const setStorageData = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

// Generate unique ID
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Appointment service
export const appointmentService = {
  bookAppointment: async (appointmentData: any) => {
    try {
      console.log('Booking appointment with data:', appointmentData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const appointments = getStorageData(STORAGE_KEYS.APPOINTMENTS);
      const newAppointment = {
        id: generateId(),
        ...appointmentData,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      };
      
      appointments.push(newAppointment);
      setStorageData(STORAGE_KEYS.APPOINTMENTS, appointments);
      
      console.log('Appointment booked successfully:', newAppointment);
      return { success: true, appointment: newAppointment };
    } catch (error) {
      console.error('Error booking appointment:', error);
      throw new Error('Failed to book appointment');
    }
  },
  
  getAppointments: async () => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const appointments = getStorageData(STORAGE_KEYS.APPOINTMENTS);
      console.log('Fetched appointments:', appointments);
      return appointments;
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw error;
    }
  },

  updateAppointment: async (appointmentId: string, updateData: any) => {
    try {
      console.log('Updating appointment:', appointmentId, updateData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const appointments = getStorageData(STORAGE_KEYS.APPOINTMENTS);
      const index = appointments.findIndex((apt: any) => apt.id === appointmentId);
      
      if (index === -1) {
        throw new Error('Appointment not found');
      }
      
      appointments[index] = { ...appointments[index], ...updateData };
      setStorageData(STORAGE_KEYS.APPOINTMENTS, appointments);
      
      console.log('Appointment updated successfully:', appointments[index]);
      return { success: true, appointment: appointments[index] };
    } catch (error) {
      console.error('Error updating appointment:', error);
      throw error;
    }
  },

  cancelAppointment: async (appointmentId: string) => {
    try {
      console.log('Cancelling appointment:', appointmentId);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const appointments = getStorageData(STORAGE_KEYS.APPOINTMENTS);
      const index = appointments.findIndex((apt: any) => apt.id === appointmentId);
      
      if (index === -1) {
        throw new Error('Appointment not found');
      }
      
      appointments[index].status = 'cancelled';
      setStorageData(STORAGE_KEYS.APPOINTMENTS, appointments);
      
      console.log('Appointment cancelled successfully');
      return { success: true };
    } catch (error) {
      console.error('Error cancelling appointment:', error);
      throw error;
    }
  }
};

// Contact service
export const contactService = {
  sendMessage: async (contactData: any) => {
    try {
      console.log('Sending contact message:', contactData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const contacts = getStorageData(STORAGE_KEYS.CONTACTS);
      const newContact = {
        id: generateId(),
        ...contactData,
        createdAt: new Date().toISOString()
      };
      
      contacts.push(newContact);
      setStorageData(STORAGE_KEYS.CONTACTS, contacts);
      
      console.log('Contact message sent successfully');
      return { success: true, message: 'Message sent successfully' };
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
};
