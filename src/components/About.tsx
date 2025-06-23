
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-two-trees-green">
              Meet the Two Trees Cleaning Team
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're David and Eli, a family-owned business serving Ventura County families who value their time. We understand the challenge of balancing work, family, and maintaining a clean home.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              That's why we created Two Trees Cleaning - to give you back your weekends and peace of mind, knowing your home is in expert hands.
            </p>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-two-trees-gold text-two-trees-gold" />)}
              </div>
              <span className="text-gray-600 italic">Trusted by 200+ Ventura County families</span>
            </div>
            <Link to="/about">
              <Button 
                variant="outline" 
                className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
          <div className="relative">
            <img src="/lovable-uploads/753bc8de-6a12-41a5-9eb4-067177715fdf.png" alt="Two Trees Cleaning team - professional house cleaning service owners" className="rounded-2xl shadow-xl w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
