import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false, // Permite que las animaciones se repitan
      mirror: true, // Permite que las animaciones se ejecuten en ambas direcciones
      offset: 30,
      anchorPlacement: 'top-bottom', // Asegura que la animación se active cuando el elemento esté visible
    });

    // Reiniciar las animaciones cuando se hace scroll
    window.addEventListener('scroll', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('scroll', () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div 
        className="w-full" 
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <Hero />
      </div>
      <div 
        className="w-full"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-offset="50"
      >
        <About />
      </div>
      <div 
        className="w-full"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-offset="50"
      >
        <FeaturedProjects />
      </div>
      <div 
        className="w-full"
        data-aos="zoom-out"
        data-aos-duration="1000"
        data-aos-offset="50"
      >
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Index;