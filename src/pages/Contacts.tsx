
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const ContactsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dans une implémentation réelle, vous traiteriez le formulaire ici
    console.log('Form submitted');
    // Afficher un message à l'utilisateur
    alert('Message sent successfully! We will contact you shortly.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="bg-dark py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Contact Us</h1>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gold"></div>
              <p className="text-gold mx-4">Get in Touch</p>
              <div className="h-px w-12 bg-gold"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions or want to schedule an appointment? We're here to help. Reach out to us using any of the methods below.
            </p>
          </div>
        </div>

        {/* Contact Info and Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-serif mb-6">Get in Touch</h2>
                <div className="h-1 w-16 bg-gold mb-6"></div>
                <p className="text-gray-700 mb-8">
                  We're always happy to hear from you, whether you have a question about our services, want to book an appointment, or just want to say hello.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-gold mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                      <p className="text-gray-700">123 Barber Street, Your City, Country</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-gold mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Call Us</h3>
                      <p className="text-gray-700">+1 234 567 890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-gold mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email Us</h3>
                      <p className="text-gray-700">info@silidiumbarbershop.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="text-gold mt-1 mr-4" size={24} />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                      <p className="text-gray-700">Monday-Friday: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-700">Saturday-Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-md shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gold text-white font-medium tracking-wide transition-all duration-300 hover:bg-gold-dark hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif mb-4">Find Us</h2>
              <div className="h-1 w-16 bg-gold mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Conveniently located in the heart of the city, we're easily accessible by public transportation or car.
              </p>
            </div>
            
            <div className="h-96 bg-gray-300 rounded-md overflow-hidden">
              {/* Dans une implémentation réelle, vous intégreriez ici une carte (Google Maps, etc.) */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-600">Map placeholder - Google Maps would be integrated here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;
