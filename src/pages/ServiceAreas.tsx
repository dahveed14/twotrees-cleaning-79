
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";

const ServiceAreas = () => {
  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', location);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Phone Number Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const serviceAreas = [
    {
      name: "Santa Barbara",
      description: "Professional house cleaning services in Santa Barbara and surrounding areas.",
      highlights: ["Historic downtown", "Beach communities", "Residential neighborhoods"],
      href: "/santa-barbara"
    },
    {
      name: "Thousand Oaks",
      description: "Reliable cleaning services for Thousand Oaks families and businesses.",
      highlights: ["Family neighborhoods", "Conejo Valley", "Premium home cleaning"],
      href: "/thousand-oaks"
    },
    {
      name: "Oxnard",
      description: "Trusted house cleaning in Oxnard with flexible scheduling.",
      highlights: ["Coastal communities", "Family-owned businesses", "Affordable rates"],
      href: "/oxnard"
    },
    {
      name: "Camarillo",
      description: "Detail-oriented cleaning services throughout Camarillo.",
      highlights: ["Suburban homes", "Family-friendly service", "Regular maintenance"],
      href: "/camarillo"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Professional House Cleaning Throughout Ventura County
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Two Trees Cleaning proudly serves families and businesses across Ventura County. 
              Licensed, insured, and trusted by over 200+ satisfied customers since 2020.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {serviceAreas.map((area) => (
              <Card key={area.name} className="hover:shadow-xl transition-shadow border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-two-trees-green text-2xl">
                    <MapPin className="w-6 h-6" />
                    {area.name} House Cleaning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{area.description}</p>
                  <ul className="space-y-2">
                    {area.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-two-trees-gold rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 pt-4">
                    <Button 
                      className="bg-two-trees-green hover:bg-two-trees-green/90"
                      onClick={() => handleBookingClick(`Service Areas - ${area.name}`)}
                    >
                      Book {area.name} Cleaning
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                      onClick={handlePhoneClick}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-two-trees-green mb-4">
              Ready to Get Your Time Back?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join over 200+ satisfied customers across Ventura County who trust Two Trees Cleaning 
              with their homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Service Areas CTA')}
              >
                Book Your Cleaning Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 px-8 py-4 text-lg"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                (805) 456-1421
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceAreas;
