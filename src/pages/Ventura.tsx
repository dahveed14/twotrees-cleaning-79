import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Clock, Shield, CheckCircle, Anchor } from "lucide-react";
import { updateMetaTags, generateCityKeywords } from "@/utils/metaTags";

const Ventura = () => {
  useEffect(() => {
    const venturaCoordinates = {
      latitude: "34.2818",
      longitude: "-119.2945"
    };

    updateMetaTags({
      title: "Ventura House Cleaning Services | Two Trees Cleaning | Historic & Coastal",
      description: "Professional house cleaning services in Ventura, CA. Serving historic downtown, pier area, beach communities & missions. Licensed, insured & locally trusted. Book today!",
      cityName: "Ventura",
      cityCoordinates: venturaCoordinates,
      url: "https://twotreescleaning.com/ventura",
      keywords: generateCityKeywords("Ventura")
    });
  }, []);

  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', `Ventura - ${location}`);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Ventura Phone Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" },
    { name: "Ventura", url: "https://twotreescleaning.com/ventura" }
  ];

  const venturaCoordinates = {
    latitude: "34.2818",
    longitude: "-119.2945"
  };

  const neighborhoods = [
    "Downtown Ventura", "Midtown", "Eastside", "Westside", "Pierpont Bay",
    "Ventura Avenue", "Foothill Road", "Telegraph Road", "Saticoy",
    "Montalvo", "Avenue Community", "Ocean View"
  ];

  const landmarks = [
    "Ventura Pier", "San Buenaventura Mission", "Downtown Ventura", "Ventura Harbor",
    "County Fairgrounds", "Surfers Point", "Ventura Beach", "Main Street",
    "Ventura College", "Grant Park", "Seaside Park"
  ];

  const testimonials = [
    {
      name: "Susan T.",
      location: "Downtown Ventura",
      rating: 5,
      text: "Two Trees has been cleaning our historic downtown home for three years. They understand the special care old homes need."
    },
    {
      name: "Mark D.",
      location: "Pierpont Bay",
      rating: 5,
      text: "Living by the beach means dealing with sand and salt air. Two Trees handles the extra cleaning challenges perfectly."
    },
    {
      name: "Rachel W.",
      location: "Midtown",
      rating: 5,
      text: "Professional, reliable, and fair pricing. They work around our family schedule and always do excellent work."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Ventura House Cleaning Services | Two Trees Cleaning | Historic & Coastal</title>
        <meta name="description" content="Professional house cleaning services in Ventura, CA. Serving historic downtown, pier area, beach communities & missions. Licensed, insured & locally trusted. Book today!" />
        <link rel="canonical" href="https://twotreescleaning.com/ventura" />
      </Helmet>
      <SchemaMarkup 
        cityName="Ventura"
        cityCoordinates={venturaCoordinates}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Ventura", current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
                <Anchor className="w-4 h-4 mr-1" />
                Ventura, CA
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green mb-6">
                Ventura House Cleaning Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional house cleaning for historic and coastal Ventura. From downtown's charming streets 
                to Pierpont Bay beachfront homes, we provide reliable cleaning services that respect your 
                home's character. Serving Ventura families since 2020.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                  onClick={() => handleBookingClick('Hero')}
                >
                  Book Ventura Cleaning
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
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop" 
                alt="Ventura house cleaning service"
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
            Ventura Neighborhoods We Serve
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

      {/* Historic & Coastal Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Historic & Coastal Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <CheckCircle className="w-6 h-6" />
                  Historic Home Care
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Specialized care for Ventura's historic downtown homes.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Gentle cleaning methods</li>
                  <li>• Respect for original features</li>
                  <li>• Experience with older homes</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $145</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Anchor className="w-6 h-6" />
                  Coastal Property Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Expert cleaning for beachfront and harbor area homes.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Salt air and sand removal</li>
                  <li>• Humidity control cleaning</li>
                  <li>• Outdoor deck maintenance</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $155</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Shield className="w-6 h-6" />
                  Regular Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Consistent cleaning for all Ventura neighborhoods.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Weekly or bi-weekly service</li>
                  <li>• All areas thoroughly cleaned</li>
                  <li>• Flexible scheduling options</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $135</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby Areas Section before CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Nearby Service Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-none shadow-md">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-two-trees-green mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Oxnard</h3>
                <p className="text-sm text-gray-600 mb-4">Affordable cleaning services</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                  onClick={() => window.location.href = '/oxnard'}
                >
                  View Oxnard
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-none shadow-md">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-two-trees-green mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Camarillo</h3>
                <p className="text-sm text-gray-600 mb-4">Professional cleaning services</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                  onClick={() => window.location.href = '/camarillo'}
                >
                  View Camarillo
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-none shadow-md">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-two-trees-green mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Santa Barbara</h3>
                <p className="text-sm text-gray-600 mb-4">Premium cleaning services</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                  onClick={() => window.location.href = '/santa-barbara'}
                >
                  View Santa Barbara
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-none shadow-md">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-two-trees-green mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Thousand Oaks</h3>
                <p className="text-sm text-gray-600 mb-4">Family-focused cleaning</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                  onClick={() => window.location.href = '/thousand-oaks'}
                >
                  View Thousand Oaks
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            What Ventura Customers Say
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
            Ready for Professional Ventura Cleaning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join satisfied families throughout historic and coastal Ventura. Licensed, insured, and locally trusted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
              onClick={() => handleBookingClick('Final CTA')}
            >
              Book Your Ventura Cleaning
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

export default Ventura;
