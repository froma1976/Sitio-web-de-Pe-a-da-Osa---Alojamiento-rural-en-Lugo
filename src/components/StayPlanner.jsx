import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Send, Sparkles, User, Bot, X, MessageCircle } from 'lucide-react';

export default function StayPlanner() {
    const [isOpen, setIsOpen] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const [userName, setUserName] = useState(() => {
        try {
            return localStorage.getItem('osa_username') || '';
        } catch (e) {
            return '';
        }
    });

    const [sessionId, setSessionId] = useState(() => {
        try {
            const existing = localStorage.getItem('osa_session_id');
            if (existing) return existing;
            const newId = 'sess_' + Math.random().toString(36).substring(2, 15);
            localStorage.setItem('osa_session_id', newId);
            return newId;
        } catch (e) {
            return 'sess_fallback';
        }
    });

    const [tempName, setTempName] = useState('');
    const chatContainerRef = useRef(null);

    // Auto-scroll
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages, loading]);

    // Initial Greeting
    useEffect(() => {
        if (userName && isOpen && messages.length === 0) {
            setMessages([
                {
                    role: 'assistant',
                    content: `¡Hola **${userName}**! 👋\n\nSoy Osa, tu concierge personal. Puedo ayudarte a:\n• Ver disponibilidad de fechas\n• Conocer la casa y sus instalaciones\n• Descubrir qué hacer en la Ribeira Sacra\n\n¿En qué puedo ayudarte?`
                }
            ]);
        }
    }, [userName, isOpen]);

    const handleNameSubmit = (e) => {
        e.preventDefault();
        const name = tempName.trim();
        if (name) {
            try {
                localStorage.setItem('osa_username', name);
            } catch (e) {
                console.error("Storage error", e);
            }
            setUserName(name);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        const currentPrompt = prompt;
        const historyForWebhook = [...messages, { role: 'user', content: currentPrompt }];
        setPrompt('');
        setLoading(true);

        setMessages(prev => [...prev, { role: 'user', content: currentPrompt }]);

        try {
            const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

            if (!webhookUrl) {
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        role: 'assistant',
                        content: `¡Hola ${userName}! He recibido tu mensaje. En modo demo no puedo consultar disponibilidad real, pero configura el webhook de n8n para activarme completamente.`
                    }]);
                    setLoading(false);
                }, 1000);
                return;
            }

            const res = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    prompt: currentPrompt,
                    userName: userName,
                    sessionId: sessionId,
                    history: historyForWebhook
                }),
            });

            if (!res.ok) throw new Error(`Error: ${res.status}`);

            const data = await res.json();
            let aiText = null;

            const extractText = (obj) => {
                return obj?.output || obj?.text || obj?.message?.content || null;
            };

            if (Array.isArray(data) && data.length > 0) {
                aiText = extractText(data[0]);
            } else {
                aiText = extractText(data);
            }

            aiText = aiText || "Lo siento, no entendí eso. ¿Puedes reformular tu pregunta?";
            setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "Lo siento, hubo un problema de conexión. Inténtalo de nuevo en un momento."
            }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const handleReset = () => {
        if (window.confirm('¿Quieres borrar el historial y empezar de nuevo?')) {
            setMessages([]);
            try {
                localStorage.removeItem('osa_username');
                localStorage.removeItem('osa_session_id');
            } catch (e) { }
            setUserName('');
            setTempName('');
            const newId = 'sess_' + Math.random().toString(36).substring(2, 15);
            setSessionId(newId);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#d4765d] text-white rounded-full shadow-2xl shadow-[#d4765d]/30 flex items-center justify-center cursor-pointer hover:bg-[#c26952] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4765d] focus-visible:ring-offset-2"
                        aria-label="Abrir chat con Osa"
                    >
                        <MessageCircle className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                        className="fixed bottom-6 right-6 z-50 w-[380px] md:w-[420px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-200 flex flex-col"
                    >
                        {!userName ? (
                            /* === ONBOARDING === */
                            <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-gradient-to-b from-stone-50 to-white">
                                <div className="w-16 h-16 bg-[#d4765d]/10 rounded-full mx-auto flex items-center justify-center mb-6">
                                    <Sparkles className="w-7 h-7 text-[#d4765d]" />
                                </div>
                                <h3 className="text-2xl font-serif text-stone-800 mb-2">¡Hola! Soy Osa</h3>
                                <p className="text-stone-500 mb-8 leading-relaxed">
                                    Tu asistente personal para descubrir Pena da Osa. 
                                    ¿Cómo te llamas?
                                </p>

                                <form onSubmit={handleNameSubmit} className="w-full space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Tu nombre"
                                        className="w-full px-5 py-3 bg-white border-2 border-stone-200 rounded-xl focus:border-[#d4765d] outline-none text-stone-800 placeholder-stone-400 transition-all text-center"
                                        value={tempName}
                                        onChange={(e) => setTempName(e.target.value)}
                                        autoFocus
                                    />
                                    <button
                                        type="submit"
                                        disabled={!tempName.trim()}
                                        className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${!tempName.trim()
                                            ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                                            : 'bg-[#d4765d] text-white hover:bg-[#c26952] shadow-lg shadow-[#d4765d]/20'
                                        }`}
                                    >
                                        Empezar conversación
                                    </button>
                                </form>

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="mt-6 text-stone-400 hover:text-stone-600 text-sm transition-colors"
                                >
                                    Cerrar
                                </button>
                            </div>
                        ) : (
                            /* === CHAT === */
                            <>
                                {/* Header */}
                                <div className="bg-[#1a1e23] p-4 flex items-center justify-between shrink-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#d4765d] flex items-center justify-center">
                                            <Bot className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-serif text-base">Osa</h3>
                                            <p className="text-stone-400 text-xs flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                                Disponibilidad en tiempo real
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <button
                                            onClick={handleReset}
                                            className="p-2 text-stone-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                                            title="Reiniciar conversación"
                                        >
                                            <User className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="p-2 text-stone-400 hover:text-white transition-colors rounded-lg hover:bg-white/10"
                                            aria-label="Cerrar chat"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Messages */}
                                <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 bg-stone-50">
                                    <div className="space-y-4">
                                        {messages.map((msg, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                {msg.role === 'assistant' && (
                                                    <div className="w-8 h-8 rounded-full bg-[#d4765d] flex items-center justify-center shrink-0">
                                                        <Bot className="w-4 h-4 text-white" />
                                                    </div>
                                                )}

                                                <div
                                                    className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed ${
                                                        msg.role === 'user'
                                                            ? 'bg-[#1a1e23] text-white rounded-br-none'
                                                            : 'bg-white text-stone-700 rounded-bl-none shadow-sm border border-stone-200'
                                                    }`}
                                                >
                                                    <ReactMarkdown
                                                        remarkPlugins={[remarkGfm]}
                                                        components={{
                                                            a: ({ node, ...props }) => (
                                                                <a
                                                                    {...props}
                                                                    className="underline hover:opacity-80 text-[#d4765d]"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                />
                                                            ),
                                                            p: ({ node, ...props }) => <p {...props} className="mb-1 last:mb-0" />
                                                        }}
                                                    >
                                                        {msg.content}
                                                    </ReactMarkdown>
                                                </div>

                                                {msg.role === 'user' && (
                                                    <div className="w-8 h-8 rounded-full bg-stone-300 flex items-center justify-center shrink-0">
                                                        <User className="w-4 h-4 text-stone-600" />
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}

                                        {/* Loading */}
                                        {loading && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="flex gap-3 justify-start"
                                            >
                                                <div className="w-8 h-8 rounded-full bg-[#d4765d] flex items-center justify-center shrink-0">
                                                    <Bot className="w-4 h-4 text-white" />
                                                </div>
                                                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-stone-200 flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 bg-[#d4765d] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                                    <span className="w-1.5 h-1.5 bg-[#d4765d] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                                    <span className="w-1.5 h-1.5 bg-[#d4765d] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>

                                {/* Input */}
                                <div className="p-4 bg-white border-t border-stone-200">
                                    <form onSubmit={handleSubmit} className="flex items-center gap-2">
                                        <textarea
                                            className="flex-1 px-4 py-2.5 bg-stone-100 border-none rounded-xl focus:ring-2 focus:ring-[#d4765d]/20 outline-none resize-none text-stone-800 placeholder-stone-400 text-sm min-h-[44px] max-h-[100px]"
                                            rows="1"
                                            placeholder="Escribe tu mensaje..."
                                            value={prompt}
                                            onChange={(e) => setPrompt(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                        />
                                        <button
                                            type="submit"
                                            disabled={loading || !prompt.trim()}
                                            className={`p-2.5 rounded-xl transition-all ${loading || !prompt.trim()
                                                ? 'bg-stone-200 text-stone-400 cursor-not-allowed'
                                                : 'bg-[#d4765d] text-white hover:bg-[#c26952] shadow-md'
                                            }`}
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </form>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
