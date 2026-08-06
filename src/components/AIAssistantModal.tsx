import React, { useState } from 'react';
import { ChatMessage } from '../types';
import { Sparkles, X, Send, Bot, User } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Greetings. I am Alexander Vance\'s AI Assistant. How can I help you regarding website design, WordPress development, UI/UX in Figma, or custom project estimates today?',
      timestamp: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    'How much does a custom WordPress site cost?',
    'What is your typical design & dev timeline?',
    'Tell me about your speed & 98+ PageSpeed optimization.',
    'Do you build custom Elementor themes?'
  ];

  const handleSend = async (textToSend?: string) => {
    const prompt = textToSend || input;
    if (!prompt.trim() || loading) return;

    soundFx.playClick();
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: prompt,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Try backend proxy /api/chat
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt })
      });

      if (response.ok) {
        const data = await response.json();
        const botMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: data.reply || 'Alexander Vance specializes in bespoke WordPress themes, Figma UI/UX design, and 98+ PageSpeed web experiences.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, botMsg]);
      } else {
        throw new Error('API route fallback');
      }
    } catch {
      // Intelligent fallback advisor
      setTimeout(() => {
        let reply = "Alexander Vance builds bespoke WordPress websites, Next.js applications, and high-converting UI/UX designs. Typical project investments range from $1,800 to $5,000 with 2 to 4 week timelines.";
        if (prompt.toLowerCase().includes('cost') || prompt.toLowerCase().includes('price') || prompt.toLowerCase().includes('budget')) {
          reply = "Custom websites typically start at $1,800 for Bespoke WordPress Sites, $1,200 for High-Converting Landing Pages, and $3,500 for WooCommerce Stores. Use our Cost Calculator for an exact breakdown!";
        } else if (prompt.toLowerCase().includes('time') || prompt.toLowerCase().includes('duration') || prompt.toLowerCase().includes('schedule')) {
          reply = "Standard project timelines are 2 to 4 weeks depending on page count and custom block requirements. Priority 10-day sprint options are also available.";
        } else if (prompt.toLowerCase().includes('speed') || prompt.toLowerCase().includes('pagespeed') || prompt.toLowerCase().includes('seo')) {
          reply = "All websites delivered by Alexander Vance achieve 98+ Google Core Web Vitals scores through WebP media conversion, code minification, and clean PHP/React code with zero bloated plugins.";
        }

        const botMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages((prev) => [...prev, botMsg]);
        setLoading(false);
      }, 600);
      return;
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[130] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[var(--bg-surface)] border border-blue-500/40 rounded-3xl max-w-2xl w-full h-[600px] flex flex-col justify-between p-6 relative shadow-2xl text-[var(--text-main)]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)] font-heading">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <Sparkles className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Alexander Vance AI Assistant</h3>
              <p className="text-[10px] text-cyan-400 font-mono">Server-Side Gemini AI Powered</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-[var(--text-main)] flex items-center justify-center transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Log */}
        <div className="flex-1 overflow-y-auto my-4 space-y-4 pr-2 scrollbar-none font-body">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex items-start gap-3 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                m.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
              }`}>
                {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`p-4 rounded-2xl max-w-[80%] text-xs sm:text-sm leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-blue-900/80 text-white border border-blue-500/30'
                  : 'bg-[var(--bg-main)] text-[var(--text-main)] border border-[var(--border-color)]'
              }`}>
                <p>{m.text}</p>
                <span className="text-[9px] text-[var(--text-muted)] font-mono block mt-1 text-right">{m.timestamp}</span>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-blue-400 font-mono animate-pulse">
              <Bot className="w-4 h-4 text-cyan-400" />
              <span>Alexander Vance AI is thinking...</span>
            </div>
          )}
        </div>

        {/* Quick Prompts */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none font-heading">
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              onClick={() => handleSend(qp)}
              className="px-3 py-1 rounded-full bg-[var(--bg-main)] hover:bg-blue-600/20 border border-[var(--border-color)] text-[10px] text-blue-400 whitespace-nowrap transition-colors"
            >
              {qp}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="pt-3 border-t border-[var(--border-color)] flex items-center gap-2 font-body">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about web design, WordPress, or pricing..."
            className="flex-1 bg-[var(--bg-main)] border border-[var(--border-color)] rounded-xl px-4 py-2.5 text-xs text-[var(--text-main)] placeholder-[var(--text-muted)] focus:outline-none focus:border-blue-400"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading}
            className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
