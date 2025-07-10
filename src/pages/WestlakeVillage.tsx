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

const WestlakeVillage = () => {
  useEffect(() => {
    const westlakeVillageCoordinates = {
      latitude: "34.1458",
      longitude: "-118.8056"
    };

    updateMetaTags({
      title: "Westlake Village House Cleaning Services | Two Trees Cleaning | Luxury Home Specialists",
      description: "Premium house cleaning services in Westlake Village, CA. Serving upscale homes with meticulous attention to detail. Licensed, insured & trusted by luxury homeowners.",
      cityName: "Westlake Village",
      cityCoordinates: westlakeVillageCoordinates,
      url: "https://twotreescleaning.com/westlake-village",
      keywords: generateCityKeywords("Westlake Village")
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
    { name: "Westlake Village", url: "https://twotreescleaning.com/westlake-village" }
  ];

  const westlakeVillageCoordinates = {
    latitude: "34.1458",
    longitude: "-118.8056"
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Westlake Village House Cleaning Services | Two Trees Cleaning | Luxury Home Specialists</title>
        <meta name="description" content="Premium house cleaning services in Westlake Village, CA. Serving upscale homes with meticulous attention to detail. Licensed, insured & trusted by luxury homeowners." />
        <link rel="canonical" href="https://twotreescleaning.com/westlake-village" />
      </Helmet>
      <SchemaMarkup 
        cityName="Westlake Village"
        cityCoordinates={westlakeVillageCoordinates}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Westlake Village", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Premium House Cleaning in Westlake Village, CA
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Exceptional cleaning services for Westlake Village's discerning homeowners. We provide meticulous attention to detail and premium service that matches the quality of your luxury home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Westlake Village Hero')}
              >
                Book Your Westlake Village Cleaning
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
                Westlake Village's Luxury Cleaning Specialists
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Westlake Village is known for its beautiful homes and high standards. Our premium cleaning service matches that excellence with meticulous attention to detail and the finest cleaning products and techniques.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Luxury home specialists</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Premium products & techniques</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Meticulous attention to detail</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-two-trees-green mb-4">
                Starting at $140
              </h3>
              <p className="text-gray-600 mb-6">
                Premium house cleaning service for Westlake Village homes
              </p>
              <Button 
                className="w-full bg-two-trees-gold hover:bg-two-trees-gold/90"
                onClick={() => handleBookingClick('Westlake Village Pricing')}
              >
                Get Your Free Quote
              </Button>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Our Westlake Village Cleaning Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Luxury Home Cleaning",
                  description: "White-glove service for premium properties"
                },
                {
                  title: "High-End Materials Care",
                  description: "Specialized care for marble, hardwood, and luxury finishes"
                },
                {
                  title: "Premium Products",
                  description: "Top-quality, eco-friendly cleaning solutions"
                },
                {
                  title: "Detailed Service",
                  description: "Meticulous attention to every surface and corner"
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
              Ready for a Pristine Westlake Village Home?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join your neighbors who trust Two Trees Cleaning with their luxury homes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Westlake Village CTA')}
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

export default WestlakeVillage;
