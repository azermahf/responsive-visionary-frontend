
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <div className="bg-dark py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">About Us</h1>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px w-12 bg-gold"></div>
              <p className="text-gold mx-4">Our Story</p>
              <div className="h-px w-12 bg-gold"></div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover the story behind Silidium Barber Shop, where tradition meets modern style.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-serif mb-6">Our Story</h2>
                <div className="h-1 w-16 bg-gold mb-6"></div>
                <p className="text-gray-700 mb-4">
                  Founded in 1995, Silidium Barber Shop began as a single chair in a small storefront. Our founder, James Silidium, had a vision to create a space where men could not only get a great haircut but also experience the camaraderie and relaxation of a traditional barbershop.
                </p>
                <p className="text-gray-700 mb-4">
                  Over the years, we've grown in size but maintained our commitment to quality, style, and exceptional service. Today, our team of skilled barbers continues James's legacy, combining time-honored techniques with modern trends.
                </p>
                <p className="text-gray-700">
                  What sets us apart is our attention to detail and our belief that a great haircut can transform not just your appearance, but your confidence. Every client who sits in our chairs receives personalized service tailored to their unique style and preferences.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold translate-x-4 translate-y-4 z-0"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
                    alt="Barber shop interior" 
                    className="relative z-10 w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif mb-4">Our Values</h2>
              <div className="h-1 w-16 bg-gold mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                These core principles guide everything we do at Silidium Barber Shop.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 shadow-sm rounded-md">
                <h3 className="text-xl font-bold text-gold mb-3">Craftsmanship</h3>
                <p className="text-gray-700">
                  We take pride in our work and are committed to excellence in every cut, trim, and style. Our barbers regularly train to maintain and enhance their skills.
                </p>
              </div>
              
              <div className="bg-white p-8 shadow-sm rounded-md">
                <h3 className="text-xl font-bold text-gold mb-3">Community</h3>
                <p className="text-gray-700">
                  Our barbershop is more than a business—it's a gathering place where relationships are built and stories are shared. We're proud to be a fixture in our community.
                </p>
              </div>
              
              <div className="bg-white p-8 shadow-sm rounded-md">
                <h3 className="text-xl font-bold text-gold mb-3">Authenticity</h3>
                <p className="text-gray-700">
                  We stay true to the traditions of barbering while embracing innovation. We believe in being genuine in our approach and our relationships with clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif mb-4">Meet Our Team</h2>
              <div className="h-1 w-16 bg-gold mx-auto mb-6"></div>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our skilled barbers combine years of experience with a passion for their craft.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Barber 1 */}
              <div className="text-center">
                <div className="relative mb-4 overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1568339434357-8a118eb9e9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Barber James" 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg">Master Barber</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold">James Wilson</h3>
                <p className="text-gray-600">Founder & Master Barber</p>
              </div>
              
              {/* Barber 2 */}
              <div className="text-center">
                <div className="relative mb-4 overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1506634064465-7dab4de896ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Barber Michael" 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg">Style Specialist</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Michael Rodriguez</h3>
                <p className="text-gray-600">Senior Barber</p>
              </div>
              
              {/* Barber 3 */}
              <div className="text-center">
                <div className="relative mb-4 overflow-hidden group">
                  <img 
                    src="https://images.unsplash.com/photo-1620577438167-885724f9570d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                    alt="Barber David" 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-lg">Color Expert</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold">David Thompson</h3>
                <p className="text-gray-600">Barber & Stylist</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
