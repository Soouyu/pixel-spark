const About = () => {
  const stats = [
    { number: "500+", label: "Sitios web entregados" },
    { number: "98%", label: "Satisfacción del cliente" },
    { number: "24/7", label: "Soporte técnico" }
  ];

  return (
    <section id="about" className="py-2 bg-gradient-to-br from-violet-100 via-violet-50 to-white">
      <div className="container mx-auto px-4">
        <div 
          className="max-w-3xl mx-auto text-center" 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="200"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-2">
            Expertos en Desarrollo Digital
          </h2>
          <p className="text-gray-600 mb-4">
            Somos especialistas en crear soluciones web innovadoras y personalizadas. 
            Desde sitios corporativos hasta aplicaciones web complejas, 
            transformamos tus ideas en experiencias digitales excepcionales que 
            impulsan el crecimiento de tu negocio.
          </p>
          
          <div className="grid md:grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="p-3 bg-white rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-offset="200"
              >
                <div className="text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;