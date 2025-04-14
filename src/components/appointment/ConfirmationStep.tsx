
import React from 'react';
import { Check } from 'lucide-react';
import { AppointmentFormData } from '../../types/appointment';

interface ConfirmationStepProps {
  formData: AppointmentFormData;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ formData }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-md shadow-sm text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="text-green-600" size={32} />
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Appointment Confirmed!</h2>
      
      <p className="text-gray-700 mb-6">
        Thank you for booking with us. We've sent a confirmation to your email.
      </p>
      
      <div className="bg-white p-6 rounded-md border border-gray-200 mb-8 text-left">
        <h3 className="font-bold text-lg mb-4">Appointment Details:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Service:</p>
            <p className="font-medium">{formData.service}</p>
          </div>
          
          <div>
            <p className="text-gray-600">Barber:</p>
            <p className="font-medium">{formData.barber}</p>
          </div>
          
          <div>
            <p className="text-gray-600">Date:</p>
            <p className="font-medium">{formData.date}</p>
          </div>
          
          <div>
            <p className="text-gray-600">Time:</p>
            <p className="font-medium">{formData.time}</p>
          </div>
        </div>
      </div>
      
      <a
        href="/"
        className="inline-block py-3 px-6 bg-gold text-white font-medium tracking-wide transition-all duration-300 hover:bg-gold-dark hover:shadow-lg"
      >
        Return to Home
      </a>
    </div>
  );
};

export default ConfirmationStep;
