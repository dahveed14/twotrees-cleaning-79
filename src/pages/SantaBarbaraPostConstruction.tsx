import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, MapPin, Clock, Shield } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { updateMetaTags } from "@/utils/metaTags";
import { useEffect } from "react";

const SantaBarbaraPostConstruction = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Santa Barbara Post-Construction Cleaning | Two Trees Cleaning",
      description: "High-end post-construction cleaning in Santa Barbara, Montecito, and surrounding areas. Trusted by homeowners, designers, and contractors. Licensed & insured.",
      keywords: [
        "post-construction cleaning Santa Barbara",
        "construction cleanup Santa Barbara", 
        "builder cleaning Santa Barbara",
        "remodel cleaning Santa Barbara",
        "dust removal Santa Barbara",
        "final cleaning Santa Barbara"
      ],
      url: "https://twotreescleaning.com/santa-barbara/post-construction-cleaning",
      cityName: "Santa Barbara",
      cityCoordinates: {
        latitude: "34.4208",
        longitude: "-119.6982"
      }
    });
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Post-Construction Cleaning", href: "/services/post-construction" },
    { label: "Santa Barbara Post-Construction Cleaning", href: "/santa-barbara/post-construction-cleaning" }
  ];

  const includedServices = [
    "HEPA-level dust removal",
    "Wipe-down of all cabinetry, woodwork, and windowsills", 
    "Deep cleaning of kitchens, bathrooms, fixtures",
    "Floor cleaning (vacuum, mop, polish)",
    "Final detailing for hand-off, walkthroughs, or staging"
  ];

  const whyChooseUs = [
    "Trusted by 200+ families and property professionals",
    "Licensed, insured, and discreet",
    "Experience with luxury properties, coastal builds, and custom homes"
  ];

  const faqItems = [
    {
      question: "Do you clean custom homes and luxury finishes?",
      answer: "Yes, we specialize in high-end properties and work with luxury finishes, custom millwork, and premium materials. Our team is trained to handle delicate surfaces with care."
    },
    {
      question: "Can you work alongside stagers or listing agents?",
      answer: "Absolutely! We regularly coordinate with stagers, real estate agents, and interior designers to ensure perfect timing for property presentations and listings."
    },
    {
      question: "Do you offer flexible scheduling for project deadlines?",
      answer: "Yes, we understand construction timelines can be tight. We offer flexible scheduling including evenings and weekends to meet your project deadlines."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Santa Barbara Post-Construction Cleaning | Two Trees Cleaning</title>
        <meta name="description" content="High-end post-construction cleaning in Santa Barbara, Montecito, and surrounding areas. Trusted by homeowners, designers, and contractors. Licensed & insured." />
        <link rel="canonical" href="https://twotreescleaning.com/santa-barbara/post-construction-cleaning" />
      </Helmet>

      <SchemaMarkup 
        cityName="Santa Barbara"
        cityCoordinates={{
          latitude: "34.4208",
          longitude: "-119.6982"
        }}
      />

      <div className="min-h-screen flex flex-col">
        <Navigation 
          onBookingClick={() => window.location.href = "/contact"}
          onPhoneClick={() => window.location.href = "tel:+18054561421"}
        />
        
        <main className="flex-1">
          <div className="container mx-auto px-4 py-8">
            <Breadcrumbs items={breadcrumbItems} />
          </div>

          {/* Hero Section */}
          <section className="bg-gradient-to-br from-slate-50 to-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green leading-tight">
                    Post-Construction Cleaning in Santa Barbara
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    <a href="/santa-barbara" className="text-two-trees-green hover:underline">Santa Barbara's</a> builders, homeowners, and interior designers trust Two Trees Cleaning for <a href="/services/post-construction" className="text-two-trees-green hover:underline">post-construction cleaning</a> that matches the quality of the work. We leave every surface dust-free, polished, and camera-ready.
                  </p>
                  <Button size="lg" className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-4 text-lg font-semibold">
                    <a href="/contact">Get a Quote for Santa Barbara Post-Construction Cleaning</a>
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/854ae905-37ee-4e73-a5f8-a01c6f2e9bb4.png" 
                    alt="Post-construction cleaning in Santa Barbara" 
                    className="rounded-2xl shadow-2xl w-full h-auto" 
                  />
                </div>
              </div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">What's Included in Our Service</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive post-construction cleaning that prepares your space for its next chapter
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {includedServices.map((service, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 font-medium">{service}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Two Trees</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Professional post-construction cleaning for Santa Barbara's finest properties
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {whyChooseUs.map((reason, index) => (
                  <Card key={index} className="bg-gray-50 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="mb-4">
                        {index === 0 && <Star className="h-12 w-12 text-yellow-500 mx-auto" />}
                        {index === 1 && <Shield className="h-12 w-12 text-green-600 mx-auto" />}
                        {index === 2 && <Clock className="h-12 w-12 text-blue-600 mx-auto" />}
                      </div>
                      <p className="text-gray-700 font-medium">{reason}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Local Coverage Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Areas We Serve</h2>
                <div className="flex items-center justify-center mb-8">
                  <MapPin className="h-6 w-6 text-green-600 mr-2" />
                  <p className="text-xl text-gray-600">
                    Serving Montecito, The Riviera, Mesa, San Roque, Hope Ranch, and all of 93101, 93103, 93108
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                  <p className="text-lg text-gray-700 mb-6">
                    We help your project end on a high note.
                  </p>
                  <Button size="lg" className="w-full md:w-auto">
                    <a href="/contact" className="flex items-center">
                      Get a Quote for Santa Barbara Post-Construction Cleaning
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              </div>
              
              <div className="space-y-8">
                {faqItems.map((faq, index) => (
                  <Card key={index} className="shadow-lg">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Related Services & Areas Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Related Services & Areas</h2>
                <p className="text-xl text-gray-600">
                  Explore our other cleaning services and coverage areas
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Related Services */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Other Services</h3>
                  <div className="space-y-4">
                    <a href="/services/regular-house-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Regular House Cleaning</span>
                      <p className="text-gray-600 mt-1">Weekly, bi-weekly, and monthly cleaning services</p>
                    </a>
                    <a href="/services/deep-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Deep Cleaning</span>
                      <p className="text-gray-600 mt-1">Comprehensive top-to-bottom cleaning</p>
                    </a>
                    <a href="/services/move-in-move-out" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Move-In/Move-Out Cleaning</span>
                      <p className="text-gray-600 mt-1">Perfect for transitions and new beginnings</p>
                    </a>
                  </div>
                </div>

                {/* Other Areas */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Other Areas We Serve</h3>
                  <div className="space-y-4">
                    <a href="/ventura/post-construction-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Ventura Post-Construction</span>
                      <p className="text-gray-600 mt-1">Professional cleaning for Ventura builds</p>
                    </a>
                    <a href="/thousand-oaks/post-construction-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Thousand Oaks Post-Construction</span>
                      <p className="text-gray-600 mt-1">Expert cleaning for Thousand Oaks projects</p>
                    </a>
                    <a href="/westlake-village/post-construction-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Westlake Village Post-Construction</span>
                      <p className="text-gray-600 mt-1">Premium cleaning for luxury properties</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-4xl font-bold mb-6">
                Santa Barbara post-construction cleaning with premium quality and care.
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Ready to complete your project with confidence? Let our professional team handle the final details.
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                <a href="/contact">
                  Book with Two Trees Cleaning
                </a>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SantaBarbaraPostConstruction;