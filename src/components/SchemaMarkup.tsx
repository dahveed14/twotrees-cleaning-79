
import { useEffect } from 'react';

export const SchemaMarkup = () => {
  useEffect(() => {
    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://twotreescleaning.com",
      "name": "Two Trees Cleaning",
      "description": "Professional house cleaning services for busy families in Ventura County. Licensed, insured, and trusted by 200+ customers since 2020.",
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
        "Sa 00:00-00:00"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "00:00",
          "closes": "00:00",
          "validFrom": "2020-01-01",
          "validThrough": "2030-12-31"
        }
      ],
      "additionalProperty": {
        "@type": "PropertyValue",
        "name": "Saturday Availability",
        "value": "By appointment only"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Santa Barbara",
          "addressRegion": "CA"
        },
        {
          "@type": "City", 
          "name": "Montecito",
          "addressRegion": "CA"
        },
        {
          "@type": "City",
          "name": "Summerland",
          "addressRegion": "CA"
        },
        {
          "@type": "City",
          "name": "Carpinteria",
          "addressRegion": "CA"
        },
        {
          "@type": "City",
          "name": "Ventura",
          "addressRegion": "CA"
        },
        {
          "@type": "City",
          "name": "Oxnard",
          "addressRegion": "CA"
        },
        {
          "@type": "City",
          "name": "Port Hueneme",
          "addressRegion": "CA"
        },
        {
          "@type": "City",
          "name": "Camarillo",
          "addressRegion": "CA"
        },
        {
          "@type": "City",
          "name": "Thousand Oaks",
          "addressRegion": "CA"
        },
        {
          "@type": "City",
          "name": "Newbury Park",
          "addressRegion": "CA"
        },
        {
          "@type": "City",
          "name": "Westlake Village",
          "addressRegion": "CA"
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
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "House Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "General House Cleaning",
              "description": "Regular house cleaning service for busy families in Ventura County"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "140",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Deep Cleaning",
              "description": "Comprehensive deep cleaning service for homes in Ventura County"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "200",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Move-in/Move-out Cleaning",
              "description": "Specialized cleaning for moving situations in Ventura County"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "180",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Post Construction Cleaning", 
              "description": "Professional cleaning after construction or renovation in Ventura County"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "250",
              "priceCurrency": "USD"
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
      "logo": "https://twotreescleaning.com/favicon.ico",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-805-456-1421",
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": "Ventura County, CA"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2252 Channel Dr.",
        "addressLocality": "Ventura",
        "addressRegion": "CA",
        "postalCode": "93001",
        "addressCountry": "US"
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
      "name": "Two Trees Cleaning Services",
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "General House Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Two Trees Cleaning",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ventura",
              "addressRegion": "CA"
            }
          },
          "areaServed": {
            "@type": "State",
            "name": "California",
            "containsPlace": [
              { "@type": "City", "name": "Santa Barbara" },
              { "@type": "City", "name": "Ventura" },
              { "@type": "City", "name": "Thousand Oaks" }
            ]
          },
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
          "position": 2,
          "name": "Deep Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Two Trees Cleaning",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ventura",
              "addressRegion": "CA"
            }
          },
          "areaServed": {
            "@type": "State",
            "name": "California"
          },
          "offers": {
            "@type": "Offer",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "200",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Service",
          "position": 3,
          "name": "Move-in/Move-out Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Two Trees Cleaning",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ventura",
              "addressRegion": "CA"
            }
          },
          "areaServed": {
            "@type": "State",
            "name": "California"
          },
          "offers": {
            "@type": "Offer",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "180",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Service",
          "position": 4,
          "name": "Post Construction Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Two Trees Cleaning",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ventura",
              "addressRegion": "CA"
            }
          },
          "areaServed": {
            "@type": "State",
            "name": "California"
          },
          "offers": {
            "@type": "Offer",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "250",
              "priceCurrency": "USD"
            }
          }
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
