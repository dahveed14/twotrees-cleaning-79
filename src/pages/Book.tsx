import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Extend the Window interface to include jQuery
declare global {
  interface Window {
    jQuery: any;
  }
}


const Book = () => {
  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    
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


  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-two-trees-green mb-4">
              Request a Quote
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We'll get back to you within 2-3 hours with a personalized quote for your cleaning needs
            </p>
          </div>

          {/* What's Included Link Section */}
          <div className="mb-8">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Want to know what's included in your cleaning?
              </h3>
              <p className="text-muted-foreground mb-4">
                See our comprehensive guide to what's included (and what's not) in each cleaning service
              </p>
              <Link to="/services/whats-included-in-cleaning">
                <Button variant="outline" className="inline-flex items-center gap-2">
                  View What's Included
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quote Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <iframe 
              src="https://convertlabs.io/quote_form/3296" 
              frameBorder="0" 
              scrolling="no" 
              style={{ width: '100%' }} 
              className="Convertlabs"
              title="Two Trees Cleaning Quote Form"
            />
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Book;
