
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, HardHat, Hammer } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const PostConstruction = () => {
  useEffect(() => {
    const venturaCountyCoordinates = {
      latitude: "34.3705",
      longitude: "-119.1391"
    };

    updateMetaTags({
      title: "Post Construction Cleaning Services | Two Trees Cleaning | Construction Cleanup | Ventura County",
      description: "Professional post-construction cleaning services in Ventura County. Specialized cleanup after renovations, remodels, and new construction. Safe debris removal and detailed cleaning.",
      cityName: "Ventura County",
      cityCoordinates: venturaCountyCoordinates,
      url: "https://twotreescleaning.com/services/post-construction",
      keywords: [
        "post construction cleaning Ventura County",
        "construction cleanup service",
        "renovation cleaning",
        "remodel cleaning service",
        "construction debris cleanup",
        "builder cleaning Ventura County",
        "new construction cleaning",
        "contractor cleaning service",
        "post renovation cleanup",
        "construction site cleaning",
        "final construction cleaning",
        "construction dust removal",
        "paint removal cleaning service",
        "window cleaning after construction",
        "floor cleaning post construction",
        "HVAC cleaning after construction",
        "fixture cleaning post construction",
        "construction cleanup Santa Barbara",
        "construction cleanup Thousand Oaks",
        "construction cleanup Oxnard",
        "construction cleanup Camarillo",
        "residential construction cleanup",
        "commercial construction cleanup"
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

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Services", url: "https://twotreescleaning.com/services" },
    { name: "Post Construction", url: "https://twotreescleaning.com/services/post-construction" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup 
        cityName="Ventura County"
        cityCoordinates={{ latitude: "34.3705", longitude: "-119.1391" }}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Services", href: "/services" },
          { label: "Post Construction", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Post-Construction Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Specialized cleaning services for after renovations, remodels, and new construction. We safely remove construction debris and transform your space from job site to move-in ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Post Construction Hero')}
              >
                Book Construction Cleanup - Starting at $300
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

          {/* Service Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Construction Cleanup Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-two-trees-green flex items-center justify-center gap-2">
                    <HardHat className="w-8 h-8" />
                    Rough Cleanup
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">
                    Initial cleanup during construction phase to maintain a safe work environment.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Debris removal and disposal",
                      "Dust control measures",
                      "Surface cleaning",
                      "Trash and material removal",
                      "Basic floor cleaning",
                      "Work area organization"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-two-trees-green hover:bg-two-trees-green/90 mt-4"
                    onClick={() => handleBookingClick('Rough Cleanup')}
                  >
                    Book Rough Cleanup
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow border-2 border-two-trees-gold">
                <CardHeader>
                  <div className="bg-two-trees-gold text-white px-4 py-1 rounded-full text-sm font-semibold mx-auto w-fit mb-4">
                    Most Popular
                  </div>
                  <CardTitle className="text-2xl text-two-trees-green flex items-center justify-center gap-2">
                    <Hammer className="w-8 h-8" />
                    Final Cleanup
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-center">
                    Complete detailed cleaning to make your space move-in ready after construction.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Detailed dust removal",
                      "Window and glass cleaning",
                      "Floor deep cleaning/polishing",
                      "Fixture and appliance cleaning",
                      "Paint and adhesive removal",
                      "Final inspection ready"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green font-semibold mt-4"
                    onClick={() => handleBookingClick('Final Cleanup')}
                  >
                    Book Final Cleanup
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Specialized Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Specialized Construction Cleaning
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Dust Removal",
                  description: "Comprehensive dust elimination from all surfaces, vents, and hidden areas"
                },
                {
                  title: "Paint & Adhesive Cleanup", 
                  description: "Safe removal of construction paint splatters and adhesive residue"
                },
                {
                  title: "Window & Glass Restoration",
                  description: "Professional cleaning of windows, mirrors, and glass surfaces"
                },
                {
                  title: "Floor Restoration",
                  description: "Deep cleaning and restoration of all flooring types after construction"
                },
                {
                  title: "Fixture & Appliance Cleaning",
                  description: "Detailed cleaning of new fixtures, appliances, and hardware"
                },
                {
                  title: "Air Vent Cleaning",
                  description: "Removal of construction dust from HVAC systems and air vents"
                }
              ].map((service, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-two-trees-green text-center">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Our 4-Step Construction Cleanup Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Site Assessment",
                  description: "We evaluate the construction site, identify debris types, and plan the safest cleanup approach."
                },
                {
                  step: "2", 
                  title: "Debris Removal",
                  description: "Safe removal of construction materials, dust, and debris using professional-grade equipment."
                },
                {
                  step: "3",
                  title: "Deep Cleaning",
                  description: "Detailed cleaning of all surfaces, fixtures, windows, and HVAC systems to remove construction residue."
                },
                {
                  step: "4",
                  title: "Final Inspection",
                  description: "Thorough walkthrough to ensure your space is move-in ready and meets our quality standards."
                }
              ].map((process, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-two-trees-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {process.step}
                    </div>
                    <CardTitle className="text-xl text-two-trees-green">
                      {process.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Related Services */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-8">
              Related Cleaning Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Deep Cleaning",
                  description: "Comprehensive cleaning for homes that need extra attention",
                  href: "/services/deep-cleaning"
                },
                {
                  title: "Move-Out Cleaning", 
                  description: "Detailed cleaning for properties being vacated",
                  href: "/services/move-in-move-out"
                },
                {
                  title: "Commercial Cleaning",
                  description: "Professional cleaning for offices and commercial spaces",
                  href: "/services/commercial-cleaning"
                }
              ].map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow block"
                >
                  <h3 className="text-lg font-semibold text-two-trees-green mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Post-Construction Cleaning FAQ
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "How long does post-construction cleanup take?",
                  answer: "Timeline varies by project size, but most residential projects take 1-2 days for final cleanup, while commercial projects may take 3-5 days."
                },
                {
                  question: "Do you remove construction debris?",
                  answer: "Yes, we safely remove and dispose of construction debris, dust, paint splatters, and other construction-related materials."
                },
                {
                  question: "Is post-construction cleaning safe?",
                  answer: "Absolutely. Our team uses proper safety equipment and follows OSHA guidelines for construction site cleanup to ensure safe working conditions."
                },
                {
                  question: "What areas do you serve for construction cleanup?",
                  answer: "We provide post-construction cleaning throughout Ventura County, including Santa Barbara, Thousand Oaks, Oxnard, Camarillo, and surrounding areas."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-two-trees-green">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-6">
              Post-Construction Service Areas
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {[
                { name: "Santa Barbara", href: "/santa-barbara" },
                { name: "Montecito", href: "/montecito" },
                { name: "Thousand Oaks", href: "/thousand-oaks" },
                { name: "Oxnard", href: "/oxnard" },
                { name: "Camarillo", href: "/camarillo" },
                { name: "Ventura", href: "/ventura" },
                { name: "Summerland", href: "/summerland" },
                { name: "Carpinteria", href: "/carpinteria" }
              ].map((area) => (
                <Link
                  key={area.name}
                  to={area.href}
                  className="bg-white px-4 py-3 rounded-lg shadow hover:shadow-md transition-shadow text-two-trees-green hover:text-two-trees-green/80"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-two-trees-green text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Construction Site?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our experts handle the detailed cleanup so you can enjoy your newly constructed space
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Post Construction CTA')}
              >
                Book Construction Cleanup Today
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PostConstruction;
