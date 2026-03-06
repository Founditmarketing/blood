import React from 'react';
import Hero from '../components/Hero';
import Recommendations from '../components/Recommendations';
import Blog from '../components/Blog';
import { BOOKS, AUTHOR_PHOTO, AUTHOR_AKA, BIO } from '../constants';
import { ViewType } from '../App';

interface ViewHomeProps {
  onNavigate: (view: ViewType, params?: any) => void;
}

const ViewHome: React.FC<ViewHomeProps> = ({ onNavigate }) => {
  const latestBook = BOOKS[0];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <Hero onNavigate={onNavigate} />
      
      {/* Latest Release Spotlight */}
      <section className="py-24 bg-white border-y border-stone-100 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-amber-50 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-stone-100 rounded-full scale-110"></div>
              
              <div className="relative z-10 max-w-sm mx-auto group">
                <img 
                  src={latestBook.coverImage} 
                  alt={latestBook.title}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-6 shadow-2xl rounded-sm transform -rotate-3 group-hover:rotate-0 transition-transform">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-1">New Release</p>
                  <p className="font-serif italic font-bold">Healed to Rebuild</p>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-8 bg-amber-500"></span>
                <span className="text-amber-600 font-black uppercase tracking-[0.4em] text-[10px]">Featured Work</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-black text-stone-900 mb-6 leading-tight">
                {latestBook.title}
              </h2>
              <p className="text-xl text-stone-500 font-serif italic mb-10 leading-relaxed">
                "{latestBook.description}"
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('book-detail', { bookId: latestBook.id })}
                  className="px-10 py-5 bg-stone-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-stone-800 transition-all shadow-xl"
                >
                  Explore Details
                </button>
                <a 
                  href={latestBook.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 border border-stone-200 text-stone-900 text-[10px] font-black uppercase tracking-widest hover:bg-stone-50 transition-all flex items-center justify-center gap-2"
                >
                  Available on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Author Section */}
      <section className="py-24 bg-stone-50 overflow-hidden border-b border-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-stone-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Voice Behind the Words</h3>
              <h4 className="text-4xl font-serif font-black text-stone-900 mb-8">Vernon Daniel Blood</h4>
              <p className="text-lg text-stone-600 font-serif leading-loose italic mb-10">
                "{BIO.split('.')[0]}."
              </p>
              <button 
                onClick={() => onNavigate('about')}
                className="text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-amber-500 pb-2 hover:border-amber-600 hover:text-amber-600 transition-all"
              >
                Read Full Biography
              </button>
            </div>
            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-white shadow-2xl -z-10 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="w-72 h-72 md:w-96 md:h-96 min-h-[300px] overflow-hidden group-hover:grayscale-0 transition-all duration-1000 bg-stone-200 relative">
                  <img 
                    src={AUTHOR_PHOTO} 
                    alt={AUTHOR_AKA} 
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                    className="w-full h-full object-cover relative z-10"
                  />
                  {/* Fallback label if network is slow */}
                  <div className="absolute inset-0 flex items-center justify-center text-stone-400 text-[10px] uppercase font-bold tracking-widest z-0">
                    Loading Portrait...
                  </div>
                </div>
                <div className="absolute -bottom-10 -left-10 text-stone-200 pointer-events-none select-none">
                  <span className="text-8xl font-serif italic opacity-30">Daniel Blood</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Recommendations onNavigate={onNavigate} />

      <Blog />
    </div>
  );
};

export default ViewHome;