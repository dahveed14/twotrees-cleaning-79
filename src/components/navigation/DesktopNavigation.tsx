
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { NavigationDropdown } from "./NavigationDropdown";
import { serviceAreas, services } from "@/constants/navigation";

interface DesktopNavigationProps {
  onBookingClick: (location: string) => void;
  onPhoneClick: () => void;
}

export const DesktopNavigation = ({ onBookingClick, onPhoneClick }: DesktopNavigationProps) => {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-gray-700 hover:text-two-trees-green transition-colors">
          Home
        </Link>
        
        <NavigationDropdown label="Services" items={services} />

        <Link to="/commercial" className="text-gray-700 hover:text-two-trees-green transition-colors">
          Commercial
        </Link>
        
        <NavigationDropdown label="Service Areas" items={serviceAreas} />

        <Link to="/about" className="text-gray-700 hover:text-two-trees-green transition-colors">
          About
        </Link>
        <Link to="/blog" className="text-gray-700 hover:text-two-trees-green transition-colors">
          Blog
        </Link>
        <Link to="/faq" className="text-gray-700 hover:text-two-trees-green transition-colors">
          FAQ
        </Link>
        <Button 
          variant="outline" 
          size="sm" 
          className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
          onClick={() => window.location.href = '/contact'}
        >
          Get Quote
        </Button>
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
    </>
  );
};
