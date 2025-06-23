
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Clock, Shield, CheckCircle, Waves } from "lucide-react";

const Oxnard = () => {
  useEffect(() => {
    document.title = "Oxnard House Cleaning Services | Two Trees Cleaning | Affordable & Reliable";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Affordable house cleaning services in Oxnard, CA. Serving coastal communities, family neighborhoods, and agricultural areas. Licensed, insured & reliable. Book today!');
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://twotreescleaning.com/oxnard');
  }, []);

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

  return (
    <div className="min-h-screen bg-white">
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
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Affordable, reliable house cleaning for Oxnard families. From coastal Oxnard Shores to 
                downtown neighborhoods, we provide quality cleaning services that work with your budget. 
                Trusted by 175+ local families since 2020.
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
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                alt="Oxnard house cleaning service"
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
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
