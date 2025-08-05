import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Clock, Shield, CheckCircle, Home } from "lucide-react";
const thousandOaksHero = "/lovable-uploads/9c1b3024-acd2-473d-8874-bcf5134eefbe.png";

const ThousandOaks = () => {

  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', `Thousand Oaks - ${location}`);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Thousand Oaks Phone Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" },
    { name: "Thousand Oaks", url: "https://twotreescleaning.com/thousand-oaks" }
  ];

  const thousandOaksCoordinates = {
    latitude: "34.1706",
    longitude: "-118.8376"
  };

  const neighborhoods = [
    "Newbury Park", "Westlake Village Border", "North Ranch", "Lynn Ranch",
    "Dos Vientos", "Hillcrest", "Lang Ranch", "Moorpark Road Corridor",
    "Conejo Valley", "Oak Park Border", "Agoura Hills Border"
  ];

  const landmarks = [
    "The Oaks Mall", "Thousand Oaks Civic Arts Plaza", "Conejo Valley Botanic Garden",
    "California Lutheran University", "Wildwood Regional Park", "Gardens of the World",
    "Thousand Oaks Library", "Civic Center", "Newbury Park Adventist Academy"
  ];

  const testimonials = [
    {
      name: "Sarah J.",
      location: "Newbury Park",
      rating: 5,
      text: "Perfect for our busy family schedule. Two Trees works around our kids' activities and keeps our home spotless. Great communication!"
    },
    {
      name: "Michael T.",
      location: "North Ranch", 
      rating: 5,
      text: "We've been using Two Trees for over a year. They're reliable, thorough, and our home always feels fresh after their visits."
    },
    {
      name: "Lisa R.",
      location: "Dos Vientos",
      rating: 5,
      text: "Moving from LA, we needed a trustworthy cleaning service. Two Trees exceeded our expectations with their attention to detail."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Thousand Oaks House Cleaning Services | Two Trees Cleaning | Family-Owned</title>
        <meta name="description" content="Professional house cleaning services in Thousand Oaks, CA. Serving Conejo Valley families, Westlake Village border, and all neighborhoods. Licensed & insured. Book today!" />
        
      </Helmet>
      <SchemaMarkup 
        cityName="Thousand Oaks"
        cityCoordinates={thousandOaksCoordinates}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Thousand Oaks", current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
                <Home className="w-4 h-4 mr-1" />
                Thousand Oaks, CA
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green mb-6">
                Thousand Oaks House Cleaning Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional house cleaning for Conejo Valley families. From Newbury Park to North Ranch, 
                we provide reliable, thorough cleaning services that fit your busy family lifestyle. 
                Trusted by 150+ local families since 2020.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                  onClick={() => handleBookingClick('Hero')}
                >
                  Book Thousand Oaks Cleaning
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
                src={thousandOaksHero} 
                alt="Thousand Oaks family home cleaning service"
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
            Thousand Oaks Neighborhoods We Serve
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

      {/* Family-Focused Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Family-Focused Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <CheckCircle className="w-6 h-6" />
                  Regular Family Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Perfect for busy Thousand Oaks families with kids and pets.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Kid and pet-safe products</li>
                  <li>• Flexible family scheduling</li>
                  <li>• Consistent weekly service</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $140</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Shield className="w-6 h-6" />
                  Deep Spring Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Comprehensive cleaning for Conejo Valley homes.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Seasonal deep cleaning</li>
                  <li>• All rooms thoroughly detailed</li>
                  <li>• Perfect for family gatherings</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $200</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Clock className="w-6 h-6" />
                  Move-in Ready Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Essential for families relocating to Thousand Oaks.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Complete move-in preparation</li>
                  <li>• Family-safe cleaning products</li>
                  <li>• Quick scheduling available</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $180</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            What Thousand Oaks Families Say
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

      {/* Move-Out Cleaning Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-two-trees-green mb-6">
                Moving Out of Thousand Oaks?
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Family-focused move-out cleaning for Conejo Valley residents. From Newbury Park to North Ranch, 
                we help families transition smoothly with thorough, kid-safe cleaning services.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Family-safe cleaning products</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Flexible family scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Quick scheduling available</span>
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4"
                onClick={() => window.location.href = '/thousand-oaks/move-out-cleaning'}
              >
                Learn About Thousand Oaks Move-Out Cleaning
              </Button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-two-trees-green mb-4 text-center">
                Move-Out Cleaning Starting at $180
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Family-focused service for Conejo Valley relocations
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-gray-500 text-center">✓ All Thousand Oaks neighborhoods</p>
                <p className="text-sm text-gray-500 text-center">✓ Kid and pet-safe products</p>
                <p className="text-sm text-gray-500 text-center">✓ Complete move-in preparation</p>
              </div>
              <Button 
                size="lg"
                className="w-full bg-two-trees-green hover:bg-two-trees-green/90"
                onClick={() => handleBookingClick('Thousand Oaks Move-Out')}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Add Nearby Areas Section before CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Nearby Service Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h3 className="font-semibold text-gray-900 mb-2">Ventura</h3>
                <p className="text-sm text-gray-600 mb-4">Historic & coastal cleaning</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                  onClick={() => window.location.href = '/ventura'}
                >
                  View Ventura
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-two-trees-green mb-6">
            Ready for a Cleaner Thousand Oaks Home?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 150+ satisfied Conejo Valley families. Licensed, insured, and family-focused since 2020.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
              onClick={() => handleBookingClick('Final CTA')}
            >
              Book Your Thousand Oaks Cleaning
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

export default ThousandOaks;
