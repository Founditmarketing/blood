
import React from 'react';
import { RECOMMENDATIONS, BOOKS, AUTHOR_AKA, AUTHOR_PHOTO } from '../constants';
import { ViewType } from '../App';

interface RecommendationsProps {
  onNavigate: (view: ViewType, params?: any) => void;
}

// Fix: Added onNavigate prop to match the usage in ViewHome.tsx
const Recommendations: React.FC<RecommendationsProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-stone-50 border-b border-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block p-1 mb-6">
            <img 
              src={AUTHOR_PHOTO} 
              alt={AUTHOR_AKA} 
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-20 h-20 rounded-full border-2 border-white shadow-lg mx-auto object-cover"
            />
          </div>
          <h3 className="text-3xl font-serif font-black text-stone-900">{AUTHOR_AKA}'s Book Recommendations</h3>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {RECOMMENDATIONS.map((rec) => {
            const book = BOOKS.find(b => b.id === rec.bookId);
            if (!book) return null;

            return (
              <div key={rec.id} className="bg-white p-8 border border-stone-200 rounded shadow-sm hover:shadow-md transition-shadow flex gap-8 items-start">
                <div className="w-32 flex-shrink-0 shadow-xl border border-stone-100 rotate-1">
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-auto" 
                  />
                </div>
                <div>
                  <h4 className="text-stone-900 font-serif font-black italic mb-3 leading-tight">
                    {rec.question}
                  </h4>
                  <div className="mb-4">
                    <span className="text-xs font-black uppercase tracking-widest text-stone-900">{book.title}</span>
                    <span className="text-[10px] text-stone-400 block font-bold mt-1 uppercase">by {AUTHOR_AKA}</span>
                  </div>
                  <div className="relative">
                    <svg className="absolute -top-2 -left-4 w-6 h-6 text-stone-100 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V12H15.017C13.9124 12 13.017 11.1046 13.017 10V6C13.017 4.89543 13.9124 4 15.017 4H19.017C20.1216 4 21.017 4.89543 21.017 6V16C21.017 18.7614 18.7784 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017V12H4.017C2.91243 12 2.017 11.1046 2.017 10V6C2.017 4.89543 2.91243 4 4.017 4H8.017C9.12157 4 10.017 4.89543 10.017 6V16C10.017 18.7614 7.77843 21 5.017 21H3.017Z" />
                    </svg>
                    <p className="text-stone-600 font-serif text-lg leading-relaxed relative z-10 italic">
                      "{rec.quote}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
