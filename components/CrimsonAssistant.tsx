import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Sparkles, Loader2, Minimize2 } from 'lucide-react';
import { ChatMessage, LoadingState } from '../types';
import { chatWithVeritasAI } from '../services/geminiService';

const CrimsonAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Hillside English School. I am your Virtual Assistant. How may I help you today?', timestamp: new Date() }
  ]);
  const [loading, setLoading] = useState(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen && inputRef.current) {
        inputRef.current.focus();
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading === LoadingState.LOADING) return;

    const userMessage: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(LoadingState.LOADING);

    // Prepare history for API
    // We use the messages currently in state (before the update) as history
    // because chatWithVeritasAI takes the new message as a separate argument.
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    try {
      const responseText = await chatWithVeritasAI(userMessage.text, history);
      const modelMessage: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
      setMessages(prev => [...prev, modelMessage]);
      setLoading(LoadingState.SUCCESS);
    } catch (e) {
      setLoading(LoadingState.ERROR);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the network.", timestamp: new Date() }]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-royal-800 text-white p-4 rounded-full shadow-lg hover:bg-royal-900 transition-all duration-300 transform hover:scale-110 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Open Chat Assistant"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Interface */}
      <div 
        className={`fixed z-50 bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right border border-gray-200 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
        style={{ maxHeight: '600px', height: '80vh' }}
      >
        {/* Header */}
        <div className="bg-royal-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-1.5 rounded-full">
                    <Sparkles size={16} />
                </div>
                <div>
                    <h3 className="font-bold text-sm">Hillside Assistant</h3>
                    <p className="text-[10px] text-gray-200 flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></span> Online
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-1">
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded transition-colors">
                    <Minimize2 size={18} />
                </button>
            </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div 
                        className={`max-w-[80%] p-3 rounded-lg text-sm shadow-sm ${
                            msg.role === 'user' 
                                ? 'bg-royal-800 text-white rounded-br-none' 
                                : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                        }`}
                    >
                        <p>{msg.text}</p>
                        <p className={`text-[10px] mt-1 text-right ${msg.role === 'user' ? 'text-royal-200' : 'text-gray-400'}`}>
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                    </div>
                </div>
            ))}
            
            {loading === LoadingState.LOADING && (
                <div className="flex justify-start">
                    <div className="bg-white text-gray-800 border border-gray-100 p-3 rounded-lg rounded-bl-none shadow-sm flex items-center space-x-2">
                        <Loader2 size={16} className="animate-spin text-royal-800" />
                        <span className="text-xs text-gray-500">Thinking...</span>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-royal-800/20 focus-within:border-royal-800 transition-all">
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about admissions, fees..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-sm text-gray-700 placeholder-gray-400"
                    disabled={loading === LoadingState.LOADING}
                />
                <button 
                    onClick={handleSend}
                    disabled={!input.trim() || loading === LoadingState.LOADING}
                    className={`p-1.5 rounded-full transition-colors ${
                        !input.trim() || loading === LoadingState.LOADING 
                            ? 'text-gray-300 cursor-not-allowed' 
                            : 'text-royal-800 hover:bg-royal-100'
                    }`}
                >
                    <Send size={18} />
                </button>
            </div>
            <div className="text-center mt-2">
                <p className="text-[10px] text-gray-400">
                    AI can make mistakes. Please verify important info.
                </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default CrimsonAssistant;