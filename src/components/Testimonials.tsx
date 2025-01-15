import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';

const TESTIMONIALS_DATA = [
  {
    name: "Ana García",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    text: "PixelSpark transformó completamente nuestra presencia digital. Su equipo es increíblemente profesional y dedicado."
  },
  {
    name: "Carlos Rodríguez",
    role: "Director de Marketing, InnovateMKT",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    text: "La atención al detalle y la creatividad de PixelSpark son excepcionales. Superaron todas nuestras expectativas."
  },
  {
    name: "Laura Martínez",
    role: "Fundadora, EcoStyle",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    text: "Gracias a PixelSpark, nuestro sitio web ahora refleja perfectamente nuestra marca y valores."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS_DATA[0] }) => (
  <div className="bg-white p-4 rounded-lg shadow-md h-full">
    <img 
      src={testimonial.image} 
      alt={testimonial.name}
      className="w-12 h-12 rounded-full mx-auto mb-3 object-cover"
      loading="lazy"
    />
    <p className="text-gray-600 mb-3 italic text-sm">
      "{testimonial.text}"
    </p>
    <div className="text-center">
      <h4 className="font-bold text-sm">{testimonial.name}</h4>
      <p className="text-gray-500 text-xs">{testimonial.role}</p>
    </div>
  </div>
);

const Testimonials = () => {
  console.log('Rendering Testimonials component');
  
  return (
    <section id="testimonials" className="py-8 bg-gradient-to-br from-green-100 via-green-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nos enorgullece el impacto positivo que generamos en nuestros clientes.
          </p>
        </div>

        <Swiper
          modules={[A11y, Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonials-swiper"
        >
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;