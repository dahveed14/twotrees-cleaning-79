import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { GoogleReviews } from "@/components/GoogleReviews";
export const SocialProof = () => {
  return <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-two-trees-green mb-4">What Our Customers Say</h2>
        <p className="text-xl text-gray-600 mb-12">
          Real reviews from real customers - see what busy families like yours are saying
        </p>

        <GoogleReviews />

        <div className="mt-12">
          <Badge variant="secondary" className="bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
            <Star className="w-4 h-4 mr-1 fill-two-trees-gold text-two-trees-gold" />
            4.9/5 stars on Google Reviews
          </Badge>
        </div>
      </div>
    </section>;
};