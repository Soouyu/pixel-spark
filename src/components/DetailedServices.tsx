import { useState, useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedServiceMessage from './services/AnimatedServiceMessage';
import ServicesList from './services/ServicesList';
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
    const submenuContent = activeService.submenuContent || {};
    const tabKeys = Object.keys(submenuContent);
    const currentIndex = tabKeys.indexOf(activeTab);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % tabKeys.length
      : (currentIndex - 1 + tabKeys.length) % tabKeys.length;
    
    setActiveTab(tabKeys[newIndex]);
  };

  return (
    <section id="services-section" className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white">
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Sidebar para desktop */}
          <div 
            className="hidden lg:block w-full lg:w-1/4 bg-white rounded-lg shadow-lg p-4 lg:sticky lg:top-24 h-fit"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <ServicesList 
              services={services}
              activeService={activeService}
              onServiceClick={(service) => {
                const index = services.findIndex(s => s.id === service.id);
                setCurrentServiceIndex(index);
                setActiveService(service);
                setActiveTab(Object.keys(service.submenuContent || {})[0]);
              }}
            />
          </div>

          {/* Contenido principal */}
          <div 
            className="w-full lg:w-3/4 p-4 md:p-6 bg-white rounded-lg shadow-lg"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            {/* Título para desktop */}
            <h2 className="hidden lg:flex text-2xl font-bold mb-6 items-center justify-center text-gray-800">
              {activeService.iconName && renderIcon(activeService.iconName)}
              <span className="ml-3">{activeService.title}</span>
            </h2>

            {activeService.hasSubmenus && activeService.submenuContent ? (
              <div className="max-w-2xl mx-auto relative">
                <Tabs 
                  value={activeTab} 
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <div className="relative flex items-center justify-center mb-8">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleServiceChange('prev')}
                      className="absolute left-0 animate-bounce-up-down"
                    >
                      <ChevronUp className="h-6 w-6" />
                    </Button>

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

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleServiceChange('next')}
                      className="absolute right-0 animate-bounce-up-down"
                    >
                      <ChevronDown className="h-6 w-6" />
                    </Button>
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