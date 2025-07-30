
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackPageView, trackConversion, trackPhoneClick } from "@/utils/gtm";

const ContactThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Track page view for contact thank you page
    trackPageView('Thank You - Contact Form Submitted', window.location.href);
    
    // Track conversion event
    trackConversion('Contact Form Submitted', 'contact_thank_you');
  }, []);

  const handlePhoneClick = () => {
    trackPhoneClick('contact_thank_you');
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
            We've received your message and will get back to you with a free quote within 24 hours.
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
                We'll review your request and prepare a personalized quote
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-two-trees-gold rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                2
              </div>
              <p className="text-gray-700">
                You'll receive a detailed quote via email within 24 hours
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-two-trees-gold rounded-full flex items-center justify-center text-white text-sm font-semibold mt-0.5">
                3
              </div>
              <p className="text-gray-700">
                We'll follow up to discuss your needs and schedule your cleaning
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
          <p>Need to speak with us immediately?</p>
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

export default ContactThankYou;
