import { Card, CardContent } from "@/components/ui/card";
import { Palette, Award, Handshake } from 'lucide-react';

const Objectives = () => {
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
          Nuestros Objetivos
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "Diseñar soluciones personalizadas que superen las expectativas de nuestros clientes.",
              icon: Palette
            },
            {
              text: "Garantizar la calidad y excelencia en cada proyecto.",
              icon: Award
            },
            {
              text: "Fomentar relaciones duraderas basadas en confianza y resultados.",
              icon: Handshake
            }
          ].map((objetivo, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <CardContent className="p-6 flex flex-col items-center gap-4">
                <objetivo.icon className="w-8 h-8 text-primary" />
                <p className="text-gray-600">{objetivo.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;