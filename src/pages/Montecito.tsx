
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Clock, Shield, CheckCircle, Crown } from "lucide-react";


const Montecito = () => {

  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', `Montecito - ${location}`);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Montecito Phone Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" },
    { name: "Montecito", url: "https://twotreescleaning.com/montecito" }
  ];

  const neighborhoods = [
    "Upper Village", "Lower Village", "Coast Village Road", "Olive Mill Road",
    "Hot Springs Road", "East Valley Road", "Romero Canyon", "San Ysidro Ranch Area",
    "Birnam Wood", "Picacho Lane", "Eucalyptus Hill"
  ];

  const landmarks = [
    "Four Seasons Resort", "San Ysidro Ranch", "Montecito Country Club", "Coral Casino",
    "Coast Village Road", "Upper Village", "Lotusland Gardens", "Butterfly Beach"
  ];

  const testimonials = [
    {
      name: "Elizabeth H.",
      location: "Upper Village",
      rating: 5,
      text: "Two Trees provides the discretion and quality we expect for our Montecito estate. They're professional, trustworthy, and detail-oriented."
    },
    {
      name: "Robert K.",
      location: "Coast Village Road",
      rating: 5,
      text: "After trying several services, Two Trees is the only one that meets our luxury home standards. Highly recommend for Montecito properties."
    },
    {
      name: "Patricia M.",
      location: "East Valley Road",
      rating: 5,
      text: "They handle our vacation rental cleanings with absolute professionalism. Our guests always comment on the pristine condition."
    }
  ];

  const montecitoCoordinates = {
    latitude: "34.4361",
    longitude: "-119.6378"
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Montecito House Cleaning Services | Two Trees Cleaning | Luxury Home Care</title>
        <meta name="description" content="Premium house cleaning services in Montecito, CA. Serving luxury estates, celebrity homes & the village. Discreet, trusted, and experienced since 2020. Book today!" />
        
      </Helmet>
      <SchemaMarkup 
        cityName="Montecito"
        cityCoordinates={montecitoCoordinates}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Montecito", current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
                <Crown className="w-4 h-4 mr-1" />
                Luxury Montecito Service
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green mb-6">
                Montecito Luxury House Cleaning
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Premium cleaning services for Montecito's finest homes. From Coast Village Road estates to 
                Upper Village properties, we provide discreet, professional service with the highest standards 
                of quality and confidentiality along this stunning coastline.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As Montecito's premier house cleaning service since 2020, we understand the unique needs of luxury estates, 
                celebrity homes, and vacation rentals in this exclusive enclave. Our experienced team is fully licensed, 
                insured, and trained in discretion - essential qualities for serving Montecito's discerning residents.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you own a sprawling estate near San Ysidro Ranch, a charming cottage in the Upper Village, 
                or a luxury vacation rental near Butterfly Beach, we deliver the meticulous care your property deserves. 
                Our services range from regular housekeeping to deep cleaning, move-in/move-out cleaning, and post-construction cleanup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                  onClick={() => handleBookingClick('Hero')}
                >
                  Book Montecito Cleaning
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
                src="/lovable-uploads/4042e633-3464-473f-8856-715aa7b5b0f1.png" 
                alt="Stunning aerial view of Montecito coastline with pristine beaches, dramatic cliffs, and luxury homes nestled between mountains and ocean - Two Trees Cleaning service area"
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
            Montecito Areas We Serve
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

      {/* Luxury Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Luxury Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Crown className="w-6 h-6" />
                  Estate Cleaning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Complete luxury home maintenance for Montecito estates.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Full-service estate cleaning</li>
                  <li>• Guest house preparation</li>
                  <li>• High-end fixture care</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $250</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Shield className="w-6 h-6" />
                  Vacation Rental Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Premium turnover service for luxury vacation rentals.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Same-day turnover available</li>
                  <li>• Five-star cleaning standards</li>
                  <li>• Amenity restocking</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $200</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Clock className="w-6 h-6" />
                  Event Preparation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Pre and post-event cleaning for entertaining.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Pre-party deep cleaning</li>
                  <li>• Post-event restoration</li>
                  <li>• Outdoor space cleaning</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Custom pricing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Montecito */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Why Choose Two Trees for Your Montecito Home?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-two-trees-green mb-6">Local Expertise & Discretion</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Montecito is unlike anywhere else in California. From the historic charm of the Upper Village to the 
                oceanfront estates along Butterfly Beach, each property requires specialized care. Our team understands 
                the unique challenges of maintaining luxury homes in this coastal environment, from salt air exposure 
                to the demands of high-traffic vacation rentals.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Privacy and discretion are paramount in Montecito. Our staff is background-checked, bonded, and trained 
                in confidentiality protocols. We've earned the trust of celebrity clients, tech executives, and longtime 
                Montecito families who demand the highest standards of professionalism.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-green" />
                  <span className="text-gray-700">Fully licensed & insured cleaning service</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-green" />
                  <span className="text-gray-700">Background-checked & bonded team members</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-green" />
                  <span className="text-gray-700">Eco-friendly products safe for luxury surfaces</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-green" />
                  <span className="text-gray-700">Same-day service available for urgent needs</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-two-trees-green mb-4">Montecito Service Highlights</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Estate Management Support</h5>
                      <p className="text-sm text-gray-600">Coordinate with property managers, staff, and contractors for seamless estate maintenance.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Vacation Rental Excellence</h5>
                      <p className="text-sm text-gray-600">Meet Airbnb Superhost standards with 5-star cleaning protocols and guest amenity preparation.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Luxury Surface Care</h5>
                      <p className="text-sm text-gray-600">Specialized cleaning for marble, travertine, hardwood, and high-end appliances common in Montecito homes.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Event Support</h5>
                      <p className="text-sm text-gray-600">Pre and post-event cleaning for dinner parties, weddings, and charitable galas at your estate.</p>
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
            Frequently Asked Questions - Montecito Cleaning
          </h2>
          <div className="space-y-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-two-trees-green mb-3">Do you provide cleaning services for vacation rentals in Montecito?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes! We're experienced in high-end vacation rental turnovers throughout Montecito. We understand the quick 
                  turnaround times needed for luxury Airbnb properties and can coordinate same-day cleaning between guests. 
                  Our service includes deep cleaning, linen changes, amenity restocking, and final inspection to ensure 
                  5-star guest experiences.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-two-trees-green mb-3">Can you handle large estates and multiple buildings?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely. Many of our Montecito clients have sprawling estates with main houses, guest houses, pool houses, 
                  and staff quarters. We can coordinate comprehensive cleaning of all buildings and outdoor living spaces. 
                  Our team is equipped to handle properties ranging from 3,000 to 20,000+ square feet.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-two-trees-green mb-3">What areas of Montecito do you serve?</h3>
                <p className="text-gray-600 leading-relaxed">
                  We serve all of Montecito including the Upper Village, Lower Village, Coast Village Road corridor, 
                  Olive Mill Road, Hot Springs Road, East Valley Road, Romero Canyon, Eucalyptus Hill, and the areas 
                  near San Ysidro Ranch, Coral Casino, and Butterfly Beach. No property is too remote or exclusive.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-two-trees-green mb-3">How do you ensure privacy and discretion?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Privacy is essential in Montecito. All team members sign confidentiality agreements and undergo background 
                  checks. We arrive in unmarked vehicles if requested, work quietly around family schedules, and maintain 
                  strict confidentiality about our clients and their properties. Many celebrity and executive clients trust 
                  us with their most private spaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            What Montecito Clients Say
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
            Experience Montecito's Premier Cleaning Service
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Trusted by Montecito's finest homes. Licensed, insured, and committed to discretion and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
              onClick={() => handleBookingClick('Final CTA')}
            >
              Book Your Montecito Cleaning
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

export default Montecito;
