
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { TestimonialSchema } from "@/components/TestimonialSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Clock, Shield, CheckCircle } from "lucide-react";


const SantaBarbara = () => {

  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', `Santa Barbara - ${location}`);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Santa Barbara Phone Click'
      });
    }
    window.location.href = 'tel:805-892-6881';
  };

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" },
    { name: "Santa Barbara", url: "https://twotreescleaning.com/santa-barbara" }
  ];

  const santaBarbaraCoordinates = {
    latitude: "34.4208",
    longitude: "-119.6982"
  };

  const neighborhoods = [
    "State Street Downtown", "Funk Zone", "Mesa", "Riviera", "Mission Canyon",
    "Hope Ranch", "San Roque", "Eastside", "Westside", "Near UCSB", "Goleta Border"
  ];

  const landmarks = [
    "State Street", "Santa Barbara Harbor", "Stearns Wharf", "Santa Barbara Mission",
    "County Courthouse", "Paseo Nuevo", "UCSB Campus", "Leadbetter Beach", "East Beach"
  ];

  const testimonials = [
    {
      name: "Jennifer M.",
      location: "State Street Area",
      rating: 5,
      text: "Two Trees Cleaning has been a lifesaver for our downtown condo. They're always professional and work around our busy schedules."
    },
    {
      name: "David R.",
      location: "Mesa District",
      rating: 5,
      text: "Living near UCSB means lots of entertaining. Two Trees keeps our home spotless for guests. Highly recommend!"
    },
    {
      name: "Maria S.",
      location: "Mission Canyon",
      rating: 5,
      text: "After our kitchen remodel, Two Trees did an amazing post-construction cleanup. They're detail-oriented and trustworthy."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Santa Barbara House Cleaning Services | Two Trees Cleaning - Santa Barbara and Goleta</title>
        <meta name="description" content="Premium house cleaning services in Santa Barbara and Goleta, CA. Luxury home care with meticulous attention to detail. Licensed, insured & trusted by discerning homeowners. Call 805-892-6881" />
        
      </Helmet>
      <SchemaMarkup 
        cityName="Santa Barbara"
        cityCoordinates={santaBarbaraCoordinates}
        breadcrumbs={breadcrumbData}
        businessName="Two Trees Cleaning - Santa Barbara and Goleta"
        phoneNumber="+1-805-892-6881"
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Santa Barbara", current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
                <MapPin className="w-4 h-4 mr-1" />
                Santa Barbara, CA
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green mb-6">
                Santa Barbara House Cleaning Services
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Professional house cleaning for Santa Barbara families. From downtown condos on State Street to Riviera homes, Two Trees Cleaning has served 200+ local clients since 2020. Locally owned and professionally trained.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in Santa Barbara's unique coastal homes — offering regular cleanings, deep cleanings, move-outs, and vacation rental turnovers. Every service is tailored to keep your home fresh, bright, and ready for coastal living.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                  onClick={() => handleBookingClick('Hero')}
                >
                  Book Santa Barbara Cleaning
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 px-8 py-4 text-lg"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (805) 892-6881
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/santa-barbara-hero.jpg" 
                alt="Santa Barbara house cleaning service for Spanish Colonial homes with tile work and bougainvillea landscaping"
                className="rounded-2xl shadow-2xl"
              />
              <p className="text-center text-sm text-gray-600 mt-4 italic">
                Professional house cleaning services for Santa Barbara and Goleta homes - from historic Spanish Colonial estates to modern coastal properties
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Santa Barbara Neighborhoods We Serve
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

      {/* Local Landmarks */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-6 text-center">
            Serving All of Santa Barbara
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            From the historic Santa Barbara Mission to the bustling State Street corridor, we provide 
            professional cleaning services throughout the American Riviera.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {landmarks.map((landmark, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-two-trees-green" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{landmark}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Santa Barbara Cleaning Services
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
                <p className="text-gray-600">Perfect for busy State Street professionals and UCSB families.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Weekly, bi-weekly, or monthly service</li>
                  <li>• All rooms thoroughly cleaned</li>
                  <li>• Flexible scheduling around your life</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $140</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Shield className="w-6 h-6" />
                  Deep Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Comprehensive cleaning for Santa Barbara homes and condos.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Detailed cleaning of all surfaces</li>
                  <li>• Inside appliances and cabinets</li>
                  <li>• Perfect for seasonal cleaning</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $200</p>
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
                <p className="text-gray-600">Essential for Santa Barbara real estate transitions.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Complete property cleaning</li>
                  <li>• Real estate ready standards</li>
                  <li>• Deposit-back guarantee focus</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $180</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full mt-3 border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                  onClick={() => window.location.href = '/santa-barbara/move-out-cleaning'}
                >
                  Santa Barbara Move-Out Cleaning
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials with Schema */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <TestimonialSchema testimonials={testimonials} cityName="Santa Barbara" />
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            What Santa Barbara Customers Say
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

      {/* Why Choose Two Trees for Santa Barbara */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Why Choose Two Trees for Your Santa Barbara Home?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-two-trees-green mb-6">American Riviera Expertise</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Santa Barbara's Mediterranean climate and coastal location create unique cleaning challenges. From the 
                historic adobe buildings downtown to modern beachfront properties, each area requires specialized knowledge. 
                Our team understands how ocean moisture affects homes near Leadbetter Beach and manages the dust from 
                the Santa Ynez Mountains that settles in Riviera properties.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We've built relationships with property managers serving UCSB students, vacation rental owners in the 
                Funk Zone, and families throughout the Mesa district. Our cleaning protocols are designed to protect 
                expensive finishes common in Santa Barbara homes while maintaining the pristine standards expected 
                in this luxury market.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-green" />
                  <span className="text-gray-700">Licensed & insured throughout Santa Barbara County</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-green" />
                  <span className="text-gray-700">Coastal cleaning expertise for salt air protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-green" />
                  <span className="text-gray-700">Historic property experience with gentle methods</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-green" />
                  <span className="text-gray-700">UCSB area and vacation rental specialists</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-two-trees-green mb-4">Santa Barbara Service Highlights</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Student Housing Expertise</h5>
                      <p className="text-sm text-gray-600">Specialized cleaning for UCSB area rentals, including move-out services and parent weekend preparation.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Vacation Rental Mastery</h5>
                      <p className="text-sm text-gray-600">Funk Zone and waterfront property turnovers with same-day service and 5-star cleanliness standards.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Luxury Home Care</h5>
                      <p className="text-sm text-gray-600">Mesa and Riviera estate cleaning with attention to high-end surfaces, art collections, and luxury amenities.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Historic Property Care</h5>
                      <p className="text-sm text-gray-600">Gentle cleaning methods for adobe structures and vintage homes throughout downtown and near the Mission.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Frequently Asked Questions - Santa Barbara Cleaning
          </h2>
          <div className="space-y-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-two-trees-green mb-3">Do you clean UCSB student rentals and apartments?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! We specialize in UCSB area cleaning including Isla Vista, student apartments near campus, and family 
                  homes in the university district. We offer move-out cleaning for deposit returns, parent weekend deep cleans, 
                  and regular maintenance for student housing. We understand the unique needs of student properties and work 
                  with parents and property managers for seamless service.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-two-trees-green mb-3">Can you handle vacation rental turnovers in the Funk Zone?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely! The Funk Zone and waterfront areas are key markets for us. We provide rapid turnovers between 
                  guests, often within 4-6 hours for standard properties. Our service includes deep cleaning, linen changes, 
                  amenity restocking, and final inspection to ensure every guest enjoys that pristine Santa Barbara experience. 
                  We coordinate with property managers and cleaning schedules.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-two-trees-green mb-3">How do you protect expensive finishes in luxury Santa Barbara homes?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Santa Barbara homes often feature expensive materials like travertine, marble, hardwood, and custom tile work. 
                  We use pH-neutral products specifically designed for natural stone, protective treatments for wood surfaces, 
                  and gentle techniques for hand-painted tiles and artistic features. Our team is trained to identify and properly 
                  care for luxury finishes common in Mesa and Riviera properties.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-two-trees-green mb-3">What areas of Santa Barbara do you serve?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We serve all of Santa Barbara including downtown State Street corridor, the Mesa district, Riviera, Mission Canyon, 
                  Hope Ranch, San Roque, Eastside, Westside, near UCSB areas, and the Goleta border. We also serve the Funk Zone, 
                  waterfront properties near the harbor, and historic neighborhoods near the Santa Barbara Mission and Courthouse.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby Areas Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Nearby Service Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-none shadow-md">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-two-trees-green mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Montecito</h3>
                <p className="text-sm text-gray-600 mb-4">Luxury estate cleaning</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10"
                  onClick={() => window.location.href = '/montecito'}
                >
                  View Montecito
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-two-trees-green mb-6">
            Ready for a Spotless Santa Barbara Home?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join 200+ satisfied customers throughout Santa Barbara. Licensed, insured, and locally trusted since 2020.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
              onClick={() => handleBookingClick('Final CTA')}
            >
              Book Your Santa Barbara Cleaning
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 px-8 py-4 text-lg"
              onClick={handlePhoneClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (805) 892-6881
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SantaBarbara;
