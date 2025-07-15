import React, { useState, useEffect } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Écouter les événements de préremplissage du formulaire
  useEffect(() => {
    const handlePrefillForm = (event: CustomEvent) => {
      const { subject, message } = event.detail;
      setFormData(prev => ({
        ...prev,
        subject: subject || prev.subject,
        message: message || prev.message
      }));
    };

    window.addEventListener('prefillContactForm', handlePrefillForm as EventListener);
    
    return () => {
      window.removeEventListener('prefillContactForm', handlePrefillForm as EventListener);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation des champs requis
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Veuillez entrer une adresse email valide.');
      return;
    }
    
    // Création du lien mailto avec le message exact
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:blackcodeurtest@gmail.com?subject=${subject}&body=${body}`;
    
    // Ouverture du client mail
    window.location.href = mailtoLink;
    
    // Affichage du message de confirmation
    setIsSubmitted(true);
    
    // Reset du message de confirmation après 5 secondes (mais pas du formulaire)
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white" itemScope itemType="https://schema.org/ContactPage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4" itemProp="name">
            Contactez-nous
          </h2>
          <p className="text-lg sm:text-xl text-green-600 max-w-3xl mx-auto px-4 sm:px-0">
            Une question ? Un projet ? N'hésitez pas à nous écrire, nous vous répondrons rapidement
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-0">
          {isSubmitted && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8 text-center mb-8">
              <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">Message préparé !</h3>
              <p className="text-sm sm:text-base text-green-700">
                Votre client mail s'est ouvert avec votre message. Nous vous répondrons rapidement.
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-lg" itemScope itemType="https://schema.org/ContactPoint">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-semibold text-green-800 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-semibold text-green-800 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            
            <div className="mb-4 sm:mb-6">
              <label htmlFor="subject" className="block text-sm sm:text-base font-semibold text-green-800 mb-2">
                Objet *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                placeholder="Sujet de votre message"
              />
            </div>
            
            <div className="mb-6 sm:mb-8">
              <label htmlFor="message" className="block text-sm sm:text-base font-semibold text-green-800 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Envoyer le message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;