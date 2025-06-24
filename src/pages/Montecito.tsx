
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Clock, Shield, CheckCircle, Crown } from "lucide-react";
import { updateMetaTags, generateCityKeywords } from "@/utils/metaTags";

const Montecito = () => {
  useEffect(() => {
    const montecitoCoordinates = {
      latitude: "34.4361",
      longitude: "-119.6378"
    };

    updateMetaTags({
      title: "Montecito House Cleaning Services | Two Trees Cleaning | Luxury Home Care",
      description: "Premium house cleaning services in Montecito, CA. Serving luxury estates, celebrity homes & the village. Discreet, trusted, and experienced since 2020. Book today!",
      cityName: "Montecito",
      cityCoordinates: montecitoCoordinates,
      url: "https://twotreescleaning.com/montecito",
      keywords: generateCityKeywords("Montecito")
    });
  }, []);

  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', `Montecito - ${location}`);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Montecito Phone Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" },
    { name: "Montecito", url: "https://twotreescleaning.com/montecito" }
  ];

  const neighborhoods = [
    "Upper Village", "Lower Village", "Coast Village Road", "Olive Mill Road",
    "Hot Springs Road", "East Valley Road", "Romero Canyon", "San Ysidro Ranch Area",
    "Birnam Wood", "Picacho Lane", "Eucalyptus Hill"
  ];

  const landmarks = [
    "Four Seasons Resort", "San Ysidro Ranch", "Montecito Country Club", "Coral Casino",
    "Coast Village Road", "Upper Village", "Lotusland Gardens", "Butterfly Beach"
  ];

  const testimonials = [
    {
      name: "Elizabeth H.",
      location: "Upper Village",
      rating: 5,
      text: "Two Trees provides the discretion and quality we expect for our Montecito estate. They're professional, trustworthy, and detail-oriented."
    },
    {
      name: "Robert K.",
      location: "Coast Village Road",
      rating: 5,
      text: "After trying several services, Two Trees is the only one that meets our luxury home standards. Highly recommend for Montecito properties."
    },
    {
      name: "Patricia M.",
      location: "East Valley Road",
      rating: 5,
      text: "They handle our vacation rental cleanings with absolute professionalism. Our guests always comment on the pristine condition."
    }
  ];

  const montecitoCoordinates = {
    latitude: "34.4361",
    longitude: "-119.6378"
  };

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup 
        cityName="Montecito"
        cityCoordinates={montecitoCoordinates}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Montecito", current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
                <Crown className="w-4 h-4 mr-1" />
                Luxury Montecito Service
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green mb-6">
                Montecito Luxury House Cleaning
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Premium cleaning services for Montecito's finest homes. From Coast Village Road estates to 
                Upper Village properties, we provide discreet, professional service with the highest standards 
                of quality and confidentiality along this stunning coastline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                  onClick={() => handleBookingClick('Hero')}
                >
                  Book Montecito Cleaning
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
            <div className="relative">
              <img 
                src="/lovable-uploads/4042e633-3464-473f-8856-715aa7b5b0f1.png" 
                alt="Stunning aerial view of Montecito coastline with pristine beaches, dramatic cliffs, and luxury homes nestled between mountains and ocean - Two Trees Cleaning service area"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Montecito Areas We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {neighborhoods.map((neighborhood, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-two-trees-green" />
                    <span className="font-medium text-gray-900">{neighborhood}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Luxury Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Crown className="w-6 h-6" />
                  Estate Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Complete luxury home maintenance for Montecito estates.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Full-service estate cleaning</li>
                  <li>• Guest house preparation</li>
                  <li>• High-end fixture care</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $250</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Shield className="w-6 h-6" />
                  Vacation Rental Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Premium turnover service for luxury vacation rentals.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Same-day turnover available</li>
                  <li>• Five-star cleaning standards</li>
                  <li>• Amenity restocking</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $200</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Clock className="w-6 h-6" />
                  Event Preparation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Pre and post-event cleaning for entertaining.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pre-party deep cleaning</li>
                  <li>• Post-event restoration</li>
                  <li>• Outdoor space cleaning</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Custom pricing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            What Montecito Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-two-trees-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-two-trees-green">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-two-trees-green mb-6">
            Experience Montecito's Premier Cleaning Service
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Trusted by Montecito's finest homes. Licensed, insured, and committed to discretion and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
              onClick={() => handleBookingClick('Final CTA')}
            >
              Book Your Montecito Cleaning
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 px-8 py-4 text-lg"
              onClick={handlePhoneClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (805) 456-1421
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Montecito;
