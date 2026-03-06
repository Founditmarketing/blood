import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white border-y border-stone-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-stone-400 uppercase tracking-[0.4em] text-[10px] font-black mb-3">The Chronicle</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 leading-tight">Journal & Updates</h3>
          </div>
          <button className="text-stone-900 font-bold border-b-2 border-amber-500 pb-2 hover:text-amber-600 hover:border-amber-600 transition-all text-xs uppercase tracking-widest">
            Join the Newsletter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group">
              <div className="mb-8 overflow-hidden rounded-sm bg-stone-50 aspect-video shadow-md relative border border-stone-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase tracking-widest font-black bg-stone-900 text-white px-3 py-1.5 rounded-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-3 block">{post.date}</span>
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-4 group-hover:text-amber-700 transition-colors leading-tight">
                  {post.title}
                </h4>
                <p className="text-stone-600 leading-relaxed mb-8 line-clamp-3 text-sm font-medium">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-3 text-stone-900 font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                  Read Journal Entry
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;