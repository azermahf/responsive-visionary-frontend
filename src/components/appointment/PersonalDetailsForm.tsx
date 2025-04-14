
import React from 'react';
import { AppointmentFormData } from '../../types/appointment';

interface PersonalDetailsFormProps {
  formData: AppointmentFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  prevStep: () => void;
  isSubmitting: boolean;
}

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  formData,
  handleChange,
  handleSubmit,
  prevStep,
  isSubmitting
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-50 p-8 rounded-md shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="notes" className="block text-gray-700 mb-2">Special Requests (Optional)</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
          ></textarea>
        </div>
        
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="py-3 px-6 bg-gray-300 text-gray-800 font-medium tracking-wide transition-all duration-300 hover:bg-gray-400"
          >
            Back
          </button>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="py-3 px-6 bg-gold text-white font-medium tracking-wide transition-all duration-300 hover:bg-gold-dark hover:shadow-lg"
          >
            {isSubmitting ? 'Booking...' : 'Book Appointment'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PersonalDetailsForm;
