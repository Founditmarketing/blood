import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { ViewType } from '../App';
import SEO from '../components/SEO';

interface ViewJournalProps {
  onNavigate: (view: ViewType, params?: any) => void;
}

// Fix: Added onNavigate prop and ViewJournalProps interface
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

const ViewJournal: React.FC<ViewJournalProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-[#fdfcf8] min-h-screen pt-32 pb-24"
    >
      <SEO title="Journal & Insights" description="Read Daniel Blood's latest essays and reflections on faith, history, and family legacy." />
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h1 className="text-5xl md:text-7xl font-serif font-black text-stone-900 mb-6">The Chronicle</h1>
            <p className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px]">Essays on Legacy & Faith</p>
          </div>

          <div className="space-y-32">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group relative">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div className="overflow-hidden bg-stone-100 aspect-video shadow-2xl relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900 text-white px-3 py-1.5 text-[8px] font-black uppercase tracking-widest">
                      {post.category}
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-bold block mb-4 uppercase tracking-[0.2em]">{post.date}</span>
                    <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6 group-hover:text-amber-600 transition-colors leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-stone-600 leading-loose italic text-lg mb-8">
                      "{post.excerpt}"
                    </p>
                    <button className="text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-stone-900 pb-2 hover:border-amber-500 hover:text-amber-600 transition-all flex items-center gap-3">
                      Read Full Entry
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-40 p-16 bg-stone-50 text-center border border-stone-100">
            <h3 className="text-2xl font-serif font-black text-stone-900 mb-4 italic">Never Miss an Entry</h3>
            <p className="text-stone-500 mb-10 text-sm font-medium">Join Daniel's mailing list for bi-weekly reflections on history, legacy, and faith.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-4 bg-white border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
              <button className="px-10 py-4 bg-stone-900 text-white font-black uppercase tracking-widest text-[10px] hover:bg-stone-800 transition-all">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ViewJournal;
