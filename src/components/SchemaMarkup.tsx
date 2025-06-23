
import { useEffect } from 'react';

export const SchemaMarkup = () => {
  useEffect(() => {
    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://twotreescleaning.com",
      "name": "Two Trees Cleaning",
      "description": "Professional house cleaning services for busy families in Ventura County. Licensed, insured, and trusted by 200+ customers.",
      "url": "https://twotreescleaning.com",
      "telephone": "+1-805-456-1421",
      "email": "hello@twotreescleaning.com",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2252 Channel Dr.",
        "addressLocality": "Ventura",
        "addressRegion": "CA",
        "postalCode": "93001",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "34.2818",
        "longitude": "-119.2945"
      },
      "openingHours": [
        "Mo-Fr 08:00-17:00",
        "Sa 08:00-17:00"
      ],
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Santa Barbara, CA"
        },
        {
          "@type": "City", 
          "name": "Montecito, CA"
        },
        {
          "@type": "City",
          "name": "Summerland, CA"
        },
        {
          "@type": "City",
          "name": "Carpinteria, CA"
        },
        {
          "@type": "City",
          "name": "Ventura, CA"
        },
        {
          "@type": "City",
          "name": "Oxnard, CA"
        },
        {
          "@type": "City",
          "name": "Port Hueneme, CA"
        },
        {
          "@type": "City",
          "name": "Camarillo, CA"
        },
        {
          "@type": "City",
          "name": "Thousand Oaks, CA"
        },
        {
          "@type": "City",
          "name": "Newbury Park, CA"
        },
        {
          "@type": "City",
          "name": "Westlake Village, CA"
        }
      ],
      "priceRange": "$$",
      "currenciesAccepted": "USD",
      "paymentAccepted": "Cash, Credit Card, Check",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "200",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sarah M."
          },
          "datePublished": "2024-06-01",
          "reviewBody": "Two Trees Cleaning has been a game-changer for our family. With two kids and demanding careers, we finally have our weekends back. Their attention to detail is incredible!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "House Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "General House Cleaning",
              "description": "Regular house cleaning service for busy families"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Deep Cleaning",
              "description": "Comprehensive deep cleaning service"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Move-in/Move-out Cleaning",
              "description": "Specialized cleaning for moving situations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Post Construction Cleaning", 
              "description": "Professional cleaning after construction or renovation"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.instagram.com/twotreescleaning/",
        "https://www.facebook.com/profile.php?id=61566622354565",
        "https://maps.app.goo.gl/r9ZN422dd6uPFXfG9"
      ]
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Two Trees Cleaning",
      "url": "https://twotreescleaning.com",
      "logo": "https://twotreescleaning.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-805-456-1421",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.instagram.com/twotreescleaning/",
        "https://www.facebook.com/profile.php?id=61566622354565"
      ]
    };

    // Service Schema for each service type
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "General House Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Two Trees Cleaning"
          },
          "areaServed": "Ventura County, CA",
          "offers": {
            "@type": "Offer",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "140",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Service", 
          "name": "Deep Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Two Trees Cleaning"
          },
          "areaServed": "Ventura County, CA"
        },
        {
          "@type": "Service",
          "name": "Move-in/Move-out Cleaning",
          "provider": {
            "@type": "LocalBusiness", 
            "name": "Two Trees Cleaning"
          },
          "areaServed": "Ventura County, CA"
        },
        {
          "@type": "Service",
          "name": "Post Construction Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Two Trees Cleaning"
          },
          "areaServed": "Ventura County, CA"
        }
      ]
    };

    // Add schemas to head
    const addSchema = (schema: object, id: string) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(localBusinessSchema, 'local-business-schema');
    addSchema(organizationSchema, 'organization-schema');
    addSchema(servicesSchema, 'services-schema');

    return () => {
      // Cleanup function to remove schemas when component unmounts
      ['local-business-schema', 'organization-schema', 'services-schema'].forEach(id => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, []);

  return null; // This component doesn't render anything visible
};
