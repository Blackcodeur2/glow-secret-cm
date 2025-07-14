import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BookSection from './components/BookSection';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import AuthorSection from './components/AuthorSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BookSection />
      <ProductsSection />
      <ServicesSection />
      <AuthorSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
