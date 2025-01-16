import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PixelSpark</h3>
            <p className="text-gray-400">
              Transformando ideas en experiencias digitales excepcionales.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@pixelspark.com</li>
              <li>+596 0962098467</li>
              <li>Quito, Ecuador</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PixelSpark. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;