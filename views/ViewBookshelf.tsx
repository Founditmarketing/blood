import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BOOKS } from '../constants';
import { ViewType } from '../App';
import SEO from '../components/SEO';
import TiltCard from '../components/TiltCard';

interface ViewBookshelfProps {
  onNavigate: (view: ViewType, params?: any) => void;
}

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

const ViewBookshelf: React.FC<ViewBookshelfProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('All');

  const genres = ['All', ...Array.from(new Set(BOOKS.map(b => b.genre)))];

  const filteredBooks = filter === 'All'
    ? BOOKS
    : BOOKS.filter(b => b.genre === filter);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-32 pb-24 bg-[#fdfcf8] min-h-screen"
    >
      <SEO title="Bookshelf" description="Explore Daniel Blood's complete collection of books, including spiritual devotionals and legacy journals." />
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif font-black text-stone-900 mb-6">The Bookshelf</h1>
          <p className="text-stone-500 max-w-2xl mx-auto italic font-serif text-xl">
            "A collection dedicated to spiritual growth and the preservation of family history."
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center mb-16 space-x-4 md:space-x-10">
          {genres.map(g => (
            <button
              key={g}
              onClick={() => setFilter(g)}
              className={`text-[10px] font-black uppercase tracking-[0.3em] pb-2 transition-all border-b-2 ${filter === g ? 'border-amber-500 text-stone-900' : 'border-transparent text-stone-400 hover:text-stone-600'
                }`}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {filteredBooks.map(book => (
            <div key={book.id} className="group animate-in fade-in slide-in-from-bottom-8 duration-700">
              <TiltCard intensity={10} className="relative aspect-[3/4] mb-8 bg-stone-100 p-8 flex items-center justify-center overflow-visible shadow-sm hover:shadow-2xl hover:bg-stone-200 transition-all duration-500">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="max-h-full object-contain drop-shadow-xl"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button
                    onClick={() => onNavigate('book-detail', { bookId: book.id })}
                    className="bg-stone-900 text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all border border-stone-800"
                  >
                    View Details
                  </button>
                </div>
              </TiltCard>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">{book.title}</h3>
              <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-black mb-4">{book.subtitle}</p>
              <p className="text-stone-600 text-sm leading-relaxed line-clamp-3 italic mb-6">"{book.description}"</p>
              <div className="flex justify-between items-center border-t border-stone-100 pt-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-stone-300">{book.genre}</span>
                <a href={book.amazonLink} target="_blank" rel="noopener noreferrer" className="text-amber-600 text-[10px] font-black uppercase tracking-widest hover:text-amber-700">Shop Now</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ViewBookshelf;