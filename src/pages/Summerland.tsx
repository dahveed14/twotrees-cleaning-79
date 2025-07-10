
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Star, Shield, Award } from "lucide-react";
import { updateMetaTags, generateCityKeywords } from "@/utils/metaTags";

const Summerland = () => {
  useEffect(() => {
    const summerlandCoordinates = {
      latitude: "34.4208",
      longitude: "-119.5951"
    };

    updateMetaTags({
      title: "Summerland House Cleaning Services | Two Trees Cleaning | Beach Community Specialists",
      description: "Professional house cleaning services in Summerland, CA. Serving beachside homes, vacation rentals & coastal properties. Licensed & insured. Book your cleaning today!",
      cityName: "Summerland",
      cityCoordinates: summerlandCoordinates,
      url: "https://twotreescleaning.com/summerland",
      keywords: generateCityKeywords("Summerland")
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
    { name: "Summerland", url: "https://twotreescleaning.com/summerland" }
  ];

  const summerlandCoordinates = {
    latitude: "34.4208",
    longitude: "-119.5951"
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Summerland House Cleaning Services | Two Trees Cleaning | Beach Community Specialists</title>
        <meta name="description" content="Professional house cleaning services in Summerland, CA. Serving beachside homes, vacation rentals & coastal properties. Licensed & insured. Book your cleaning today!" />
        <link rel="canonical" href="https://twotreescleaning.com/summerland" />
      </Helmet>
      <SchemaMarkup 
        cityName="Summerland"
        cityCoordinates={summerlandCoordinates}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Summerland", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Professional House Cleaning in Summerland, CA
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Specialized cleaning services for Summerland's beautiful beachside community. From coastal homes to vacation rentals, we keep your property pristine with ocean-safe cleaning products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Summerland Hero')}
              >
                Book Your Summerland Cleaning
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green hover:text-white px-8 py-4 text-lg"
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
                Summerland's Trusted Cleaning Service
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Summerland's unique coastal environment requires specialized cleaning expertise. Our team understands the challenges of salt air, sand, and maintaining vacation rental properties in this charming beachside community.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Beachfront & coastal properties</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Vacation rental specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Ocean-safe cleaning products</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-two-trees-green mb-4">
                Starting at $140
              </h3>
              <p className="text-gray-600 mb-6">
                Professional house cleaning tailored to Summerland's coastal lifestyle
              </p>
              <Button 
                className="w-full bg-two-trees-gold hover:bg-two-trees-gold/90"
                onClick={() => handleBookingClick('Summerland Pricing')}
              >
                Get Your Free Quote
              </Button>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Our Summerland Cleaning Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Vacation Rental Cleaning",
                  description: "Turnover cleaning for Airbnb and rental properties"
                },
                {
                  title: "Beachfront Home Cleaning",
                  description: "Specialized care for coastal properties"
                },
                {
                  title: "Salt Air Protection",
                  description: "Cleaning methods that protect from ocean corrosion"
                },
                {
                  title: "Sand Removal",
                  description: "Expert techniques for eliminating beach sand"
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
              Ready for a Spotless Summerland Home?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join your neighbors who trust Two Trees Cleaning with their coastal homes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Summerland CTA')}
              >
                Book Now - Starting at $140
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-two-trees-green px-8 py-4 text-lg"
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

export default Summerland;
