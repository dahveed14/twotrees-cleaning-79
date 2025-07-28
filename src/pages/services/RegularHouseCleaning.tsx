import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, Clock, Shield, Star } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const RegularHouseCleaning = () => {
  useEffect(() => {
    const venturaCountyCoordinates = {
      latitude: "34.3705",
      longitude: "-119.1391"
    };

    updateMetaTags({
      title: "Regular House Cleaning Services | Two Trees Cleaning | Weekly & Bi-Weekly | Ventura County",
      description: "Professional regular house cleaning services in Ventura County. Weekly, bi-weekly & monthly cleaning plans. Licensed & insured. Starting at $140. Book your recurring cleaning today!",
      cityName: "Ventura County",
      cityCoordinates: venturaCountyCoordinates,
      url: "https://twotreescleaning.com/services/regular-house-cleaning",
      keywords: [
        "regular house cleaning Ventura County",
        "weekly house cleaning service",
        "bi-weekly cleaning service",
        "monthly house cleaning",
        "recurring cleaning service",
        "maintenance cleaning Ventura County",
        "scheduled house cleaning",
        "routine cleaning service",
        "regular maid service Ventura County"
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
    { name: "Regular House Cleaning", url: "https://twotreescleaning.com/services/regular-house-cleaning" }
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
          { label: "Regular House Cleaning", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Regular House Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Maintain a spotless home with our reliable weekly, bi-weekly, and monthly cleaning services. Let us handle the housework so you can focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Regular Cleaning Hero')}
              >
                Book Regular Cleaning - Starting at $140
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

          {/* What's Included Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              What's Included in Regular Cleaning
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Dusting all surfaces and furniture",
                "Vacuuming carpets and rugs",
                "Mopping hard floors",
                "Kitchen cleaning and sanitizing",
                "Bathroom cleaning and disinfecting", 
                "Trash removal and replacement",
                "Bed making and tidying",
                "Light fixture cleaning"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-two-trees-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frequency Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Choose Your Cleaning Schedule
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <CardTitle className="text-2xl text-two-trees-green flex items-center justify-center gap-2">
                    <Clock className="w-6 h-6" />
                    Weekly
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Perfect for busy families and high-traffic homes</p>
                  <div className="text-3xl font-bold text-two-trees-gold">$140</div>
                  <p className="text-sm text-gray-500">Starting price</p>
                  <Button 
                    className="w-full bg-two-trees-green hover:bg-two-trees-green/90"
                    onClick={() => handleBookingClick('Weekly Cleaning')}
                  >
                    Book Weekly Service
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow text-center border-2 border-two-trees-gold">
                <CardHeader>
                  <div className="bg-two-trees-gold text-white px-4 py-1 rounded-full text-sm font-semibold mx-auto w-fit mb-4">
                    Most Popular
                  </div>
                  <CardTitle className="text-2xl text-two-trees-green flex items-center justify-center gap-2">
                    <Clock className="w-6 h-6" />
                    Bi-Weekly
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">The sweet spot for most households</p>
                  <div className="text-3xl font-bold text-two-trees-gold">$160</div>
                  <p className="text-sm text-gray-500">Starting price</p>
                  <Button 
                    className="w-full bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green font-semibold"
                    onClick={() => handleBookingClick('Bi-Weekly Cleaning')}
                  >
                    Book Bi-Weekly Service
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <CardTitle className="text-2xl text-two-trees-green flex items-center justify-center gap-2">
                    <Clock className="w-6 h-6" />
                    Monthly
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">Great for maintenance and touch-ups</p>
                  <div className="text-3xl font-bold text-two-trees-gold">$180</div>
                  <p className="text-sm text-gray-500">Starting price</p>
                  <Button 
                    className="w-full bg-two-trees-green hover:bg-two-trees-green/90"
                    onClick={() => handleBookingClick('Monthly Cleaning')}
                  >
                    Book Monthly Service
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-6">
              Regular Cleaning Service Areas
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
              Ready for a Consistently Clean Home?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join over 200+ families who trust Two Trees Cleaning with their regular housekeeping
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Regular Cleaning CTA')}
              >
                Start Your Regular Service Today
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

export default RegularHouseCleaning;
