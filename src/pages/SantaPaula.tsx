import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Clock, Shield, CheckCircle, Truck } from "lucide-react";

const SantaPaula = () => {

  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', `Santa Paula - ${location}`);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Santa Paula Phone Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" },
    { name: "Santa Paula", url: "https://twotreescleaning.com/santa-paula" }
  ];

  const santaPaulaCoordinates = {
    latitude: "34.3542",
    longitude: "-119.0593"
  };

  const neighborhoods = [
    "Downtown Santa Paula", "The Oaks", "McKevett Heights", "East Santa Paula",
    "West Santa Paula", "Ventura River Area", "Agricultural Properties", "Mobile Home Parks",
    "Saticoy Border", "Fillmore Border", "Rural Residential"
  ];

  const landmarks = [
    "Santa Paula Depot", "Union Oil Museum", "California Oil Museum", "Ventura River",
    "Santa Paula Peak", "Historic Main Street", "Glen City Park", "Isbell Park",
    "Faulkner Farm", "Santa Paula Creek"
  ];

  const testimonials = [
    {
      name: "Robert M.",
      location: "The Oaks",
      rating: 5,
      text: "Two Trees is reliable and affordable. They've been cleaning our family home for over a year and always do excellent work."
    },
    {
      name: "Isabel V.",
      location: "Downtown Santa Paula",
      rating: 5,
      text: "Great communication and flexible scheduling. They work around our farm schedule and always leave the house spotless."
    },
    {
      name: "Michael K.",
      location: "McKevett Heights",
      rating: 5,
      text: "Professional service at fair prices. Two Trees understands the needs of working families in Santa Paula."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Santa Paula House Cleaning Services | Two Trees Cleaning | Reliable & Affordable</title>
        <meta name="description" content="Reliable house cleaning services in Santa Paula, CA. Serving families, farms, and mobile homes throughout 93060. Licensed, insured & affordable. Book today!" />
        
      </Helmet>
      <SchemaMarkup 
        cityName="Santa Paula"
        cityCoordinates={santaPaulaCoordinates}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Santa Paula", current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
                <Truck className="w-4 h-4 mr-1" />
                Santa Paula, CA 93060
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green mb-6">
                Santa Paula House Cleaning Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Reliable, affordable house cleaning for Santa Paula families and agricultural properties. 
                From downtown historic homes to rural residences, we provide quality cleaning services 
                that work with your budget and schedule. Trusted locally since 2020.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                  onClick={() => handleBookingClick('Hero')}
                >
                  Book Santa Paula Cleaning
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
                src="/lovable-uploads/7a231da2-6877-46a0-be55-52b1023419b0.png" 
                alt="Santa Paula house cleaning service"
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
            Santa Paula Areas We Serve
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
            Reliable Santa Paula Cleaning Services
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
                <p className="text-gray-600">Consistent cleaning for hardworking Santa Paula families.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Weekly, bi-weekly, monthly</li>
                  <li>• Flexible farm schedules</li>
                  <li>• Budget-friendly pricing</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $110</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Truck className="w-6 h-6" />
                  Rural & Agricultural Properties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Specialized cleaning for farms and rural homes.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Mud room deep cleaning</li>
                  <li>• Agricultural dust removal</li>
                  <li>• Flexible rural scheduling</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $140</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Shield className="w-6 h-6" />
                  Move-Out Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Thorough cleaning for Santa Paula rentals and sales.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Mobile homes & houses</li>
                  <li>• Rural properties included</li>
                  <li>• Deposit recovery focus</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $160</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full mt-3 border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                  onClick={() => window.location.href = '/santa-paula/move-out-cleaning'}
                >
                  Santa Paula Move-Out Cleaning
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
            What Santa Paula Customers Say
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

      {/* Nearby Areas Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Nearby Service Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-none shadow-md">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-two-trees-green mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Fillmore</h3>
                <p className="text-sm text-gray-600 mb-4">Agricultural community cleaning</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact for Service
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-none shadow-md">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-two-trees-green mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Oxnard</h3>
                <p className="text-sm text-gray-600 mb-4">Coastal & family cleaning</p>
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-two-trees-green mb-6">
            Ready for Reliable Santa Paula Cleaning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hardworking Santa Paula families who trust Two Trees Cleaning for affordable, reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
              onClick={() => handleBookingClick('Final CTA')}
            >
              Book Your Santa Paula Cleaning
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

export default SantaPaula;