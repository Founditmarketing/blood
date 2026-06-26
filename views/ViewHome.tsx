import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Recommendations from '../components/Recommendations';
import Blog from '../components/Blog';
import { BOOKS } from '../constants';
import { ViewType } from '../App';
import SEO from '../components/SEO';

interface ViewHomeProps {
  onNavigate: (view: ViewType, params?: any) => void;
}

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

const HEALED_DESCRIPTION = [
  `"They will rebuild the ancient ruins and restore the places long devastated; they will renew the ruined cities that have been devastated for generations." — Isaiah 61:4`,
  `At Healed to Rebuild Ministries, we believe that God specializes in restoration. No life is too broken, no heart too wounded, and no past too shattered for His redeeming grace. Our mission is to help people experience the healing power of Jesus Christ so they can be restored, renewed, and rebuilt for His purpose.`,
  `Many people carry the weight of brokenness caused by sin, painful circumstances, trauma, addiction, rejection, loss, or life's disappointments. These burdens can leave us feeling bound, crushed, and without hope. But the gospel declares that Jesus came "to bind up the brokenhearted... to proclaim freedom for the captives... and comfort all who mourn" (Isaiah 61).`,
  `Healed to Rebuild Ministries exists to walk alongside individuals on their journey from brokenness to wholeness. Through biblical teaching, discipleship, encouragement, and practical ministry, we help people discover their identity in Christ, experience spiritual healing, break free from the chains of the past, and embrace the life God has prepared for them.`,
  `God heals us so He can rebuild us to restore a nation. Healing is not the end of the story—it is the beginning of a transformed life that brings hope to others and glory to God. As God restores hearts, He also raises up people who become restorers themselves, rebuilding families, churches, communities, and lives that have been devastated.`,
  `Whether you are seeking healing, searching for hope, or longing for a deeper relationship with Christ, you are welcome here. Together, we believe that what has been broken can be restored, what has been lost can be redeemed, and what God rebuilds becomes stronger than before.`,
  `You are not defined by what has broken you—you are defined by the One who is rebuilding you.`,
];

const ViewHome: React.FC<ViewHomeProps> = ({ onNavigate }) => {
  const latestBook = BOOKS[0];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SEO />
      <Hero onNavigate={onNavigate} />

      {/* Latest Release Spotlight */}
      <section className="py-24 bg-white border-y border-stone-100 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-amber-50 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-stone-100 rounded-full scale-110"></div>

              <div className="relative z-10 max-w-sm mx-auto group">
                <img
                  src={latestBook.coverImage}
                  alt={latestBook.title}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-6 shadow-2xl rounded-sm transform -rotate-3 group-hover:rotate-0 transition-transform">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] mb-1">New Release</p>
                  <p className="font-serif italic font-bold">Healed to Rebuild</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[2px] w-8 bg-amber-500"></span>
                <span className="text-amber-600 font-black uppercase tracking-[0.4em] text-[10px]">Featured Work</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-black text-stone-900 mb-6 leading-tight">
                {latestBook.title}
              </h2>
              <p className="text-xl text-stone-500 font-serif italic mb-10 leading-relaxed">
                "{latestBook.description}"
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('book-detail', { bookId: latestBook.id })}
                  className="px-10 py-5 bg-stone-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-stone-800 transition-all shadow-xl"
                >
                  Explore Details
                </button>
                <a
                  href={latestBook.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 border border-stone-200 text-stone-900 text-[10px] font-black uppercase tracking-widest hover:bg-stone-50 transition-all flex items-center justify-center gap-2"
                >
                  Available on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healed to Rebuild Section */}
      <section className="py-24 bg-stone-50 overflow-hidden border-b border-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-end mb-6">
              <img
                src="/images/healed to rebuild transparent.png"
                alt="Healed to Rebuild Ministries"
                className="h-24 object-contain"
              />
            </div>
            <div className="space-y-5">
              {HEALED_DESCRIPTION.map((para, i) => (
                <p key={i} className={`leading-relaxed ${i === 0 ? 'font-serif italic text-stone-800 text-lg font-medium' : 'text-stone-600 text-base'}`}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Recommendations onNavigate={onNavigate} />

      <Blog />
    </motion.div>
  );
};

export default ViewHome;