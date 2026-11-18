import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  cityName?: string;
  cityCoordinates?: {
    latitude: string;
    longitude: string;
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  phoneNumber?: string;
}

interface Office {
  name: string;
  streetAddress: string;
  locality: string;
  postalCode: string;
  telephone: string;
  latitude: string;
  longitude: string;
}

const MAIN_OFFICE: Office = {
  name: "Two Trees Cleaning",
  streetAddress: "3445 Telegraph Rd, Suite 103",
  locality: "Ventura",
  postalCode: "93003",
  telephone: "+1-805-436-5868",
  latitude: "34.2818",
  longitude: "-119.2945"
};

// One entry per Google Business Profile. `name` must match the GBP exactly.
// Add a city here once its GBP is verified; cities not listed use MAIN_OFFICE
// and appear in the schema as service areas only.
const GBP_LOCATIONS: Record<string, Office> = {
  "ventura": MAIN_OFFICE,
  "camarillo": {
    name: "Two Trees Cleaning - House Cleaning Camarillo",
    streetAddress: "1601 Carmen Dr., Suite 101-D",
    locality: "Camarillo",
    postalCode: "93010",
    telephone: "+1-805-764-2394",
    latitude: "34.2164",
    longitude: "-119.0376"
  }
};

// Cities without their own GBP are shown as service areas of the nearest office.
// Anything not listed here falls back to MAIN_OFFICE (Ventura).
const SERVED_FROM: Record<string, string> = {
  "thousand oaks": "camarillo",
  "newbury park": "camarillo",
  "westlake village": "camarillo"
};

export const SchemaMarkup = ({ cityName, cityCoordinates, breadcrumbs, phoneNumber }: SchemaMarkupProps) => {
    const baseUrl = "https://twotreescleaning.com";
    const cityKey = cityName?.toLowerCase() ?? "";
    const office = GBP_LOCATIONS[cityKey] || GBP_LOCATIONS[SERVED_FROM[cityKey]] || MAIN_OFFICE;

    // Local Business Schema with city-specific data
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${baseUrl}${cityName ? `/${cityName.toLowerCase().replace(/\s+/g, '-')}` : ''}`,
      "name": office.name,
      "description": cityName 
        ? `Professional house cleaning services for busy families in ${cityName}, Ventura County. Licensed, insured, and trusted by 200+ customers since 2020.`
        : "Professional house cleaning services for busy families in Ventura County. Licensed, insured, and trusted by 200+ customers since 2020.",
      "url": `${baseUrl}${cityName ? `/${cityName.toLowerCase().replace(/\s+/g, '-')}` : ''}`,
      "telephone": phoneNumber || office.telephone,
      "email": "hello@twotreescleaning.com",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": office.streetAddress,
        "addressLocality": office.locality,
        "addressRegion": "CA",
        "postalCode": office.postalCode,
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": office.latitude,
        "longitude": office.longitude
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
      "areaServed": cityName ? [
        {
          "@type": "City",
          "name": cityName,
          "addressRegion": "CA",
          ...(cityCoordinates && { "geo": { "@type": "GeoCoordinates", "latitude": cityCoordinates.latitude, "longitude": cityCoordinates.longitude } })
        }
      ] : [
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
      "image": [
        `${baseUrl}/lovable-uploads/c95b0054-77f3-4718-819c-e36e27daae21.jpg`,
        `${baseUrl}/favicon.ico`
      ],
      "priceRange": "$140-$500",
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
              "description": `Regular house cleaning service for busy families in ${cityName || 'Ventura County'}`
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
              "description": `Comprehensive deep cleaning service for homes in ${cityName || 'Ventura County'}`
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
              "description": `Specialized cleaning for moving situations in ${cityName || 'Ventura County'}`
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
                "description": `Professional cleaning after construction or renovation in ${cityName || 'Ventura County'}`
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "minPrice": "300",
                "priceCurrency": "USD"
              }
            },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Office Cleaning",
              "description": `Professional office cleaning services for businesses in ${cityName || 'Ventura County'}`
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "Custom Quote",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Cleaning",
              "description": `Comprehensive commercial cleaning services for businesses in ${cityName || 'Ventura County'}`
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "Custom Quote",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Janitorial Services",
              "description": `Regular janitorial services for offices and commercial facilities in ${cityName || 'Ventura County'}`
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "Custom Quote",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Facility Cleaning",
              "description": `Professional facility cleaning and maintenance services in ${cityName || 'Ventura County'}`
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "Custom Quote",
              "priceCurrency": "USD"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Vacation Rental Cleaning",
              "description": `Specialized cleaning for Airbnb, VRBO, and short-term rentals in ${cityName || 'Ventura County'}`
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "180",
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
      "url": baseUrl,
      "logo": `${baseUrl}/favicon.ico`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": phoneNumber || office.telephone,
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": cityName ? `${cityName}, CA` : "Ventura County, CA"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": office.streetAddress,
        "addressLocality": office.locality,
        "addressRegion": "CA",
        "postalCode": office.postalCode,
        "addressCountry": "US"
      },
      "sameAs": [
        "https://www.instagram.com/twotreescleaning/",
        "https://www.facebook.com/profile.php?id=61566622354565"
      ]
    };

    // Breadcrumb Schema
    const breadcrumbSchema = breadcrumbs ? {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    } : null;

    // Service Schema for each service type
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `Two Trees Cleaning Services${cityName ? ` - ${cityName}` : ''}`,
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "General House Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": office.name,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": office.locality,
              "addressRegion": "CA"
            }
          },
          "areaServed": {
            "@type": "State",
            "name": "California",
            "containsPlace": cityName ? [
              { "@type": "City", "name": cityName }
            ] : [
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
            "name": office.name,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": office.locality,
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
            "name": office.name,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": office.locality,
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
            "name": office.name,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": office.locality,
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
              "minPrice": "300",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Service",
          "position": 5,
          "name": "Office Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": office.name,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": office.locality,
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
              "price": "Custom Quote",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Service",
          "position": 6,
          "name": "Commercial Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": office.name,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": office.locality,
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
              "price": "Custom Quote",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Service",
          "position": 7,
          "name": "Janitorial Services",
          "provider": {
            "@type": "LocalBusiness",
            "name": office.name,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": office.locality,
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
              "price": "Custom Quote",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Service",
          "position": 8,
          "name": "Facility Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": office.name,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": office.locality,
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
              "price": "Custom Quote",
              "priceCurrency": "USD"
            }
          }
        },
        {
          "@type": "Service",
          "position": 9,
          "name": "Vacation Rental Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": office.name,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": office.locality,
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
        }
      ]
    };

  // react-helmet-async doesn't HTML-escape <script> inner content, so guard
  // against a stray "</script>" in any (currently hardcoded, but not
  // guaranteed to stay that way) prop value breaking out of the tag.
  const toJsonLd = (schema: object) => JSON.stringify(schema).replace(/</g, '\\u003c');

  return (
    <Helmet>
      <script type="application/ld+json">{toJsonLd(localBusinessSchema)}</script>
      <script type="application/ld+json">{toJsonLd(organizationSchema)}</script>
      <script type="application/ld+json">{toJsonLd(servicesSchema)}</script>
      {breadcrumbSchema && (
        <script type="application/ld+json">{toJsonLd(breadcrumbSchema)}</script>
      )}
    </Helmet>
  );
};
