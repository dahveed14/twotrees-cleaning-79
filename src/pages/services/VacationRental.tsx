
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, Key, Star, Calendar } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const VacationRental = () => {
  useEffect(() => {
    const venturaCountyCoordinates = {
      latitude: "34.3705",
      longitude: "-119.1391"
    };

    updateMetaTags({
      title: "Vacation Rental Cleaning Services | Two Trees Cleaning | Airbnb & VRBO Cleaning | Ventura County",
      description: "Professional vacation rental cleaning services in Ventura County. Airbnb, VRBO, and short-term rental turnover cleaning. Fast, reliable service for property managers and hosts.",
      cityName: "Ventura County",
      cityCoordinates: venturaCountyCoordinates,
      url: "https://twotreescleaning.com/services/vacation-rental",
      keywords: [
        "vacation rental cleaning Ventura County",
        "Airbnb cleaning service",
        "VRBO cleaning Ventura County",
        "short term rental cleaning",
        "property management cleaning",
        "turnover cleaning service",
        "vacation home cleaning",
        "rental property cleaning Ventura County"
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
    window.location.href = 'tel:805-436-5868';
  };

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Services", url: "https://twotreescleaning.com/services" },
    { name: "Vacation Rental", url: "https://twotreescleaning.com/services/vacation-rental" }
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
          { label: "Vacation Rental", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Vacation Rental Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Specialized cleaning services for Airbnb, VRBO, and short-term vacation rentals. Fast, reliable turnover cleaning to keep your guests happy and your reviews stellar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Vacation Rental Hero')}
              >
                Book Rental Cleaning - Starting at $180
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 px-8 py-4 text-lg"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                (805) 436-5868
              </Button>
            </div>
          </div>

          {/* Service Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Why Choose Us for Your Vacation Rental
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-two-trees-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-two-trees-green">
                    Fast Turnovers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Same-day and quick turnaround cleaning to maximize your booking availability
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-two-trees-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-two-trees-green">
                    5-Star Standards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Hotel-quality cleaning that helps maintain your property's excellent reviews
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-two-trees-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Key className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-two-trees-green">
                    Property Management Ready
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Seamless coordination with property managers and automated scheduling
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Turnover Cleaning Checklist */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Complete Vacation Rental Turnover
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green">Guest-Focused Cleaning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Strip and remake all beds with fresh linens",
                    "Deep clean and sanitize bathrooms",
                    "Kitchen deep clean and restock",
                    "Living areas dusting and vacuuming",
                    "Floor mopping and sanitizing",
                    "Trash removal and fresh liners",
                    "Check and replace amenities",
                    "Final inspection for guest readiness"
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
                  <CardTitle className="text-xl text-two-trees-green">Property Maintenance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Check and report any damages",
                    "Test all appliances and electronics",
                    "Inspect plumbing and fixtures",
                    "Check lighting and replace bulbs",
                    "Outdoor area cleaning (patios, decks)",
                    "Hot tub/pool area maintenance",
                    "Laundry washing and folding",
                    "Property security check"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Property Types */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-8">
              Vacation Rental Properties We Service
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                "Beach Houses",
                "Mountain Cabins",
                "City Condos",
                "Luxury Estates",
                "Guest Houses",
                "Vacation Homes",
                "Short-term Rentals",
                "Corporate Housing"
              ].map((type, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <span className="text-two-trees-green font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-6">
              Vacation Rental Service Areas
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
              Ready to Maximize Your Rental Income?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Partner with us for reliable cleaning that keeps your vacation rental booked and your guests happy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Vacation Rental CTA')}
              >
                Start Your Rental Partnership
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (805) 436-5868
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VacationRental;
