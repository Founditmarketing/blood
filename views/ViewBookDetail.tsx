import React, { useState } from 'react';
import { BOOKS, REVIEWS } from '../constants';
import { ViewType } from '../App';
import SEO from '../components/SEO';

interface ViewBookDetailProps {
  bookId: string;
  onNavigate: (view: ViewType, params?: any) => void;
}

const ViewBookDetail: React.FC<ViewBookDetailProps> = ({ bookId, onNavigate }) => {
  const book = BOOKS.find(b => b.id === bookId);
  const [activeImg, setActiveImg] = useState(0);

  if (!book) return <div className="pt-40 text-center">Book not found.</div>;

  const bookReviews = REVIEWS.filter(r => r.bookId === bookId);

  return (
    <div className="pt-32 pb-24">
      <SEO title={book.title} description={book.description.substring(0, 160)} image={book.images[0]} />
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="mb-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-stone-400">
          <button onClick={() => onNavigate('books')} className="hover:text-stone-900">Bookshelf</button>
          <span>/</span>
          <span className="text-stone-900">{book.title}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-20 mb-24">
          {/* Enhanced Cover Area with Carousel */}
          <div className="lg:col-span-5">
            <div className="sticky top-40">
              <div className="bg-white p-8 md:p-12 border border-stone-100 shadow-2xl relative overflow-hidden group">
                <div className="aspect-[3/4] flex items-center justify-center relative">
                  {book.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${book.title} view ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className={`absolute max-h-full object-contain drop-shadow-2xl transition-all duration-700 ${idx === activeImg ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                    />
                  ))}
                </div>

                {/* Carousel Navigation */}
                {book.images.length > 1 && (
                  <div className="mt-10 flex justify-center gap-3">
                    {book.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImg(idx)}
                        className={`w-16 h-20 border-2 transition-all overflow-hidden ${activeImg === idx ? 'border-amber-500 scale-110' : 'border-stone-100 grayscale hover:grayscale-0'
                          }`}
                      >
                        <img src={img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-5 bg-amber-500 text-stone-900 text-[10px] font-black uppercase tracking-[0.3em] text-center hover:bg-amber-600 transition-all shadow-lg"
                >
                  Purchase on Amazon
                </a>
                <p className="text-center text-[10px] font-bold text-stone-400 uppercase tracking-widest">Official {book.format} • Published {book.releaseDate}</p>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-6xl font-serif font-black text-stone-900 mb-4">{book.title}</h1>
            <p className="text-xl text-amber-600 font-serif italic mb-10 leading-relaxed">{book.subtitle}</p>

            <div className="prose prose-stone max-w-none text-stone-600 text-lg leading-relaxed mb-16 italic">
              <p>"{book.description}"</p>
            </div>

            {/* Unique Journal Features */}
            <div className="bg-stone-50 p-10 border-l-4 border-stone-900 mb-16">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-900 mb-8">Journal Specifications</h3>
              <ul className="grid sm:grid-cols-2 gap-8">
                {[
                  "7 x 10 inch generous writing space",
                  "125 pages of premium high-quality paper",
                  "Inspirational guided writing prompts",
                  "Dedicated family history & ancestry sections",
                  "Milestone tracking for future generations",
                  "Faith-based guidance for spiritual legacy"
                ].map(item => (
                  <li key={item} className="flex gap-4 items-start">
                    <span className="w-4 h-4 rounded-full border border-amber-500 flex-shrink-0 mt-1 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                    </span>
                    <span className="text-sm font-bold text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Author Insight */}
            {book.bioSnippet && (
              <div className="mb-20 border-t border-stone-100 pt-12">
                <h4 className="text-stone-400 font-black uppercase tracking-widest text-[10px] mb-6">Author's Intent</h4>
                <p className="text-2xl font-serif italic text-stone-800 leading-relaxed">
                  "{book.bioSnippet}"
                </p>
              </div>
            )}

            {/* Reviews Section */}
            <section id="book-reviews" className="border-t border-stone-100 pt-16">
              <h3 className="text-2xl font-serif font-black text-stone-900 mb-8">Reader Responses</h3>
              {bookReviews.length > 0 ? (
                <div className="space-y-8">
                  {bookReviews.map(review => (
                    <div key={review.id} className="bg-white p-8 border border-stone-100 shadow-sm relative">
                      <div className="flex gap-1 mb-4 text-amber-500">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                      <p className="text-stone-800 font-serif italic mb-4">"{review.content}"</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">— {review.author}, Verified Reader</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-stone-400 italic">No reviews yet for this specific edition. Be the first on Amazon!</p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBookDetail;