import React from 'react';
import { AUTHOR_NAME, AUTHOR_PHOTO, AMAZON_STORE_URL } from '../constants';
import { ViewType } from '../App';

interface HeroProps {
  onNavigate: (view: ViewType, params?: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#fdfcf8]">
      {/* Refined Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100/30 -skew-x-12 transform translate-x-32 hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-amber-50 rounded-full blur-[100px] opacity-40"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-amber-200/50 rounded-full bg-amber-50/30">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping"></span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-black text-amber-800">New Journal Series Live</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-black text-stone-900 leading-[0.85] mb-10">
            Vernon <br/>
            <span className="text-stone-400 italic font-medium">Daniel</span> Blood
          </h1>
          
          <p className="text-xl text-stone-600 mb-12 max-w-lg leading-relaxed font-light italic">
            Dedicated to <span className="text-stone-900 font-bold not-italic">spiritual development</span> and the sacred art of preserving legacy for generations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button 
              onClick={() => onNavigate('books')}
              className="px-12 py-6 bg-stone-900 text-white font-black hover:bg-stone-800 transition-all rounded-sm shadow-2xl tracking-[0.2em] text-[10px] uppercase"
            >
              Explore the Collection
            </button>
            <a 
              href={AMAZON_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-white border border-stone-200 text-stone-900 font-black hover:bg-stone-50 transition-all rounded-sm shadow-sm tracking-[0.2em] text-[10px] uppercase flex items-center justify-center gap-2"
            >
              Author Store
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 opacity-40">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Published Works:</span>
            <div className="flex gap-4">
              <div className="w-8 h-[1px] bg-stone-300"></div>
              <div className="w-8 h-[1px] bg-stone-300"></div>
              <div className="w-8 h-[1px] bg-stone-300"></div>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative group max-w-sm w-full">
            {/* Gallery-style frame for the author photo */}
            <div className="absolute -inset-6 bg-stone-100 rounded-sm -z-10 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="absolute -inset-px border border-stone-200 rounded-sm"></div>
            
            <div className="relative bg-white p-6 shadow-2xl rounded-sm border border-stone-100 transform rotate-1 group-hover:rotate-0 transition-all duration-700">
              <img 
                src={AUTHOR_PHOTO} 
                alt="Vernon Daniel Blood - Author and Educator" 
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full rounded-sm shadow-inner aspect-[4/5] object-cover"
              />
              
              {/* Overlay Badge */}
              <div className="absolute -bottom-4 -left-4 bg-amber-500 text-stone-900 px-6 py-4 shadow-xl transform -rotate-6">
                <p className="text-[11px] font-black uppercase tracking-[0.3em] leading-none mb-1">Official Site</p>
                <p className="font-serif italic font-bold">2025 Archive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;