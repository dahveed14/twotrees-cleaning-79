import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, MapPin, Clock, Shield, Leaf } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { updateMetaTags } from "@/utils/metaTags";
import { useEffect } from "react";

const OjaiPostConstruction = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Ojai Post-Construction Cleaning | Two Trees Cleaning",
      description: "Post-construction cleaning in Ojai for remodels, new builds, and retreats. Eco-conscious, licensed, and trusted by homeowners and builders.",
      keywords: [
        "post-construction cleaning Ojai",
        "construction cleanup Ojai", 
        "builder cleaning Ojai",
        "remodel cleaning Ojai",
        "eco-friendly construction cleaning",
        "final cleaning Ojai"
      ],
      url: "https://twotreescleaning.com/ojai/post-construction-cleaning",
      cityName: "Ojai",
      cityCoordinates: {
        latitude: "34.4486",
        longitude: "-119.2429"
      }
    });
  }, []);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Post-Construction Cleaning", href: "/services/post-construction" },
    { label: "Ojai Post-Construction Cleaning", href: "/ojai/post-construction-cleaning" }
  ];

  const includedServices = [
    "Detailed dusting of walls, trim, and fixtures",
    "Deep cleaning of kitchen and bathroom spaces", 
    "HEPA vacuuming and eco-friendly floor mopping",
    "Trash removal and window sill cleaning",
    "Optional light interior window cleaning"
  ];

  const whyChooseUs = [
    "Local and eco-conscious cleaning approach",
    "Trusted by 200+ families and builders in Ojai",
    "Licensed, insured, and deadline-friendly"
  ];

  const faqItems = [
    {
      question: "Can you use eco-friendly or low-scent products?",
      answer: "Absolutely! We understand Ojai's commitment to environmental consciousness and offer eco-friendly, low-scent cleaning products that are safe for your family and the environment."
    },
    {
      question: "Do you clean small studios or cabins?",
      answer: "Yes, we clean projects of all sizes, from cozy studios and cabins to large custom homes and retreats. Our team adapts our service to fit your unique space."
    },
    {
      question: "Are you experienced with custom homes or retreats?",
      answer: "Definitely! We've worked on many unique properties in Ojai, including artistic homes, wellness retreats, and custom builds that require special attention to detail."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ojai Post-Construction Cleaning | Two Trees Cleaning</title>
        <meta name="description" content="Post-construction cleaning in Ojai for remodels, new builds, and retreats. Eco-conscious, licensed, and trusted by homeowners and builders." />
        <link rel="canonical" href="https://twotreescleaning.com/ojai/post-construction-cleaning" />
      </Helmet>

      <SchemaMarkup 
        cityName="Ojai"
        cityCoordinates={{
          latitude: "34.4486",
          longitude: "-119.2429"
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
                    Post-Construction Cleaning in Ojai
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    From artistic homes to peaceful retreats, <a href="/ojai" className="text-two-trees-green hover:underline">Ojai</a> builders trust Two Trees Cleaning for meticulous <a href="/services/post-construction" className="text-two-trees-green hover:underline">post-construction cleaning</a> that restores calm to the dust and debris of a build.
                  </p>
                  <Button size="lg" className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-4 text-lg font-semibold">
                    <a href="/contact">Request a Post-Construction Cleaning Quote</a>
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src="/lovable-uploads/854ae905-37ee-4e73-a5f8-a01c6f2e9bb4.png" 
                    alt="Post-construction cleaning in Ojai" 
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
                  Comprehensive eco-conscious cleaning that honors Ojai's natural beauty
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

          {/* Why Choose Two Trees in Ojai Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Two Trees in Ojai</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Local expertise with an eco-conscious approach for Ojai's unique properties
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {whyChooseUs.map((reason, index) => (
                  <Card key={index} className="bg-gray-50 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-8 text-center">
                      <div className="mb-4">
                        {index === 0 && <Leaf className="h-12 w-12 text-green-600 mx-auto" />}
                        {index === 1 && <Star className="h-12 w-12 text-yellow-500 mx-auto" />}
                        {index === 2 && <Shield className="h-12 w-12 text-blue-600 mx-auto" />}
                      </div>
                      <p className="text-gray-700 font-medium">{reason}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Local Areas Served Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Local Areas Served</h2>
                <div className="flex items-center justify-center mb-8">
                  <MapPin className="h-6 w-6 text-green-600 mr-2" />
                  <p className="text-xl text-gray-600">
                    East End, Meiners Oaks, Arbolada, Downtown Ojai (93023, 93024)
                  </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                  <p className="text-lg text-gray-700 mb-6">
                    Your project is nearly complete—let us handle the final step.
                  </p>
                  <Button size="lg" className="w-full md:w-auto">
                    <a href="/contact" className="flex items-center">
                      Request a Post-Construction Cleaning Quote
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
                    <a href="/services/regular-house-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Regular House Cleaning</span>
                      <p className="text-gray-600 mt-1">Weekly, bi-weekly, and monthly cleaning services</p>
                    </a>
                    <a href="/services/deep-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Deep Cleaning</span>
                      <p className="text-gray-600 mt-1">Comprehensive top-to-bottom cleaning</p>
                    </a>
                    <a href="/services/vacation-rental" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Vacation Rental Cleaning</span>
                      <p className="text-gray-600 mt-1">Perfect for Ojai retreat properties</p>
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
                    <a href="/santa-barbara/post-construction-cleaning" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Santa Barbara Post-Construction</span>
                      <p className="text-gray-600 mt-1">High-end cleaning for luxury properties</p>
                    </a>
                    <a href="/carpinteria" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <span className="text-lg font-medium text-two-trees-green">Carpinteria Cleaning</span>
                      <p className="text-gray-600 mt-1">Coastal cleaning services</p>
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
                Ojai's builders and homeowners trust Two Trees Cleaning to wrap up their projects with care, detail, and clarity.
              </h2>
              <p className="text-xl mb-8 text-gray-300">
                Ready to restore peace to your completed project? Let our eco-conscious team handle the final details.
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

export default OjaiPostConstruction;
