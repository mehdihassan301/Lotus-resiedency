import React from 'react';

const Features: React.FC = () => {
  const essentials = [
    { title: "High-Speed Wi-Fi", sub: "Fiber Optic Connection", icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
    )},
    { title: "Air Conditioning", sub: "Split AC in every unit", icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> 
    )},
    { title: "Smart TV", sub: "Netflix & YouTube ready", icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    )},
    { title: "Kitchenette", sub: "Fridge, Microwave & Stove", icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    )},
    { title: "Electric Geyser", sub: "Hot water instantly", icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
    )},
    { title: "24/7 Sweet Water", sub: "Continuous supply", icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
    )},
  ];

  return (
    <div className="container mx-auto px-6 max-w-7xl py-20">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-2">Apartment <span className="text-brand-accent">Essentials</span></h2>
          <p className="text-brand-muted">Everything you need for a comfortable stay.</p>
        </div>
        <div className="h-1 w-24 bg-brand-accent rounded hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {essentials.map((item, idx) => (
          <div 
            key={idx}
            className="group p-6 bg-brand-surface border border-brand-border rounded-xl hover:border-brand-accent transition-all hover:bg-brand-surface/50 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-brand-dark/10 dark:bg-brand-dark rounded-lg flex items-center justify-center text-brand-accent mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-brand-text mb-1">{item.title}</h3>
            <p className="text-sm text-brand-muted font-medium">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;