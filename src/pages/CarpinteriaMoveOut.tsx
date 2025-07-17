import { Helmet } from "react-helmet-async";
import { Navigation } from "../components/Navigation";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Star, MapPin, Phone, Clock, Shield, CheckCircle, Home, Sparkles } from "lucide-react";
import { Footer } from "../components/Footer";
import { FinalCTA } from "../components/FinalCTA";
import { SchemaMarkup } from "../components/SchemaMarkup";
import { updateMetaTags } from "../utils/metaTags";
import { useEffect } from "react";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Carpinteria", href: "/carpinteria" },
  { label: "Move-Out Cleaning", href: "/carpinteria/move-out-cleaning" }
];

const includedServices = [
  {
    icon: <Sparkles className="w-6 h-6 text-two-trees-gold" />,
    title: "Kitchen Deep Clean",
    description: "Inside fridge, oven, microwave, and all cabinets thoroughly cleaned"
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-two-trees-gold" />,
    title: "Bathroom Sanitization",
    description: "Deep clean of toilets, tubs, tile, and vanities for inspection readiness"
  },
  {
    icon: <Home className="w-6 h-6 text-two-trees-gold" />,
    title: "Complete Dusting",
    description: "All trim, ceiling fans, doors, light switches, and baseboards"
  },
  {
    icon: <Sparkles className="w-6 h-6 text-two-trees-gold" />,
    title: "Floor Care",
    description: "Thorough vacuuming and mopping of all accessible floor surfaces"
  }
];

const whyChooseUs = [
  {
    icon: <Star className="w-6 h-6 text-two-trees-gold" />,
    title: "5-Star Rated Team",
    description: "Trusted by 200+ families across the Central Coast"
  },
  {
    icon: <Shield className="w-6 h-6 text-two-trees-gold" />,
    title: "Licensed & Insured",
    description: "Family-run business with full insurance coverage"
  },
  {
    icon: <MapPin className="w-6 h-6 text-two-trees-gold" />,
    title: "Local Carpinteria Experts",
    description: "We serve downtown, beachside homes, and all 93013 areas"
  }
];

const faqs = [
  {
    question: "Do you service vacation homes and Airbnb units?",
    answer: "Absolutely! We specialize in cleaning vacation rentals, Airbnb properties, and beach homes throughout Carpinteria. We understand the quick turnaround needs of rental properties."
  },
  {
    question: "How long does a typical Carpinteria move-out clean take?",
    answer: "Most move-out cleanings take 3-6 hours depending on the size of your home and its condition. We'll provide a time estimate when we give you your free quote."
  },
  {
    question: "Do I need to provide supplies?",
    answer: "No! We bring all professional-grade cleaning supplies and equipment. You just need to provide access to the property."
  }
];

export const CarpinteriaMoveOut = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Carpinteria Move-Out Cleaning Services | Two Trees Cleaning",
      description: "Reliable move-out cleaning in Carpinteria. Trusted by 200+ families across the coast. Great for renters, landlords, and vacation homes.",
      url: "https://twotreescleaning.com/carpinteria/move-out-cleaning",
      cityName: "Carpinteria",
      cityCoordinates: { latitude: "34.3988", longitude: "-119.5143" }
    });
  }, []);

  const handleBookingClick = (location: string) => {
    console.log(`Booking clicked for: ${location}`);
    window.open('https://book.housecallpro.com/book/Two-Trees-Cleaning/d7969bca998449c4a5c21da01b1f7b74', '_blank');
  };

  const handlePhoneClick = () => {
    console.log('Phone clicked');
    window.open('tel:+18056413200', '_self');
  };

  return (
    <>
      <Helmet>
        <title>Carpinteria Move-Out Cleaning Services | Two Trees Cleaning</title>
        <meta name="description" content="Reliable move-out cleaning in Carpinteria. Trusted by 200+ families across the coast. Great for renters, landlords, and vacation homes." />
        <meta name="keywords" content="move out cleaning Carpinteria, end of lease cleaning, vacation rental cleaning, Carpinteria cleaning services, move out cleaners 93013" />
        <link rel="canonical" href="https://twotreescleaning.com/carpinteria/move-out-cleaning" />
        <meta property="og:title" content="Carpinteria Move-Out Cleaning Services | Two Trees Cleaning" />
        <meta property="og:description" content="Reliable move-out cleaning in Carpinteria. Trusted by 200+ families across the coast. Great for renters, landlords, and vacation homes." />
        <meta property="og:url" content="https://twotreescleaning.com/carpinteria/move-out-cleaning" />
      </Helmet>

      <SchemaMarkup 
        cityName="Carpinteria"
        cityCoordinates={{ latitude: "34.3988", longitude: "-119.5143" }}
        breadcrumbs={breadcrumbItems.map(item => ({ name: item.label, url: item.href }))}
      />

      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="text-center mb-16 pt-8">
            <h1 className="text-5xl font-bold text-two-trees-green mb-6">
              Move-Out Cleaning in Carpinteria
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Moving out of your Carpinteria home, apartment, or beach rental? Two Trees Cleaning delivers top-to-bottom move-out cleaning to help you leave the space spotless—and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-4"
                onClick={() => handleBookingClick('Carpinteria Move-Out')}
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green hover:text-white bg-white px-8 py-4"
                onClick={handlePhoneClick}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (805) 641-3200
              </Button>
            </div>
          </div>

          {/* What's Included Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-two-trees-green text-center mb-12">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {includedServices.map((service, index) => (
                <Card key={index} className="p-8 shadow-lg hover:shadow-xl transition-shadow border-none">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="bg-two-trees-green/10 p-3 rounded-full">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-two-trees-green mb-2">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-two-trees-green text-center mb-12">Why Locals Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="p-8 text-center shadow-lg hover:shadow-xl transition-shadow border-none">
                  <CardContent className="p-0">
                    <div className="bg-two-trees-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-bold text-two-trees-green mb-3">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Quote Section */}
          <section className="mb-16 bg-two-trees-green/5 rounded-2xl p-8 text-center">
            <blockquote className="text-2xl italic text-two-trees-green mb-6">
              "Whether it's a move-out inspection or final walkthrough—we're here to help."
            </blockquote>
            <Button 
              size="lg" 
              className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-white px-8 py-4"
              onClick={() => handleBookingClick('Carpinteria Move-Out Quote')}
            >
              Get a Free Quote
            </Button>
          </section>

          {/* Local References Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-two-trees-green text-center mb-8">Serving All of Carpinteria</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-two-trees-green mb-4">Areas We Cover</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-two-trees-gold" />
                      <span className="text-gray-700">Linden Avenue</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-two-trees-gold" />
                      <span className="text-gray-700">Concha Loma</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-two-trees-gold" />
                      <span className="text-gray-700">Carpinteria Bluffs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-two-trees-gold" />
                      <span className="text-gray-700">Sandyland Cove</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-two-trees-green mb-4">Property Types</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Home className="w-5 h-5 text-two-trees-gold" />
                      <span className="text-gray-700">Vacation Rentals & Airbnb</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Home className="w-5 h-5 text-two-trees-gold" />
                      <span className="text-gray-700">Beachside Condos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Home className="w-5 h-5 text-two-trees-gold" />
                      <span className="text-gray-700">Single-Family Homes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Home className="w-5 h-5 text-two-trees-gold" />
                      <span className="text-gray-700">All 93013 Areas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-8">Related Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow border-none">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-two-trees-green mb-3">General Move-Out Cleaning</h3>
                  <p className="text-gray-600 mb-4">Comprehensive move-out cleaning services for all locations</p>
                  <Button variant="outline" className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green hover:text-white" asChild>
                    <a href="/services/move-in-move-out">Learn More</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow border-none">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-two-trees-green mb-3">Carpinteria Cleaning Services</h3>
                  <p className="text-gray-600 mb-4">All our cleaning services available in Carpinteria</p>
                  <Button variant="outline" className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green hover:text-white" asChild>
                    <a href="/carpinteria">View All Services</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-two-trees-green text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-8 shadow-lg border-none">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold text-two-trees-green mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="text-center bg-gradient-to-r from-two-trees-green to-two-trees-green/90 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">Let Us Handle the Dirty Work</h2>
            <p className="text-xl mb-8 opacity-90">Book your Carpinteria move-out clean with Two Trees Cleaning.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-white px-8 py-4"
                onClick={() => handleBookingClick('Carpinteria Final CTA')}
              >
                Book Your Cleaning
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-two-trees-green bg-transparent px-8 py-4"
                onClick={handlePhoneClick}
              >
                <Phone className="w-4 h-4 mr-2" />
                (805) 641-3200
              </Button>
            </div>
          </section>
        </div>
      </div>

      <FinalCTA onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      <Footer />
    </>
  );
};