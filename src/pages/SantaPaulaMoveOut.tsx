import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Star, CheckCircle, Clock, Shield, Sparkles, Users, MapPin, Calendar, Home, Heart } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { updateMetaTags } from "@/utils/metaTags";
import { useEffect } from "react";

export default function SantaPaulaMoveOut() {
  const { toast } = useToast();

  useEffect(() => {
    updateMetaTags({
      title: "Santa Paula Move-Out Cleaning Services | Two Trees Cleaning",
      description: "Move-out cleaning for homes and rentals in Santa Paula. Trusted by 200+ families. Fast, affordable, and thorough. We serve all of 93060 and nearby.",
      cityName: "Santa Paula",
      cityCoordinates: {
        latitude: "34.3542",
        longitude: "-119.0593"
      },
      url: "https://twotreescleaning.com/santa-paula/move-out-cleaning",
      keywords: ["Santa Paula move out cleaning", "move out cleaning Santa Paula", "rental cleaning Santa Paula", "deep cleaning Santa Paula", "cleaning service Santa Paula", "Two Trees Cleaning Santa Paula"]
    });
  }, []);

  const handleBookingClick = () => {
    toast({
      title: "Booking Request Started",
      description: "Scroll down to fill out our form for a free quote!",
    });
    
    if (typeof document !== 'undefined') {
      const formSection = document.getElementById('contact-form');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:8054561421";
  };

  const includedServices = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Inside of Appliances & Cabinets",
      description: "Deep clean inside refrigerator, oven, microwave, and all cabinet interiors"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "All Bathrooms Detailed", 
      description: "Complete bathroom cleaning including scrubbing, sanitizing, and detailing"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Detailed Surfaces",
      description: "Baseboards, doors, windowsills, light fixtures, and all detailed cleaning"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Floor Care",
      description: "Vacuuming and mopping all floors to spotless condition"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Known & Trusted Across Ventura County",
      description: "Serving 200+ families with reliable, professional cleaning services"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed & Insured",
      description: "Professional team you can trust with full licensing and insurance coverage"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Transparent Pricing & Great Communication",
      description: "No surprises - clear pricing and excellent customer communication"
    }
  ];

  const faqs = [
    {
      question: "Do you clean mobile homes or rural properties?",
      answer: "Yes! We clean all types of homes including mobile homes, ranch properties, and rural residences throughout Santa Paula and surrounding agricultural areas."
    },
    {
      question: "Can you schedule on weekends?",
      answer: "Absolutely! We offer flexible scheduling including weekends to accommodate your move-out timeline. Just let us know your preferred dates when requesting a quote."
    },
    {
      question: "Do I need to be home during the clean?",
      answer: "No, you don't need to be present during the cleaning. Many clients provide access and run errands or handle other moving tasks while we work."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Santa Paula Move-Out Cleaning Services | Two Trees Cleaning</title>
        <meta name="description" content="Move-out cleaning for homes and rentals in Santa Paula. Trusted by 200+ families. Fast, affordable, and thorough. We serve all of 93060 and nearby." />
        <meta name="keywords" content="Santa Paula move out cleaning, move out cleaning Santa Paula, rental cleaning Santa Paula, deep cleaning Santa Paula, cleaning service Santa Paula, Two Trees Cleaning Santa Paula" />
        
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Santa Paula Move-Out Cleaning Services | Two Trees Cleaning" />
        <meta property="og:description" content="Move-out cleaning for homes and rentals in Santa Paula. Trusted by 200+ families. Fast, affordable, and thorough. We serve all of 93060 and nearby." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://twotreescleaning.com/santa-paula/move-out-cleaning" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Santa Paula Move-Out Cleaning Services | Two Trees Cleaning" />
        <meta name="twitter:description" content="Move-out cleaning for homes and rentals in Santa Paula. Trusted by 200+ families. Fast, affordable, and thorough. We serve all of 93060 and nearby." />
        
        {/* Local Business JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Two Trees Cleaning - Santa Paula Move-Out Cleaning",
            "description": "Professional move-out cleaning services in Santa Paula, CA",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Santa Paula",
              "addressRegion": "CA",
              "postalCode": "93060"
            },
            "telephone": "(805) 456-1421",
            "url": "https://twotreescleaning.com/santa-paula/move-out-cleaning",
            "areaServed": "Santa Paula, CA",
            "serviceType": "Move-out cleaning service"
          })}
        </script>
      </Helmet>

      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />

      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-slate-50 to-white py-20 px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-two-trees-gold text-two-trees-green font-medium">
                    Move-Out Cleaning Specialists in Santa Paula
                  </Badge>
                  
                  <h1 className="text-4xl md:text-6xl font-bold text-two-trees-green leading-tight">
                    Move-Out Cleaning in Santa Paula
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Need a reliable move-out cleaning in Santa Paula? Whether you're a tenant, homeowner, or property manager, Two Trees Cleaning ensures your space is left in pristine condition.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-4 text-lg font-semibold"
                    onClick={handleBookingClick}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Get a Free Quote
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 hover:text-two-trees-green px-8 py-4 text-lg"
                    onClick={handlePhoneClick}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    (805) 456-1421
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className="w-4 h-4 fill-two-trees-gold text-two-trees-gold" />
                  <span className="font-semibold">4.9/5 stars</span>
                  <span>from over 200+ families who trust our move-out cleaning</span>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/854ae905-37ee-4e73-a5f8-a01c6f2e9bb4.png" 
                  alt="Move-out cleaning service in Santa Paula - professional cleaner working in a spotless home" 
                  className="rounded-2xl shadow-2xl w-full h-auto" 
                />
              </div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-two-trees-green mb-6">
                  What's Included in Your Move-Out Clean
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Complete, thorough cleaning to help you get your deposit back and move with confidence.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {includedServices.map((service, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-two-trees-green/10 rounded-full flex items-center justify-center text-two-trees-green mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-two-trees-green mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-two-trees-green mb-6">
                  Why Choose Two Trees in Santa Paula
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Practical, responsive service that works for both residential and agricultural clients.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-two-trees-gold/10 rounded-full flex items-center justify-center text-two-trees-gold mx-auto mb-6">
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-two-trees-green mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quotes & Booking Section */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-two-trees-green mb-6">
                Custom Quote for Your Santa Paula Move-Out Cleaning
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Request a custom quote for your Santa Paula move-out cleaning. Fast, reliable service tailored to your specific needs.
              </p>
              
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-white px-8 py-4 text-lg font-semibold"
                onClick={handleBookingClick}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Get a Free Quote
              </Button>
            </div>
          </section>

          {/* Local References Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-two-trees-green mb-6">
                  Serving All of Santa Paula
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  From downtown homes to rural properties, we provide move-out cleaning throughout Santa Paula and surrounding areas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <MapPin className="w-8 h-8 text-two-trees-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-two-trees-green mb-2">The Oaks</h3>
                  <p className="text-gray-600 text-sm">Residential community</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <MapPin className="w-8 h-8 text-two-trees-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-two-trees-green mb-2">McKevett Heights</h3>
                  <p className="text-gray-600 text-sm">Hillside homes</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <MapPin className="w-8 h-8 text-two-trees-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-two-trees-green mb-2">Downtown Santa Paula</h3>
                  <p className="text-gray-600 text-sm">Historic center</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600">
                  <span className="font-semibold">Primary ZIP Code:</span> 93060 and surrounding farms/rural homes
                </p>
              </div>
            </div>
          </section>

          {/* Related Services & Other Locations */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                
                {/* Related Services */}
                <div>
                  <h3 className="text-2xl font-bold text-two-trees-green mb-6">Related Services in Santa Paula</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-two-trees-green mb-2">
                        <a href="/santa-paula" className="hover:underline">Regular House Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Reliable ongoing cleaning for Santa Paula families</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-two-trees-green mb-2">
                        <a href="/services/deep-cleaning" className="hover:underline">Deep Cleaning Service</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Thorough one-time cleaning for rural and residential properties</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-two-trees-green mb-2">
                        <a href="/services/move-in-move-out" className="hover:underline">Move-In Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Fresh start cleaning for your new Santa Paula home</p>
                    </div>
                  </div>
                </div>

                {/* Other Locations */}
                <div>
                  <h3 className="text-2xl font-bold text-two-trees-green mb-6">Move-Out Cleaning in Other Areas</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-two-trees-green mb-2">
                        <a href="/santa-barbara/move-out-cleaning" className="hover:underline">Santa Barbara Move-Out Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Luxury home move-out cleaning in Santa Barbara</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-two-trees-green mb-2">
                        <a href="/ojai/move-out-cleaning" className="hover:underline">Ojai Move-Out Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Eco-friendly move-out cleaning for Ojai properties</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-two-trees-green mb-2">
                        <a href="/oxnard/move-out-cleaning" className="hover:underline">Oxnard Move-Out Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Affordable move-out cleaning for Oxnard families</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-two-trees-green mb-6">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-semibold text-two-trees-green mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reviews Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-two-trees-green mb-6">
                  What Our Clients Say
                </h2>
                <div className="flex items-center justify-center space-x-2 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-two-trees-gold text-two-trees-gold" />
                  ))}
                  <span className="text-xl font-semibold text-gray-700 ml-2">5.0 Stars</span>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 px-4 bg-two-trees-green text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Santa Paula Move-Out Cleaning Made Simple
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Let us help you move on clean. Professional, reliable service that gets the job done right.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-white px-8 py-4 text-lg font-semibold"
                  onClick={handleBookingClick}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Your Free Quote
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/20 px-8 py-4 text-lg"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (805) 456-1421
                </Button>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section id="contact-form" className="py-20 px-4 bg-gray-50">
            <ContactForm />
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}