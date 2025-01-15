import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // Esto permite que las animaciones se repitan al hacer scroll hacia arriba
      mirror: true, // Esto hace que las animaciones se reviertan al hacer scroll hacia arriba
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-16 bg-gradient-to-br from-blue-100 via-blue-50 to-white">
        <div className="container mx-auto px-6">
          <h1 
            className="text-4xl font-bold text-center mb-12"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Contáctanos
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div 
              className="bg-white p-8 rounded-lg shadow-lg"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
              <form className="space-y-6">
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white font-semibold rounded-full bg-primary-gradient hover:shadow-lg transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div 
                className="bg-white p-8 rounded-lg shadow-lg"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
                <div className="space-y-4">
                  <div 
                    className="flex items-center space-x-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@pixelspark.com" className="text-gray-600 hover:text-primary">
                        info@pixelspark.com
                      </a>
                    </div>
                  </div>
                  <div 
                    className="flex items-center space-x-4"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium">Teléfono</p>
                      <a href="tel:+593962098467" className="text-gray-600 hover:text-primary">
                        +593 0962098467
                      </a>
                    </div>
                  </div>
                  <div 
                    className="flex items-center space-x-4"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-gray-600">
                        Quito, Ecuador
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;