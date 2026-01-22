import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-brand-border pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <a href="/" className="text-2xl font-bold tracking-tight text-brand-text block mb-4">
              BeachView<span className="text-brand-accent">Stays</span>
            </a>
            <p className="text-brand-muted text-sm mb-4">
              Premium 1-bedroom serviced apartments in DHA Karachi. The perfect blend of luxury and home comfort.
            </p>
            <p className="text-brand-muted text-sm">
              <span className="block text-brand-text text-xs uppercase font-bold tracking-wider mb-1">Email</span>
              karachi.apartments@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-text font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-brand-muted">
              <li><a href="/" className="hover:text-brand-accent transition-colors">Home</a></li>
              <li><a href="/about.html" className="hover:text-brand-accent transition-colors">About</a></li>
              <li><a href="/gallery.html" className="hover:text-brand-accent transition-colors">Gallery</a></li>
              <li><a href="/features.html" className="hover:text-brand-accent transition-colors">Facilities</a></li>
              <li><a href="/contact.html" className="hover:text-brand-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Location/Contact */}
          <div>
            <h4 className="text-brand-text font-bold mb-6">Location</h4>
            <p className="text-brand-muted text-sm mb-2">DHA, Karachi, Pakistan</p>
            <p className="text-brand-muted text-sm mb-4">Near Sea View Beach</p>
            <a 
              href="https://wa.me/923068230101" 
              className="text-brand-accent text-sm font-bold hover:underline"
            >
              Get Directions via WhatsApp &rarr;
            </a>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-muted text-xs">
            &copy; {currentYear} BeachViewStays. All rights reserved.
          </p>
          <div className="flex gap-4">
             {/* Social placeholders if needed, kept minimal as per requirements */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;