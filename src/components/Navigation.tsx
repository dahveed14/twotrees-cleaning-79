
import { useState } from "react";
import { Link } from "react-router-dom";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
import { MobileNavigation } from "./navigation/MobileNavigation";

interface NavigationProps {
  onBookingClick: (location: string) => void;
  onPhoneClick: () => void;
}

export const Navigation = ({ onBookingClick, onPhoneClick }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/9cdcaf28-1e78-458c-901b-553f5567dac3.png" 
              alt="Two Trees Cleaning logo - professional house cleaning services in Ventura County and Santa Barbara County" 
              className="h-20 w-auto"
              loading="eager"
              decoding="async"
              width="200"
              height="80"
            />
          </Link>

          <DesktopNavigation onBookingClick={onBookingClick} onPhoneClick={onPhoneClick} />

          <MobileNavigation 
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            onBookingClick={onBookingClick}
            onPhoneClick={onPhoneClick}
          />
        </div>
      </div>
    </nav>
  );
};
