
import { Star, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-two-trees-gold mb-4">Two Trees Cleaning</h3>
            <p className="text-gray-300 mb-4">
              Professional house cleaning services for busy Ventura County families.
            </p>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-two-trees-gold text-two-trees-gold" />
              <span className="text-sm text-gray-300">4.9/5 stars on Google</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(805) 456-1421</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@twotreescleaning.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Ventura, CA</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <div className="text-gray-300 space-y-1">
              <p>Ventura</p>
              <p>Oxnard</p>
              <p>Thousand Oaks</p>
              <p>Camarillo</p>
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
