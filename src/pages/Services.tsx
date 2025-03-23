
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Scissors } from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Liste des services
  const services = [
    {
      id: 1,
      title: "Haircut",
      description: "Precision cut tailored to your face shape and style preferences.",
      price: "$25",
      icon: <Scissors className="text-gold" size={24} />
    },
    {
      id: 2,
      title: "Beard Trim",
      description: "Expert beard shaping and styling for the perfect look.",
      price: "$15",
      icon: <Scissors className="text-gold" size={24} />
    },
    {
      id: 3,
      title: "Hot Towel Shave",
      description: "Luxurious traditional hot towel shave for the smoothest finish.",
      price: "$30",
      icon: <Scissors className="text-gold" size={24} />
    },
    {
      id: 4,
      title: "Hair Styling",
      description: "Professional styling using premium products for any occasion.",
      price: "$20",
      icon: <Scissors className="text-gold" size={24} />
    },
    {
      id: 5,
      title: "Hair Coloring",
      description: "Expert color services from subtle highlights to bold transformations.",
      price: "$40+",
      icon: <Scissors className="text-gold" size={24} />
    },
    {
      id: 6,
      title: "Kids Haircut",
      description: "Gentle and patient service for our younger clients.",
      price: "$15",
      icon: <Scissors className="text-gold" size={24} />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Banner */}
        <div className="bg-dark py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">Our Services</h1>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gold"></div>
              <p className="text-gold mx-4">Premium Grooming</p>
              <div className="h-px w-12 bg-gold"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the finest in men's grooming services. Our skilled barbers combine traditional techniques with modern trends to deliver exceptional results.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="bg-gray-50 p-8 rounded-md shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 flex justify-between">
                    <span>{service.title}</span>
                    <span className="text-gold">{service.price}</span>
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gold py-16 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Ready for a Fresh Look?</h2>
            <p className="text-white opacity-90 max-w-2xl mx-auto mb-8">
              Book your appointment today and experience the Silidium difference. Our skilled barbers are ready to help you look and feel your best.
            </p>
            <a
              href="/appointment"
              className="inline-block py-3 px-8 bg-white text-gold font-medium tracking-wide transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
            >
              Book Appointment
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
