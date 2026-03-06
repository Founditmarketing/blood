import React from 'react';
import { AUTHOR_NAME } from '../constants';
import { ViewType } from '../App';

interface FooterProps {
  onNavigate: (view: ViewType, params?: any) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  
  const handleLink = (e: React.MouseEvent, view: ViewType) => {
    e.preventDefault();
    onNavigate(view);
  };

  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <button onClick={(e) => handleLink(e, 'home')} className="text-white font-serif font-bold text-xl mb-1 block">
            {AUTHOR_NAME}
          </button>
          <p className="text-sm">Literary Works of Vernon Daniel Blood</p>
        </div>
        
        <div className="text-sm space-x-6 flex flex-wrap justify-center">
          <button onClick={(e) => handleLink(e, 'home')} className="hover:text-white transition-colors">Home</button>
          <button onClick={(e) => handleLink(e, 'books')} className="hover:text-white transition-colors">Books</button>
          <button onClick={(e) => handleLink(e, 'about')} className="hover:text-white transition-colors">About</button>
          <button onClick={(e) => handleLink(e, 'blog')} className="hover:text-white transition-colors">Journal</button>
          <button onClick={(e) => handleLink(e, 'ai-curator')} className="hover:text-white transition-colors">Curator AI</button>
          <button onClick={(e) => handleLink(e, 'contact')} className="hover:text-white transition-colors">Contact</button>
        </div>
        
        <div className="text-xs font-medium tracking-widest uppercase">
          &copy; {currentYear} {AUTHOR_NAME}. All Rights Reserved.
        </div>
      </div>
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-stone-800 text-center text-[10px] text-stone-600">
        DanielBlood.com • Published by Blood Media Group • Hosted at GoDaddy
      </div>
    </footer>
  );
};

export default Footer;