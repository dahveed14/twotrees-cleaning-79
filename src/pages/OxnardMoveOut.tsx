import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Star, CheckCircle, Clock, Shield, Sparkles, Users, MapPin, Calendar, Home, Heart } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CompactGoogleReviews } from "@/components/CompactGoogleReviews";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { updateMetaTags } from "@/utils/metaTags";
import { useEffect } from "react";

export default function OxnardMoveOut() {
  const { toast } = useToast();

  useEffect(() => {
    updateMetaTags({
      title: "Oxnard Move-Out Cleaning Services | Two Trees Cleaning",
      description: "Affordable and thorough move-out cleaning in Oxnard. Trusted by 200+ families. We serve RiverPark, Channel Islands, and surrounding neighborhoods.",
      cityName: "Oxnard",
      cityCoordinates: {
        latitude: "34.1975",
        longitude: "-119.1771"
      },
      url: "https://twotreescleaning.com/oxnard/move-out-cleaning",
      keywords: ["Oxnard move out cleaning", "move out cleaning Oxnard", "rental cleaning Oxnard", "deep cleaning Oxnard", "cleaning service Oxnard", "Two Trees Cleaning Oxnard"]
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
      title: "Inside Appliances",
      description: "Deep clean inside refrigerator, stove, microwave, and dishwasher"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Interior of Cabinets & Drawers", 
      description: "Thorough cleaning inside all cabinets, drawers, and storage spaces"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Detailed Surfaces",
      description: "Baseboards, light switches, trim, and all detailed cleaning"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Bathroom Scrubbing",
      description: "Deep scrubbing of showers, tubs, sinks, and toilets"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Floor Care",
      description: "Vacuuming and mopping all floors to perfection"
    }
  ];

  const whyChooseUs = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "All Oxnard Neighborhoods",
      description: "We serve RiverPark, Silver Strand, El Rio, Channel Islands, and beyond"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed, Insured & Family-Owned",
      description: "Professional team you can trust with transparent, fair pricing"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "5-Star Rated Service",
      description: "Consistently rated 5 stars by 200+ satisfied customers"
    }
  ];

  const faqs = [
    {
      question: "How soon can you schedule in Oxnard?",
      answer: "We often have availability within 24-48 hours for move-out cleanings. Contact us as soon as you know your move-out date for the best scheduling options."
    },
    {
      question: "Do you clean garage spaces or patios?",
      answer: "Yes! We can include garage cleaning and patio/outdoor areas for an additional fee. Just let us know what additional spaces need attention when requesting your quote."
    },
    {
      question: "Can you clean same-day after movers?",
      answer: "Absolutely! We understand moving logistics can be tight. We can often accommodate same-day cleaning after your movers finish, just give us a call to coordinate timing."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Oxnard Move-Out Cleaning Services | Two Trees Cleaning</title>
        <meta name="description" content="Affordable and thorough move-out cleaning in Oxnard. Trusted by 200+ families. We serve RiverPark, Channel Islands, and surrounding neighborhoods." />
        <meta name="keywords" content="Oxnard move out cleaning, move out cleaning Oxnard, rental cleaning Oxnard, deep cleaning Oxnard, cleaning service Oxnard, Two Trees Cleaning Oxnard" />
        <link rel="canonical" href="https://twotreescleaning.com/oxnard/move-out-cleaning" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Oxnard Move-Out Cleaning Services | Two Trees Cleaning" />
        <meta property="og:description" content="Affordable and thorough move-out cleaning in Oxnard. Trusted by 200+ families. We serve RiverPark, Channel Islands, and surrounding neighborhoods." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://twotreescleaning.com/oxnard/move-out-cleaning" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Oxnard Move-Out Cleaning Services | Two Trees Cleaning" />
        <meta name="twitter:description" content="Affordable and thorough move-out cleaning in Oxnard. Trusted by 200+ families. We serve RiverPark, Channel Islands, and surrounding neighborhoods." />
        
        {/* Local Business JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Two Trees Cleaning - Oxnard Move-Out Cleaning",
            "description": "Professional move-out cleaning services in Oxnard, CA",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Oxnard",
              "addressRegion": "CA",
              "postalCode": "93030"
            },
            "telephone": "(805) 456-1421",
            "url": "https://twotreescleaning.com/oxnard/move-out-cleaning",
            "areaServed": "Oxnard, CA",
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
                    Move-Out Cleaning Specialists in Oxnard
                  </Badge>
                  
                  <h1 className="text-4xl md:text-6xl font-bold text-two-trees-green leading-tight">
                    Move-Out Cleaning in Oxnard
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Moving out of your apartment or home in Oxnard? Let Two Trees Cleaning help you leave your space spotless and stress-free. Ideal for renters, landlords, and sellers.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-4 text-lg font-semibold"
                    onClick={handleBookingClick}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Request a Free Quote
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
                  alt="Move-out cleaning service in Oxnard - professional cleaner working in a spotless home" 
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
                  Complete cleaning service to help you get your deposit back and make your move stress-free.
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
                  Why Oxnard Chooses Two Trees Cleaning
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Local expertise with affordable, reliable service throughout Oxnard and surrounding areas.
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

          {/* Book a Quote Section */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-two-trees-green mb-6">
                Need a Fast, Reliable Clean Before Your Move-Out Inspection?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Every move-out cleaning is customized for your specific needs and timeline. Get your free quote today.
              </p>
              
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-white px-8 py-4 text-lg font-semibold"
                onClick={handleBookingClick}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Request a Free Quote
              </Button>
            </div>
          </section>

          {/* Local References Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-two-trees-green mb-6">
                  Serving All of Oxnard
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  From beachfront apartments to family neighborhoods, we provide move-out cleaning throughout Oxnard.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <MapPin className="w-8 h-8 text-two-trees-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-two-trees-green mb-2">RiverPark</h3>
                  <p className="text-gray-600 text-sm">Master-planned community</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <MapPin className="w-8 h-8 text-two-trees-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-two-trees-green mb-2">Silver Strand</h3>
                  <p className="text-gray-600 text-sm">Beachfront living</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <MapPin className="w-8 h-8 text-two-trees-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-two-trees-green mb-2">El Rio</h3>
                  <p className="text-gray-600 text-sm">Historic neighborhood</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <MapPin className="w-8 h-8 text-two-trees-gold mx-auto mb-4" />
                  <h3 className="font-semibold text-two-trees-green mb-2">Channel Islands</h3>
                  <p className="text-gray-600 text-sm">Harbor area</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600">
                  <span className="font-semibold">Zip Codes Served:</span> 93030, 93031, 93032, 93033, 93034, 93035, 93036
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
              
              <CompactGoogleReviews />
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 px-4 bg-two-trees-green text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book Your Oxnard Move-Out Cleaning Today
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Trusted locally since 2020, Two Trees Cleaning makes your move-out stress-free with professional, affordable service.
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