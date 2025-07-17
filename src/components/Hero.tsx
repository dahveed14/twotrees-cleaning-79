import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  onBookingClick: (location: string) => void;
  onPhoneClick: () => void;
}

export const Hero = ({
  onBookingClick,
  onPhoneClick
}: HeroProps) => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-two-trees-gold text-two-trees-green font-medium">
                Serving Ventura & Santa Barbara Counties Since 2020
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green leading-tight">Trusted House Cleaning Service</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                As the best cleaning company in Ventura and Santa Barbara Counties, Two Trees Cleaning helps busy families reclaim their weekends. From Santa Barbara to Thousand Oaks, Oxnard to Camarillo, our reliable, detail-oriented team delivers spotless homes so you can focus on what matters most.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-4 text-lg font-semibold" onClick={() => onBookingClick('Hero Section')}>
                Book Online
              </Button>
              <Button variant="outline" size="lg" className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 hover:text-two-trees-green px-8 py-4 text-lg" onClick={onPhoneClick}>
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Star className="w-4 h-4 fill-two-trees-gold text-two-trees-gold" />
              <span className="font-semibold">4.9/5 stars</span>
              <span>from over 200+ families who chose us as their best cleaning company</span>
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span>Reviews</span>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-600 mb-2">Looking for office cleaning?</p>
              <Link to="/commercial" className="text-two-trees-green hover:text-two-trees-green/80 font-medium underline">
                Learn about our commercial cleaning services in Ventura & Santa Barbara Counties →
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <img src="/lovable-uploads/854ae905-37ee-4e73-a5f8-a01c6f2e9bb4.png" alt="Two Trees Cleaning - best cleaning company in Ventura and Santa Barbara Counties - professional team member cleaning a beautiful home with modern cleaning equipment and eco-friendly supplies" className="rounded-2xl shadow-2xl w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};