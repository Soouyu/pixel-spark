import { useInView } from 'react-intersection-observer';
import { useCounter } from '@/hooks/useCounter';
import { useEffect } from 'react';

const Achievements = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          Logros Destacados
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { end: 60, suffix: '+', text: "Proyectos completados" },
            { end: 97, suffix: '%', text: "Clientes satisfechos" },
            { end: 3, suffix: '+', text: "Años de experiencia" }
          ].map((logro, index) => {
            const { ref, inView } = useInView({
              threshold: 0.5,
              triggerOnce: false
            });
            
            const { count, startCounting } = useCounter({
              end: logro.end,
              duration: 2000,
              startOnView: false
            });

            useEffect(() => {
              if (inView) {
                startCounting();
              }
            }, [inView, startCounting]);

            return (
              <div 
                key={index}
                ref={ref}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <h3 className="text-5xl font-bold bg-primary-gradient bg-clip-text text-transparent mb-4">
                  {`${count}${logro.suffix}`}
                </h3>
                <p className="text-gray-600 text-lg">{logro.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;