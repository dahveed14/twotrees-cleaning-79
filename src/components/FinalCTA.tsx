
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

interface FinalCTAProps {
  onBookingClick: (location: string) => void;
  onPhoneClick: () => void;
}

export const FinalCTA = ({ onBookingClick, onPhoneClick }: FinalCTAProps) => {
  return (
    <section className="py-20 px-4 bg-two-trees-green text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Get Your Weekends Back?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join hundreds of Ventura County families who trust Two Trees Cleaning with their homes. Book your first cleaning today and discover the difference professional care makes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold" onClick={() => onBookingClick('Final CTA')}>
            Book Online
          </Button>
          <Button variant="outline-white" size="lg" onClick={onPhoneClick} className="px-8 py-4 text-lg">
            <Phone className="w-5 h-5 mr-2" />
            Call (805) 436-5868
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm opacity-75">
          <MapPin className="w-4 h-4" />
          <span>Proudly serving Ventura County families since 2020</span>
        </div>
      </div>
    </section>
  );
};
