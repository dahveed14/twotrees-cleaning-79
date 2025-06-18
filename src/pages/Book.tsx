
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Book = () => {
  const [formLoaded, setFormLoaded] = useState(false);
  const [embedError, setEmbedError] = useState<string | null>(null);

  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Book a Cleaning - Two Trees Cleaning',
        page_location: window.location.href
      });
    }

    // Debug form loading
    const checkFormLoad = () => {
      const iframe = document.querySelector('.Convertlabs') as HTMLIFrameElement;
      if (iframe) {
        console.log('ConvertLabs iframe found:', iframe);
        console.log('Iframe src:', iframe.src);
        console.log('Iframe dimensions:', iframe.offsetWidth, 'x', iframe.offsetHeight);
        
        iframe.onload = () => {
          console.log('ConvertLabs iframe loaded successfully');
          setFormLoaded(true);
        };
        
        iframe.onerror = (error) => {
          console.error('ConvertLabs iframe error:', error);
          setEmbedError('Failed to load booking form');
        };
      } else {
        console.log('ConvertLabs iframe not found');
        setEmbedError('Booking form element not found');
      }
    };

    // Check after scripts have time to load
    setTimeout(checkFormLoad, 2000);
  }, []);

  const handleDirectBooking = () => {
    // Open ConvertLabs form in new tab as fallback
    window.open('https://convertlabs.io/booking_form/3296', '_blank');
    
    // Track the click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'external_booking_click', {
        event_category: 'Booking',
        event_label: 'Direct ConvertLabs Link'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-two-trees-green text-white py-6 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Book Your Cleaning Service
          </h1>
          <p className="text-lg opacity-90">
            Schedule your professional house cleaning in just a few minutes
          </p>
        </div>
      </header>

      {/* Booking Form Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Fallback Button - Show if form hasn't loaded */}
            {!formLoaded && (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">
                  Having trouble with the form? Click below to book directly:
                </p>
                <Button 
                  onClick={handleDirectBooking}
                  className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-3 text-lg"
                >
                  Book Your Cleaning <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Error Message */}
            {embedError && !formLoaded && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <p className="text-red-700 text-sm">
                  <strong>Form Loading Issue:</strong> {embedError}
                </p>
              </div>
            )}

            {/* ConvertLabs Form Embed - Multiple Approaches */}
            <div id="convertlabs-booking-form">
              {/* Method 1: Original approach with improved loading */}
              <div style={{ position: 'relative', minHeight: '600px' }}>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
                <style>{`
                  .Convertlabs {
                    width: 1px;
                    min-width: 100%; 
                    height: 1px; 
                    min-height: 600px;
                    border: none;
                  }
                  .convertlabs-loading {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    color: #666;
                  }
                `}</style>
                
                {!formLoaded && (
                  <div className="convertlabs-loading">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-two-trees-green mx-auto mb-2"></div>
                    <p>Loading booking form...</p>
                  </div>
                )}
                
                <script src="https://convertlabs.io/js/booking_embed.js"></script>
                <iframe 
                  src="https://convertlabs.io/booking_form/3296" 
                  frameBorder="0" 
                  scrolling="no" 
                  style={{
                    width: '100%',
                    minHeight: '600px',
                    border: 'none',
                    background: 'transparent'
                  }} 
                  className="Convertlabs"
                  title="Two Trees Cleaning Booking Form"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-two-trees-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-two-trees-green mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 text-sm">We stand behind our work with a 100% satisfaction guarantee</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-two-trees-gold/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-two-trees-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-two-trees-green mb-2">Insured & Bonded</h3>
              <p className="text-gray-600 text-sm">Fully licensed, insured, and bonded for your peace of mind</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-two-trees-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-two-trees-green mb-2">Same Day Booking</h3>
              <p className="text-gray-600 text-sm">Quick turnaround times to fit your busy schedule</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;
