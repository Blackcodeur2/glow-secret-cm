import React from 'react';
import { Check, ExternalLink, Heart, Users, Lightbulb } from 'lucide-react';

const BookSection = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Bien-être personnel",
      description: "Techniques éprouvées pour améliorer votre qualité de vie"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Relations harmonieuses",
      description: "Conseils pour développer des relations saines et durables"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Développement personnel",
      description: "Stratégies pour révéler votre plein potentiel"
    }
  ];

  return (
    <section id="livre" className="py-20 bg-white" itemScope itemType="https://schema.org/Book">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4" itemProp="name">
            À propos du livre
          </h2>
          <p className="text-lg sm:text-xl text-green-600 max-w-3xl mx-auto px-4 sm:px-0">
            Un guide complet pour transformer votre vie et atteindre l'épanouissement personnel
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image du livre */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-pink-100 p-4 sm:p-8 rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Couverture du livre Le Guide Ultime du Bien-être par Glow Secret CM - développement personnel et épanouissement"
                className="w-full max-w-xs sm:max-w-md mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
                itemProp="image"
              />
            </div>
          </div>

          {/* Contenu */}
          <div className="px-4 sm:px-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4 sm:mb-6" itemProp="name">
              "Le Guide Ultime du Bien-être"
            </h3>
            
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed" itemProp="description">
              Ce livre révolutionnaire vous accompagne dans votre quête d'épanouissement personnel. 
              À travers des méthodes pratiques et des exercices concrets, Glow Secret CM partage son expertise 
              pour vous aider à créer la vie que vous méritez.
            </p>

            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Découvrez comment surmonter les obstacles, développer votre confiance en vous et 
              construire des relations authentiques. Chaque chapitre vous offre des outils 
              immédiatement applicables pour transformer votre quotidien.
            </p>

            {/* Avantages */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-green-50 rounded-lg">
                  <div className="text-green-600 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-green-800 mb-1">{benefit.title}</h4>
                    <p className="text-sm sm:text-base text-green-700">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bouton d'achat */}
            <a 
              href="https://amazon.fr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto justify-center"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <span>Acheter sur Amazon</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;