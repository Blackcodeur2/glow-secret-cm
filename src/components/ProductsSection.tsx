import React from 'react';
import { ShoppingBag, BookOpen, HeartPulse, FlaskConical, Users, Book } from 'lucide-react';

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
      icon: <BookOpen className="w-8 h-8 text-green-700" />,
      name: "Guide Santé Homme",
      description:
        "Un livre dédié aux hommes, révélant des astuces pratiques et naturelles pour maintenir une santé reproductive optimale.",
      price: "6 000 FCFA",
      image:
        "/imgages/livre.jpg"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-pink-600" />,
      name: "Guide Fertilité Femme",
      description:
        "Un guide complet conçu pour les femmes, avec des conseils pour améliorer la fertilité, renforcer le bien-être hormonal et rester en bonne santé.",
      price: "4 000 FCFA",
      image:
        "/imgages/livre.jpg"
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row w-full max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              itemScope
              itemType="https://schema.org/Product"
            >
              {/* Image à gauche, arrondie et centrée */}
              <div className="sm:w-1/3 flex items-center justify-center p-4 bg-gray-50">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={`${product.name} - Produit de santé`}
                    className="w-48 h-48 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-white p-2 rounded-md shadow">
                    <div className="text-green-600">{product.icon}</div>
                  </div>
                </div>
              </div>

              {/* Contenu à droite */}
              <div className="sm:w-2/3 w-full p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-green-800 mb-2" itemProp="name">
                    {product.name}
                  </h3>

                  <p
                    className="text-sm text-gray-700 mb-4 leading-relaxed"
                    itemProp="description"
                  >
                    {product.description}
                  </p>

                  <p className="text-base font-bold text-pink-700 mb-4" itemProp="price">
                    {product.price}
                  </p>
                </div>

                <button
                  onClick={() => scrollToContact(product.name, product.description)}
                  className="mt-auto w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-semibold text-sm transition-colors duration-300 flex items-center justify-center space-x-2"
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