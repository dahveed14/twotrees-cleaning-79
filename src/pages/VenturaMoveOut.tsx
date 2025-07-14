import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { TestimonialSchema } from "@/components/TestimonialSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle, DollarSign, Star, MapPin, HelpCircle } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const VenturaMoveOut = () => {
  useEffect(() => {
    const venturaCoordinates = {
      latitude: "34.2818",
      longitude: "-119.2945"
    };

    updateMetaTags({
      title: "Ventura Move-Out Cleaning Services | Two Trees Cleaning",
      description: "Professional move-out cleaning in Ventura by Two Trees Cleaning. Trusted by 200+ families. Licensed, insured, and ready to help you get your deposit back.",
      cityName: "Ventura",
      cityCoordinates: venturaCoordinates,
      url: "https://twotreescleaning.com/ventura/move-out-cleaning",
      keywords: [
        "move out cleaning Ventura",
        "deposit back cleaning Ventura",
        "end of lease cleaning Ventura",
        "rental cleaning Ventura",
        "Ventura move out service",
        "Midtown Ventura cleaning",
        "Pierpont move out cleaning",
        "93001 move out cleaning",
        "93003 move out cleaning",
        "93004 move out cleaning"
      ]
    });
  }, []);

  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', `Ventura Move Out - ${location}`);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Ventura Move Out Phone Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" },
    { name: "Ventura", url: "https://twotreescleaning.com/ventura" },
    { name: "Move-Out Cleaning", url: "https://twotreescleaning.com/ventura/move-out-cleaning" }
  ];

  const neighborhoods = [
    "Midtown Ventura", "The Avenue", "Pierpont", "Montalvo", 
    "Ventura Keys", "Downtown Ventura", "San Buenaventura", "East Ventura"
  ];

  const testimonials = [
    {
      name: "Sarah L.",
      location: "Pierpont",
      rating: 5,
      text: "Two Trees helped us get our full security deposit back! Their attention to detail for our coastal rental was amazing."
    },
    {
      name: "Michael R.",
      location: "Midtown Ventura",
      rating: 5,
      text: "Professional service and fair pricing. They cleaned everything perfectly for our landlord's final inspection."
    }
  ];

  const faqs = [
    {
      question: "How long does a move-out cleaning take?",
      answer: "Most move-out cleanings in Ventura take 3-6 hours depending on the size and condition of your home. We work efficiently to meet your move-out timeline."
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "No, you don't need to be present. Many Ventura clients provide access and go about their day. We're fully insured and trusted in the community."
    },
    {
      question: "What's your deposit guarantee policy?",
      answer: "While we can't guarantee your deposit return (as this depends on your lease terms), our thorough cleaning significantly improves your chances. We follow a comprehensive checklist used specifically for Ventura rentals."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup 
        cityName="Ventura"
        cityCoordinates={{ latitude: "34.2818", longitude: "-119.2945" }}
        breadcrumbs={breadcrumbData}
      />
      <TestimonialSchema testimonials={testimonials} cityName="Ventura" />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", href: "/service-areas" },
          { label: "Ventura", href: "/ventura" },
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
                Ventura, CA
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green mb-6">
                Move-Out Cleaning in Ventura
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Moving out of a home or apartment in Ventura? Our professional move-out cleaning service 
                ensures your space is spotless—perfect for landlords, property managers, or deposit returns. 
                We've helped over 200 Ventura County families secure their deposits with our thorough, 
                inspection-ready cleaning.
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
                alt="Two Trees Cleaning professional move-out cleaning service in Ventura - expert team member preparing a coastal home for final inspection to help tenants get their security deposit back"
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
            Why Choose Two Trees Cleaning in Ventura
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-xl font-semibold text-two-trees-green mb-2">Local Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Familiar with Ventura rental standards and landlord expectations from Pierpont to Midtown.
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
                <h3 className="text-xl font-semibold text-two-trees-green mb-2">Transparent Pricing</h3>
                <p className="text-gray-600 text-sm">
                  No surprises - upfront pricing with our satisfaction guarantee for all Ventura residents.
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
            How to Book a Quote for Ventura Residents
          </h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-12">
              <div className="text-6xl font-bold text-two-trees-green mb-4">Starting at $200</div>
              <p className="text-xl text-gray-600 mb-8">
                Pricing varies based on home size, condition, and specific requirements. 
                Coastal properties in 93001, 93003, and 93004 zip codes qualify for standard pricing.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-8">
                <div>
                  <h4 className="font-semibold text-two-trees-green mb-2">What affects pricing:</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Square footage of home</li>
                    <li>• Number of bathrooms</li>
                    <li>• Current condition</li>
                    <li>• Salt air exposure (coastal properties)</li>
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
            Recent Move-Out Cleanings in Ventura
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
              Ventura Pier, Main Street, and Ventura College.
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
                      <h3 className="text-lg font-semibold text-two-trees-green mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-two-trees-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let Us Handle the Stress of Move-Out Cleaning
          </h2>
          <p className="text-xl mb-8 opacity-90">
            So you can focus on your next chapter. Serving all of Ventura from the pier to the foothills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-two-trees-green hover:bg-gray-100 px-8 py-4 text-lg"
              onClick={() => handleBookingClick('Final CTA')}
            >
              Book Your Move-Out Cleaning
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              onClick={handlePhoneClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (805) 456-1421
            </Button>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg mb-4">
              Ready to learn more about our services?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                to="/services/move-in-move-out" 
                className="text-white hover:text-two-trees-gold underline"
              >
                Move-Out Cleaning Services
              </Link>
              <span className="text-white/60">•</span>
              <Link 
                to="/ventura" 
                className="text-white hover:text-two-trees-gold underline"
              >
                All Ventura Services
              </Link>
              <span className="text-white/60">•</span>
              <Link 
                to="/contact" 
                className="text-white hover:text-two-trees-gold underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VenturaMoveOut;