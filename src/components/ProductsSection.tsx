import React from 'react';
import { ShoppingBag, Download, Video, Users } from 'lucide-react';

const ProductsSection = () => {
  const scrollToContact = (productName: string, productDescription: string) => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Attendre que le scroll soit terminé avant d'envoyer l'événement de préremplissage
      setTimeout(() => {
        // Envoyer un événement personnalisé pour préremplir le formulaire
        const event = new CustomEvent('prefillContactForm', {
          detail: {
            subject: `Demande d'information - ${productName}`,
            message: `Bonjour,\n\nJe souhaiterais obtenir plus d'informations concernant "${productName}".\n\n${productDescription}\n\nPouvez-vous me donner plus de détails sur ce produit ?\n\nCordialement,`
          }
        });
        window.dispatchEvent(event);
      }, 800);
    }
  };

  const products = [
    {
      icon: <Download className="w-8 h-8" />,
      name: "Guide PDF Complémentaire",
      description: "Un guide pratique de 50 pages avec des exercices supplémentaires et des fiches de travail personnalisées pour approfondir votre développement personnel.",
      features: ["50 pages d'exercices", "Fiches de travail", "Accès immédiat"],
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Video className="w-8 h-8" />,
      name: "Formation Vidéo Exclusive",
      description: "Une série de 10 vidéos de formation où Glow Secret CM partage ses techniques avancées et répond aux questions les plus fréquentes de ses lecteurs.",
      features: ["10 vidéos HD", "3h de contenu", "Accès à vie"],
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      name: "Communauté Privée",
      description: "Rejoignez une communauté exclusive de lecteurs motivés où vous pourrez partager vos expériences et recevoir du soutien dans votre parcours.",
      features: ["Groupe privé", "Support continu", "Échanges enrichissants"],
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section id="produits" className="py-20 bg-gray-50" itemScope itemType="https://schema.org/Product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4" itemProp="category">
            Nos Produits
          </h2>
          <p className="text-lg sm:text-xl text-green-600 max-w-3xl mx-auto px-4 sm:px-0">
            Découvrez notre gamme complète de produits pour accompagner votre transformation personnelle
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" itemScope itemType="https://schema.org/Product">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={`${product.name} - Produit de développement personnel par Glow Secret CM`}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
                  <div className="text-green-600">
                    {product.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-3" itemProp="name">
                  {product.name}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed" itemProp="description">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-4 sm:mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => scrollToContact(product.name, product.description)}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>En savoir plus</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;