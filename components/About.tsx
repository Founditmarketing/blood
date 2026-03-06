
import React from 'react';
import { BIO, AUTHOR_PHOTO, AMAZON_ABOUT_URL } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative border-y border-stone-800">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <div className="absolute inset-0 border border-stone-700 translate-x-4 translate-y-4"></div>
          <div className="relative z-10 aspect-[4/5] overflow-hidden shadow-2xl transition-all duration-1000 border-4 border-stone-800">
             <img 
              src={AUTHOR_PHOTO} 
              alt="Vernon Daniel Blood - Author and Educator" 
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 z-20 bg-amber-500 text-stone-900 p-6 shadow-xl">
            <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-2">Philosophy</p>
            <p className="text-lg font-serif italic font-bold leading-tight">"Healed to Rebuild"</p>
          </div>
        </div>
        
        <div className="lg:col-span-7 relative z-10 order-1 lg:order-2">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-amber-500/50"></span>
            <span className="text-amber-500 font-black uppercase tracking-[0.4em] text-[10px]">The Author's Heart</span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-10 leading-none">
            Teaching Legacy through <br/><span className="text-stone-400 italic">Faith & History.</span>
          </h3>
          <div className="space-y-8 text-stone-300 text-lg leading-relaxed font-light">
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:text-amber-500 first-letter:leading-[0.8] drop-shadow-sm">
              {BIO}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-800">
               <div>
                  <h4 className="text-white font-serif font-bold mb-2">Educator</h4>
                  <p className="text-sm text-stone-500">Bringing historical perspective to spiritual growth.</p>
               </div>
               <div>
                  <h4 className="text-white font-serif font-bold mb-2">Devotee</h4>
                  <p className="text-sm text-stone-500">Committed to serving Jesus and family legacy.</p>
               </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">
            <a 
              href={AMAZON_ABOUT_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-white text-stone-900 px-10 py-5 font-black text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all duration-300 shadow-2xl flex items-center gap-3"
            >
              Full Amazon Profile
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-stone-500 italic font-serif text-lg">
              "History is the witness of spiritual truth."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;