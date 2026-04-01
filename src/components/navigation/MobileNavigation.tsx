
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { serviceAreas, services } from "@/constants/navigation";

interface MobileNavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onBookingClick: (location: string) => void;
  onPhoneClick: () => void;
}

export const MobileNavigation = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  onBookingClick, 
  onPhoneClick 
}: MobileNavigationProps) => {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200 bg-white shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-two-trees-green px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Mobile Services */}
            <div className="px-4">
              <span className="text-gray-700 font-medium">Services:</span>
              <div className="ml-4 mt-2 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block text-gray-600 hover:text-two-trees-green py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/commercial" 
              className="text-gray-700 hover:text-two-trees-green px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schools
            </Link>
            
            {/* Mobile Service Areas */}
            <div className="px-4">
              <span className="text-gray-700 font-medium">Service Areas:</span>
              <div className="ml-4 mt-2 space-y-2">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.name}
                    to={area.href}
                    className="block text-gray-600 hover:text-two-trees-green py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/about" 
              className="text-gray-700 hover:text-two-trees-green px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-700 hover:text-two-trees-green px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-700 hover:text-two-trees-green px-4 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            
            {/* Mobile CTA Buttons */}
            <div className="px-4 pt-4 space-y-2 border-t border-gray-200">
              <Button 
                variant="outline" 
                className="w-full border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                onClick={() => {
                  window.location.href = '/contact';
                  setMobileMenuOpen(false);
                }}
              >
                Contact Us
              </Button>
              <Button 
                className="w-full bg-two-trees-green hover:bg-two-trees-green/90"
                onClick={() => {
                  window.open('https://optin.twotreescleaning.com/complete-estimate-form-3642', '_blank');
                  setMobileMenuOpen(false);
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
