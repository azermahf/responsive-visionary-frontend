
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Appointment service
export const appointmentService = {
  bookAppointment: async (appointmentData: any) => {
    try {
      const response = await axios.post(`${API_URL}/appointments`, appointmentData);
      return response.data;
    } catch (error) {
      console.error('Error booking appointment:', error);
      throw error;
    }
  },
  
  getAppointments: async () => {
    try {
      const response = await axios.get(`${API_URL}/appointments`);
      return response.data;
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw error;
    }
  }
};

// Contact service
export const contactService = {
  sendMessage: async (contactData: any) => {
    try {
      const response = await axios.post(`${API_URL}/contact`, contactData);
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
};
