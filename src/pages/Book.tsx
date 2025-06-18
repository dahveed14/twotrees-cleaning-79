
import { useEffect } from "react";

const Book = () => {
  useEffect(() => {
    // Track page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Book a Cleaning - Two Trees Cleaning',
        page_location: window.location.href
      });
    }
  }, []);

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

      {/* ConvertLabs Form Container */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* ConvertLabs Form Embed */}
            <div id="convertlabs-booking-form">
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
              <style>{`.Convertlabs{width: 1px;min-width: 100%; height: 1px; min-height: 100%;}`}</style>
              <script src="https://convertlabs.io/js/booking_embed.js"></script>
              <iframe 
                src="https://convertlabs.io/booking_form/3296" 
                frameBorder="0" 
                scrolling="no" 
                style={{width: '100%'}} 
                className="Convertlabs"
                title="Two Trees Cleaning Booking Form"
              ></iframe>
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
