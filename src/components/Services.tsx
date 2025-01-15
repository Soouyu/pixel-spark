import { useEffect, useState } from 'react';
import AOS from 'aos';
import { 
  Code,
  Megaphone,
  Palette,
  Cog,
  Shield,
  BarChart,
  Headphones
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  detailedDescription: string;
  hasSubmenus?: boolean;
}

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const [activeTab, setActiveTab] = useState('web');

  const services: Service[] = [
    {
      title: "Desarrollo de software",
      description: "Pase el cursor para más detalles",
      detailedDescription: "Soluciones de software personalizadas y escalables para impulsar su negocio.",
      icon: <Code className="w-12 h-12 text-white" />
    },
    {
      title: "Consultora de marketing digital",
      description: "Pase el cursor para más detalles",
      detailedDescription: "Estrategias digitales efectivas para aumentar su presencia online y alcanzar sus objetivos.",
      icon: <Megaphone className="w-12 h-12 text-white" />
    },
    {
      title: "Diseño gráfico",
      description: "Pase el cursor para más detalles",
      detailedDescription: "Diseños creativos y profesionales que destacan su marca en el mercado.",
      icon: <Palette className="w-12 h-12 text-white" />
    },
    {
      title: "Automatización de procesos",
      description: "Pase el cursor para más detalles",
      detailedDescription: "Optimización de flujos de trabajo mediante soluciones automatizadas.",
      icon: <Cog className="w-12 h-12 text-white" />
    },
    {
      title: "Ciberseguridad",
      description: "Pase el cursor para más detalles",
      detailedDescription: "Protección integral de sus activos digitales y datos sensibles.",
      icon: <Shield className="w-12 h-12 text-white" />
    },
    {
      title: "Análisis de datos",
      description: "Pase el cursor para más detalles",
      detailedDescription: "Insights valiosos basados en el análisis profundo de sus datos.",
      icon: <BarChart className="w-12 h-12 text-white" />
    },
    {
      title: "Soporte técnico",
      description: "Pase el cursor para más detalles",
      detailedDescription: "Asistencia técnica especializada para mantener sus sistemas funcionando óptimamente.",
      icon: <Headphones className="w-12 h-12 text-white" />
    }
  ];

  const softwareContent = {
    web: {
      icon: <Code className="w-8 h-8" />,
      title: "Desarrollo Web",
      description: "Creamos soluciones web modernas y escalables, desde páginas corporativas hasta aplicaciones web interactivas."
    },
    exe: {
      icon: <Code className="w-8 h-8" />,
      title: "Software de Escritorio",
      description: "Desarrollamos software de escritorio personalizado, optimizado para rendimiento y funcionalidad."
    },
    app: {
      icon: <Code className="w-8 h-8" />,
      title: "Aplicaciones Móviles",
      description: "Construimos aplicaciones móviles nativas e híbridas que conectan a las empresas con sus clientes de forma eficiente."
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Nuestros Servicios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group perspective ${service.hasSubmenus ? 'col-span-1 md:col-span-2 lg:col-span-3' : ''}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative transform-style-3d transition-transform duration-500 w-full h-[300px] group-hover:rotate-y-180">
                {/* Cara frontal */}
                <div className="absolute w-full h-full backface-hidden rounded-xl p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/90 to-secondary/90 text-white transform-gpu">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {service.description}
                  </p>
                </div>
                
                {/* Cara trasera */}
                <div className="absolute w-full h-full backface-hidden rounded-xl p-6 flex flex-col items-center justify-center bg-white shadow-lg rotate-y-180 transform-gpu">
                  {service.hasSubmenus ? (
                    <Tabs defaultValue="web" className="w-full" value={activeTab} onValueChange={setActiveTab}>
                      <TabsList className="w-full grid grid-cols-3 mb-6">
                        <TabsTrigger value="web" className="data-[state=active]:bg-primary-gradient data-[state=active]:text-white">
                          Web
                        </TabsTrigger>
                        <TabsTrigger value="exe" className="data-[state=active]:bg-primary-gradient data-[state=active]:text-white">
                          .EXE
                        </TabsTrigger>
                        <TabsTrigger value="app" className="data-[state=active]:bg-primary-gradient data-[state=active]:text-white">
                          APP
                        </TabsTrigger>
                      </TabsList>
                      {Object.entries(softwareContent).map(([key, content]) => (
                        <TabsContent 
                          key={key} 
                          value={key}
                          className="mt-0 transition-all duration-300 ease-in-out"
                        >
                          <div className="flex flex-col items-center text-center">
                            <div className="mb-4 text-primary">
                              {content.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">
                              {content.title}
                            </h3>
                            <p className="text-gray-600">
                              {content.description}
                            </p>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold mb-4 text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.detailedDescription}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
