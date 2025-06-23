
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Clock, Shield, CheckCircle, Home } from "lucide-react";

const ThousandOaks = () => {
  useEffect(() => {
    document.title = "Thousand Oaks House Cleaning Services | Two Trees Cleaning | Family-Owned";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional house cleaning services in Thousand Oaks, CA. Serving Conejo Valley families, Westlake Village border, and all neighborhoods. Licensed & insured. Book today!');
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://twotreescleaning.com/thousand-oaks');
  }, []);

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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
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
