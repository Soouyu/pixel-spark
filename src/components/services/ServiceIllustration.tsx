import React from 'react';

interface ServiceIllustrationProps {
  type: string;
  serviceId?: string;
}

const ServiceIllustration = ({ type, serviceId = 'software' }: ServiceIllustrationProps) => {
  const getText = (type: string, serviceId: string): string => {
    const texts: Record<string, Record<string, string>> = {
      software: {
        web: "Desarrollo de aplicaciones web modernas y responsivas",
        exe: "Software de escritorio personalizado y eficiente",
        app: "Aplicaciones móviles nativas e híbridas"
      },
      marketing: {
        social: "Gestión profesional de redes sociales",
        seo: "Optimización para motores de búsqueda",
        ads: "Campañas publicitarias efectivas"
      },
      design: {
        brand: "Diseño de identidad de marca único",
        print: "Materiales impresos de alta calidad",
        digital: "Diseño digital innovador"
      },
      automation: {
        workflow: "Automatización de flujos de trabajo",
        integration: "Integración de sistemas empresariales",
        bots: "Desarrollo de bots y RPA"
      },
      security: {
        audit: "Auditorías de seguridad completas",
        protection: "Protección de datos y sistemas",
        monitoring: "Monitoreo de seguridad 24/7"
      },
      analytics: {
        bi: "Business Intelligence personalizado",
        bigdata: "Análisis de grandes volúmenes de datos",
        ml: "Machine Learning e IA aplicada"
      },
      support: {
        helpdesk: "Soporte técnico especializado",
        maintenance: "Mantenimiento preventivo y correctivo",
        training: "Capacitación y formación técnica"
      }
    };

    return texts[serviceId]?.[type] || "Soluciones tecnológicas a medida";
  };

  return (
    <div className="mt-4 rounded-lg overflow-hidden shadow-lg w-full max-w-md mx-auto bg-white h-40 flex items-center justify-center p-6">
      <p className="text-lg text-gray-700 text-center font-medium">
        {getText(type, serviceId)}
      </p>
    </div>
  );
};

export default ServiceIllustration;