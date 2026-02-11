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
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
            <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border bg-background/85 backdrop-blur-md shadow-2xl px-5 py-4">
                <div className="flex items-start gap-3 flex-1">
                    <Cookie className="h-6 w-6 text-[#d4765d] flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-sm text-foreground/80">
                            Utilizamos cookies propias para mejorar tu experiencia de navegación. Al continuar,
                            aceptas nuestra{' '}
                            <Link to="/cookies" className="underline underline-offset-4 hover:text-foreground">
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
                        className="rounded-full"
                    >
                        Rechazar
                    </Button>
                    <Button
                        size="sm"
                        onClick={acceptCookies}
                        className="rounded-full bg-[#1a1e23] text-white hover:bg-[#d4765d]"
                    >
                        Aceptar
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CookieBanner;
