import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { ServiceAreas } from "@/components/ServiceAreas";
import { WhatsIncludedSection } from "@/components/WhatsIncludedSection";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { HomepageFAQ } from "@/components/HomepageFAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { LazySection } from "@/components/LazySection";
import { OfficeLocationMap } from "@/components/OfficeLocationMap";
import { updateMetaTags } from "@/utils/metaTags";



const Index = () => {
  const [utmParams, setUtmParams] = useState<any>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Set meta tags using the utility function
    updateMetaTags({
      title: "House Cleaning in Ventura, Oxnard, Camarillo, Ojai & Thousand Oaks | Two Trees Cleaning",
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


    // Track page view
    import('../utils/analytics').then(({ trackPageView }) => {
      trackPageView('Two Trees Cleaning Landing Page');
    });

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
    window.location.href = 'tel:805-436-5868';
  };

  return (
    <div className="min-h-screen bg-white">
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
      <WhatsIncludedSection />
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
        <OfficeLocationMap
          title="Visit Our Main Office"
          address="2252 Channel Dr, Ventura, CA 93001"
          mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8950.374799972677!2d-119.27136054354615!3d34.27142549198656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e9ad24e50049e3%3A0xf50c60a11af645e5!2s2252%20Channel%20Dr%2C%20Ventura%2C%20CA%2093001!5e0!3m2!1sen!2sus!4v1770162985658!5m2!1sen!2sus"
          mapTitle="Two Trees Cleaning Main Office Location"
        />
      </LazySection>
      <LazySection>
        <FinalCTA onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      </LazySection>
      <Footer />
    </div>
  );
};

export default Index;
