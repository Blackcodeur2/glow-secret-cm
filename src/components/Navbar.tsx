import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo et nom */}
          <div className="flex items-center space-x-3">
            <img
              src="/imgages/gs_logo.jpg"
              alt="Glow Secret CM Logo"
              style={{
                width: '120px',
                height: '60px',
                borderRadius: '12px',
                objectFit: 'cover',
              }} />
          </div>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection('livre')}
              className="text-sm xl:text-base text-green-700 hover:text-pink-600 font-medium transition-colors whitespace-nowrap"
            >
              À propos du livre
            </button>
            <button
              onClick={() => scrollToSection('produits')}
              className="text-sm xl:text-base text-green-700 hover:text-pink-600 font-medium transition-colors"
            >
              Produits
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm xl:text-base text-green-700 hover:text-pink-600 font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('auteur')}
              className="text-sm xl:text-base text-green-700 hover:text-pink-600 font-medium transition-colors whitespace-nowrap"
            >
              L'auteur
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm xl:text-base text-green-700 hover:text-pink-600 font-medium transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Menu mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-700 hover:text-pink-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile ouvert */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('livre')}
                className="block w-full text-left px-3 py-3 text-green-700 hover:text-pink-600 hover:bg-green-50 font-medium rounded-lg transition-colors"
              >
                À propos du livre
              </button>
              <button
                onClick={() => scrollToSection('produits')}
                className="block w-full text-left px-3 py-3 text-green-700 hover:text-pink-600 hover:bg-green-50 font-medium rounded-lg transition-colors"
              >
                Produits
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-3 text-green-700 hover:text-pink-600 hover:bg-green-50 font-medium rounded-lg transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('auteur')}
                className="block w-full text-left px-3 py-3 text-green-700 hover:text-pink-600 hover:bg-green-50 font-medium rounded-lg transition-colors"
              >
                À propos de l'auteur
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-3 text-green-700 hover:text-pink-600 hover:bg-green-50 font-medium rounded-lg transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;