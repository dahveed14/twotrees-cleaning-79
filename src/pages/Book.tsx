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
    
    // Load form embed script from links.twotreescleaning.com
    const formScript = document.createElement('script');
    formScript.src = 'https://links.twotreescleaning.com/js/form_embed.js';
    formScript.async = true;
    document.head.appendChild(formScript);

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[src*="links.twotreescleaning.com"]');
      scripts.forEach(script => script.remove());
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
    window.location.href = 'tel:8054365868';
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
              src="https://links.twotreescleaning.com/widget/form/RgmzNYcM1z2wYu8Nb6uQ"
              style={{ width: '100%', height: '800px', border: 'none', borderRadius: '3px' }}
              id="inline-RgmzNYcM1z2wYu8Nb6uQ"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Website Residential Form"
              data-height="undefined"
              data-layout-iframe-id="inline-RgmzNYcM1z2wYu8Nb6uQ"
              data-form-id="RgmzNYcM1z2wYu8Nb6uQ"
              title="Website Residential Form"
            />
            
            {/* SMS Opt-in Disclosure */}
            <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-xs text-gray-600 leading-relaxed">
                <strong className="text-gray-800">SMS/Text Message Consent:</strong> By providing your phone number and submitting this form, you consent to receive automated text messages from Two Trees Cleaning, including appointment reminders, service confirmations, and promotional offers. Message frequency varies (approx. 2-8 messages/month). Message and data rates may apply. Consent is not required to purchase services. Reply STOP to opt out or HELP for assistance at any time. For more information, see our{' '}
                <Link to="/privacy" className="text-two-trees-green hover:underline font-medium">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Book;
