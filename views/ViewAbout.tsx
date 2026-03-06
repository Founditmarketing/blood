import React from 'react';
import { BIO, AUTHOR_PHOTO, AUTHOR_AKA } from '../constants';
import { ViewType } from '../App';

interface ViewAboutProps {
  onNavigate: (view: ViewType, params?: any) => void;
}

const ViewAbout: React.FC<ViewAboutProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">
          {/* Author Photo Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group max-w-md mx-auto lg:mx-0">
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-amber-50 rounded-xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden border-[12px] border-white shadow-2xl bg-stone-100 rounded-sm">
                <img 
                  src={AUTHOR_PHOTO} 
                  alt={AUTHOR_AKA} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out" 
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-2 -right-2 bg-stone-900 text-white px-6 py-3 shadow-2xl transform rotate-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap">
                    The Author
                  </span>
                </div>
              </div>
              
              {/* Decorative Frame Line */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-amber-500/30 -z-10"></div>
            </div>
          </div>

          {/* Biography Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[2px] w-12 bg-amber-500"></span>
              <span className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px]">The Storyteller</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-stone-900 mb-8 leading-tight">
              Vernon <span className="text-stone-400 italic">Daniel</span> Blood
            </h1>
            <div className="prose prose-xl prose-stone text-stone-600 italic font-serif leading-loose">
              <p className="first-letter:text-8xl first-letter:font-black first-letter:mr-4 first-letter:float-left first-letter:text-stone-900 first-letter:leading-[0.8]">
                {BIO}
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-8 items-center border-t border-stone-100 pt-10">
              <div>
                <h4 className="text-stone-900 font-serif font-bold text-xl italic mb-1">Philosophy</h4>
                <p className="text-amber-600 font-black uppercase tracking-widest text-[10px]">Healed to Rebuild</p>
              </div>
              <div className="h-10 w-[1px] bg-stone-200 hidden sm:block"></div>
              <div>
                <h4 className="text-stone-900 font-serif font-bold text-xl italic mb-1">Background</h4>
                <p className="text-stone-400 font-black uppercase tracking-widest text-[10px]">History & Education</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote/Philosophy Banner */}
        <section className="bg-stone-900 text-white p-12 md:p-24 relative overflow-hidden mb-32 rounded-sm shadow-2xl">
          <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
             <svg className="w-96 h-96" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
             </svg>
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h3 className="text-amber-500 font-black uppercase tracking-[0.3em] text-[10px] mb-8">Guided by Faith</h3>
            <p className="text-3xl md:text-5xl font-serif font-black italic mb-10 leading-tight">
              "History is the context of our faith, and journaling is the record of our legacy."
            </p>
            <p className="text-stone-400 text-lg leading-relaxed font-light">
              As a veteran history teacher, Daniel believes that understanding our past is essential for building a spiritual legacy. His work bridges the gap between educational discipline and spiritual growth.
            </p>
          </div>
        </section>

        {/* Media Kit Section */}
        <div className="border-t border-stone-100 pt-24 text-center">
          <h3 className="text-stone-400 font-black uppercase tracking-[0.4em] text-[10px] mb-4">Resources</h3>
          <h4 className="text-stone-900 font-serif font-black text-4xl mb-16">Press & Media Kit</h4>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { title: "Official Bio", desc: "Short and long form biographies.", type: "PDF" },
              { title: "Author Photos", desc: "High-resolution headshots.", type: "ZIP" },
              { title: "Book Assets", desc: "Covers and promo graphics.", type: "ZIP" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 border border-stone-100 group hover:border-amber-500 transition-all shadow-sm hover:shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 bg-amber-500 group-hover:h-full transition-all duration-500"></div>
                <h5 className="text-lg font-serif font-bold text-stone-900 mb-3">{item.title}</h5>
                <p className="text-sm font-medium text-stone-500 mb-8">{item.desc}</p>
                <button className="text-amber-600 font-black text-[10px] uppercase tracking-widest border-b-2 border-transparent group-hover:border-amber-500 pb-1 transition-all">
                  Download (.{item.type})
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAbout;