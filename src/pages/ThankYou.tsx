
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Home } from "lucide-react";

const ThankYou = () => {
  useEffect(() => {
    // Meta Pixel Code
    (function(f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js',
      null,
      null,
      null
    );
    
    (window as any).fbq('init', '991478226474039');
    (window as any).fbq('track', 'PageView');

    // Track page view for thank you page
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Thank You - Booking Completed',
        page_location: window.location.href
      });
      
      // Track conversion event
      (window as any).gtag('event', 'conversion', {
        event_category: 'Booking',
        event_label: 'Booking Completed',
        value: 1
      });
    }
  }, []);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Thank You Page Phone Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const handleBackToHome = () => {
    window.location.href = 'https://twotreescleaning.com';
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      {/* Meta Pixel noscript fallback */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=991478226474039&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <CheckCircle className="w-20 h-20 text-two-trees-green mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-two-trees-green mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your cleaning is booked! We're excited to help you get your time back.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-two-trees-green mb-4">
            What happens next?
          </h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-two-trees-gold rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                1
              </div>
              <p className="text-gray-700">
                You'll receive a confirmation email with all the details
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-two-trees-gold rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                2
              </div>
              <p className="text-gray-700">
                We'll send a reminder 24 hours before your cleaning
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-two-trees-gold rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                3
              </div>
              <p className="text-gray-700">
                Our professional team will arrive on time and ready to clean
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button
            onClick={handlePhoneClick}
            variant="outline"
            className="w-full sm:w-auto border-two-trees-green text-two-trees-green hover:bg-two-trees-green hover:text-white"
          >
            <Phone className="w-4 h-4 mr-2" />
            Questions? Call Us
          </Button>
          <Button
            onClick={handleBackToHome}
            className="w-full sm:w-auto bg-two-trees-green hover:bg-two-trees-green/90"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          <p>Need to make changes to your booking?</p>
          <button
            onClick={handlePhoneClick}
            className="text-two-trees-green hover:underline font-medium"
          >
            Call us at (805) 456-1421
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
