import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', 'true');
        setShowBanner(false);
    };

    const rejectCookies = () => {
        localStorage.setItem('cookiesAccepted', 'false');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-stone-900 text-white p-4 shadow-2xl z-50 border-t-2 border-stone-700">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                    <Cookie className="h-6 w-6 text-stone-300 flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-sm text-stone-200">
                            Utilizamos cookies propias para mejorar tu experiencia de navegación.
                            Al continuar navegando, aceptas nuestra{' '}
                            <Link to="/cookies" className="underline hover:text-stone-100">
                                Política de Cookies
                            </Link>.
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={rejectCookies}
                        className="bg-transparent border-stone-500 text-stone-200 hover:bg-stone-800 hover:text-white"
                    >
                        Rechazar
                    </Button>
                    <Button
                        size="sm"
                        onClick={acceptCookies}
                        className="bg-white text-stone-900 hover:bg-stone-100"
                    >
                        Aceptar
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CookieBanner;
