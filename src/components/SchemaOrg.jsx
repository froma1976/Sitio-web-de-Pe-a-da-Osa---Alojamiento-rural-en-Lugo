import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

function SchemaOrg() {
    const { t } = useTranslation();

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "name": "Pena da Osa",
        "image": "https://penadaosa.com/images/galeria/webp/exterior11.webp",
        "description": t('schema.description'),
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
            { "@type": "LocationFeatureSpecification", "name": t('schema.wifi') },
            { "@type": "LocationFeatureSpecification", "name": t('schema.pet_friendly') },
            { "@type": "LocationFeatureSpecification", "name": t('schema.bbq') },
            { "@type": "LocationFeatureSpecification", "name": t('schema.views') },
            { "@type": "LocationFeatureSpecification", "name": t('schema.garden') }
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
