
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Home, ClipboardList, Star, ExternalLink } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const ContactThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Track page view and conversion via dataLayer
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      
      // Page view tracking
      (window as any).dataLayer.push({
        event: 'page_view',
        page_title: 'Thank You - Contact Form Submitted',
        page_location: window.location.href
      });
      
      // Conversion tracking
      (window as any).dataLayer.push({
        event: 'conversion',
        conversion_type: 'contact_form_submitted',
        conversion_value: 1
      });
    }
  }, []);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'phone_click',
        page: 'contact_thank_you'
      });
    }
    window.location.href = 'tel:805-436-5868';
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

        {/* While You Wait Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-two-trees-green mb-2">
            While You Wait...
          </h2>
          <p className="text-gray-600 mb-6">
            Here are some helpful resources to explore
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* What's Included Card */}
            <Link
              to="/services/whats-included-in-cleaning"
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-left group"
            >
              <div className="w-12 h-12 bg-two-trees-green/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-two-trees-green/20 transition-colors">
                <ClipboardList className="w-6 h-6 text-two-trees-green" />
              </div>
              <h3 className="font-semibold text-two-trees-green mb-2">See What's Included</h3>
              <p className="text-sm text-gray-600">Explore our detailed cleaning checklist</p>
            </Link>

            {/* Google Reviews Card */}
            <a
              href="https://share.google/QSp0dZo4lP9QAfyTt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-left group"
            >
              <div className="w-12 h-12 bg-two-trees-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-two-trees-gold/20 transition-colors">
                <Star className="w-6 h-6 text-two-trees-gold" />
              </div>
              <h3 className="font-semibold text-two-trees-green mb-2 flex items-center gap-1">
                Read Our Reviews
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </h3>
              <p className="text-sm text-gray-600">See what our happy customers are saying</p>
            </a>

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/twotreescleaning/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-left group"
            >
              <div className="w-12 h-12 bg-two-trees-green/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-two-trees-green/20 transition-colors">
                <svg className="w-6 h-6 text-two-trees-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-two-trees-green mb-2 flex items-center gap-1">
                See Our Work
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </h3>
              <p className="text-sm text-gray-600">Follow us for before & after photos</p>
            </a>
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
            Call us at (805) 436-5868
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactThankYou;
