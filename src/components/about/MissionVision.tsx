import { Separator } from "@/components/ui/separator";

const MissionVision = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div 
            className="space-y-4"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 className="text-3xl font-bold">Nuestra Misión</h2>
            <Separator className="w-24 bg-primary" />
            <p className="text-gray-600">
              Nuestra misión es impulsar el crecimiento de negocios a través de soluciones digitales innovadoras 
              que transformen la forma en que las empresas se conectan con sus clientes.
            </p>
            
            <div 
              className="mt-8 flex justify-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="relative w-24 h-24">
                <div className="absolute inset-0">
                  <svg
                    className="w-full h-full text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 transform translate-x-1 translate-y-1">
                  <svg
                    className="w-full h-full text-primary-light opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="space-y-4"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h2 className="text-3xl font-bold">Nuestra Visión</h2>
            <Separator className="w-24 bg-primary" />
            <p className="text-gray-600">
              Ser reconocidos como líderes en el desarrollo de experiencias digitales únicas, 
              ayudando a empresas de todo el mundo a destacar en un entorno competitivo.
            </p>

            <div 
              className="mt-8 flex justify-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="relative w-24 h-24">
                <div className="absolute inset-0">
                  <svg
                    className="w-full h-full text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 transform translate-x-1 translate-y-1">
                  <svg
                    className="w-full h-full text-primary-light opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;