import React, { useState, useEffect, useRef } from 'react';

const IMAGES = [
  '/assets/hero-1.jpg',
  '/assets/hero-2.jpg',
  '/assets/hero-3.jpg'
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.length); // Swipe Left
    }
    if (touchStartX.current - touchEndX.current < -50) {
      setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length); // Swipe Right
    }
  };

  const whatsAppMessage = encodeURIComponent("Hi, I'd like to check dates for BeachViewStays. Check-in: [Date], Guests: [Number]");
  const whatsAppUrl = `https://wa.me/923068230101?text=${whatsAppMessage}`;

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-6 container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div className="order-2 md:order-1 flex flex-col items-start space-y-6 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-brand-text">
          Relax. Stay.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">
            Enjoy the View.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-brand-muted max-w-md border-l-2 border-brand-accent pl-4">
          Premium serviced 1-bedroom apartments near the beach in DHA Karachi.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2">
          <a 
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-accent text-white dark:text-slate-950 font-bold rounded hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(var(--accent)/0.4)] w-full sm:w-auto"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            WhatsApp for Dates
          </a>
          <a 
            href="/contact" 
            className="flex items-center justify-center gap-2 px-8 py-3.5 border border-brand-border text-brand-muted font-semibold rounded hover:bg-brand-surface hover:text-brand-text transition-colors w-full sm:w-auto"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Right Content - Carousel */}
      <div 
        className="order-1 md:order-2 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl shadow-brand-accent/10 border border-brand-border bg-brand-surface"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {IMAGES.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={src} 
              alt={`Apartment view ${index + 1}`} 
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              onError={(e) => {
                 const target = e.target as HTMLImageElement;
                 target.src = `https://picsum.photos/800/600?random=${index}`; 
              }}
            />
            {/* Dark overlay specifically for text contrast on images if needed, but removed for cleaner look in light mode */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-brand-accent hover:text-white transition-colors backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % IMAGES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-brand-accent hover:text-white transition-colors backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentSlide ? 'bg-brand-accent w-8' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
