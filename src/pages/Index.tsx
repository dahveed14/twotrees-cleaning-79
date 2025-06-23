import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const Index = () => {
  const [utmParams, setUtmParams] = useState<any>({});

  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "Two Trees Cleaning - Professional House Cleaning in Ventura County | Licensed & Insured";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get your time back with Two Trees Cleaning. Professional house cleaning services in Ventura County since 2020. Licensed, insured & trusted by 200+ families. Starting at $140.');
    }

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://twotreescleaning.com/');

    // Capture UTM parameters for display
    const urlParams = new URLSearchParams(window.location.search);
    const params = {
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_term: urlParams.get('utm_term'),
      utm_content: urlParams.get('utm_content')
    };
    setUtmParams(params);

    // Track page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Two Trees Cleaning Landing Page',
        page_location: window.location.href
      });
    }
  }, []);

  const handleBookingClick = (location: string) => {
    // Track the conversion
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', location);
    }

    // Navigate to external booking page
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Phone Number Click'
      });
    }
    // Make the phone call
    window.location.href = 'tel:805-456-1421';
  };

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      <Hero onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      <Benefits />
      <About />
      <HowItWorks />
      <SocialProof />
      <FinalCTA onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      <Footer />
    </div>
  );
};

export default Index;
