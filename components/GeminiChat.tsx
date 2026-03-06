import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { GeminiAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to the Blood Library archives. I am the Curator. How can I assist you with Daniel\'s works today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const assistantRef = useRef<GeminiAssistant | null>(null);

  useEffect(() => {
    assistantRef.current = new GeminiAssistant();
  }, []);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !assistantRef.current) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      const stream = assistantRef.current.sendMessageStream(userMessage);

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullResponse;
          return newMessages;
        });
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'I apologize, the connection to the archives has been severed. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-stone-900 text-amber-50 rounded-full shadow-2xl flex items-center justify-center hover:bg-stone-800 transition-colors"
            aria-label="Open AI Concierge"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Slide-out Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-stone-900/20 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[450px] z-50 bg-white/80 backdrop-blur-xl border-l border-stone-200 shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-stone-200/50 flex items-center justify-between bg-white/50">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-serif font-black text-stone-900 text-lg">The Legacy Guide</h3>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-stone-400">AI Concierge</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-stone-400 hover:text-stone-900 transition-colors rounded-full hover:bg-stone-100/50"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chat Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] p-4 rounded-2xl ${msg.role === 'user'
                          ? 'bg-stone-900 text-white rounded-tr-none shadow-md'
                          : 'bg-white border border-stone-100 text-stone-800 shadow-sm rounded-tl-none font-serif leading-relaxed'
                        }`}
                    >
                      {msg.text || (isLoading && i === messages.length - 1 ? '...' : '')}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input Area */}
              <div className="p-4 bg-white/50 border-t border-stone-200/50">
                <form onSubmit={handleSend} className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Daniel's legacy..."
                    className="w-full pl-6 pr-14 py-4 bg-white border border-stone-200 rounded-full focus:outline-none focus:border-stone-400 focus:ring-4 focus:ring-stone-100 transition-all font-medium text-stone-700 shadow-inner"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="absolute right-2 w-10 h-10 bg-amber-500 hover:bg-amber-600 disabled:bg-stone-200 text-white rounded-full flex items-center justify-center transition-colors shadow-md disabled:shadow-none"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <Send size={16} className="ml-1" />
                    )}
                  </button>
                </form>

                {messages.length < 3 && !isLoading && (
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {["Tell me about Mom's History", "Spiritual devotionals?"].map(suggestion => (
                      <button
                        key={suggestion}
                        onClick={() => setInput(suggestion)}
                        className="text-[9px] font-bold uppercase tracking-widest text-stone-500 bg-stone-100 px-3 py-1.5 rounded-full hover:bg-stone-200 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default GeminiChat;