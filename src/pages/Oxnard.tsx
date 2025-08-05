
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Clock, Shield, CheckCircle, Waves } from "lucide-react";

const Oxnard = () => {

  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', `Oxnard - ${location}`);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Oxnard Phone Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const neighborhoods = [
    "Oxnard Shores", "River Ridge", "South Oxnard", "Downtown Oxnard",
    "La Colonia", "El Rio", "Nyeland Acres", "Silver Strand Beach",
    "Mandalay Bay", "Port Hueneme Border", "Channel Islands Harbor"
  ];

  const landmarks = [
    "Channel Islands Harbor", "Silver Strand Beach", "Oxnard Beach Park",
    "Heritage Square", "Carnegie Art Museum", "Collection at RiverPark",
    "Oxnard Performing Arts Center", "Mandalay Beach", "McGrath State Beach"
  ];

  const testimonials = [
    {
      name: "Maria L.",
      location: "La Colonia",
      rating: 5,
      text: "Two Trees provides excellent service at fair prices. They work with our family budget and always do a thorough job."
    },
    {
      name: "James P.",
      location: "River Ridge",
      rating: 5,
      text: "Living near the beach means lots of sand and salt air. Two Trees handles the extra cleaning challenges perfectly."
    },
    {
      name: "Carmen R.",
      location: "Downtown Oxnard",
      rating: 5,
      text: "They've been cleaning our family home for two years. Reliable, affordable, and always professional service."
    }
  ];

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" },
    { name: "Oxnard", url: "https://twotreescleaning.com/oxnard" }
  ];

  const oxnardCoordinates = {
    latitude: "34.1975",
    longitude: "-119.1771"
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Oxnard House Cleaning Services | Two Trees Cleaning | Affordable & Reliable</title>
        <meta name="description" content="Affordable house cleaning services in Oxnard, CA. Serving coastal communities, family neighborhoods, and agricultural areas. Licensed, insured & reliable. Book today!" />
        
      </Helmet>
      <SchemaMarkup 
        cityName="Oxnard"
        cityCoordinates={oxnardCoordinates}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Oxnard", current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
                <Waves className="w-4 h-4 mr-1" />
                Oxnard, CA
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green mb-6">
                Oxnard House Cleaning Services
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Affordable, reliable house cleaning for Oxnard families. From coastal Oxnard Shores to 
                downtown neighborhoods, we provide quality cleaning services that work with your budget. 
                Trusted by 175+ local families since 2020.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Oxnard's diverse communities deserve accessible, professional cleaning services. Whether you live in a 
                beachfront home at Silver Strand Beach, a family residence in La Colonia, or an apartment downtown near 
                Heritage Square, we understand the unique needs of working families in Ventura County's largest city.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to affordability doesn't mean compromising on quality. We provide thorough, reliable cleaning 
                using professional-grade products and techniques, all while maintaining prices that work for hardworking 
                Oxnard families. From regular housekeeping to deep cleans and move-out services, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                  onClick={() => handleBookingClick('Hero')}
                >
                  Book Oxnard Cleaning
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
                src="/lovable-uploads/de28bd66-86d3-414e-8667-81b7b728d9c4.png" 
                alt="Channel Islands Harbor marina in Oxnard with boats, waterfront homes, and palm trees - professional house cleaning services available for coastal properties, beach homes, and neighborhoods throughout Oxnard CA including Oxnard Shores, La Colonia, and downtown areas"
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
            Oxnard Neighborhoods We Serve
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

      {/* Affordable Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Affordable Oxnard Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <CheckCircle className="w-6 h-6" />
                  Regular House Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Budget-friendly cleaning for hardworking Oxnard families.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Competitive weekly rates</li>
                  <li>• Flexible payment options</li>
                  <li>• Consistent quality service</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $120</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Waves className="w-6 h-6" />
                  Beach Home Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Specialized cleaning for coastal Oxnard properties.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Sand and salt air cleaning</li>
                  <li>• Outdoor space maintenance</li>
                  <li>• Humidity control cleaning</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $160</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Shield className="w-6 h-6" />
                  Deep Cleaning Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Thorough cleaning for Oxnard homes and apartments.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Complete home deep clean</li>
                  <li>• Affordable pricing options</li>
                  <li>• Same-day availability</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $180</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full mt-3 border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                  onClick={() => window.location.href = '/oxnard/move-out-cleaning'}
                >
                  Oxnard Move-Out Cleaning
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
            What Oxnard Customers Say
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

      {/* Why Choose Two Trees for Oxnard */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Why Choose Two Trees for Your Oxnard Home?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-two-trees-green mb-6">Community-Focused Affordability</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Oxnard is home to hardworking families who deserve quality cleaning services at fair prices. From agricultural 
                workers to service industry employees, we understand the value of every dollar. That's why we've structured 
                our pricing to be the most competitive in Ventura County while maintaining professional standards.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Living near the coast means dealing with sand, salt air, and humidity challenges. Our experience with Channel 
                Islands Harbor properties, Oxnard Shores beachfront homes, and inland neighborhoods means we know exactly how 
                to protect your home from coastal elements while keeping costs manageable for your family budget.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-green" />
                  <span className="text-gray-700">Most affordable rates in Ventura County</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-green" />
                  <span className="text-gray-700">Flexible payment plans for working families</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-green" />
                  <span className="text-gray-700">Coastal cleaning expertise for beach properties</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-green" />
                  <span className="text-gray-700">Same-day service for urgent cleaning needs</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-two-trees-green mb-4">Oxnard Service Highlights</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Budget-Friendly Options</h5>
                      <p className="text-sm text-gray-600">Multiple service levels to fit any budget, with payment plans available for regular cleaning services.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Coastal Property Care</h5>
                      <p className="text-sm text-gray-600">Specialized cleaning for beachfront homes, harbor properties, and areas affected by salt air and sand.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Family-Safe Products</h5>
                      <p className="text-sm text-gray-600">Child and pet-safe cleaning products that deliver professional results without harmful chemicals.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Agricultural Community Support</h5>
                      <p className="text-sm text-gray-600">Understanding of agricultural schedules and specialized cleaning for homes with outdoor work challenges.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Frequently Asked Questions - Oxnard Cleaning
          </h2>
          <div className="space-y-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-two-trees-green mb-3">Do you offer payment plans for regular cleaning services?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! We understand that cleaning services are an investment for working families. We offer flexible payment 
                  options including bi-weekly payment plans for weekly service, and we accept various payment methods. We believe 
                  every Oxnard family deserves a clean home, and we work with your budget to make that possible.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-two-trees-green mb-3">Can you handle beach houses and properties near Channel Islands Harbor?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely! Coastal properties require specialized attention due to salt air, sand, and humidity. We have extensive 
                  experience cleaning beachfront homes at Silver Strand Beach, properties near Channel Islands Harbor, and Oxnard 
                  Shores residences. Our techniques protect surfaces from salt damage while removing sand and moisture-related issues.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-two-trees-green mb-3">What makes your pricing more affordable than other services?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're locally owned and operated with lower overhead costs than large franchises. We believe in fair, transparent 
                  pricing without hidden fees. Our goal is to serve Oxnard's working families, so we keep our profit margins reasonable 
                  while still providing professional-quality service, insurance, and bonding for your protection.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-two-trees-green mb-3">Do you serve all Oxnard neighborhoods?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we serve all of Oxnard including Oxnard Shores, River Ridge, South Oxnard, downtown, La Colonia, El Rio, 
                  Nyeland Acres, Silver Strand Beach, Mandalay Bay, and areas near the Port Hueneme border. No area is too far, 
                  and we're familiar with the specific needs of each neighborhood.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Nearby Service Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            <Card className="hover:shadow-lg transition-shadow border-none shadow-md">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-two-trees-green mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Port Hueneme</h3>
                <p className="text-sm text-gray-600 mb-4">Beach & harbor cleaning</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                  onClick={() => window.location.href = '/port-hueneme'}
                >
                  View Port Hueneme
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-two-trees-green mb-6">
            Ready for Affordable Oxnard Cleaning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 175+ satisfied Oxnard families. Quality cleaning services that work with your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
              onClick={() => handleBookingClick('Final CTA')}
            >
              Book Your Oxnard Cleaning
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

export default Oxnard;
