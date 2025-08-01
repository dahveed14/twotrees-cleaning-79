
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Track page view and conversion via dataLayer
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      
      // Page view tracking
      (window as any).dataLayer.push({
        event: 'page_view',
        page_title: 'Thank You - Booking Completed',
        page_location: window.location.href
      });
      
      // Conversion tracking
      (window as any).dataLayer.push({
        event: 'conversion',
        conversion_type: 'booking_completed',
        conversion_value: 1
      });

      // Enhanced Ecommerce Purchase Tracking
      (window as any).dataLayer.push({
        event: "purchase",
        ecommerce: {
          transaction_id: "TTC-001",
          value: 249,
          currency: "USD",
          items: [
            {
              item_name: "Move-In/Out Cleaning",
              item_category: "Service",
              price: 249,
              quantity: 1
            }
          ]
        }
      });
    }
  }, []);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'phone_click',
        page: 'thank_you'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      
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
                <span className="font-semibold">Confirmation</span> – You'll receive a text with all the booking details.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-two-trees-gold rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                2
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">Agreement</span> – Please complete the Client Consent & Service Agreement we texted you.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-two-trees-gold rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                3
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">Checklist</span> – Take a look at our <a href="/services" className="text-two-trees-green hover:underline font-medium">service checklist</a> to see what's included.
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
