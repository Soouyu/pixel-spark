import { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedServiceMessage from './services/AnimatedServiceMessage';
import { services, ServiceDetail } from '@/types/services';

const DetailedServices = () => {
  const [activeService, setActiveService] = useState<ServiceDetail>(services[0]);
  const [activeTab, setActiveTab] = useState(Object.keys(services[0].submenuContent || {})[0]);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
      easing: 'ease-out'
    });
  }, []);

  const renderIcon = (iconName: keyof typeof Icons) => {
    const IconComponent = Icons[iconName] as (props: any) => JSX.Element;
    return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
  };

  const handleServiceChange = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentServiceIndex + 1) % services.length
      : (currentServiceIndex - 1 + services.length) % services.length;
    
    setCurrentServiceIndex(newIndex);
    setActiveService(services[newIndex]);
    setActiveTab(Object.keys(services[newIndex].submenuContent || {})[0]);
  };

  return (
    <section id="services-section" className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white">
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Contenido principal */}
          <div 
            className="w-full p-4 md:p-6 bg-white rounded-lg shadow-lg relative"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            {/* Botones de navegación para desktop */}
            <div className="hidden lg:flex justify-between absolute top-1/2 -translate-y-1/2 w-full left-0 px-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleServiceChange('prev')}
                className="bg-white/80 hover:bg-white shadow-lg"
              >
                <ChevronLeft className="h-6 w-6 text-primary" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleServiceChange('next')}
                className="bg-white/80 hover:bg-white shadow-lg"
              >
                <ChevronRight className="h-6 w-6 text-primary" />
              </Button>
            </div>

            {/* Título para desktop */}
            <h2 className="hidden lg:flex text-2xl font-bold mb-6 items-center justify-center text-gray-800">
              {activeService.iconName && renderIcon(activeService.iconName)}
              <span className="ml-3">{activeService.title}</span>
            </h2>

            {/* Título para móvil */}
            <div className="lg:hidden relative flex items-center justify-center mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleServiceChange('prev')}
                className="absolute -top-12 left-1/2 -translate-x-1/2 animate-bounce-slow"
              >
                <ChevronUp className="h-6 w-6" />
              </Button>

              <div className="flex flex-col items-center">
                <div className="text-primary mb-2">
                  {activeService.iconName && renderIcon(activeService.iconName)}
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {activeService.title}
                </h3>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleServiceChange('next')}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow"
              >
                <ChevronDown className="h-6 w-6" />
              </Button>
            </div>

            {activeService.hasSubmenus && activeService.submenuContent ? (
              <div className="max-w-2xl mx-auto relative">
                <Tabs 
                  value={activeTab} 
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <div className="relative flex items-center justify-center mb-8">
                    <TabsList className="w-full max-w-[200px]">
                      {Object.entries(activeService.submenuContent).map(([key, content]) => (
                        <TabsTrigger 
                          key={key} 
                          value={key}
                          className="w-full min-h-[50px] px-6 py-3 rounded-lg transition-all duration-300
                            data-[state=active]:bg-primary-gradient data-[state=active]:text-white 
                            data-[state=active]:shadow-md data-[state=active]:scale-105
                            hover:bg-gray-100 data-[state=active]:hover:bg-primary/90
                            absolute top-0 left-0
                            data-[state=inactive]:opacity-0 data-[state=inactive]:pointer-events-none"
                        >
                          {content.title}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  
                  {Object.entries(activeService.submenuContent).map(([key, content]) => (
                    <TabsContent 
                      key={key} 
                      value={key} 
                      className="mt-4 transition-all duration-300 animate-fade-in"
                    >
                      <div className="flex flex-col items-center text-center space-y-4 px-4">
                        <div className="flex flex-col items-center">
                          <div className="mb-4 text-primary">
                            {content.iconName && renderIcon(content.iconName)}
                          </div>
                          <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-800">
                              {content.title}
                            </h3>
                            <p className="text-gray-600">
                              {content.description}
                            </p>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                              {`En ${content.title}, nos especializamos en crear soluciones que transforman tu visión en realidad. 
                              Nuestro equipo de expertos combina creatividad y tecnología de vanguardia para desarrollar 
                              productos digitales que destacan en el mercado.`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            ) : (
              <div className="prose max-w-none px-4 md:px-6">
                <p className="text-sm md:text-base text-gray-600 text-center">
                  {activeService.content}
                </p>
              </div>
            )}

            <AnimatedServiceMessage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;