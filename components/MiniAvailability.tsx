import React from 'react';

const MiniAvailability: React.FC = () => {
  return (
    <div className="container mx-auto px-6 max-w-5xl py-20">
      <div className="bg-brand-highlight rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-rose-900/20 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to book your stay?</h3>
          <p className="text-rose-100 font-medium">Limited availability. Reserve your dates today.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-10">
          <a 
            href="https://wa.me/923068230101"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-brand-highlight font-bold rounded hover:bg-rose-50 transition-colors text-center shadow-lg"
          >
            WhatsApp
          </a>
          <a 
            href="/contact" 
            className="px-6 py-3 bg-black/20 text-white font-bold rounded border border-white/20 hover:bg-black/40 transition-colors text-center"
          >
            Check Availability
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniAvailability;