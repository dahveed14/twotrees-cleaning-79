
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, Building, Users, Clock } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const CommercialCleaning = () => {
  useEffect(() => {
    const venturaCountyCoordinates = {
      latitude: "34.3705",
      longitude: "-119.1391"
    };

    updateMetaTags({
      title: "Commercial Cleaning Services | Two Trees Cleaning | Office & Business Cleaning | Ventura County",
      description: "Professional commercial cleaning services in Ventura County. Office cleaning, retail spaces, medical facilities. Flexible scheduling, licensed & insured. Serving businesses since 2020.",
      cityName: "Ventura County",
      cityCoordinates: venturaCountyCoordinates,
      url: "https://twotreescleaning.com/services/commercial-cleaning",
      keywords: [
        "commercial cleaning Ventura County",
        "office cleaning service",
        "business cleaning Ventura County",
        "retail cleaning service",
        "medical office cleaning",
        "commercial janitorial service",
        "workplace cleaning Ventura County",
        "professional business cleaning"
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
    { name: "Commercial Cleaning", url: "https://twotreescleaning.com/services/commercial-cleaning" }
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
          { label: "Commercial Cleaning", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Commercial Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Professional cleaning services for offices, retail spaces, and commercial facilities throughout Ventura County. Flexible scheduling to fit your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Commercial Cleaning Hero')}
              >
                Get Commercial Quote
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

          {/* Business Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Commercial Spaces We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-two-trees-green flex items-center justify-center gap-2">
                    <Building className="w-8 h-8" />
                    Office Buildings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "Executive offices",
                      "Open workspace areas",
                      "Conference rooms",
                      "Reception areas",
                      "Break rooms and kitchens",
                      "Restroom facilities"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-two-trees-green flex items-center justify-center gap-2">
                    <Users className="w-8 h-8" />
                    Retail & Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "Retail stores",
                      "Restaurants",
                      "Salons and spas",
                      "Fitness centers",
                      "Showrooms",
                      "Customer service areas"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-two-trees-green flex items-center justify-center gap-2">
                    <Clock className="w-8 h-8" />
                    Medical & Professional
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "Medical offices",
                      "Dental practices",
                      "Law firms",
                      "Accounting offices",
                      "Real estate offices",
                      "Professional services"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Commercial Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Complete Commercial Cleaning Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-6">Daily Cleaning Services</h3>
                <div className="space-y-3">
                  {[
                    "Trash removal and replacement",
                    "Restroom cleaning and sanitizing",
                    "Dusting desks and surfaces",
                    "Vacuuming carpeted areas",
                    "Mopping hard floors",
                    "Emptying recycling bins",
                    "Cleaning break room/kitchen areas",
                    "Disinfecting high-touch surfaces"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-6">Deep Cleaning Services</h3>
                <div className="space-y-3">
                  {[
                    "Window cleaning inside and out",
                    "Carpet deep cleaning",
                    "Floor stripping and waxing",
                    "Light fixture cleaning",
                    "Baseboards and trim cleaning",
                    "Air vent cleaning",
                    "Upholstery cleaning",
                    "Post-construction cleanup"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scheduling Options */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-8">
              Flexible Scheduling Options
            </h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { frequency: "Daily", description: "Monday through Friday service" },
                { frequency: "Weekly", description: "Same day each week" },
                { frequency: "Bi-Weekly", description: "Every other week" },
                { frequency: "Monthly", description: "Once per month" }
              ].map((option, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-two-trees-green mb-2">{option.frequency}</h3>
                    <p className="text-gray-600 text-sm">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-6">
              Commercial Service Areas
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
              Ready to Elevate Your Workplace?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Create a clean, professional environment that impresses clients and motivates employees
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Commercial Cleaning CTA')}
              >
                Get Your Commercial Quote
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

export default CommercialCleaning;
