import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";

export const WhatsIncludedSection = () => {
  const highlights = [
    "Complete room-by-room checklist",
    "Move-out cleaning requirements",
    "Add-on services available",
    "Clear pricing transparency"
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-two-trees-green mb-4">
            What's Included in Your Cleaning?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparency is important to us. See exactly what's included in each service and how to prepare for your cleaning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-two-trees-green rounded-full flex items-center justify-center">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-two-trees-green">
                Detailed Service Breakdown
              </h3>
            </div>
            
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-green flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-two-trees-green hover:bg-two-trees-green/90">
              <Link to="/services/whats-included-in-cleaning" className="flex items-center gap-2">
                View Complete Checklist
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <h4 className="text-xl font-bold text-two-trees-green mb-4">
                Know Before You Book
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-two-trees-gold pl-4">
                  <h5 className="font-semibold text-gray-800">Regular Cleaning</h5>
                  <p className="text-sm text-gray-600">Kitchen, bathrooms, bedrooms, living areas</p>
                </div>
                <div className="border-l-4 border-two-trees-gold pl-4">
                  <h5 className="font-semibold text-gray-800">Deep Cleaning</h5>
                  <p className="text-sm text-gray-600">Everything in regular + detailed deep clean</p>
                </div>
                <div className="border-l-4 border-two-trees-gold pl-4">
                  <h5 className="font-semibold text-gray-800">Move-Out</h5>
                  <p className="text-sm text-gray-600">Empty home requirements + deposit prep</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  "I love that they show exactly what's included. No surprises!" - Sarah M.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};