import React from 'react';

const Highlights: React.FC = () => {
  const items = [
    { label: "5 Exclusive Units", icon: "🏢" },
    { label: "Daily Housekeeping", icon: "🧹" },
    { label: "High-Speed Wi-Fi", icon: "📶" },
    { label: "Secure & Peaceful", icon: "🛡️" },
  ];

  return (
    <div className="border-y border-brand-border bg-brand-surface/50 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl py-6">
        <div className="flex flex-wrap justify-center md:justify-between gap-4">
          {items.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2 px-4 py-2 bg-brand-surface rounded-full border border-brand-border text-brand-muted text-sm font-medium hover:border-brand-accent/50 transition-colors cursor-default"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Highlights;