
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  onBookingClick: (location: string) => void;
  onPhoneClick: () => void;
}

export const Navigation = ({ onBookingClick, onPhoneClick }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const serviceAreas = [
    { name: "Santa Barbara", href: "/santa-barbara" },
    { name: "Montecito", href: "/montecito" },
    { name: "Thousand Oaks", href: "/thousand-oaks" },
    { name: "Oxnard", href: "/oxnard" },
    { name: "Camarillo", href: "/camarillo" },
    { name: "Ventura", href: "/ventura" },
    { name: "Ojai", href: "/ojai" },
    { name: "All Service Areas", href: "/service-areas" },
  ];

  const services = [
    { name: "All Services", href: "/services" },
    { name: "Regular House Cleaning", href: "/services/regular-house-cleaning" },
    { name: "Deep Cleaning", href: "/services/deep-cleaning" },
    { name: "Move-In/Move-Out", href: "/services/move-in-move-out" },
    { name: "Post-Construction", href: "/services/post-construction" },
    { name: "Commercial Cleaning", href: "/services/commercial-cleaning" },
    { name: "Vacation Rental", href: "/services/vacation-rental" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3c44174a-1cbf-4902-adb1-e67471f0d602.png" 
              alt="Two Trees Cleaning" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-two-trees-green transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-two-trees-green transition-colors flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link 
                      to={service.href} 
                      className="text-gray-700 hover:text-two-trees-green hover:bg-gray-50 px-4 py-2 block"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/commercial" className="text-gray-700 hover:text-two-trees-green transition-colors">
              Commercial
            </Link>
            
            {/* Service Areas Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-two-trees-green transition-colors flex items-center gap-1">
                Service Areas
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg">
                {serviceAreas.map((area) => (
                  <DropdownMenuItem key={area.name} asChild>
                    <Link 
                      to={area.href} 
                      className="text-gray-700 hover:text-two-trees-green hover:bg-gray-50 px-4 py-2 block"
                    >
                      {area.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/about" className="text-gray-700 hover:text-two-trees-green transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-two-trees-green transition-colors">
              Blog
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-two-trees-green transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-two-trees-green transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
              onClick={onPhoneClick}
            >
              <Phone className="w-4 h-4 mr-2" />
              (805) 456-1421
            </Button>
            <Button 
              size="sm" 
              className="bg-two-trees-green hover:bg-two-trees-green/90"
              onClick={() => onBookingClick('Navigation')}
            >
              Book Online
            </Button>
          </div>

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
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
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
                Commercial
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
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-two-trees-green px-4 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile CTA Buttons */}
              <div className="px-4 pt-4 space-y-2 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  className="w-full border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                  onClick={() => {
                    onPhoneClick();
                    setMobileMenuOpen(false);
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (805) 456-1421
                </Button>
                <Button 
                  className="w-full bg-two-trees-green hover:bg-two-trees-green/90"
                  onClick={() => {
                    onBookingClick('Mobile Navigation');
                    setMobileMenuOpen(false);
                  }}
                >
                  Book Online
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
