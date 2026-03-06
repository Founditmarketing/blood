
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, BookOpen, Send } from 'lucide-react';
import Contact from '../components/Contact';
import { ViewType } from '../App';
import SEO from '../components/SEO';

interface ViewContactProps {
  onNavigate: (view: ViewType, params?: any) => void;
}

// Fix: Added onNavigate prop and ViewContactProps interface
const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

const ViewContact: React.FC<ViewContactProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Speaking Engagement',
    message: ''
  });

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="pt-32 pb-24 bg-[#fdfcf8] min-h-screen"
    >
      <SEO title="Contact" description="Reach out to Daniel Blood for speaking engagements, bulk book orders, or to share your reading experience." />
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-serif font-black text-stone-900 mb-6">Connect</h1>
          <p className="text-amber-600 font-black uppercase tracking-[0.5em] text-[10px]">Reach out for speaking or inquiries</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-24 max-w-6xl mx-auto">
          {[
            { label: "Speaking Engagements", desc: "Book Daniel for historical or spiritual workshops.", icon: "M19 20l-7-7 7-7" },
            { label: "Bulk Book Orders", desc: "Special pricing for schools and churches.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
            { label: "Reader Feedback", desc: "Share how Daniel's work has impacted your legacy.", icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 border border-stone-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
              </div>
              <h4 className="text-lg font-serif font-bold text-stone-900 mb-3">{item.label}</h4>
              <p className="text-sm text-stone-500 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        <Contact />
      </div>
    </motion.div>
  );
};

export default ViewContact;
