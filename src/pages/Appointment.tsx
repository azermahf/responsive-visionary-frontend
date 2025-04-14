
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { appointmentService } from '../services/api';
import { useToast } from '../hooks/use-toast';
import AppointmentHeader from '../components/appointment/AppointmentHeader';
import ProgressSteps from '../components/appointment/ProgressSteps';
import ServiceDetailsForm from '../components/appointment/ServiceDetailsForm';
import PersonalDetailsForm from '../components/appointment/PersonalDetailsForm';
import ConfirmationStep from '../components/appointment/ConfirmationStep';
import { AppointmentFormData } from '../types/appointment';

const AppointmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState<AppointmentFormData>({
    service: '',
    barber: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setFormStep(prev => prev + 1);
  };

  const prevStep = () => {
    setFormStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await appointmentService.bookAppointment(formData);
      console.log('Appointment booked:', response);
      
      toast({
        title: "Success!",
        description: "Your appointment has been booked successfully.",
      });
      
      setFormStep(3);
    } catch (error) {
      console.error('Error booking appointment:', error);
      
      toast({
        title: "Error",
        description: "There was a problem booking your appointment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (formStep) {
      case 1:
        return (
          <ServiceDetailsForm 
            formData={formData} 
            handleChange={handleChange} 
            nextStep={nextStep} 
          />
        );
      case 2:
        return (
          <PersonalDetailsForm 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            prevStep={prevStep}
            isSubmitting={isSubmitting}
          />
        );
      case 3:
        return <ConfirmationStep formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <AppointmentHeader />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <ProgressSteps currentStep={formStep} />
              {renderStep()}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppointmentPage;
