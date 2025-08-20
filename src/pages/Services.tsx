
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Home, Sparkles, Truck, HardHat, Building, Key, BookOpen, ArrowRight } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    updateMetaTags({
      title: "House Cleaning Services | Two Trees Cleaning | Ventura County",
      description: "Professional house cleaning services in Ventura County. Regular cleaning, deep cleaning, move-in/out, post-construction, commercial, and vacation rental cleaning. Starting at $140.",
      cityName: "Ventura County",
      cityCoordinates: { latitude: "34.3705", longitude: "-119.1391" },
      url: "https://twotreescleaning.com/services",
      keywords: [
        "house cleaning services Ventura County",
        "residential cleaning",
        "commercial cleaning",
        "deep cleaning",
        "regular cleaning service"
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

  const services = [
    {
      title: "Regular House Cleaning",
      description: "Weekly, bi-weekly, and monthly cleaning services to maintain your home's cleanliness.",
      icon: Home,
      price: "Starting at $140",
      link: "/services/regular-house-cleaning"
    },
    {
      title: "Deep Cleaning",
      description: "Comprehensive top-to-bottom cleaning for spring cleaning or first-time service.",
      icon: Sparkles,
      price: "Starting at $220",
      link: "/services/deep-cleaning"
    },
    {
      title: "Move-In/Move-Out Cleaning",
      description: "Thorough cleaning for your move-in or move-out needs.",
      icon: Truck,
      price: "Starting at $280",
      link: "/services/move-in-move-out"
    },
    {
      title: "Post-Construction Cleaning",
      description: "Specialized cleaning after construction or renovation projects.",
      icon: HardHat,
      price: "Starting at $350",
      link: "/services/post-construction"
    },
    {
      title: "Commercial Cleaning",
      description: "Professional cleaning services for offices and businesses.",
      icon: Building,
      price: "Custom Quote",
      link: "/services/commercial-cleaning"
    },
    {
      title: "Vacation Rental Cleaning",
      description: "Fast turnaround cleaning for short-term rental properties.",
      icon: Key,
      price: "Starting at $180",
      link: "/services/vacation-rental"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Professional Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Choose from our comprehensive range of cleaning services, all performed by licensed and insured professionals in Ventura County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Services Hero')}
              >
                Book Any Service - Starting at $140
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green hover:text-white px-8 py-4 text-lg"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                (805) 456-1421
              </Button>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="mb-16">
            <Card className="border-none shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-two-trees-green mb-4">
                  Not Sure What's Included?
                </h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                  Get complete transparency about what's included (and what's not) in each of our cleaning services. 
                  No surprises, just clear expectations.
                </p>
                <Link to="/services/whats-included-in-cleaning">
                  <Button size="lg" variant="outline" className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green hover:text-white">
                    <BookOpen className="w-5 h-5 mr-2" />
                    View What's Included Guide
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green flex items-center gap-3">
                    <service.icon className="w-8 h-8" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{service.description}</p>
                  <div className="text-2xl font-bold text-two-trees-gold">{service.price}</div>
                  <Link to={service.link}>
                    <Button className="w-full bg-two-trees-green hover:bg-two-trees-green/90">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
