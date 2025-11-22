import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, MapPin, Shield, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { updateMetaTags } from "@/utils/metaTags";
import { useEffect } from "react";

const OxnardPostConstruction = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Oxnard Post-Construction Cleaning | Two Trees Cleaning",
      description: "Post-construction cleaning in Oxnard for remodels, flips, and new builds. Trusted by contractors and homeowners. Licensed, insured, and thorough.",
      keywords: [
        "post-construction cleaning Oxnard",
        "construction cleanup Oxnard", 
        "builder cleaning Oxnard",
        "remodel cleaning Oxnard",
        "RiverPark cleaning",
        "Channel Islands cleaning"
      ],
      url: "https://twotreescleaning.com/oxnard/post-construction-cleaning",
      cityName: "Oxnard",
      cityCoordinates: {
        latitude: "34.1975",
        longitude: "-119.1771"
      }
    });
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Post-Construction Cleaning", href: "/services/post-construction" },
    { label: "Oxnard Post-Construction Cleaning", href: "/oxnard/post-construction-cleaning" }
  ];

  const includedServices = [
    "Dust and debris removal",
    "Cleaning of baseboards, walls, cabinets, and fixtures", 
    "Deep cleaning of kitchens and bathrooms",
    "Floor vacuuming, sweeping, and mopping",
    "Trash removal and optional light window cleaning"
  ];

  const whyChooseUs = [
    "Licensed and insured for construction sites",
    "Trusted by 200+ families and local builders",
    "Reliable scheduling and 5-star service"
  ];

  const faqItems = [
    {
      question: "Can you handle jobsite dust and fine debris?",
      answer: "Absolutely! Our specialized equipment includes HEPA vacuums and filtration systems specifically designed to capture fine construction dust and debris. We understand the importance of thorough dust removal to ensure your space is truly clean."
    },
    {
      question: "Do you work with contractors or property managers?",
      answer: "Yes, we regularly partner with Oxnard contractors and property managers. We offer flexible scheduling to accommodate project timelines and can coordinate directly with your team for seamless handoffs."
    },
    {
      question: "How soon can you schedule a post-construction clean?",
      answer: "We typically book 3-5 days in advance, but we understand construction timelines can shift. We offer priority scheduling for post-construction projects and will do our best to accommodate rush requests when possible."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Oxnard Post-Construction Cleaning | Two Trees Cleaning</title>
        <meta name="description" content="Post-construction cleaning in Oxnard for remodels, flips, and new builds. Trusted by contractors and homeowners. Licensed, insured, and thorough." />
        
      </Helmet>

      <SchemaMarkup 
        cityName="Oxnard"
        cityCoordinates={{
          latitude: "34.1975",
          longitude: "-119.1771"
        }}
      />

      <div className="min-h-screen flex flex-col">
        <Navigation 
          onBookingClick={() => window.location.href = "/contact"}
          onPhoneClick={() => window.location.href = "tel:+18054365868"}
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
                    Post-Construction Cleaning in Oxnard
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    New build in <a href="/oxnard" className="text-two-trees-green hover:underline">RiverPark</a>? Remodel near Channel Islands? Two Trees Cleaning is Oxnard's go-to team for reliable, detailed <a href="/services/post-construction" className="text-two-trees-green hover:underline">post-construction cleaning</a> that leaves your project move-in ready.
                  </p>
                  <Button size="lg" className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-4 text-lg font-semibold">
                    <a href="/contact">Book Post-Construction Cleaning in Oxnard</a>
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/854ae905-37ee-4e73-a5f8-a01c6f2e9bb4.png" 
                    alt="Post-construction cleaning in Oxnard" 
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
                  Comprehensive post-construction cleaning tailored for Oxnard homes and buildings
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
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Oxnard's trusted partner for construction cleanup and final detailing
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {whyChooseUs.map((reason, index) => (
                  <Card key={index} className="bg-gray-50 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="mb-4">
                        {index === 0 && <Shield className="h-12 w-12 text-blue-600 mx-auto" />}
                        {index === 1 && <Star className="h-12 w-12 text-yellow-500 mx-auto" />}
                        {index === 2 && <Clock className="h-12 w-12 text-green-600 mx-auto" />}
                      </div>
                      <p className="text-gray-700 font-medium">{reason}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Areas We Serve Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Areas We Serve</h2>
                <div className="flex items-center justify-center mb-8">
                  <MapPin className="h-6 w-6 text-green-600 mr-2" />
                  <p className="text-xl text-gray-600">
                    RiverPark, Channel Islands, South Oxnard, El Rio (93030, 93033, 93035, 93036)
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                  <p className="text-lg text-gray-700 mb-6">
                    Close out your project the right way.
                  </p>
                  <Button size="lg" className="w-full md:w-auto">
                    <a href="/contact" className="flex items-center">
                      Book Post-Construction Cleaning in Oxnard
                    </a>
                  </Button>
                </div>
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
                    <a href="/services/move-in-move-out" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Move-In/Move-Out Cleaning</span>
                      <p className="text-gray-600 mt-1">Prepare your property for new tenants or residents</p>
                    </a>
                    <a href="/services/deep-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Deep Cleaning</span>
                      <p className="text-gray-600 mt-1">Comprehensive top-to-bottom cleaning</p>
                    </a>
                    <a href="/oxnard/move-out-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Oxnard Move-Out Cleaning</span>
                      <p className="text-gray-600 mt-1">Perfect for property transitions</p>
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
                    <a href="/port-hueneme" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Port Hueneme Cleaning</span>
                      <p className="text-gray-600 mt-1">Nearby coastal community services</p>
                    </a>
                    <a href="/camarillo/post-construction-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Camarillo Post-Construction</span>
                      <p className="text-gray-600 mt-1">Quality cleaning for new builds</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-gray-50">
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

          {/* Final CTA Section */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-4xl font-bold mb-6">
                Finish your project strong with Two Trees Cleaning—Oxnard's trusted post-construction pros.
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                From RiverPark to Channel Islands, we're ready to make your newly built or renovated space shine.
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

export default OxnardPostConstruction;
