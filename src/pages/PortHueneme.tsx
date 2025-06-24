
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Star, Shield, Award } from "lucide-react";
import { updateMetaTags, generateCityKeywords } from "@/utils/metaTags";

const PortHueneme = () => {
  useEffect(() => {
    const portHuenemeCoordinates = {
      latitude: "34.1478",
      longitude: "-119.1951"
    };

    updateMetaTags({
      title: "Port Hueneme House Cleaning Services | Two Trees Cleaning | Military Family Specialists",
      description: "Professional house cleaning services in Port Hueneme, CA. Serving military families and working professionals. Affordable, reliable cleaning. Licensed & insured.",
      cityName: "Port Hueneme",
      cityCoordinates: portHuenemeCoordinates,
      url: "https://twotreescleaning.com/port-hueneme",
      keywords: generateCityKeywords("Port Hueneme")
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
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" },
    { name: "Port Hueneme", url: "https://twotreescleaning.com/port-hueneme" }
  ];

  const portHuenemeCoordinates = {
    latitude: "34.1478",
    longitude: "-119.1951"
  };

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup 
        cityName="Port Hueneme"
        cityCoordinates={portHuenemeCoordinates}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Port Hueneme", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Professional House Cleaning in Port Hueneme, CA
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Reliable cleaning services for Port Hueneme's hardworking families and military personnel. We understand busy schedules and provide flexible, affordable cleaning solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Port Hueneme Hero')}
              >
                Book Your Port Hueneme Cleaning
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

          {/* Local Focus Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-two-trees-green mb-6">
                Port Hueneme's Trusted Cleaning Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Port Hueneme's unique community of military families and working professionals deserves reliable, affordable cleaning services. We respect your time and budget while delivering exceptional results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Military family friendly</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Flexible scheduling options</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Affordable rates for working families</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-two-trees-green mb-4">
                Starting at $140
              </h3>
              <p className="text-gray-600 mb-6">
                Professional house cleaning tailored to Port Hueneme families
              </p>
              <Button 
                className="w-full bg-two-trees-gold hover:bg-two-trees-gold/90"
                onClick={() => handleBookingClick('Port Hueneme Pricing')}
              >
                Get Your Free Quote
              </Button>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Our Port Hueneme Cleaning Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Military Family Cleaning",
                  description: "Flexible service for deployment schedules"
                },
                {
                  title: "Working Family Support",
                  description: "Convenient scheduling around work hours"
                },
                {
                  title: "Affordable Rates",
                  description: "Quality cleaning that fits your budget"
                },
                {
                  title: "Move-In/Move-Out",
                  description: "Perfect for PCS moves and relocations"
                },
                {
                  title: "Regular Maintenance",
                  description: "Weekly, bi-weekly, or monthly service"
                },
                {
                  title: "Deep Cleaning",
                  description: "Comprehensive seasonal cleaning"
                }
              ].map((service, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-two-trees-green">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-two-trees-green text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for a Spotless Port Hueneme Home?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join your neighbors who trust Two Trees Cleaning with their homes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Port Hueneme CTA')}
              >
                Book Now - Starting at $140
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

export default PortHueneme;
