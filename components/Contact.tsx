
import React from 'react';
import { AUTHOR_NAME, AMAZON_STORE_URL } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-serif font-bold text-stone-900 mb-6">Connect with the Author</h3>
              <p className="text-stone-600 mb-8">
                For media inquiries, speaking engagements, or just to share your thoughts on the books, please use the form or follow Daniel on social media.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-stone-700">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded border border-stone-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-medium">contact@danielblood.com</span>
                </div>
                <a href={AMAZON_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-stone-700 hover:text-amber-600 transition-colors">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center rounded border border-stone-100">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                  </div>
                  <span className="font-medium">Amazon Author Profile</span>
                </a>
              </div>
            </div>

            <form className="space-y-4 bg-white p-8 border border-stone-200 shadow-sm" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-stone-900/5 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-stone-900/5 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-stone-900/5 transition-all"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-stone-900 text-white font-bold hover:bg-stone-800 transition-all uppercase tracking-widest text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
