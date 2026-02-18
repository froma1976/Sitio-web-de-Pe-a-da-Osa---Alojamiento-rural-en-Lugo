import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

/**
 * LanguageHead — Sets the <html lang> attribute dynamically based on
 * the current i18n language, and adds hreflang alternate links for SEO.
 */
function LanguageHead() {
    const { i18n } = useTranslation();
    const location = useLocation();
    const currentLang = i18n.language?.startsWith('en') ? 'en' : 'es';
    const baseUrl = 'https://penadaosa.com';
    const currentPath = location.pathname;

    // Update <html lang> directly (Helmet can be slow for this)
    useEffect(() => {
        document.documentElement.lang = currentLang;
    }, [currentLang]);

    return (
        <Helmet>
            <html lang={currentLang} />
            <link rel="alternate" hreflang="es" href={`${baseUrl}${currentPath}`} />
            <link rel="alternate" hreflang="en" href={`${baseUrl}${currentPath}`} />
            <link rel="alternate" hreflang="x-default" href={`${baseUrl}${currentPath}`} />
        </Helmet>
    );
}

export default LanguageHead;
