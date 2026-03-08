import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Star, Crown } from "lucide-react";
import { Link } from "react-router-dom";

export const WhatsIncludedSection = () => {
  const tiers = [
    {
      icon: Sparkles,
      name: "Essential Clean",
      description: "Reliable upkeep for tidy homes — done consistently, every visit.",
      iconBg: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Star,
      name: "Signature Clean",
      description: "Essential + one rotating deep clean item per visit. Most popular.",
      iconBg: "bg-two-trees-gold/10",
      iconColor: "text-two-trees-gold"
    },
    {
      icon: Crown,
      name: "Total Deep Clean",
      description: "Every surface, every detail — the complete home reset in one visit.",
      iconBg: "bg-primary/10",
      iconColor: "text-two-trees-gold"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-two-trees-green mb-4">
            Choose the Clean That Fits Your Home
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No mandatory deep clean required. Three tiers — each clearly defined, professionally delivered, and priced for what you actually need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {tiers.map((tier, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="p-8">
                <div className={`w-14 h-14 ${tier.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <tier.icon className={`w-7 h-7 ${tier.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-two-trees-green mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm">{tier.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-two-trees-green hover:bg-two-trees-green/90">
            <Link to="/services/whats-included-in-cleaning" className="flex items-center gap-2">
              Compare All Tiers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
