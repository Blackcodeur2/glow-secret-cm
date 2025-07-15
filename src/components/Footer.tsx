import React from 'react';
import { MapPin, Facebook, MessageCircle, ShoppingBag, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo et nom */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/imgages/gs_logo.jpg" 
                alt="Glow Secret CM Logo"
                className="w-8 h-8 object-contain rounded-lg"
              />
              <span className="text-lg sm:text-xl font-bold">Glow Secret CM</span>
            </div>
            <p className="text-sm sm:text-base text-green-200 leading-relaxed">
              Votre guide vers l'épanouissement personnel et le bien-être. 
              Transformez votre vie avec nos produits et services de coaching.
            </p>
          </div>

          {/* Localisation */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Notre localisation</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm sm:text-base text-green-200">Glow Secret CM</p>
                <p className="text-sm sm:text-base text-green-200"> Dschang, Cameroun</p>
                
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors inline-block mt-2"
                >
                  Voir sur Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Liens sociaux */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="space-y-3">
              <a 
                href="https://facebook.com/glowsecretcm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm sm:text-base text-green-200 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              
              <a 
                href="https://wa.me/33123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm sm:text-base text-green-200 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
              
              <a 
                href="https://amazon.fr/glow-secret-cm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm sm:text-base text-green-200 hover:text-white transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Amazon</span>
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm mb-4 md:mb-0">
              © 2025 Glow Secret CM. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6 text-sm">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;