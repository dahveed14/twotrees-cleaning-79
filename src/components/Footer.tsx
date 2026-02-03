
import { Star, Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

// Location-specific office configurations
export type FooterLocation = 'ventura' | 'santa-barbara' | 'thousand-oaks' | 'camarillo';

interface OfficeInfo {
  name: string;
  address: string;
  city: string;
  phone: string;
  phoneFormatted: string;
}

interface ServiceAreaLink {
  name: string;
  href: string;
}

const officeLocations: Record<FooterLocation, OfficeInfo> = {
  'ventura': {
    name: 'Main Office',
    address: 'Ventura, CA',
    city: 'Ventura',
    phone: '805-436-5868',
    phoneFormatted: '(805) 436-5868'
  },
  'santa-barbara': {
    name: 'Santa Barbara Office',
    address: '7 W. Figueroa Street, Suite 300\nSanta Barbara, CA 93101',
    city: 'Santa Barbara',
    phone: '805-436-5868',
    phoneFormatted: '(805) 436-5868'
  },
  'thousand-oaks': {
    name: 'Thousand Oaks Office',
    address: 'Thousand Oaks, CA',
    city: 'Thousand Oaks',
    phone: '805-262-9691',
    phoneFormatted: '(805) 262-9691'
  },
  'camarillo': {
    name: 'Camarillo Office',
    address: '1955 E Daily Dr\nCamarillo, CA 93010',
    city: 'Camarillo',
    phone: '805-764-2394',
    phoneFormatted: '(805) 764-2394'
  }
};

const serviceAreasByLocation: Record<FooterLocation, ServiceAreaLink[]> = {
  'ventura': [
    { name: 'Santa Barbara', href: '/santa-barbara' },
    { name: 'Montecito', href: '/montecito' },
    { name: 'Summerland', href: '/summerland' },
    { name: 'Carpinteria', href: '/carpinteria' },
    { name: 'Ventura', href: '/ventura' },
    { name: 'Oxnard', href: '/oxnard' },
    { name: 'Port Hueneme', href: '/port-hueneme' },
    { name: 'Camarillo', href: '/camarillo' },
    { name: 'Thousand Oaks', href: '/thousand-oaks' },
    { name: 'Newbury Park', href: '/newbury-park' },
    { name: 'Westlake Village', href: '/westlake-village' },
  ],
  'santa-barbara': [
    { name: 'Santa Barbara', href: '/santa-barbara' },
    { name: 'Montecito', href: '/montecito' },
    { name: 'Summerland', href: '/summerland' },
    { name: 'Carpinteria', href: '/carpinteria' },
    { name: 'Ojai', href: '/ojai' },
  ],
  'thousand-oaks': [
    { name: 'Thousand Oaks', href: '/thousand-oaks' },
    { name: 'Newbury Park', href: '/newbury-park' },
    { name: 'Westlake Village', href: '/westlake-village' },
  ],
  'camarillo': [
    { name: 'Camarillo', href: '/camarillo' },
    { name: 'Oxnard', href: '/oxnard' },
    { name: 'Port Hueneme', href: '/port-hueneme' },
    { name: 'Ventura', href: '/ventura' },
    { name: 'Santa Paula', href: '/santa-paula' },
  ],
};

interface FooterProps {
  location?: FooterLocation;
}

export const Footer = ({ location = 'ventura' }: FooterProps) => {
  const office = officeLocations[location];
  const serviceAreas = serviceAreasByLocation[location];
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-two-trees-gold mb-4">Two Trees Cleaning</h3>
            <p className="text-gray-300 mb-4">
              Professional house cleaning services for busy families since 2020.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Star className="w-4 h-4 fill-two-trees-gold text-two-trees-gold" />
              <span className="text-sm text-gray-300">4.9/5 stars from 200+ reviews</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-two-trees-gold" />
              <span className="text-sm text-gray-300">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-two-trees-gold" />
              <span className="text-sm text-gray-300">As featured in Montecito Journal</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{office.name}</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 text-two-trees-gold mt-1" />
                <span className="text-sm whitespace-pre-line">{office.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{office.phoneFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@twotreescleaning.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <div>Mon-Fri: 8:00 AM - 5:00 PM</div>
                  <div>Saturday: By Appointment</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <div className="text-gray-300 space-y-1 text-sm">
              {serviceAreas.map((area) => (
                <Link 
                  key={area.href} 
                  to={area.href} 
                  className="block hover:text-two-trees-gold transition-colors"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <div className="text-gray-300 space-y-1 text-sm mb-6">
              <Link to="/services/whats-included-in-cleaning" className="block hover:text-two-trees-gold transition-colors font-medium">
                What's Included in Cleaning
              </Link>
              <Link to="/services/regular-house-cleaning" className="block hover:text-two-trees-gold transition-colors">
                Regular House Cleaning
              </Link>
              <Link to="/services/deep-cleaning" className="block hover:text-two-trees-gold transition-colors">
                Deep Cleaning
              </Link>
              <Link to="/services/move-in-move-out" className="block hover:text-two-trees-gold transition-colors">
                Move-In/Move-Out Cleaning
              </Link>
              <Link to="/services/post-construction" className="block hover:text-two-trees-gold transition-colors">
                Post-Construction Cleaning
              </Link>
              <Link to="/services/commercial-cleaning" className="block hover:text-two-trees-gold transition-colors">
                Commercial Cleaning
              </Link>
              <Link to="/services/vacation-rental" className="block hover:text-two-trees-gold transition-colors">
                Vacation Rental Cleaning
              </Link>
              <p className="text-two-trees-gold font-medium pt-2">Starting at $140</p>
            </div>
            
            <h5 className="text-md font-semibold mb-2">Resources</h5>
            <div className="text-gray-300 space-y-1 text-sm mb-4">
              <Link to="/blog" className="block hover:text-two-trees-gold transition-colors">
                Cleaning Blog
              </Link>
              <Link to="/faq" className="block hover:text-two-trees-gold transition-colors">
                FAQ
              </Link>
              <Link to="/terms" className="block hover:text-two-trees-gold transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="block hover:text-two-trees-gold transition-colors">
                Privacy Policy
              </Link>
            </div>
            
            <h5 className="text-md font-semibold mb-2">Follow Us</h5>
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/twotreescleaning/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-two-trees-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61566622354565" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-two-trees-gold transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Two Trees Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
