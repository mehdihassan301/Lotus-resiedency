import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  // Sync state with DOM on mount
  useEffect(() => {
    const currentTheme = document.documentElement.dataset.theme || 'dark';
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '/about.html' },
    { name: 'Facilities', href: '#features' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-brand-dark/90 backdrop-blur-md border-brand-border py-3' : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        
        {/* Brand */}
        <a href="/" className="text-xl md:text-2xl font-bold tracking-tight text-brand-text group">
          BeachView<span className="text-brand-accent">Stays</span><span className="text-brand-muted">.pk</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-brand-muted hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Theme Toggle Desktop */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-brand-muted hover:text-brand-accent hover:bg-brand-surface transition-colors"
            aria-label="Toggle theme"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>

          <a 
            href="/contact" 
            className="px-5 py-2.5 text-sm font-bold bg-brand-accent text-white dark:text-slate-950 rounded hover:opacity-90 transition-all shadow-[0_0_15px_rgba(var(--accent)/0.3)] hover:shadow-[0_0_25px_rgba(var(--accent)/0.5)]"
          >
            Check Availability
          </a>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 text-brand-muted hover:text-brand-accent focus:outline-none"
              aria-label="Toggle theme"
            >
               {theme === 'dark' ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-text hover:text-brand-accent focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-[60px] right-0 w-64 h-[calc(100vh-60px)] bg-brand-surface border-l border-brand-border z-50 flex flex-col p-6 space-y-6 md:hidden shadow-2xl transition-colors duration-300">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-brand-text hover:text-brand-accent"
              >
                {link.name}
              </a>
            ))}
             <a 
              href="/contact" 
              className="w-full text-center px-5 py-3 text-sm font-bold bg-brand-accent text-white dark:text-slate-950 rounded shadow-lg"
            >
              Check Availability
            </a>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;