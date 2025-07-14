import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  const scrollToBook = () => {
    const element = document.getElementById('livre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 pt-16" itemScope itemType="https://schema.org/WebPageElement">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenu textuel */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm sm:text-base text-green-700 font-medium">Recommandé par nos lecteurs</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-4 sm:mb-6 leading-tight" itemProp="headline">
              Transformez votre vie avec 
              <span className="text-pink-600"> Glow Secret CM</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-green-700 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0" itemProp="description">
              Découvrez les secrets du bien-être et de l'épanouissement personnel à travers 
              un guide pratique qui a déjà changé la vie de milliers de personnes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
              <button 
                onClick={scrollToBook}
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Découvrir le livre</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <a 
                href="https://amazon.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Acheter sur Amazon</span>
              </a>
            </div>
          </div>

          {/* Image hero */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/imgages/affiche.jpg" 
                alt="Personne lisant le Guide Ultime du Bien-être de Glow Secret CM dans un environnement paisible - développement personnel"
                className="w-full h-full sm:h-80 md:h-96 lg:h-[700px] object-cover rounded-2xl shadow-2xl mx-auto"
                loading="eager"
                itemProp="image"
              />
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-20 sm:h-20 bg-pink-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-200 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 -right-4 sm:-right-8 w-10 h-10 sm:w-16 sm:h-16 bg-green-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;