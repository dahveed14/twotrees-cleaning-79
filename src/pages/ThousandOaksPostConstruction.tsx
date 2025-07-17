import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle, HardHat, Hammer, MapPin, Star, Clock, Shield, HelpCircle, Users, Award } from "lucide-react";
import { updateMetaTags, generateCityKeywords } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const ThousandOaksPostConstruction = () => {
  useEffect(() => {
    const thousandOaksCoordinates = {
      latitude: "34.1706",
      longitude: "-118.8376"
    };

    updateMetaTags({
      title: "Thousand Oaks Post-Construction Cleaning | Two Trees Cleaning",
      description: "Construction cleanup done right in Thousand Oaks. Trusted by builders, contractors, and homeowners. Licensed, insured, and dust-free guaranteed.",
      cityName: "Thousand Oaks",
      cityCoordinates: thousandOaksCoordinates,
      url: "https://twotreescleaning.com/thousand-oaks/post-construction-cleaning",
      keywords: [
        ...generateCityKeywords("Thousand Oaks"),
        "post construction cleaning Thousand Oaks",
        "construction cleanup Thousand Oaks",
        "renovation cleaning Thousand Oaks",
        "contractor cleaning service Thousand Oaks",
        "Newbury Park construction cleanup",
        "91320 post construction cleaning",
        "91360 construction cleanup",
        "91362 renovation cleaning",
        "dust-free cleaning Thousand Oaks"
      ]
    });
  }, []);

  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', `Thousand Oaks Post Construction - ${location}`);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Thousand Oaks Post Construction Phone Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" },
    { name: "Thousand Oaks", url: "https://twotreescleaning.com/thousand-oaks" },
    { name: "Post-Construction Cleaning", url: "https://twotreescleaning.com/thousand-oaks/post-construction-cleaning" }
  ];

  const faqs = [
    {
      question: "Do you bring your own equipment?",
      answer: "Yes, we bring all professional-grade equipment, specialized tools, and eco-friendly supplies needed for thorough post-construction cleanup. This includes HEPA vacuums, dust removal tools, and safety equipment."
    },
    {
      question: "Can you clean after remodels, not just new builds?",
      answer: "Absolutely! We specialize in cleanup after kitchen remodels, bathroom renovations, room additions, and all types of construction projects - from small home improvements to complete renovations."
    },
    {
      question: "Do you clean construction debris?",
      answer: "We handle fine dust, paint splatters, and construction residue. However, large debris and materials should be removed by your contractor first. We focus on detailed cleaning to make your space move-in ready."
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
          { label: "Post-Construction Cleaning", current: true }
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
                Post-Construction Cleaning in Thousand Oaks
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Just wrapped up a renovation or new build in Thousand Oaks? Two Trees Cleaning offers 
                professional post-construction cleaning that transforms job sites into move-in ready homes or showrooms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                  onClick={() => handleBookingClick('Hero')}
                >
                  Request a Post-Construction Quote
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
                alt="Professional post-construction cleaning team in Thousand Oaks transforming a construction site into a move-in ready space"
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
            What's Included in Our Post-Construction Cleaning
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-two-trees-green flex items-center gap-2">
                  <HardHat className="w-6 h-6" />
                  Dust & Debris Removal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Fine dust removal from walls and floors",
                    "Cleaning of air vents and fixtures",
                    "Surface dust elimination",
                    "HEPA vacuum filtration"
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
                <CardTitle className="text-xl text-two-trees-green flex items-center gap-2">
                  <Hammer className="w-6 h-6" />
                  Windows & Glass
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Interior window cleaning",
                    "Window sills and frames",
                    "Glass door cleaning",
                    "Mirror and fixture polishing"
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
                <CardTitle className="text-xl text-two-trees-green">Deep Clean Spaces</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Deep clean of bathrooms and kitchens",
                    "Sweeping, vacuuming, and mopping floors",
                    "Wipe-down of cabinets and counters",
                    "Cleaning of doors and baseboards"
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

      {/* Why Contractors Trust Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Why Contractors Trust Two Trees Cleaning
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-xl font-semibold text-two-trees-green mb-2">Contractor Experience</h3>
                <p className="text-gray-600 text-sm">
                  Experienced with residential and commercial cleanup. We understand contractor timelines and job site requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-two-trees-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-two-trees-gold" />
                </div>
                <h3 className="text-xl font-semibold text-two-trees-green mb-2">On-Time & Ready</h3>
                <p className="text-gray-600 text-sm">
                  On-time, insured, and job-site ready. We work around your schedule to keep projects on track.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-xl font-semibold text-two-trees-green mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">
                  Fully licensed and insured for commercial and residential projects. Complete peace of mind for contractors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-two-trees-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-two-trees-gold" />
                </div>
                <h3 className="text-xl font-semibold text-two-trees-green mb-2">Trusted Partnership</h3>
                <p className="text-gray-600 text-sm">
                  Ideal for general contractors, builders, and homeowners post-reno. We help you deliver quality results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Serving Greater Thousand Oaks Area
          </h2>
          <Card className="border-none shadow-lg">
            <CardContent className="p-12 text-center">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-two-trees-green mb-4">Neighborhood Coverage</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Newbury Park", "Lynn Ranch", "Westlake-adjacent", "Dos Vientos", "North Ranch"].map((area) => (
                      <Badge key={area} variant="outline" className="border-two-trees-green text-two-trees-green">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-two-trees-green mb-4">Zip Code Areas</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["91320", "91360", "91362"].map((zip) => (
                      <Badge key={zip} variant="outline" className="border-two-trees-gold text-two-trees-green">
                        {zip}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                We serve all of greater Thousand Oaks and surrounding communities with fast, reliable post-construction cleanup services.
              </p>
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Service Area')}
              >
                Get a Quote for Your Project Today
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-two-trees-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-two-trees-green mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
            Related Cleaning Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/services/post-construction" className="block">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green">General Post-Construction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive post-construction cleaning services throughout Ventura County.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/thousand-oaks" className="block">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green">All Thousand Oaks Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Explore all our cleaning services available in the Thousand Oaks area.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/contact" className="block">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green">Custom Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Get a personalized quote for your specific construction cleanup project.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-two-trees-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Leave the Dust to Us
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get your project across the finish line with post-construction cleaning in Thousand Oaks. 
            Professional, reliable, and contractor-approved results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-two-trees-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => handleBookingClick('Final CTA')}
            >
              Request a Post-Construction Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-two-trees-green bg-transparent px-8 py-4 text-lg"
              onClick={handlePhoneClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              (805) 456-1421
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThousandOaksPostConstruction;