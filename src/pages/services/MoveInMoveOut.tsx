
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, Truck, Home } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const MoveInMoveOut = () => {
  useEffect(() => {
    const venturaCountyCoordinates = {
      latitude: "34.3705",
      longitude: "-119.1391"
    };

    updateMetaTags({
      title: "Move In Move Out Cleaning Services | Two Trees Cleaning | Ventura County Moving Cleaners",
      description: "Professional move-in and move-out cleaning services in Ventura County. Make your transition smooth with thorough cleaning. Perfect for rentals, real estate, and relocations.",
      cityName: "Ventura County",
      cityCoordinates: venturaCountyCoordinates,
      url: "https://twotreescleaning.com/services/move-in-move-out",
      keywords: [
        "move out cleaning Ventura County",
        "move in cleaning service",
        "rental cleaning service",
        "end of lease cleaning",
        "real estate cleaning",
        "relocation cleaning service",
        "tenant cleaning Ventura County",
        "property cleaning service"
      ]
    });
  }, []);

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

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Services", url: "https://twotreescleaning.com/services" },
    { name: "Move In Move Out", url: "https://twotreescleaning.com/services/move-in-move-out" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup 
        cityName="Ventura County"
        cityCoordinates={{ latitude: "34.3705", longitude: "-119.1391" }}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Services", href: "/services" },
          { label: "Move In Move Out", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Move-In & Move-Out Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Make your move stress-free with our comprehensive cleaning services. Perfect for tenants, landlords, and real estate professionals who need properties spotless for transitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Move In Out Hero')}
              >
                Book Moving Cleaning - Starting at $200
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

          {/* Service Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Choose Your Moving Cleaning Service
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-two-trees-green flex items-center justify-center gap-2">
                    <Truck className="w-8 h-8" />
                    Move-Out Cleaning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">
                    Get your deposit back and leave your rental spotless for the next tenant.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Deep clean all rooms",
                      "Inside appliances cleaning",
                      "Cabinet and drawer cleaning",
                      "Closet cleaning",
                      "Garage cleaning (if applicable)",
                      "Final walk-through ready"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-two-trees-green hover:bg-two-trees-green/90 mt-4"
                    onClick={() => handleBookingClick('Move Out Cleaning')}
                  >
                    Book Move-Out Cleaning
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-two-trees-green flex items-center justify-center gap-2">
                    <Home className="w-8 h-8" />
                    Move-In Cleaning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">
                    Start fresh in your new home with a thorough sanitizing clean.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Sanitize all surfaces",
                      "Deep clean bathrooms",
                      "Kitchen sanitization",
                      "Floor deep cleaning",
                      "Light fixture cleaning",
                      "Move-in ready condition"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green font-semibold mt-4"
                    onClick={() => handleBookingClick('Move In Cleaning')}
                  >
                    Book Move-In Cleaning
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Checklist */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Complete Move-In/Move-Out Checklist
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green">Kitchen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "Inside/outside refrigerator",
                      "Oven and stovetop deep clean", 
                      "Microwave inside and out",
                      "Dishwasher cleaning",
                      "Cabinet fronts and insides",
                      "Sink and faucet sanitizing"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-two-trees-gold flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green">Bathrooms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "Toilet deep cleaning",
                      "Shower/tub scrubbing",
                      "Tile and grout cleaning",
                      "Mirror and fixtures",
                      "Cabinet cleaning",
                      "Floor sanitization"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-two-trees-gold flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green">Throughout</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      "Baseboards and trim",
                      "Window sills and tracks",
                      "Light fixtures and fans",
                      "Closet cleaning",
                      "Door frames and switches",
                      "Floor deep cleaning"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-two-trees-gold flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-6">
              Move-In/Move-Out Service Areas
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {[
                { name: "Santa Barbara", href: "/santa-barbara" },
                { name: "Montecito", href: "/montecito" },
                { name: "Thousand Oaks", href: "/thousand-oaks" },
                { name: "Oxnard", href: "/oxnard" },
                { name: "Camarillo", href: "/camarillo" },
                { name: "Ventura", href: "/ventura" },
                { name: "Summerland", href: "/summerland" },
                { name: "Carpinteria", href: "/carpinteria" }
              ].map((area) => (
                <Link
                  key={area.name}
                  to={area.href}
                  className="bg-white px-4 py-3 rounded-lg shadow hover:shadow-md transition-shadow text-two-trees-green hover:text-two-trees-green/80"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-two-trees-green text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Make Your Move Stress-Free
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us handle the cleaning so you can focus on your move
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Move In Out CTA')}
              >
                Book Your Moving Clean Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (805) 456-1421
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MoveInMoveOut;
