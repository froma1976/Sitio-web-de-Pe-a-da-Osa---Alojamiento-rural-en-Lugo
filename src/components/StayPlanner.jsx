import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Send, Sparkles, User, Bot, ArrowRight, LogOut } from 'lucide-react';

export default function StayPlanner() {
    // State
    const [prompt, setPrompt] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    // User Identity
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

    // Refs
    const chatContainerRef = useRef(null);

    // Auto-scroll
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTo({
                top: chatContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages, loading, userName]); // Added userName to scroll on view switch

    // Initial Greeting Logic
    useEffect(() => {
        if (userName && messages.length === 0) {
            setMessages([
                {
                    role: 'assistant',
                    content: `¡Hola **${userName}**! 👋 Encantada de saludarte.\n\nSoy Osa. Conozco cada rincón de la casa y los mejores secretos de la Ribeira Sacra.\n\n¿Buscas fechas libres para una escapada o algún plan especial?`
                }
            ]);
        }
    }, [userName]); // Only run when userName is set

    // Handlers
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

    const handleReset = () => {
        if (window.confirm('¿Quieres cerrar sesión y borrar el historial?')) {
            setUserName('');
            setMessages([]);
            setTempName('');
            try {
                localStorage.removeItem('osa_username');
                localStorage.removeItem('osa_session_id');
            } catch (e) { }
            // New session logic
            const newId = 'sess_' + Math.random().toString(36).substring(2, 15);
            setSessionId(newId);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        const currentPrompt = prompt;
        setPrompt('');
        setLoading(true);

        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: currentPrompt }]);

        try {
            const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

            // Debug/Fallback Logic
            if (!webhookUrl) {
                console.warn('VITE_N8N_WEBHOOK_URL not set');
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        role: 'assistant',
                        content: `(Modo Demo) ¡Hola ${userName}! He recibido: "${currentPrompt}".\nConfigura la URL del webhook para conectar la IA real.`
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
                    sessionId: sessionId
                }),
            });

            if (!res.ok) throw new Error(`Error: ${res.status}`);

            const data = await res.json();
            const aiText = data.output || data.text || "Lo siento, no entendí eso.";

            setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "Lo siento, hubo un problema de conexión. Inténtalo de nuevo."
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

    // --- RENDER ---
    return (
        <section className="py-24 bg-stone-50 relative overflow-hidden px-4 md:px-0">
            {/* Background FX */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-amber-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto relative z-10 max-w-5xl">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-stone-100 flex flex-col h-[450px] transition-all duration-500">

                    {!userName ? (
                        /* === ONBOARDING === */
                        <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-white space-y-8 animate-in fade-in duration-500">
                            <div className="space-y-4">
                                <div className="w-16 h-16 bg-stone-50 rounded-full mx-auto flex items-center justify-center mb-6 shadow-sm border border-stone-100">
                                    <Sparkles className="w-6 h-6 text-amber-500" />
                                </div>
                                <h3 className="text-3xl font-serif text-stone-800">Bienvenido a Pena da Osa</h3>
                                <p className="text-stone-500 max-w-md mx-auto leading-relaxed">
                                    Soy <span className="font-semibold text-stone-700">Osa</span>, tu asistente personal.
                                    ¿Cómo te gustaría que me dirija a ti?
                                </p>
                            </div>

                            <form onSubmit={handleNameSubmit} className="w-full max-w-sm space-y-4">
                                <input
                                    type="text"
                                    placeholder="Tu nombre..."
                                    className="w-full px-6 py-3 text-center bg-stone-50 border-b-2 border-stone-200 focus:border-amber-500 outline-none text-stone-800 placeholder-stone-400 transition-colors bg-transparent text-lg"
                                    value={tempName}
                                    onChange={(e) => setTempName(e.target.value)}
                                    autoFocus
                                />
                                <button
                                    type="submit"
                                    disabled={!tempName.trim()}
                                    className={`w-full py-3 px-6 rounded-full font-medium transition-all flex items-center justify-center gap-2 ${!tempName.trim()
                                            ? 'bg-stone-100 text-stone-300 cursor-not-allowed'
                                            : 'bg-stone-900 text-white hover:bg-stone-800 shadow-lg cursor-pointer'
                                        }`}
                                >
                                    <span>Comenzar</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    ) : (
                        /* === CHAT === */
                        <>
                            {/* Header */}
                            <div className="bg-white/80 backdrop-blur-md p-3 md:p-4 flex items-center justify-between shrink-0 border-b border-stone-100 z-20">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center overflow-hidden">
                                        <Bot className="w-5 h-5 text-stone-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-stone-800 font-serif text-base tracking-tight">Osa</h3>
                                        <p className="text-stone-400 text-[10px] flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Dispo. Real
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleReset}
                                    className="text-stone-400 hover:text-stone-600 transition-colors p-2 hover:bg-stone-50 rounded-full"
                                    title="Cerrar sesión"
                                >
                                    <LogOut className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Messages */}
                            <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-6 bg-stone-50/30 scroll-smooth">
                                <div className="max-w-4xl mx-auto space-y-6">
                                    {messages.map((msg, index) => (
                                        <div
                                            key={index}
                                            className={`flex gap-4 animate-in slide-in-from-bottom-2 duration-300 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            {msg.role === 'assistant' && (
                                                <div className="w-8 h-8 rounded-full bg-white border border-stone-100 flex items-center justify-center shrink-0 mt-1 shadow-sm text-stone-400">
                                                    <Bot className="w-4 h-4" />
                                                </div>
                                            )}

                                            <div
                                                className={`
                                                    max-w-xl p-4 md:p-5 rounded-2xl shadow-sm text-sm md:text-base leading-relaxed
                                                    ${msg.role === 'user'
                                                        ? 'bg-stone-800 text-white rounded-tr-none'
                                                        : 'bg-white text-stone-600 rounded-tl-none border border-stone-100'
                                                    }
                                                `}
                                            >
                                                <div className={`prose prose-sm md:prose-base max-w-none font-serif ${msg.role === 'user' ? 'prose-invert' : 'prose-stone'}`}>
                                                    <ReactMarkdown
                                                        remarkPlugins={[remarkGfm]}
                                                        components={{
                                                            a: ({ node, ...props }) => (
                                                                <a
                                                                    {...props}
                                                                    className={`underline hover:opacity-80 transition-opacity font-medium ${msg.role === 'user' ? 'text-amber-200' : 'text-amber-600'
                                                                        }`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                />
                                                            ),
                                                            p: ({ node, ...props }) => <p {...props} className="mb-2 last:mb-0" />
                                                        }}
                                                    >
                                                        {msg.content}
                                                    </ReactMarkdown>
                                                </div>
                                            </div>

                                            {msg.role === 'user' && (
                                                <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0 mt-1 shadow-sm text-amber-600">
                                                    <User className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    {/* Loading Bubble */}
                                    {loading && (
                                        <div className="flex gap-4 justify-start animate-in fade-in duration-300">
                                            <div className="w-8 h-8 rounded-full bg-white border border-stone-100 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                                                <Bot className="w-4 h-4 text-stone-400" />
                                            </div>
                                            <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-stone-100 flex items-center gap-1.5 h-[46px]">
                                                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                                                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                                                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Input */}
                            <div className="p-3 md:p-4 bg-white border-t border-stone-100 shrink-0 z-20">
                                <div className="max-w-4xl mx-auto">
                                    <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
                                        <div className="relative flex-1">
                                            <textarea
                                                className="w-full pl-4 pr-4 py-3 bg-stone-50 border-none rounded-xl focus:ring-1 focus:ring-stone-200 outline-none resize-none text-stone-700 placeholder-stone-400 transition-all text-base"
                                                rows="1"
                                                placeholder={`Pregunta a Osa...`}
                                                value={prompt}
                                                onChange={(e) => setPrompt(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={loading || !prompt.trim()}
                                            className={`p-3 rounded-xl transition-all transform active:scale-95 flex-shrink-0 ${loading || !prompt.trim()
                                                    ? 'bg-stone-100 text-stone-300 cursor-not-allowed'
                                                    : 'bg-stone-900 text-white hover:bg-stone-800 shadow-md cursor-pointer'
                                                }`}
                                        >
                                            <Send className="w-5 h-5" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
