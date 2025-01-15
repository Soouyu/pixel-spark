import { useEffect } from 'react';
import AOS from 'aos';
import { 
  Globe, 
  Palette, 
  TrendingUp, 
  Headphones
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const services: Service[] = [
    {
      title: "Desarrollo Web",
      description: "Creación de sitios web modernos, rápidos y optimizados para todo tipo de dispositivos.",
      icon: <Globe className="w-12 h-12 text-primary" />
    },
    {
      title: "Diseño Gráfico",
      description: "Logotipos, branding y diseños personalizados que destacan tu marca.",
      icon: <Palette className="w-12 h-12 text-primary" />
    },
    {
      title: "Marketing Digital",
      description: "Estrategias SEO, campañas publicitarias y gestión de redes sociales.",
      icon: <TrendingUp className="w-12 h-12 text-primary" />
    },
    {
      title: "Soporte Técnico",
      description: "Asistencia técnica para garantizar el funcionamiento óptimo de tus sistemas.",
      icon: <Headphones className="w-12 h-12 text-primary" />
    }
  ];

  return (
    <section id="services-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 bg-gradient-to-r from-primary to-primary-light p-12 rounded-lg text-white">
          <h1 className="text-4xl font-bold mb-4">Bienvenido a PixelSpark</h1>
          <p className="text-xl">Transformamos tus ideas en realidad digital</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-secondary p-8 rounded-lg shadow-md hover:-translate-y-2 transition-transform duration-200 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;