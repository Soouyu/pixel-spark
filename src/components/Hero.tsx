import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-[90vh] bg-gradient-to-br from-white via-orange-50 to-primary/5 py-24 md:py-32">
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 items-center w-full">
          <div 
            className="lg:order-first order-last"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Transformamos Ideas en Experiencias Digitales
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Creamos experiencias digitales excepcionales que impulsan el crecimiento de tu negocio.
            </p>
            <Link 
              to="/contacto"
              className="
                inline-flex items-center justify-center gap-2
                px-6 py-3 rounded-full font-bold text-white
                bg-primary-gradient
                transition-all duration-300
                hover:shadow-lg hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              "
            >
              <span>Comienza ahora</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
          <div 
            className="lg:order-last order-first"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="200"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <img
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&q=80"
              alt="Digital Experience"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;