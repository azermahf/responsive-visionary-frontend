
import React from 'react';
import { Check } from 'lucide-react';

interface ProgressStepsProps {
  currentStep: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-gold' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 1 ? 'bg-gold text-white' : 'bg-gray-200 text-gray-500'}`}>
            {currentStep > 1 ? <Check size={20} /> : 1}
          </div>
          <span>Service Details</span>
        </div>
        
        <div className={`flex-grow h-0.5 mx-4 ${currentStep >= 2 ? 'bg-gold' : 'bg-gray-200'}`}></div>
        
        <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-gold' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 2 ? 'bg-gold text-white' : 'bg-gray-200 text-gray-500'}`}>
            {currentStep > 2 ? <Check size={20} /> : 2}
          </div>
          <span>Personal Details</span>
        </div>
        
        <div className={`flex-grow h-0.5 mx-4 ${currentStep >= 3 ? 'bg-gold' : 'bg-gray-200'}`}></div>
        
        <div className={`flex flex-col items-center ${currentStep >= 3 ? 'text-gold' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep >= 3 ? 'bg-gold text-white' : 'bg-gray-200 text-gray-500'}`}>
            3
          </div>
          <span>Confirmation</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
