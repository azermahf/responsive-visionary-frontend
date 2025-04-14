
import React from 'react';

const AppointmentHeader = () => {
  return (
    <div className="bg-dark py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Book an Appointment</h1>
        <div className="flex items-center justify-center mb-6">
          <div className="h-px w-12 bg-gold"></div>
          <p className="text-gold mx-4">Reserve Your Spot</p>
          <div className="h-px w-12 bg-gold"></div>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Schedule your next grooming session with our expert barbers. It only takes a few minutes.
        </p>
      </div>
    </div>
  );
};

export default AppointmentHeader;
