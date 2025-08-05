import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { ServiceAreas } from "@/components/ServiceAreas";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { HomepageFAQ } from "@/components/HomepageFAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { LazySection } from "@/components/LazySection";
import { updateMetaTags } from "@/utils/metaTags";

const Index = () => {
  const [utmParams, setUtmParams] = useState<any>({});

  useEffect(() => {
    // Set meta tags using the utility function
    updateMetaTags({
      title: "Two Trees Cleaning - Professional House Cleaning in Ventura County | Licensed & Insured",
      description: "Get your time back with Two Trees Cleaning. Professional house cleaning services in Ventura County since 2020. Licensed, insured & trusted by 200+ families. Starting at $140.",
      url: "https://twotreescleaning.com/",
      keywords: [
        "house cleaning Ventura County",
        "professional cleaning service",
        "housekeeping Ventura",
        "reliable cleaning Oxnard",
        "home cleaning Thousand Oaks",
        "maid service Camarillo",
        "deep cleaning Santa Barbara",
        "move out cleaning Westlake Village"
      ]
    });

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

    // Delay NiceJob SDK loading for better performance
    const loadNiceJobScript = () => {
      const existingScript = document.querySelector('script[src*="nicejob.co"]');
      if (!existingScript) {
        const niceJobScript = document.createElement('script');
        niceJobScript.type = 'text/javascript';
        niceJobScript.src = 'https://cdn.nicejob.co/js/sdk.min.js?id=5598836875984896';
        niceJobScript.defer = true;
        document.head.appendChild(niceJobScript);
      }
    };

    // Load after initial render to avoid blocking - increased delay for mobile performance
    const timer = setTimeout(loadNiceJobScript, 5000);

    // Track page view
    import('../utils/analytics').then(({ trackPageView }) => {
      trackPageView('Two Trees Cleaning Landing Page');
    });

    // Cleanup function
    return () => {
      clearTimeout(timer);
      const scripts = document.querySelectorAll('script[src*="nicejob.co"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const handleBookingClick = (location: string) => {
    // Track the conversion
    import('../utils/analytics').then(({ trackBookingClick }) => {
      trackBookingClick(location);
    });

    // Navigate to external booking page
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    import('../utils/analytics').then(({ trackPhoneClick }) => {
      trackPhoneClick('home');
    });
    window.location.href = 'tel:805-456-1421';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* NiceJob Engage Widget */}
      <div className="nj-engage" data-position="left"></div>
      <Helmet>
        <title>Two Trees Cleaning - Professional House Cleaning in Ventura County | Licensed & Insured</title>
        <meta name="description" content="Get your time back with Two Trees Cleaning. Professional house cleaning services in Ventura County since 2020. Licensed, insured & trusted by 200+ families. Starting at $140." />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Ventura" />
        <meta name="geo.position" content="34.2746;-119.2290" />
      </Helmet>
      <SchemaMarkup />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      <Hero onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      <Benefits />
      <ServiceAreas />
      <LazySection>
        <About />
      </LazySection>
      <LazySection>
        <HowItWorks />
      </LazySection>
      <LazySection>
        <SocialProof />
      </LazySection>
      <LazySection>
        <HomepageFAQ />
      </LazySection>
      <LazySection>
        <FinalCTA onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      </LazySection>
      <Footer />
    </div>
  );
};

export default Index;
