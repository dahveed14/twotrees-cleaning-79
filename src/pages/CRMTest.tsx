import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { trackEvent } from "@/utils/analytics";

export default function CRMTest() {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://links.twotreescleaning.com/js/form_embed.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleBookingClick = (location: string) => {
    trackEvent('booking_click', {
      location: location,
      page: 'crm_test',
    });
    window.open('https://book.housecallpro.com/book/Two-Trees-Cleaning/d70c960877f84731827bce7cece4e18a', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+18054229144';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-white">
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-two-trees-green mb-4">
              CRM Test Form
            </h1>
            <p className="text-xl text-gray-600">
              Testing new form integration
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <iframe 
              src="https://links.twotreescleaning.com/widget/survey/xrFszKedqj0L304uPuoK" 
              style={{ border: 'none', width: '100%' }} 
              scrolling="no" 
              id="xrFszKedqj0L304uPuoK" 
              title="survey"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
