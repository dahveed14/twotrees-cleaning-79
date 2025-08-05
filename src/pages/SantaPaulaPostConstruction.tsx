import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, MapPin, Shield, Home } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { updateMetaTags } from "@/utils/metaTags";
import { useEffect } from "react";

const SantaPaulaPostConstruction = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Santa Paula Post-Construction Cleaning | Two Trees Cleaning",
      description: "Affordable post-construction cleaning in Santa Paula. We serve remodels, rentals, and new builds. Trusted, licensed, and locally loved.",
      keywords: [
        "post-construction cleaning Santa Paula",
        "construction cleanup Santa Paula", 
        "builder cleaning Santa Paula",
        "remodel cleaning Santa Paula",
        "affordable construction cleaning",
        "rental property cleaning"
      ],
      url: "https://twotreescleaning.com/santa-paula/post-construction-cleaning",
      cityName: "Santa Paula",
      cityCoordinates: {
        latitude: "34.3542",
        longitude: "-119.0593"
      }
    });
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Post-Construction Cleaning", href: "/services/post-construction" },
    { label: "Santa Paula Post-Construction Cleaning", href: "/santa-paula/post-construction-cleaning" }
  ];

  const includedServices = [
    "Removal of construction dust and residue",
    "Wipe-downs for cabinets, walls, baseboards, and fixtures", 
    "Deep clean of kitchens and bathrooms",
    "Vacuuming, sweeping, and floor mopping",
    "Optional haul-off of debris and trash"
  ];

  const whyChooseUs = [
    "Affordable and efficient cleaning",
    "Trusted by 200+ families and contractors",
    "Licensed, insured, and family-owned"
  ];

  const faqItems = [
    {
      question: "Do you clean after small renovations or handyman jobs?",
      answer: "Absolutely! We handle everything from small bathroom remodels to major home renovations. No job is too small or too big for our team. We adjust our service to fit your specific project needs."
    },
    {
      question: "Can you help prep homes for listing or tenants?",
      answer: "Yes! We work with many Santa Paula property owners and real estate agents to get homes market-ready. We can coordinate timing with your listing schedule or tenant move-in dates."
    },
    {
      question: "Do you bring your own supplies?",
      answer: "Yes, we bring all cleaning supplies and equipment. Our team comes fully equipped with professional-grade cleaners, vacuums, and tools needed to handle construction cleanup effectively."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Santa Paula Post-Construction Cleaning | Two Trees Cleaning</title>
        <meta name="description" content="Affordable post-construction cleaning in Santa Paula. We serve remodels, rentals, and new builds. Trusted, licensed, and locally loved." />
        
      </Helmet>

      <SchemaMarkup 
        cityName="Santa Paula"
        cityCoordinates={{
          latitude: "34.3542",
          longitude: "-119.0593"
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
                    Post-Construction Cleaning in Santa Paula
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Just finished building or renovating in <a href="/santa-paula" className="text-two-trees-green hover:underline">Santa Paula</a>? Two Trees Cleaning will sweep away the dust and debris so your home or rental is clean, fresh, and move-in ready with our reliable <a href="/services/post-construction" className="text-two-trees-green hover:underline">post-construction cleaning</a>.
                  </p>
                  <Button size="lg" className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-4 text-lg font-semibold">
                    <a href="/contact">Book Post-Construction Cleaning in Santa Paula</a>
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/854ae905-37ee-4e73-a5f8-a01c6f2e9bb4.png" 
                    alt="Post-construction cleaning in Santa Paula" 
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
                  Complete post-construction cleanup that gets your Santa Paula property ready
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

          {/* Why Locals Choose Us Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Locals Choose Us</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Santa Paula's trusted neighbor for honest, reliable cleaning services
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {whyChooseUs.map((reason, index) => (
                  <Card key={index} className="bg-gray-50 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="mb-4">
                        {index === 0 && <Star className="h-12 w-12 text-yellow-500 mx-auto" />}
                        {index === 1 && <Home className="h-12 w-12 text-blue-600 mx-auto" />}
                        {index === 2 && <Shield className="h-12 w-12 text-green-600 mx-auto" />}
                      </div>
                      <p className="text-gray-700 font-medium">{reason}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Service Area Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Service Area</h2>
                <div className="flex items-center justify-center mb-8">
                  <MapPin className="h-6 w-6 text-green-600 mr-2" />
                  <p className="text-xl text-gray-600">
                    93060 and nearby communities throughout Santa Paula
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                  <p className="text-lg text-gray-700 mb-6">
                    Start fresh. End clean.
                  </p>
                  <Button size="lg" className="w-full md:w-auto">
                    <a href="/contact" className="flex items-center">
                      Book Post-Construction Cleaning in Santa Paula
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
                      <p className="text-gray-600 mt-1">Perfect for rental properties and transitions</p>
                    </a>
                    <a href="/services/deep-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Deep Cleaning</span>
                      <p className="text-gray-600 mt-1">Comprehensive top-to-bottom cleaning</p>
                    </a>
                    <a href="/santa-paula/move-out-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Santa Paula Move-Out Cleaning</span>
                      <p className="text-gray-600 mt-1">Get your deposit back with thorough cleaning</p>
                    </a>
                  </div>
                </div>

                {/* Other Areas */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">Other Areas We Serve</h3>
                  <div className="space-y-4">
                    <a href="/oxnard/post-construction-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Oxnard Post-Construction</span>
                      <p className="text-gray-600 mt-1">Professional cleaning for Oxnard builds</p>
                    </a>
                    <a href="/ventura/post-construction-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Ventura Post-Construction</span>
                      <p className="text-gray-600 mt-1">Expert cleaning for Ventura projects</p>
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
                Santa Paula trusts Two Trees Cleaning to finish the job right. Book your post-construction clean today.
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                From small handyman jobs to major renovations, we make your place shine like new.
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

export default SantaPaulaPostConstruction;
