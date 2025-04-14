
import React from 'react';
import { AppointmentFormData } from '../../types/appointment';

interface ServiceDetailsFormProps {
  formData: AppointmentFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  nextStep: () => void;
}

const ServiceDetailsForm: React.FC<ServiceDetailsFormProps> = ({ 
  formData, 
  handleChange, 
  nextStep 
}) => {
  const services = ["Haircut", "Beard Trim", "Hot Towel Shave", "Hair Styling", "Hair Coloring", "Kids Haircut"];
  const barbers = ["James Wilson", "Michael Rodriguez", "David Thompson"];
  const availableTimes = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

  return (
    <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
      <div className="bg-gray-50 p-8 rounded-md shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Select Service Details</h2>
        
        <div className="mb-6">
          <label htmlFor="service" className="block text-gray-700 mb-2">Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            required
          >
            <option value="">Select a service</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="barber" className="block text-gray-700 mb-2">Barber</label>
          <select
            id="barber"
            name="barber"
            value={formData.barber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            required
          >
            <option value="">Select a barber</option>
            {barbers.map(barber => (
              <option key={barber} value={barber}>{barber}</option>
            ))}
          </select>
        </div>
        
        <div className="mb-6">
          <label htmlFor="date" className="block text-gray-700 mb-2">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            required
          />
        </div>
        
        <div className="mb-8">
          <label htmlFor="time" className="block text-gray-700 mb-2">Time</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full py-3 px-4 bg-gold text-white font-medium tracking-wide transition-all duration-300 hover:bg-gold-dark hover:shadow-lg"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default ServiceDetailsForm;
