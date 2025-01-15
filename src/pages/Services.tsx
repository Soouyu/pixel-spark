import Navbar from '../components/Navbar';
import DetailedServices from '../components/DetailedServices';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          Nuestros Servicios
        </h1>
      </div>
      <DetailedServices />
      <Footer />
    </div>
  );
};

export default Services;