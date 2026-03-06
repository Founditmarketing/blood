import React, { useState } from 'react';
import { BOOKS, EnhancedBook } from '../constants';

interface BookCardProps {
  book: EnhancedBook;
  onReviewClick: (bookId: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onReviewClick }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [imgStatusMap, setImgStatusMap] = useState<Record<number, 'loading' | 'error' | 'loaded'>>({});
  const isJournal = book.genre === 'Legacy Journal';

  const updateImgStatus = (index: number, status: 'loading' | 'error' | 'loaded') => {
    setImgStatusMap(prev => ({ ...prev, [index]: status }));
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev + 1) % book.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImgIndex((prev) => (prev - 1 + book.images.length) % book.images.length);
  };

  const currentStatus = imgStatusMap[currentImgIndex] || 'loading';

  return (
    <div className="group flex flex-col h-full bg-white border border-stone-200 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative aspect-[3/4] overflow-hidden bg-stone-50 p-6 flex items-center justify-center">
        {/* Badges */}
        {book.id === 'spiritual-development' && (
          <div className="absolute top-4 left-4 z-20">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-stone-900 text-white px-3 py-1.5 shadow-lg">Healed to Rebuild</span>
          </div>
        )}
        {isJournal && (
          <div className="absolute top-4 left-4 z-20 flex flex-col gap-1">
            <span className="text-[8px] font-black uppercase tracking-[0.2em] bg-amber-500 text-white px-2 py-1 shadow-md">7 x 10 Journal</span>
          </div>
        )}
        
        {/* Navigation Arrows */}
        {book.images.length > 1 && (
          <>
            <button 
              onClick={prevImg}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md text-stone-900 opacity-0 group-hover:opacity-100 transition-all hover:bg-amber-500 hover:text-white"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={nextImg}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md text-stone-900 opacity-0 group-hover:opacity-100 transition-all hover:bg-amber-500 hover:text-white"
              aria-label="Next image"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}

        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500 z-10"></div>
        
        {/* Skeleton Loader */}
        {currentStatus === 'loading' && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-100 animate-pulse z-0">
            <div className="w-2/3 h-4/5 bg-stone-200 rounded shadow-inner"></div>
          </div>
        )}

        {/* Error State */}
        {currentStatus === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-50 p-8 text-center border-2 border-dashed border-stone-200 m-4 z-10">
            <svg className="w-12 h-12 text-stone-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Preview Unavailable</p>
          </div>
        )}

        {/* Image Display */}
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
          {book.images.map((img, idx) => (
            <img 
              key={`${book.id}-img-${idx}`}
              src={img} 
              alt={`${book.title} view ${idx + 1}`} 
              referrerPolicy="no-referrer"
              loading={idx === 0 ? "eager" : "lazy"}
              onLoad={() => updateImgStatus(idx, 'loaded')}
              onError={() => updateImgStatus(idx, 'error')}
              className={`absolute max-w-full max-h-full object-contain drop-shadow-2xl transition-all duration-700 ${
                idx === currentImgIndex 
                ? 'opacity-100 translate-x-0 scale-100' 
                : idx < currentImgIndex ? 'opacity-0 -translate-x-full scale-95' : 'opacity-0 translate-x-full scale-95'
              } group-hover:scale-[1.05]`}
            />
          ))}
        </div>

        {/* Pagination Dots */}
        {book.images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-30">
            {book.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentImgIndex(idx); }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentImgIndex ? 'bg-amber-500 w-4' : 'bg-stone-300 hover:bg-stone-400'}`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
        
        <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 pointer-events-none md:pointer-events-auto">
          <a 
            href={book.amazonLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full py-4 bg-amber-500 text-stone-900 font-bold text-center rounded shadow-2xl hover:bg-amber-600 transition-colors text-[10px] uppercase tracking-[0.3em]"
          >
            Buy on Amazon
          </a>
        </div>
      </div>

      <div className="p-8 flex-1 flex flex-col">
        {/* Ratings & Social Proof */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-sm font-black text-stone-900 mr-1">{book.rating.toFixed(1)}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-3.5 h-3.5 ${i < Math.floor(book.rating) ? 'text-amber-500' : 'text-stone-200'} fill-current`} 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <button 
            onClick={() => onReviewClick(book.id)}
            className="text-[10px] text-blue-600 font-bold ml-1 hover:underline cursor-pointer focus:outline-none"
            aria-label={`View ${book.reviewCount} reviews for ${book.title}`}
          >
            ({book.reviewCount})
          </button>
        </div>

        <h3 className="text-2xl font-serif font-black text-stone-900 mb-1 leading-tight group-hover:text-amber-700 transition-colors">
          {book.title}
        </h3>
        <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400 font-bold mb-4">{book.subtitle}</p>
        
        {book.bioSnippet && (
          <div className="mb-6 p-4 bg-stone-50 border-l-2 border-amber-500 text-xs italic text-stone-500 leading-relaxed font-serif">
            {book.bioSnippet}
          </div>
        )}

        <div className="text-stone-600 text-sm leading-relaxed mb-8 flex-1 font-medium line-clamp-4">
          "{book.description}"
        </div>
        
        <div className="pt-6 border-t border-stone-100 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em]">
          <span className="text-stone-900">{book.format}</span>
          <span className="text-stone-400">{book.genre}</span>
        </div>
      </div>
    </div>
  );
};

interface BooksProps {
  onReviewClick: (bookId: string) => void;
}

const Books: React.FC<BooksProps> = ({ onReviewClick }) => {
  return (
    <section id="books" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-amber-600 uppercase tracking-[0.5em] text-[10px] font-black mb-4">The Collection</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-black text-stone-900 mb-6">Faith & Family Heritage</h3>
          <p className="text-stone-500 text-lg leading-relaxed font-light italic">
            "History is the context of our faith, and journaling is the record of our legacy."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BOOKS.map((book) => (
            <BookCard key={book.id} book={book} onReviewClick={onReviewClick} />
          ))}
        </div>

        <div className="mt-20 p-12 bg-stone-900 rounded-sm text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <svg className="w-64 h-64 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <div className="relative z-10">
            <h4 className="text-3xl font-serif font-black text-white mb-4 italic">The Official Amazon Storefront</h4>
            <p className="text-stone-400 mb-10 max-w-2xl mx-auto font-medium">
              Browse all works by Vernon Daniel Blood, including legacy journals and workplace devotionals.
            </p>
            <a 
              href="https://www.amazon.com/stores/Vernon-Daniel-Blood/author/B0DP1R44MX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-12 py-6 bg-amber-500 hover:bg-amber-600 text-stone-900 font-black transition-all shadow-2xl text-[10px] uppercase tracking-[0.4em]"
            >
              Browse Full Author Store
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;