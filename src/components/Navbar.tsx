import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    console.log('Navigating to:', path);
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-800/90 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/"
            className="text-2xl font-montserrat font-bold bg-primary-gradient bg-clip-text text-transparent"
          >
            PixelSpark
          </Link>
          
          <button 
            className="md:hidden text-gray-800 dark:text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`hidden md:flex items-center space-x-8 ${
            isScrolled ? 'text-white' : 'text-gray-800'
          }`}>
            <button onClick={() => handleNavigation('/')} className="nav-link">Inicio</button>
            <button onClick={() => handleNavigation('/nosotros')} className="nav-link">Nosotros</button>
            <button onClick={() => handleNavigation('/servicios')} className="nav-link">Servicios</button>
            <Link 
              to="/contacto"
              className="bg-primary-gradient text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contáctanos
            </Link>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-gray-800/90 backdrop-blur-sm shadow-lg md:hidden">
              <div className="flex flex-col p-4 space-y-4 text-white">
                <button onClick={() => handleNavigation('/')} className="nav-link">Inicio</button>
                <button onClick={() => handleNavigation('/nosotros')} className="nav-link">Nosotros</button>
                <button onClick={() => handleNavigation('/servicios')} className="nav-link">Servicios</button>
                <Link 
                  to="/contacto"
                  className="bg-primary-gradient text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;