import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Clock, Shield, CheckCircle, Mountain } from "lucide-react";
import { updateMetaTags, generateCityKeywords } from "@/utils/metaTags";

const Ojai = () => {
  useEffect(() => {
    const ojaiCoordinates = {
      latitude: "34.4481",
      longitude: "-119.2429"
    };

    updateMetaTags({
      title: "Ojai House Cleaning Services | Two Trees Cleaning | Spiritual & Artistic Community",
      description: "Eco-friendly house cleaning services in Ojai, CA. Serving artist community, spiritual retreats & luxury vacation rentals. Sustainable, licensed & trusted. Book today!",
      cityName: "Ojai",
      cityCoordinates: ojaiCoordinates,
      url: "https://twotreescleaning.com/ojai",
      keywords: generateCityKeywords("Ojai")
    });
  }, []);

  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', `Ojai - ${location}`);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Ojai Phone Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" },
    { name: "Ojai", url: "https://twotreescleaning.com/ojai" }
  ];

  const ojaiCoordinates = {
    latitude: "34.4481",
    longitude: "-119.2429"
  };

  const neighborhoods = [
    "Downtown Ojai", "East End", "West End", "Arbolada", "Meiners Oaks",
    "Oak View", "Ojai Valley", "Upper Ojai", "Mira Monte", "Casitas Springs",
    "Matilija Canyon", "Meditation Mount Area"
  ];

  const landmarks = [
    "Ojai Arcade", "Libbey Park", "Ojai Valley Museum", "Meditation Mount",
    "Krishnamurti Foundation", "Ojai Playhouse", "Bart's Books", "Pink Moment Sunset",
    "Topa Topa Mountains", "Los Padres National Forest", "Lake Casitas"
  ];

  const testimonials = [
    {
      name: "Harmony L.",
      location: "Downtown Ojai",
      rating: 5,
      text: "Two Trees aligns perfectly with our eco-conscious values. They use green products and respect our spiritual space."
    },
    {
      name: "David M.",
      location: "East End",
      rating: 5,
      text: "Our vacation rental guests consistently praise the cleanliness. Two Trees understands the high standards Ojai visitors expect."
    },
    {
      name: "Sarah K.",
      location: "Arbolada",
      rating: 5,
      text: "As an artist, I need my creative space to be inspiring and clean. Two Trees helps maintain the perfect environment."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Ojai House Cleaning Services | Two Trees Cleaning | Spiritual & Artistic Community</title>
        <meta name="description" content="Eco-friendly house cleaning services in Ojai, CA. Serving artist community, spiritual retreats & luxury vacation rentals. Sustainable, licensed & trusted. Book today!" />
        <link rel="canonical" href="https://twotreescleaning.com/ojai" />
      </Helmet>
      <SchemaMarkup 
        cityName="Ojai"
        cityCoordinates={ojaiCoordinates}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Ojai", current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
                <Mountain className="w-4 h-4 mr-1" />
                Ojai Valley, CA
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green mb-6">
                Ojai House Cleaning Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Eco-friendly house cleaning for Ojai's artistic and spiritual community. From downtown studios 
                to mountain retreat homes, we provide sustainable cleaning services that honor Ojai's natural 
                beauty and mindful lifestyle. Serving the valley since 2020.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                  onClick={() => handleBookingClick('Hero')}
                >
                  Book Ojai Cleaning
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
                src="https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=600&h=400&fit=crop" 
                alt="Ojai valley house cleaning service"
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
            Ojai Valley Areas We Serve
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

      {/* Eco-Friendly Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Eco-Conscious Ojai Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <CheckCircle className="w-6 h-6" />
                  Green Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Sustainable cleaning for eco-conscious Ojai residents.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 100% eco-friendly products</li>
                  <li>• Chemical-free environment</li>
                  <li>• Mindful cleaning practices</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $150</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Mountain className="w-6 h-6" />
                  Retreat & Vacation Rentals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Specialized service for Ojai's spiritual and vacation rentals.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Quick turnaround service</li>
                  <li>• Retreat-ready standards</li>
                  <li>• Peaceful environment focus</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $175</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Shield className="w-6 h-6" />
                  Artist Studio Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Gentle cleaning for creative spaces and art studios.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Careful around artwork</li>
                  <li>• Dust-free environment</li>
                  <li>• Flexible creative schedules</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $160</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            What Ojai Community Says
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
            Experience Mindful Ojai Cleaning
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join Ojai's conscious community in choosing sustainable, eco-friendly cleaning services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
              onClick={() => handleBookingClick('Final CTA')}
            >
              Book Your Ojai Cleaning
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

export default Ojai;
