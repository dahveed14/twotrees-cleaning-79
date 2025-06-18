
import { useEffect, useState } from "react";
import { PromoBar } from "@/components/PromoBar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [utmParams, setUtmParams] = useState<any>({});
  const [showPromoBar, setShowPromoBar] = useState(true);

  useEffect(() => {
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
      <PromoBar show={showPromoBar} onClose={() => setShowPromoBar(false)} />
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
