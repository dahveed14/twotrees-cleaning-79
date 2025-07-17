import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle, DollarSign, Star, MapPin, HelpCircle } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const ThousandOaksMoveOut = () => {
  useEffect(() => {
    const thousandOaksCoordinates = {
      latitude: "34.1706",
      longitude: "-118.8376"
    };

    updateMetaTags({
      title: "Thousand Oaks Move-Out Cleaning Services | Two Trees Cleaning",
      description: "Moving out? Get your deposit back with expert move-out cleaning in Thousand Oaks. Trusted by 200+ families. Licensed, insured, and satisfaction guaranteed.",
      cityName: "Thousand Oaks",
      cityCoordinates: thousandOaksCoordinates,
      url: "https://twotreescleaning.com/thousand-oaks/move-out-cleaning",
      keywords: [
        "move out cleaning Thousand Oaks",
        "deposit back cleaning",
        "end of lease cleaning Thousand Oaks",
        "rental cleaning Thousand Oaks",
        "Thousand Oaks move out service",
        "Newbury Park move out cleaning",
        "Conejo Valley move out cleaning",
        "91360 move out cleaning",
        "91362 move out cleaning"
      ]
    });
  }, []);

  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', `Thousand Oaks Move Out - ${location}`);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Thousand Oaks Move Out Phone Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" },
    { name: "Thousand Oaks", url: "https://twotreescleaning.com/thousand-oaks" },
    { name: "Move-Out Cleaning", url: "https://twotreescleaning.com/thousand-oaks/move-out-cleaning" }
  ];

  const neighborhoods = [
    "Newbury Park", "Lynn Ranch", "Dos Vientos", "North Ranch", 
    "Westlake Village Border", "Hillcrest", "Lang Ranch", "Oak Park Border"
  ];

  const testimonials = [
    {
      name: "Jennifer M.",
      location: "Newbury Park",
      rating: 5,
      text: "Got our full deposit back thanks to Two Trees! They cleaned everything perfectly for our move-out inspection."
    },
    {
      name: "David K.",
      location: "Dos Vientos",
      rating: 5,
      text: "Professional and thorough. Our landlord was impressed with how clean they left our rental home."
    }
  ];

  const faqs = [
    {
      question: "How far in advance should I book my move-out cleaning?",
      answer: "We recommend booking at least 1-2 weeks in advance, especially during peak moving season (summer months). However, we often accommodate same-week requests for Thousand Oaks residents."
    },
    {
      question: "Do you guarantee my deposit will be returned?",
      answer: "While we can't guarantee your deposit (as this depends on your landlord and lease terms), our thorough move-out cleaning significantly increases your chances. We follow a comprehensive checklist to ensure everything is spotless."
    },
    {
      question: "What's included in move-out cleaning that's different from regular cleaning?",
      answer: "Move-out cleaning includes inside appliances (oven, refrigerator, microwave), inside cabinets and drawers, closet cleaning, baseboards, and other areas typically not covered in regular cleaning services."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup 
        cityName="Thousand Oaks"
        cityCoordinates={{ latitude: "34.1706", longitude: "-118.8376" }}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Thousand Oaks", href: "/thousand-oaks" },
          { label: "Move-Out Cleaning", current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
                <MapPin className="w-4 h-4 mr-1" />
                Thousand Oaks, CA
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green mb-6">
                Move-Out Cleaning in Thousand Oaks
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Moving out of your Thousand Oaks home? Get your security deposit back with our comprehensive 
                move-out cleaning service. We've helped over 200 Ventura County families secure their deposits 
                with our thorough, inspection-ready cleaning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                  onClick={() => handleBookingClick('Hero')}
                >
                  Book Move-Out Cleaning
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
                src="/lovable-uploads/854ae905-37ee-4e73-a5f8-a01c6f2e9bb4.png" 
                alt="Two Trees Cleaning professional move-out cleaning service in Thousand Oaks - expert team member preparing a home for final inspection to help tenants get their security deposit back"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            What's Included in Our Move-Out Cleaning
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-two-trees-green">Kitchen Deep Clean</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Inside refrigerator cleaning",
                    "Oven interior deep clean",
                    "Microwave inside and out",
                    "Dishwasher cleaning",
                    "Cabinet fronts and insides",
                    "Countertops and backsplash",
                    "Sink and faucet scrubbing",
                    "Floor mopping and baseboards"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-two-trees-green">Bathroom Deep Clean</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Toilet cleaning inside and out",
                    "Shower/tub deep scrubbing",
                    "Tile and grout cleaning",
                    "Mirror and fixture polishing",
                    "Cabinet cleaning inside/out",
                    "Vanity and countertop cleaning",
                    "Floor sanitization",
                    "Exhaust fan cleaning"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-two-trees-green">Throughout Your Home</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "All floors vacuumed and mopped",
                    "Light fixtures and ceiling fans",
                    "Door frames and switches",
                    "Closet cleaning",
                    "All surfaces dusted"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Why Choose Two Trees Cleaning in Thousand Oaks
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-xl font-semibold text-two-trees-green mb-2">Local Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Familiar with Thousand Oaks rental standards and landlord expectations from Newbury Park to Dos Vientos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-two-trees-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-two-trees-gold" />
                </div>
                <h3 className="text-xl font-semibold text-two-trees-green mb-2">200+ Families Served</h3>
                <p className="text-gray-600 text-sm">
                  Trusted by Ventura County residents with consistently 5-star reviews and proven deposit recovery results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-xl font-semibold text-two-trees-green mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">
                  Fully licensed and insured for your peace of mind during this important transition.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-two-trees-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-two-trees-gold" />
                </div>
                <h3 className="text-xl font-semibold text-two-trees-green mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600 text-sm">
                  100% satisfaction guarantee. If something isn't right, we'll return to fix it at no extra charge.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-two-trees-green mb-8">
            Transparent Pricing for Thousand Oaks Residents
          </h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-12">
              <div className="text-6xl font-bold text-two-trees-green mb-4">Starting at $200</div>
              <p className="text-xl text-gray-600 mb-8">
                Pricing varies based on home size, condition, and specific requirements. 
                Homes in 91360 and 91362 zip codes qualify for standard pricing.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-8">
                <div>
                  <h4 className="font-semibold text-two-trees-green mb-2">What affects pricing:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Square footage of home</li>
                    <li>• Number of bathrooms</li>
                    <li>• Current condition</li>
                    <li>• Additional services needed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-two-trees-green mb-2">Free estimate includes:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Detailed scope of work</li>
                    <li>• Timeline for completion</li>
                    <li>• No hidden fees guarantee</li>
                    <li>• Flexible scheduling options</li>
                  </ul>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Pricing')}
              >
                Get Your Free Quote Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Cleanings Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Recent Move-Out Cleanings in Thousand Oaks
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-two-trees-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-two-trees-green" />
                    <div>
                      <p className="font-semibold text-two-trees-green">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Serving nearby neighborhoods including: {neighborhoods.join(", ")} and all areas near 
              The Oaks Mall, Civic Arts Plaza, and throughout the Conejo Valley.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-two-trees-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-two-trees-green mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-two-trees-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Your Deposit Back?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of satisfied Thousand Oaks residents who got their deposits back with our thorough move-out cleaning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green font-semibold px-8 py-4 text-lg"
              onClick={() => handleBookingClick('Final CTA')}
            >
              Book Your Move-Out Clean Today
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white bg-white/10 hover:bg-white/20 px-8 py-4 text-lg"
              onClick={handlePhoneClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (805) 456-1421
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services & Other Locations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Related Services */}
            <div>
              <h3 className="text-2xl font-bold text-two-trees-green mb-6">Related Services in Thousand Oaks</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-two-trees-green mb-2">
                    <Link to="/thousand-oaks" className="hover:underline">Regular House Cleaning</Link>
                  </h4>
                  <p className="text-gray-600 text-sm">Ongoing cleaning services for your Thousand Oaks home</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-two-trees-green mb-2">
                    <Link to="/services/deep-cleaning" className="hover:underline">Deep Cleaning</Link>
                  </h4>
                  <p className="text-gray-600 text-sm">Comprehensive one-time cleaning service</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-two-trees-green mb-2">
                    <Link to="/services/move-in-move-out" className="hover:underline">Move-In Cleaning</Link>
                  </h4>
                  <p className="text-gray-600 text-sm">Fresh start cleaning for your new home</p>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            <div>
              <h3 className="text-2xl font-bold text-two-trees-green mb-6">Move-Out Cleaning in Other Areas</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-two-trees-green mb-2">
                    <Link to="/westlake-village/move-out-cleaning" className="hover:underline">Westlake Village Move-Out</Link>
                  </h4>
                  <p className="text-gray-600 text-sm">Premium move-out cleaning for Westlake Village properties</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-two-trees-green mb-2">
                    <Link to="/ventura/move-out-cleaning" className="hover:underline">Ventura Move-Out Cleaning</Link>
                  </h4>
                  <p className="text-gray-600 text-sm">Coastal property move-out cleaning services</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-two-trees-green mb-2">
                    <Link to="/camarillo/move-out-cleaning" className="hover:underline">Camarillo Move-Out Cleaning</Link>
                  </h4>
                  <p className="text-gray-600 text-sm">Family-focused move-out cleaning in Camarillo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThousandOaksMoveOut;