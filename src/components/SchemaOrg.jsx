import React from 'react';
import { Helmet } from 'react-helmet';

function SchemaOrg() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "name": "Pena da Osa",
        "image": "https://penadaosa.com/images/galeria/exterior11.jpg",
        "description": "Retiro rural con encanto en Lugo, Galicia. Arquitectura tradicional de piedra, vistas al campo y todas las comodidades modernas.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Os Pacios, 4",
            "addressLocality": "Sober",
            "addressRegion": "Lugo",
            "postalCode": "27460",
            "addressCountry": "ES"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 42.4418,
            "longitude": -7.5893
        },
        "telephone": "+34639403998",
        "email": "turismoruralpendaosa@gmail.com",
        "url": "https://penadaosa.com",
        "priceRange": "€€",
        "starRating": {
            "@type": "Rating",
            "ratingValue": "5"
        },
        "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "WiFi gratuito" },
            { "@type": "LocationFeatureSpecification", "name": "Pet-Friendly" },
            { "@type": "LocationFeatureSpecification", "name": "Zona de Barbacoa" },
            { "@type": "LocationFeatureSpecification", "name": "Vistas al campo" },
            { "@type": "LocationFeatureSpecification", "name": "Jardín y patio" }
        ],
        "checkinTime": "16:00",
        "checkoutTime": "11:00"
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
}

export default SchemaOrg;
