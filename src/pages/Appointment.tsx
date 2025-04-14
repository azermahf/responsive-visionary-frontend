import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check } from 'lucide-react';
import { appointmentService } from '../services/api';
import { useToast } from '../hooks/use-toast';

const AppointmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    barber: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const services = ["Haircut", "Beard Trim", "Hot Towel Shave", "Hair Styling", "Hair Coloring", "Kids Haircut"];
  const barbers = ["James Wilson", "Michael Rodriguez", "David Thompson"];
  const availableTimes = ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="mb-12">
                <div className="flex items-center justify-between">
                  <div className={`flex flex-col items-center ${formStep >= 1 ? 'text-gold' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${formStep >= 1 ? 'bg-gold text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {formStep > 1 ? <Check size={20} /> : 1}
                    </div>
                    <span>Service Details</span>
                  </div>
                  
                  <div className={`flex-grow h-0.5 mx-4 ${formStep >= 2 ? 'bg-gold' : 'bg-gray-200'}`}></div>
                  
                  <div className={`flex flex-col items-center ${formStep >= 2 ? 'text-gold' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${formStep >= 2 ? 'bg-gold text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {formStep > 2 ? <Check size={20} /> : 2}
                    </div>
                    <span>Personal Details</span>
                  </div>
                  
                  <div className={`flex-grow h-0.5 mx-4 ${formStep >= 3 ? 'bg-gold' : 'bg-gray-200'}`}></div>
                  
                  <div className={`flex flex-col items-center ${formStep >= 3 ? 'text-gold' : 'text-gray-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${formStep >= 3 ? 'bg-gold text-white' : 'bg-gray-200 text-gray-500'}`}>
                      3
                    </div>
                    <span>Confirmation</span>
                  </div>
                </div>
              </div>

              {formStep === 1 && (
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
              )}

              {formStep === 2 && (
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
              )}

              {formStep === 3 && (
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
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppointmentPage;
