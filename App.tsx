import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Essentials from './components/Essentials';
import WhyUs from './components/WhyUs';
import MiniAvailability from './components/MiniAvailability';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  // Global intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-x-hidden min-h-screen flex flex-col font-sans bg-gradient-to-b from-brand-dark via-brand-surface to-brand-dark transition-colors duration-300">
      <Navbar />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="features" className="fade-in-section">
          <Highlights />
        </section>

        <section id="gallery" className="fade-in-section">
          <Essentials />
        </section>

        <section id="about" className="fade-in-section">
          <WhyUs />
        </section>

        <section className="fade-in-section">
          <MiniAvailability />
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;