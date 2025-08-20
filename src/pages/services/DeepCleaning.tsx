
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, Home, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const DeepCleaning = () => {
  useEffect(() => {
    const venturaCountyCoordinates = {
      latitude: "34.3705",
      longitude: "-119.1391"
    };

    updateMetaTags({
      title: "Deep Cleaning Services | Two Trees Cleaning | Comprehensive House Cleaning | Ventura County",
      description: "Professional deep cleaning services in Ventura County. Comprehensive top-to-bottom cleaning for your home. Perfect for spring cleaning, special occasions, or first-time service.",
      cityName: "Ventura County",
      cityCoordinates: venturaCountyCoordinates,
      url: "https://twotreescleaning.com/services/deep-cleaning",
      keywords: [
        "deep cleaning service Ventura County",
        "comprehensive house cleaning",
        "spring cleaning service",
        "detailed home cleaning",
        "thorough house cleaning",
        "deep clean Ventura County",
        "intensive cleaning service",
        "complete house cleaning"
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
    { name: "Deep Cleaning", url: "https://twotreescleaning.com/services/deep-cleaning" }
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
          { label: "Deep Cleaning", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Deep Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Get your home thoroughly cleaned from top to bottom. Perfect for spring cleaning, preparing for special events, or as your first cleaning service before starting regular maintenance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Deep Cleaning Hero')}
              >
                Book Deep Cleaning - Starting at $220
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

          {/* What's Included Link Section */}
          <div className="mb-16 flex justify-center">
            <div className="max-w-lg p-6 bg-primary/5 border border-primary/20 rounded-xl text-center">
              <div className="flex justify-center mb-3">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Curious about what's included in deep cleaning?
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Get complete transparency about what's covered in our comprehensive deep cleaning service
              </p>
              <Link to="/services/whats-included-in-cleaning">
                <Button variant="outline" className="inline-flex items-center gap-2">
                  View Detailed Cleaning Checklist
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Comprehensive Deep Cleaning Includes
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green flex items-center gap-2">
                    <Home className="w-6 h-6" />
                    Kitchen Deep Clean
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Exterior of all appliances (plus inside microwave)",
                    "Cabinet fronts and handles",
                    "Countertops and backsplash scrubbing",
                    "Sink and faucet deep sanitizing",
                    "Range hood and exhaust fan",
                    "Light fixtures and ceiling fans"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Bathroom Deep Clean
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Tile and grout scrubbing (non-restorative)",
                    "Shower/tub deep cleaning",
                    "Toilet cleaning inside and out",
                    "Mirror and glass cleaning",
                    "Exhaust fan cleaning",
                    "Floor scrubbing and sanitizing"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-two-trees-green mb-6 text-center">
                Plus Throughout Your Home
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Light switches and outlets",
                  "Door frames and handles",
                  "Ceiling fan blades",
                  "Air vent cleaning",
                  "Detailed furniture dusting",
                  "Inside windowsill cleaning",
                  "Blind and shade cleaning"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* When to Book */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-8">
              When to Book Deep Cleaning
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Spring cleaning season",
                "Before hosting events",
                "Moving into a new home",
                "Starting regular service"
              ].map((occasion, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-semibold text-two-trees-green mb-2">{occasion}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-6">
              Deep Cleaning Service Areas
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
                  className="bg-gray-50 px-4 py-3 rounded-lg shadow hover:shadow-md transition-shadow text-two-trees-green hover:text-two-trees-green/80"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-two-trees-green text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for a Spotless Home?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the difference a professional deep clean makes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Deep Cleaning CTA')}
              >
                Book Your Deep Clean Today
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-two-trees-green hover:bg-white/90 px-8 py-4 text-lg font-semibold"
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

export default DeepCleaning;
