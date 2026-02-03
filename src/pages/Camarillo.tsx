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
    window.location.href = 'tel:805-764-2394';
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
                Serving the Premium Outlets area, Spanish Hills, and Mission Oaks with regular house cleaning, 
                deep cleaning, move-in/move-out, and post-construction cleaning services since 2020.
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
                  (805) 764-2394
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/6233f4b8-7ae7-45c2-897d-96684e21c575.png" 
                alt="Beautiful Spanish Colonial Revival home in Camarillo CA with white stucco walls, red clay tile roof, lush tropical landscaping featuring banana plants and bougainvillea, brick walkway and arched entrance - professional house cleaning services for luxury homes, family residences, and suburban communities throughout Camarillo including Sterling Hills, Mission Oaks, Spanish Hills, and Premium Outlets area"
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

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-two-trees-green mb-6">
              Why Camarillo Families Choose Two Trees Cleaning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a trusted cleaning service in Ventura County, we understand the unique needs of Camarillo's 
              diverse communities - from the historic charm of Old Town to the modern developments near Premium Outlets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <MapPin className="w-6 h-6" />
                  Local Camarillo Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We know Camarillo's neighborhoods inside and out. From the family-oriented communities 
                  of Sterling Hills to the established areas near Las Posas Country Club, we tailor our 
                  services to each area's specific needs.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Spanish Hills custom home expertise</li>
                  <li>• Mission Oaks family-friendly scheduling</li>
                  <li>• Premium Outlets area convenience</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Shield className="w-6 h-6" />
                  Trusted & Reliable Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Licensed, bonded, and insured for your peace of mind. Our consistent team approach 
                  means you'll get to know your cleaners, building trust and ensuring quality every visit.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Background-checked staff</li>
                  <li>• Consistent cleaning teams</li>
                  <li>• 100% satisfaction guarantee</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <Clock className="w-6 h-6" />
                  Flexible Scheduling
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We work around your busy Camarillo lifestyle. Whether you need weekly service for 
                  your family home or one-time deep cleaning before hosting guests, we accommodate your schedule.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Weekend availability</li>
                  <li>• Last-minute scheduling</li>
                  <li>• Holiday cleaning services</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Professional Camarillo Cleaning Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <li>• Weekly, bi-weekly, monthly</li>
                  <li>• Flexible scheduling</li>
                  <li>• All rooms thoroughly cleaned</li>
                  <li>• Custom cleaning checklists</li>
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
                <p className="text-gray-600">Comprehensive deep cleaning for Camarillo homes.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Detailed surface cleaning</li>
                  <li>• Inside appliances & cabinets</li>
                  <li>• Baseboards & window sills</li>
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
                  <li>• Appliance interior cleaning</li>
                  <li>• Cabinet & drawer cleaning</li>
                  <li>• Deposit-ready standards</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $170</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-two-trees-green">
                  <ShoppingBag className="w-6 h-6" />
                  Post-Construction
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">Specialized cleaning after renovations and construction.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Dust & debris removal</li>
                  <li>• Paint overspray cleaning</li>
                  <li>• Window & fixture cleaning</li>
                  <li>• Construction cleanup</li>
                </ul>
                <p className="font-semibold text-two-trees-green">Starting at $210</p>
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

      {/* Move-Out Cleaning Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-two-trees-green mb-6">
                Moving Out of Camarillo?
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Professional move-out cleaning for Camarillo families. Whether you're leaving Sterling Hills, 
                Spanish Hills, or near the Premium Outlets, we ensure your property is inspection-ready.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Family-friendly scheduling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Complete property cleaning</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-two-trees-gold" />
                  <span className="text-gray-700">Competitive pricing</span>
                </div>
              </div>
              <Button 
                size="lg"
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4"
                onClick={() => window.location.href = '/camarillo/move-out-cleaning'}
              >
                Learn About Camarillo Move-Out Cleaning
              </Button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-two-trees-green mb-4 text-center">
                Move-Out Cleaning Starting at $170
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Perfect for Camarillo families and rental properties
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-sm text-gray-500 text-center">✓ All Camarillo neighborhoods</p>
                <p className="text-sm text-gray-500 text-center">✓ Fast turnaround time</p>
                <p className="text-sm text-gray-500 text-center">✓ Deposit-ready standards</p>
              </div>
              <Button 
                size="lg"
                className="w-full bg-two-trees-green hover:bg-two-trees-green/90"
                onClick={() => handleBookingClick('Camarillo Move-Out')}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Frequently Asked Questions - Camarillo Cleaning
          </h2>
          <div className="space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-two-trees-green mb-4">
                  Do you clean homes in all Camarillo neighborhoods?
                </h3>
                <p className="text-gray-600">
                  Yes! We provide professional cleaning services throughout Camarillo, including Sterling Hills, 
                  Spanish Hills, Mission Oaks, Old Town Camarillo, Camarillo Heights, Villa Campana, and all 
                  areas near the Premium Outlets. Our team is familiar with the unique characteristics of each 
                  neighborhood and adjusts our services accordingly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-two-trees-green mb-4">
                  What makes your Camarillo cleaning service different?
                </h3>
                <p className="text-gray-600">
                  As a local Ventura County company, we understand Camarillo's community values and family-oriented 
                  lifestyle. We're not a franchise - we're your neighbors who take pride in maintaining the beauty 
                  of our shared community. Our consistent teams, flexible scheduling, and personal attention set us apart.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-two-trees-green mb-4">
                  How do you handle post-construction cleaning in Camarillo?
                </h3>
                <p className="text-gray-600">
                  With Camarillo's growing development and home renovations, we specialize in post-construction cleanup. 
                  Our team uses specialized equipment to remove construction dust, paint residue, and debris. We're 
                  experienced with both new construction near the Premium Outlets area and renovation projects in 
                  established neighborhoods like Spanish Hills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-two-trees-green mb-4">
                  Can you accommodate families with children and pets in Camarillo?
                </h3>
                <p className="text-gray-600">
                  Absolutely! Many of our Camarillo clients are families with children and pets. We use safe, 
                  non-toxic cleaning products and can work around your family's schedule. Our team is experienced 
                  with pet-friendly homes and understands the importance of maintaining a safe environment for your loved ones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-two-trees-green mb-4">
                  What's your pricing for Camarillo homes?
                </h3>
                <p className="text-gray-600">
                  Our pricing is competitive and fair for Camarillo's market. Regular cleaning starts at $130, 
                  deep cleaning at $190, and move-out cleaning at $170. Prices vary based on home size, condition, 
                  and specific needs. We provide free estimates and transparent pricing - no hidden fees or surprises.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-two-trees-green mb-4">
                  How far in advance should I book cleaning services?
                </h3>
                <p className="text-gray-600">
                  For regular weekly or bi-weekly service, we recommend booking 1-2 weeks in advance. For one-time 
                  services like deep cleaning or move-out cleaning, we often accommodate same-week requests. During 
                  busy seasons (spring cleaning, holidays), earlier booking ensures your preferred time slot.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-two-trees-green mb-6">
            Ready for Professional Camarillo Cleaning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join satisfied families throughout Camarillo. Licensed, insured, and trusted since 2020. 
            Experience the difference local expertise makes for your home.
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
              Call (805) 764-2394
            </Button>
          </div>
        </div>
      </section>

      <Footer location="camarillo" />
    </div>
  );
};

export default Camarillo;
