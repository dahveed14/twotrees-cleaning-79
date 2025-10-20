
import { useEffect } from 'react';

interface TestimonialSchemaProps {
  testimonials: Array<{
    name: string;
    location: string;
    rating: number;
    text: string;
  }>;
  cityName?: string;
}

export const TestimonialSchema = ({ testimonials, cityName }: TestimonialSchemaProps) => {
  useEffect(() => {
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `Two Trees Cleaning Reviews${cityName ? ` - ${cityName}` : ''}`,
      "itemListElement": testimonials.map((testimonial, index) => ({
        "@type": "Review",
        "position": index + 1,
        "author": {
          "@type": "Person",
          "name": testimonial.name
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": testimonial.rating,
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": testimonial.text,
        "itemReviewed": {
          "@type": "LocalBusiness",
          "name": "Two Trees Cleaning",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": cityName || "Ventura County",
            "addressRegion": "CA"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "Two Trees Cleaning"
        }
      }))
    };

    const existingScript = document.getElementById('testimonial-schema');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'testimonial-schema';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(reviewSchema);
    document.head.appendChild(script);

    return () => {
      const script = document.getElementById('testimonial-schema');
      if (script) {
        script.remove();
      }
    };
  }, [testimonials, cityName]);

  return null;
};
