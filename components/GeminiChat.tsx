
import React, { useState, useRef, useEffect } from 'react';
import { GeminiAssistant } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiChat: React.FC = () => {
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
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
    <section id="ai-chat" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-stone-400 uppercase tracking-widest text-xs font-bold mb-3">Interactive</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Ask the Curator</h3>
          <p className="mt-4 text-stone-600 text-sm md:text-base px-4">Get insights into Daniel's writing, legacy journals, and spiritual devotionals via our AI assistant.</p>
        </div>

        <div className="bg-stone-50 border border-stone-200 rounded-lg shadow-sm flex flex-col h-[500px] md:h-[600px] overflow-hidden">
          {/* Chat Header */}
          <div className="p-3 md:p-4 border-b border-stone-200 bg-stone-100 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-stone-500">Curator AI (Gemini Flash)</span>
            </div>
            <button 
              onClick={() => setMessages([{ role: 'model', text: 'The archives have been reset. How may I help you?' }])}
              className="text-[10px] md:text-xs text-stone-400 hover:text-stone-600 underline font-medium"
            >
              Reset
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[90%] md:max-w-[80%] px-4 py-2.5 md:py-3 rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-stone-900 text-white rounded-tr-none text-sm md:text-base' 
                      : 'bg-white border border-stone-200 text-stone-800 shadow-sm rounded-tl-none font-serif text-base md:text-lg leading-relaxed'
                  }`}
                >
                  {msg.text || (isLoading && i === messages.length - 1 ? '...' : '')}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 md:p-4 bg-white border-t border-stone-200 flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a specific book..."
              className="flex-1 px-3 md:px-4 py-2 md:py-3 border border-stone-200 rounded focus:outline-none focus:ring-2 focus:ring-stone-900/10 transition-all text-sm md:text-base"
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-stone-900 text-white px-4 md:px-6 py-2 md:py-3 rounded font-bold hover:bg-stone-800 disabled:opacity-50 transition-all flex items-center justify-center min-w-[60px]"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="hidden sm:inline mr-2">Send</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
        
        <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs font-bold text-stone-400 uppercase tracking-widest text-center">
          <button onClick={() => setInput("What is your latest book?")} className="hover:text-stone-600 transition-colors cursor-pointer">"What is your latest book?"</button>
          <span className="hidden md:inline">•</span>
          <button onClick={() => setInput("Tell me about Mom's History")} className="hover:text-stone-600 transition-colors cursor-pointer">"Tell me about Mom's History"</button>
          <span className="hidden md:inline">•</span>
          <button onClick={() => setInput("Spiritual development tips?")} className="hover:text-stone-600 transition-colors cursor-pointer">"Spiritual development tips?"</button>
        </div>
      </div>
    </section>
  );
};

export default GeminiChat;