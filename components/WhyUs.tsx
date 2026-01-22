import React from 'react';

const WhyUs: React.FC = () => {
  return (
    <div className="bg-brand-surface py-20 border-y border-brand-border relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Why Choose <span className="text-brand-accent">Us?</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-brand-surface to-brand-dark border border-brand-border hover:border-brand-accent/50 transition-colors text-center">
            <div className="w-16 h-16 mx-auto bg-brand-dark rounded-full flex items-center justify-center text-3xl mb-6 shadow-inner border border-brand-border">
              👨‍👩‍👧
            </div>
            <h3 className="text-xl font-bold text-brand-text mb-3">Families & Tourists</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              Designed for privacy and comfort. Perfect for small families and travelers visiting Karachi.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-brand-surface to-brand-dark border border-brand-border hover:border-brand-accent/50 transition-colors text-center relative md:-mt-8 shadow-2xl">
            <div className="absolute inset-0 bg-brand-accent/5 rounded-2xl pointer-events-none animate-pulse"></div>
            <div className="w-16 h-16 mx-auto bg-brand-dark rounded-full flex items-center justify-center text-3xl mb-6 shadow-inner border border-brand-accent/30">
              ✨
            </div>
            <h3 className="text-xl font-bold text-brand-text mb-3">Clean & Serviced</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              Immaculate hygiene with daily housekeeping included. We prioritize your health and comfort.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-gradient-to-b from-brand-surface to-brand-dark border border-brand-border hover:border-brand-accent/50 transition-colors text-center">
            <div className="w-16 h-16 mx-auto bg-brand-dark rounded-full flex items-center justify-center text-3xl mb-6 shadow-inner border border-brand-border">
              🏖️
            </div>
            <h3 className="text-xl font-bold text-brand-text mb-3">Near Beach (DHA)</h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              Located in a prime, secure area of DHA. Minutes away from Seaview and major attractions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhyUs;