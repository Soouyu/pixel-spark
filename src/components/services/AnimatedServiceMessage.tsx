import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const AnimatedServiceMessage = () => {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
    rootMargin: '-100px 0px'
    // Removido triggerOnce para que la animación se repita
  });

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 mt-4 lg:mt-6" ref={inViewRef}>
      <button className="w-full lg:w-auto inline-flex items-center justify-center px-8 py-4 text-lg rounded-full bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors duration-300">
        Más información
        <ArrowRight className="ml-2 w-5 h-5" />
      </button>
      
      <p className={`text-sm lg:text-base text-gray-600 italic transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        💡 Todas nuestras aplicaciones trabajan de forma estática y con comercio electrónico para transacciones
      </p>
    </div>
  );
};

export default AnimatedServiceMessage;