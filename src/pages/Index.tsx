import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
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

    // Load NiceJob SDK for engage widget
    const niceJobScript = document.createElement('script');
    niceJobScript.type = 'text/javascript';
    niceJobScript.src = 'https://cdn.nicejob.co/js/sdk.min.js?id=5598836875984896';
    niceJobScript.defer = true;
    document.head.appendChild(niceJobScript);

    // Track page view
    gtag('event', 'page_view', {
      page_title: 'Two Trees Cleaning - Professional House Cleaning Service in Ventura County',
      page_location: window.location.href
    });

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[src*="nicejob.co"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const handleBookingClick = (location: string) => {
    gtag('event', 'conversion', {
      event_category: 'Two Trees Cleaning',
      event_label: 'Book Cleaning Click',
      location: location,
      value: 1
    });
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    gtag('event', 'phone_click', {
      event_category: 'Contact',
      event_label: 'Phone Number Click',
      location: 'header'
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
        <link rel="canonical" href="https://twotreescleaning.com/" />
      </Helmet>
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
