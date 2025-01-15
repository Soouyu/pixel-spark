import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Heart, Shield, Target, Users, Star } from 'lucide-react';

const Values = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 
          className="text-3xl font-bold text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          Nuestros Valores
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Lightbulb, title: "Innovación", desc: "Siempre a la vanguardia tecnológica" },
            { icon: Heart, title: "Compromiso", desc: "Trabajamos con pasión y dedicación" },
            { icon: Shield, title: "Calidad", desc: "Excelencia en cada detalle" },
            { icon: Target, title: "Transparencia", desc: "Comunicación clara y honesta" },
            { icon: Users, title: "Trabajo en equipo", desc: "Colaboramos para lograr grandes resultados" },
            { icon: Star, title: "Excelencia", desc: "Superando expectativas en cada proyecto" }
          ].map((valor, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <CardContent className="p-6 text-center">
                <valor.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-bold text-xl mb-2">{valor.title}</h3>
                <p className="text-gray-600">{valor.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;