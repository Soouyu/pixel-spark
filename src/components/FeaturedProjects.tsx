import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "App Móvil de Delivery",
    description: "Aplicación móvil para servicio de entrega a domicilio con seguimiento en tiempo real",
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80",
    category: "Desarrollo Móvil"
  },
  {
    title: "Portal E-commerce",
    description: "Plataforma de comercio electrónico con integración de pagos y gestión de inventario",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    category: "Desarrollo Web"
  },
  {
    title: "Sistema ERP",
    description: "Sistema de gestión empresarial personalizado para optimización de procesos",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    category: "Software Empresarial"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-orange-50 via-orange-100/20 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 
            className="text-3xl lg:text-4xl font-bold mb-3"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            Proyectos Destacados
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            Descubre cómo hemos ayudado a nuestros clientes a transformar sus ideas en soluciones digitales exitosas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              data-aos-offset="200"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4">
                  <span className="text-sm font-semibold text-primary-light">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-3">
                    {project.description}
                  </p>
                  <Link to="/servicios" className="inline-flex items-center text-primary-light hover:text-white transition-colors">
                    Ver más
                    <ArrowRight className="ml-2 w-4 h-4 animate-bounce-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="text-center mt-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="200"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <Link 
            to="/servicios" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-full bg-primary-gradient text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Ver todos los proyectos
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;