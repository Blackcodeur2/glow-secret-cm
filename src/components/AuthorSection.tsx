import React from 'react';
import { Award, BookOpen, Users, Heart } from 'lucide-react';

const AuthorSection = () => {
  const achievements = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Auteur reconnu",
      description: "Plus de 50 000 exemplaires vendus"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Coach certifié",
      description: "15 ans d'expérience en développement personnel"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Conférencier",
      description: "Plus de 200 conférences données"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Accompagnement",
      description: "Plus de 1000 personnes accompagnées"
    }
  ];

  return (
    <section id="auteur" className="py-20 bg-gradient-to-br from-green-50 to-pink-50" itemScope itemType="https://schema.org/Person">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4">
            À propos de l'auteur
          </h2>
          <p className="text-lg sm:text-xl text-green-600 max-w-3xl mx-auto px-4 sm:px-0">
            Découvrez Glow Secret CM, votre guide vers l'épanouissement personnel
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Photo et informations */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-6 sm:mb-8">
              <img 
                src="/imgages/auteur.jpg" 
                alt="Glow Secret CM - Expert en développement personnel, auteur du Guide Ultime du Bien-être, coach certifié avec 15 ans d'expérience"
                className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-2xl mx-auto"
                loading="lazy"
                itemProp="image"
              />
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4" itemProp="name">Gilbert TATANG</h3>
          </div>

          {/* Biographie et réalisations */}
          <div className="px-4 sm:px-0">
            <div className="text-gray-700 mb-6 sm:mb-8" itemProp="description">
              <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Passionné par le développement personnel depuis plus de 15 ans, Glow Secret CM a consacré sa vie 
                à aider les autres à découvrir leur potentiel et à créer la vie qu'ils méritent. 
                Son approche unique combine sagesse traditionnelle et techniques modernes de coaching.
              </p>
              
              <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                À travers ses livres, ses formations et ses séances de coaching, Glow Secret CM a touché 
                la vie de milliers de personnes à travers le monde. Sa mission est simple : 
                rendre le bien-être accessible à tous et accompagner chacun vers son épanouissement personnel.
              </p>
              
              <p className="text-sm sm:text-base leading-relaxed">
                <q>Mon objectif est de vous donner les outils pratiques et la confiance nécessaire 
                pour transformer votre vie. Chaque personne mérite de vivre pleinement et d'être heureuse."
                </q>
              </p>
            </div>

            {/* Réalisations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-green-600">
                      {achievement.icon}
                    </div>
                    <h4 className="text-sm sm:text-base font-semibold text-green-800">{achievement.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;