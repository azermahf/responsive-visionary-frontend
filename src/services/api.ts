
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
  },

  updateAppointment: async (appointmentId: string, updateData: any) => {
    try {
      const response = await axios.put(`${API_URL}/appointments/${appointmentId}`, updateData);
      return response.data;
    } catch (error) {
      console.error('Error updating appointment:', error);
      throw error;
    }
  },

  cancelAppointment: async (appointmentId: string) => {
    try {
      const response = await axios.delete(`${API_URL}/appointments/${appointmentId}`);
      return response.data;
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
      const response = await axios.post(`${API_URL}/contact`, contactData);
      return response.data;
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
};
