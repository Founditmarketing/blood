import React from 'react';
import { REVIEWS, BOOKS } from '../constants';

interface ReviewsProps {
  selectedBookId: string | null;
  onClearFilter: () => void;
}

const Reviews: React.FC<ReviewsProps> = ({ selectedBookId, onClearFilter }) => {
  const filteredReviews = selectedBookId 
    ? REVIEWS.filter(review => review.bookId === selectedBookId) 
    : REVIEWS;

  const selectedBook = selectedBookId ? BOOKS.find(b => b.id === selectedBookId) : null;

  return (
    <section id="reviews" className="py-24 bg-stone-100 border-y border-stone-200 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 uppercase tracking-[0.4em] text-[10px] font-black mb-4">Voice of the Reader</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-black text-stone-900">
            {selectedBook ? `Reviews for "${selectedBook.title}"` : 'From the Community'}
          </h3>
          
          {selectedBook && (
            <div className="mt-6 flex flex-col items-center animate-in fade-in slide-in-from-bottom-2 duration-500">
              <button 
                onClick={onClearFilter}
                className="text-[10px] font-black uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors flex items-center gap-2 border-b border-stone-300 pb-1"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Show All Reviews
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => {
              const book = BOOKS.find(b => b.id === review.bookId);
              return (
                <div key={review.id} className="bg-white p-8 shadow-sm border border-stone-200 flex flex-col h-full relative group transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-amber-500 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-2">Verified Purchase</span>
                  </div>
                  
                  <h4 className="text-lg font-serif font-bold text-stone-900 mb-2 italic">"{review.title}"</h4>
                  <p className="text-stone-600 leading-relaxed mb-8 flex-1 italic text-sm">
                    {review.content}
                  </p>
                  
                  <div className="pt-6 border-t border-stone-100 mt-auto">
                    <p className="text-xs font-black uppercase tracking-widest text-stone-900">{review.author}</p>
                    <p className="text-[10px] text-stone-400 font-bold uppercase mt-1">
                      Reviewing: <span className="text-amber-600">{book?.title}</span>
                    </p>
                    <p className="text-[10px] text-stone-300 font-bold uppercase mt-2">{review.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-20 text-center bg-white border border-stone-200 rounded">
              <p className="text-stone-400 font-serif italic text-xl">No reviews found for this selection.</p>
              <button onClick={onClearFilter} className="mt-4 text-amber-600 font-bold uppercase text-[10px] tracking-widest">Show all instead</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;