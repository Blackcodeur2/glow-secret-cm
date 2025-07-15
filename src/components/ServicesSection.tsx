import React from 'react';
import { Users, Mic, BookOpen, Heart } from 'lucide-react';

const ServicesSection = () => {
  const scrollToContact = (serviceName: string, serviceDescription: string) => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Attendre que le scroll soit terminé avant d'envoyer l'événement de préremplissage
      setTimeout(() => {
        // Envoyer un événement personnalisé pour préremplir le formulaire
        const event = new CustomEvent('prefillContactForm', {
          detail: {
            subject: `Demande d'information - ${serviceName}`,
            message: `Bonjour,\n\nJe souhaiterais obtenir plus d'informations concernant votre service "${serviceName}".\n\n${serviceDescription}\n\nPouvez-vous me donner plus de détails sur ce service et ses modalités ?\n\nCordialement,`
          }
        });
        window.dispatchEvent(event);
      }, 800);
    }
  };

  const services = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Manicure et Pédicure",
      description: "Ateliers pratiques et formations complètes pour maîtriser les techniques de bien-être",
      image: "/imgages/manicure.jpg"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Soins du Visage",
      description: "Sessions collectives pour créer des liens et partager des expériences enrichissantes",
      image: "/imgages/visage.avif"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white" itemScope itemType="https://schema.org/Service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4" itemProp="name">
            Nos Services
          </h2>
          <p className="text-lg sm:text-xl text-green-600 max-w-3xl mx-auto px-4 sm:px-0" itemProp="description">
            Un accompagnement professionnel adapté à vos besoins pour votre épanouissement personnel
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300" itemScope itemType="https://schema.org/Service">
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={`${service.title} - Service de développement personnel par Glow Secret CM`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Contenu superposé */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-yellow-400">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold" itemProp="name">{service.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed" itemProp="description">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Overlay au hover */}
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;