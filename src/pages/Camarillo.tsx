import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Clock, Shield, CheckCircle, ShoppingBag } from "lucide-react";


const Camarillo = () => {

  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', `Camarillo - ${location}`);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Camarillo Phone Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const neighborhoods = [
    "Camarillo Heights", "Old Town Camarillo", "Sterling Hills", "Mission Oaks",
    "Villa Campana", "Springville", "Spanish Hills", "Las Posas Estates",
    "Camarillo Springs", "Village at the Park", "Pleasant Valley"
  ];

  const landmarks = [
    "Camarillo Premium Outlets", "Camarillo Ranch House", "Adolfo Camarillo High School",
    "Camarillo Library", "Central Park", "Camarillo Community Center", "Dizdar Park",
    "Las Posas Country Club", "Camarillo Airport", "Oxnard College"
  ];

  const testimonials = [
    {
      name: "Jennifer K.",
      location: "Sterling Hills",
      rating: 5,
      text: "Two Trees has been cleaning our family home for over a year. They're professional, thorough, and work perfectly with our schedule."
    },
    {
      name: "Robert M.",
      location: "Mission Oaks",
      rating: 5,
      text: "Great service at competitive prices. Our house always feels fresh and clean after their visits. Highly recommend!"
    },
    {
      name: "Amanda S.",
      location: "Spanish Hills",
      rating: 5,
      text: "They handle our busy family life perfectly. Flexible scheduling and always accommodate our changing needs."
    }
  ];

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" },
    { name: "Camarillo", url: "https://twotreescleaning.com/camarillo" }
  ];

  const camarilloCoordinates = {
    latitude: "34.2164",
    longitude: "-119.0376"
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Camarillo House Cleaning Services | Two Trees Cleaning | Professional & Reliable</title>
        <meta name="description" content="Professional house cleaning services in Camarillo, CA. Serving Premium Outlets area, family neighborhoods, and suburban communities. Licensed & insured. Book today!" />
        <link rel="canonical" href="https://twotreescleaning.com/camarillo" />
      </Helmet>
      <SchemaMarkup 
        cityName="Camarillo"
        cityCoordinates={camarilloCoordinates}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Camarillo", current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
                <ShoppingBag className="w-4 h-4 mr-1" />
                Camarillo, CA
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green mb-6">
                Camarillo House Cleaning Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional house cleaning for Camarillo families and communities. From Sterling Hills to 
                Old Town Camarillo, we provide reliable, thorough cleaning services that fit your lifestyle. 
                Serving the Premium Outlets area and beyond since 2020.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                  onClick={() => handleBookingClick('Hero')}
                >
                  Book Camarillo Cleaning
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
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop" 
                alt="Camarillo house cleaning service"
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
            Camarillo Neighborhoods We Serve
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

      {/* Professional Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Professional Camarillo Cleaning Services
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
                <p className="text-gray-600">Consistent, reliable cleaning for busy Camarillo families.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Weekly, bi-weekly options</li>
                  <li>• Flexible scheduling</li>
                  <li>• All rooms thoroughly cleaned</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $130</p>
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
                <p className="text-gray-600">Comprehensive cleaning for Camarillo homes.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Detailed surface cleaning</li>
                  <li>• Inside appliances</li>
                  <li>• Seasonal deep cleaning</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $190</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Clock className="w-6 h-6" />
                  Move-in/Move-out
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Perfect for relocating within Camarillo area.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Complete property cleaning</li>
                  <li>• Fast turnaround time</li>
                  <li>• Deposit-ready standards</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $170</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            What Camarillo Customers Say
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
            Ready for Professional Camarillo Cleaning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join satisfied families throughout Camarillo. Licensed, insured, and trusted since 2020.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
              onClick={() => handleBookingClick('Final CTA')}
            >
              Book Your Camarillo Cleaning
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

export default Camarillo;
