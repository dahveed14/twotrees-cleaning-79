import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

// Extend the Window interface to include jQuery
declare global {
  interface Window {
    jQuery: any;
  }
}

const Book = () => {
  const handleBookingClick = (location: string) => {
    // Track booking clicks without console logging
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_click', {
        event_category: 'Book',
        event_label: location
      });
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:8054561421';
  };

  useEffect(() => {
    // Load jQuery if not already loaded
    if (!window.jQuery) {
      const jqueryScript = document.createElement('script');
      jqueryScript.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js';
      jqueryScript.async = true;
      document.head.appendChild(jqueryScript);
    }

    // Load ConvertLabs booking script
    const convertLabsScript = document.createElement('script');
    convertLabsScript.src = 'https://convertlabs.io/js/booking_embed.js';
    convertLabsScript.async = true;
    document.head.appendChild(convertLabsScript);

    // Add ConvertLabs styles
    const style = document.createElement('style');
    style.textContent = '.Convertlabs{width: 1px;min-width: 100%; height: 1px; min-height: 100%;}';
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      // Remove scripts and styles when component unmounts
      const scripts = document.querySelectorAll('script[src*="convertlabs.io"], script[src*="jquery"]');
      scripts.forEach(script => script.remove());
      
      const convertLabsStyles = document.querySelectorAll('style');
      convertLabsStyles.forEach(styleEl => {
        if (styleEl.textContent?.includes('Convertlabs')) {
          styleEl.remove();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-two-trees-green mb-4">
              Book Your Cleaning Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Schedule your professional house cleaning service in Ventura and Santa Barbara Counties
            </p>
          </div>

          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <iframe 
              src="https://convertlabs.io/booking_form/3296" 
              frameBorder="0" 
              scrolling="no" 
              style={{ width: '100%' }} 
              className="Convertlabs"
              title="Two Trees Cleaning Booking Form"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Book;
