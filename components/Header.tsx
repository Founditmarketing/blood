
import React, { useState, useEffect } from 'react';
import { AUTHOR_NAME, NAV_ITEMS } from '../constants';
import { ViewType } from '../App';

interface HeaderProps {
  currentView: ViewType;
  onNavigate: (view: ViewType, params?: any) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fix: handleLinkClick now checks raw string values before casting to ViewType to avoid comparison errors
  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const rawView = href.replace('#', '');

    let targetView: ViewType;
    if (rawView === 'home' || rawView === '') {
      targetView = 'home';
    } else if (rawView === 'blog') {
      targetView = 'blog';
    } else {
      targetView = rawView as ViewType;
    }

    onNavigate(targetView);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentView !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={(e) => handleLinkClick(e, '#home')}
          className="text-xl md:text-2xl font-serif font-black tracking-tighter text-stone-900 group"
        >
          <span className="group-hover:text-amber-600 transition-colors">DANIEL</span>
          <span className="text-stone-400 group-hover:text-stone-500 transition-colors ml-1">BLOOD</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => {
            const itemKey = item.href.replace('#', '');
            const active = currentView === itemKey || (currentView === 'home' && itemKey === 'home');

            return (
              <button
                key={item.label}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all relative py-2 ${active ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'
                  }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500 animate-in slide-in-from-left-2"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-stone-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-100 absolute w-full top-full left-0 animate-in slide-in-from-top-4 duration-300 shadow-xl">
          <nav className="flex flex-col p-8 space-y-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-left text-xl font-serif font-bold ${currentView === item.href.replace('#', '') ? 'text-amber-600' : 'text-stone-600'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
