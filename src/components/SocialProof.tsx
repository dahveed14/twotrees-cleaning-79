import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const SocialProof = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-two-trees-green mb-4">
            Trusted by 200+ Families
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what our clients have to say about their experience with Two Trees Cleaning
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-two-trees-gold text-two-trees-gold" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Two Trees Cleaning has been amazing! They're always on time, thorough, and professional. Our home has never looked better."
              </p>
              <p className="font-semibold text-two-trees-green">- Sarah M.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-two-trees-gold text-two-trees-gold" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "David and Eli are fantastic! They pay attention to every detail and treat our home like it's their own. Highly recommend!"
              </p>
              <p className="font-semibold text-two-trees-green">- Michael R.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-two-trees-gold text-two-trees-gold" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Best cleaning service we've ever used! Reliable, trustworthy, and they do an excellent job every single time."
              </p>
              <p className="font-semibold text-two-trees-green">- Jennifer L.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};