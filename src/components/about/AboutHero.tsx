const AboutHero = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto">
        <div 
          className="text-center max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-primary-gradient bg-clip-text text-transparent">
            Sobre PixelSpark
          </h1>
          <p className="text-lg text-gray-600">
            En PixelSpark, transformamos ideas en experiencias digitales. Somos una agencia apasionada por la innovación, 
            combinando creatividad y tecnología para ofrecer soluciones excepcionales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;