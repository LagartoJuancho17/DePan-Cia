
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

const AIService: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [history, setHistory] = useState<{ role: 'user' | 'ai'; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    const userMessage = prompt;
    setPrompt('');
    setHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: "You are 'Pan&Cia AI', a world-class bakery assistant. Give expert advice on bread pairings, storage, and details about our slow-fermentation process. Keep responses warm, helpful, and sophisticated. Use emojis sparingly. Mention Artisan Red accents in our branding if relevant to passion.",
        }
      });

      const aiText = response.text || "I'm sorry, I'm having trouble focusing on the dough right now. Can you try again?";
      setHistory(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error('AI Error:', error);
      setHistory(prev => [...prev, { role: 'ai', text: "The oven is a bit too hot right now! Please try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[60] bg-[#D12626] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-[10px] font-black uppercase tracking-widest px-0 group-hover:px-2">
          Ask our Baker
        </span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-[60] w-[90vw] md:w-[420px] h-[550px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-black/5 flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 duration-500">
          <div className="bg-[#2a2a2a] text-[#fcfaf7] p-8 flex justify-between items-center">
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-[#D12626]">Pan&Cia AI</h3>
              <p className="text-[9px] opacity-40 uppercase tracking-tighter mt-1 font-bold">Artisanal Bakery Assistant</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-40 hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-8 space-y-6 hide-scrollbar bg-[#fcfaf7]/50">
            {history.length === 0 && (
              <div className="text-center py-16 opacity-30">
                <div className="text-5xl mb-6">🥖</div>
                <p className="text-xs font-bold uppercase tracking-widest">Knead some advice?</p>
              </div>
            )}
            {history.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-3xl text-sm leading-relaxed font-medium ${
                  msg.role === 'user' 
                  ? 'bg-[#D12626] text-white rounded-tr-none shadow-lg shadow-[#D12626]/20' 
                  : 'bg-[#2a2a2a] text-white rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-black/5 p-5 rounded-3xl rounded-tl-none text-xs font-bold uppercase tracking-widest animate-pulse">
                  Kneading...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleAskAI} className="p-8 border-t border-black/5 bg-white">
            <div className="relative">
              <input 
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask our baker..."
                className="w-full bg-[#efede9] rounded-full px-8 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#D12626] transition-all pr-16"
              />
              <button 
                disabled={isLoading}
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#D12626] text-white p-2.5 rounded-full hover:scale-105 transition-transform disabled:opacity-30 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIService;
