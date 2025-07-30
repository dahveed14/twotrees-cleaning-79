import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Star, CheckCircle, Clock, Shield, Sparkles, Users, MapPin, Calendar, Home, Heart } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { NiceJobWidget } from "@/components/NiceJobWidget";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { updateMetaTags } from "@/utils/metaTags";
import { useEffect } from "react";

export default function OjaiMoveOut() {
  const { toast } = useToast();

  useEffect(() => {
    updateMetaTags({
      title: "Ojai Move-Out Cleaning Services | Two Trees Cleaning",
      description: "Gentle, detailed move-out cleaning for Ojai homes and rentals. Trusted by 200+ families. Local, insured, and eco-conscious service.",
      cityName: "Ojai",
      cityCoordinates: {
        latitude: "34.4485",
        longitude: "-119.2429"
      },
      url: "https://twotreescleaning.com/ojai/move-out-cleaning",
      keywords: ["Ojai move out cleaning", "move out cleaning Ojai", "rental cleaning Ojai", "deep cleaning Ojai", "cleaning service Ojai", "Two Trees Cleaning Ojai"]
    });
  }, []);

  const handleBookingClick = () => {
    toast({
      title: "Booking Request Started",
      description: "Scroll down to fill out our form for a free quote!",
    });
    
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:8054561421";
  };

  const includedServices = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Appliance Interiors",
      description: "Deep clean inside fridge, oven, microwave, and dishwasher"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Cabinet & Drawer Interiors", 
      description: "Thorough cleaning inside all cabinets, drawers, and closets"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Detailed Surfaces",
      description: "Baseboards, trim, switches, ceiling fans, and light fixtures"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Bathroom Deep Clean",
      description: "All bathroom surfaces scrubbed, including tile and grout"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Floor Care",
      description: "All floors vacuumed and mopped to perfection"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family-Owned & Trusted Locally",
      description: "Serving 200+ families across Ventura County with personal care"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed, Insured & Detail-Oriented",
      description: "Professional team focused on thorough, reliable service"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Eco-Conscious Products Available",
      description: "Green cleaning options on request for environmentally conscious clients"
    }
  ];

  const faqs = [
    {
      question: "Do you offer green cleaning products?",
      answer: "Yes! We offer eco-friendly, non-toxic cleaning products upon request. Perfect for environmentally conscious Ojai residents."
    },
    {
      question: "Can you clean last-minute before key hand-off?",
      answer: "We understand moving timelines can change. Contact us and we'll do our best to accommodate urgent requests with same-day or next-day availability."
    },
    {
      question: "Do you clean windows or patios?",
      answer: "Interior windows are included in our standard move-out service. Exterior windows and patio cleaning can be added for an additional fee."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ojai Move-Out Cleaning Services | Two Trees Cleaning</title>
        <meta name="description" content="Gentle, detailed move-out cleaning for Ojai homes and rentals. Trusted by 200+ families. Local, insured, and eco-conscious service." />
        <meta name="keywords" content="Ojai move out cleaning, move out cleaning Ojai, rental cleaning Ojai, deep cleaning Ojai, cleaning service Ojai, Two Trees Cleaning Ojai" />
        <link rel="canonical" href="https://twotreescleaning.com/ojai/move-out-cleaning" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Ojai Move-Out Cleaning Services | Two Trees Cleaning" />
        <meta property="og:description" content="Gentle, detailed move-out cleaning for Ojai homes and rentals. Trusted by 200+ families. Local, insured, and eco-conscious service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://twotreescleaning.com/ojai/move-out-cleaning" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Ojai Move-Out Cleaning Services | Two Trees Cleaning" />
        <meta name="twitter:description" content="Gentle, detailed move-out cleaning for Ojai homes and rentals. Trusted by 200+ families. Local, insured, and eco-conscious service." />
        
        {/* Local Business JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Two Trees Cleaning - Ojai Move-Out Cleaning",
            "description": "Professional move-out cleaning services in Ojai, CA",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ojai",
              "addressRegion": "CA",
              "postalCode": "93023"
            },
            "telephone": "(805) 456-1421",
            "url": "https://twotreescleaning.com/ojai/move-out-cleaning",
            "areaServed": "Ojai, CA",
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
                    Move-Out Cleaning Specialists in Ojai
                  </Badge>
                  
                  <h1 className="text-4xl md:text-6xl font-bold text-two-trees-green leading-tight">
                    Move-Out Cleaning in Ojai
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Whether you're leaving a cottage in the East End or a rental in Meiners Oaks, Two Trees Cleaning provides move-out cleanings that meet landlord checklists and leave your space spotless.
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
                  alt="Move-out cleaning service in Ojai - professional cleaner working in a spotless home with beautiful mountain views" 
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
                  Every detail covered to ensure you get your deposit back and leave on a positive note.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  Why Choose Two Trees in Ojai
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Local expertise with the attention to detail your Ojai home deserves.
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
                Custom Quotes for Every Home
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Every home is unique. Let us quote your Ojai move-out clean based on your specific needs and timeline.
              </p>
              
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-white px-8 py-4 text-lg font-semibold"
                onClick={handleBookingClick}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Move-Out Clean
              </Button>
            </div>
          </section>

          {/* Local References Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-two-trees-green mb-6">
                  Serving All of Ojai
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  From downtown cottages to hillside homes, we provide move-out cleaning throughout the Ojai Valley.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <MapPin className="w-8 h-8 text-two-trees-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-two-trees-green mb-2">Arbolada</h3>
                  <p className="text-gray-600 text-sm">Family neighborhoods</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <MapPin className="w-8 h-8 text-two-trees-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-two-trees-green mb-2">East End</h3>
                  <p className="text-gray-600 text-sm">Historic charm</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <MapPin className="w-8 h-8 text-two-trees-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-two-trees-green mb-2">Oak View</h3>
                  <p className="text-gray-600 text-sm">Country living</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <MapPin className="w-8 h-8 text-two-trees-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-two-trees-green mb-2">Meiners Oaks</h3>
                  <p className="text-gray-600 text-sm">Rental properties</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600">
                  <span className="font-semibold">Zip Codes Served:</span> 93023, 93022
                </p>
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

          {/* Related Services & Other Locations */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                
                {/* Related Services */}
                <div>
                  <h3 className="text-2xl font-bold text-two-trees-green mb-6">Related Services in Ojai</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-two-trees-green mb-2">
                        <a href="/ojai" className="hover:underline">Regular Eco-Friendly Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Sustainable ongoing cleaning for your Ojai home</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-two-trees-green mb-2">
                        <a href="/services/vacation-rental" className="hover:underline">Vacation Rental Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Retreat-ready cleaning for Ojai vacation properties</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-two-trees-green mb-2">
                        <a href="/services/move-in-move-out" className="hover:underline">Move-In Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Fresh start cleaning for your new Ojai home</p>
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
                        <a href="/oxnard/move-out-cleaning" className="hover:underline">Oxnard Move-Out Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Affordable move-out cleaning for Oxnard families</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-two-trees-green mb-2">
                        <a href="/santa-paula/move-out-cleaning" className="hover:underline">Santa Paula Move-Out Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Rural and residential move-out cleaning</p>
                    </div>
                  </div>
                </div>
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
              
              <NiceJobWidget compact />
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 px-4 bg-two-trees-green text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book your move-out cleaning in Ojai and leave your space glowing
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Let us handle the cleaning so you can focus on your move. Professional, reliable, and detailed service you can trust.
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