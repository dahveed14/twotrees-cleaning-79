import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, Clock, MapPin, Star, Phone } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";

const WestlakeVillagePostConstruction = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Westlake Village Post-Construction Cleaning | Two Trees Cleaning",
      description: "Post-construction cleaning in Westlake Village for remodels and luxury new builds. Licensed, insured, and trusted by homeowners and contractors.",
      keywords: [
        "post-construction cleaning Westlake Village",
        "Westlake Village construction cleanup",
        "post-renovation cleaning 91361",
        "North Ranch cleaning services",
        "luxury home cleaning Westlake Village"
      ],
      url: "https://twotreescleaning.com/westlake-village/post-construction-cleaning",
      cityName: "Westlake Village",
      cityCoordinates: {
        latitude: "34.1456",
        longitude: "-118.8053"
      }
    });
  }, []);

  const breadcrumbItems = [
    { label: "Westlake Village", href: "/westlake-village" },
    { label: "Post-Construction Cleaning", current: true }
  ];

  const includedServices = [
    "HEPA vacuuming and fine dust removal",
    "Cabinet, trim, door, and windowsill wipe-down", 
    "Bathroom and kitchen deep cleaning",
    "Light fixture, baseboard, and switch cleaning",
    "Floor cleaning: sweeping, vacuuming, and mopping"
  ];

  const whyChooseUs = [
    "Licensed, insured, and experienced with high-end homes",
    "Trusted by 200+ families and builders",
    "Flexible scheduling for final walkthroughs or staging"
  ];

  const faqs = [
    {
      question: "Do you work with realtors or stagers?",
      answer: "Yes, we work closely with real estate professionals and staging companies to ensure properties are perfectly presented for showings and open houses."
    },
    {
      question: "Can you clean after luxury builds or flips?",
      answer: "Absolutely. We specialize in high-end construction cleanup and understand the attention to detail required for luxury properties and investment flips."
    },
    {
      question: "Do you provide multi-day cleanings?",
      answer: "Yes, for larger projects we can schedule multi-day cleaning services to ensure every detail meets your standards and timeline requirements."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Westlake Village Post-Construction Cleaning | Two Trees Cleaning</title>
        <meta name="description" content="Post-construction cleaning in Westlake Village for remodels and luxury new builds. Licensed, insured, and trusted by homeowners and contractors." />
        <link rel="canonical" href="https://twotreescleaning.com/westlake-village/post-construction-cleaning" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Post-Construction Cleaning in Westlake Village",
            "description": "Professional post-construction cleaning services in Westlake Village for remodels and luxury new builds.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Two Trees Cleaning",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Westlake Village",
                "addressRegion": "CA",
                "postalCode": "91361"
              },
              "telephone": "(805) 626-0555"
            },
            "serviceType": "Post-Construction Cleaning",
            "areaServed": {
              "@type": "City",
              "name": "Westlake Village",
              "state": "California"
            }
          })}
        </script>
      </Helmet>

      <Navigation 
        onBookingClick={() => window.location.href = '/contact'}
        onPhoneClick={() => window.location.href = 'tel:(805) 626-0555'}
      />
      <Breadcrumbs items={breadcrumbItems} />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-two-trees-green mb-6">
              Post-Construction Cleaning in Westlake Village
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Whether you're wrapping up a luxury remodel or new build in Westlake Village, Two Trees Cleaning delivers post-construction cleaning that leaves every surface dust-free, polished, and ready for move-in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-4" asChild>
                <a href="/contact">Request a Post-Construction Quote</a>
              </Button>
              <Button variant="outline-green" size="lg" className="px-8 py-4" asChild>
                <a href="tel:(805) 626-0555">
                  <Phone className="w-4 h-4 mr-2" />
                  (805) 626-0555
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-two-trees-green text-center mb-12">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {includedServices.map((service, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-two-trees-green flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">
                  Professional Equipment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We bring industrial-grade HEPA vacuums, microfiber cloths, and specialized cleaning solutions designed for post-construction cleanup.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-two-trees-green text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {index === 0 && <Shield className="w-8 h-8 text-two-trees-green" />}
                      {index === 1 && <Star className="w-8 h-8 text-two-trees-green" />}
                      {index === 2 && <Clock className="w-8 h-8 text-two-trees-green" />}
                    </div>
                    <p className="text-lg text-gray-700">{reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Coverage Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-two-trees-green mb-8">
              Local Coverage
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="w-6 h-6 text-two-trees-green" />
              <span className="text-xl text-gray-700">
                Serving North Ranch, Westlake Trails, First Neighborhood, and The Promenade (91361, 91362)
              </span>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As your local Westlake Village cleaning team, we understand the area's high standards for luxury homes and construction projects.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-two-trees-green text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Let us help you complete your project with confidence.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to showcase your finished work? Get a detailed post-construction cleaning quote today.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-two-trees-green hover:bg-gray-100 px-8 py-4" asChild>
              <a href="/contact">Request a Post-Construction Quote</a>
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-two-trees-green text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-two-trees-green mb-4">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-two-trees-green mb-6">
              For spotless finishes and satisfied clients, trust our Westlake Village post-construction cleaning team.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-4" asChild>
                <a href="/contact">Get Started Today</a>
              </Button>
              <Button variant="outline-green" size="lg" className="px-8 py-4" asChild>
                <a href="/services/post-construction">Learn More About Our Services</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-12 px-4 bg-white border-t">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/services/post-construction" className="text-two-trees-green hover:underline">
                Post-Construction Cleaning Services
              </a>
              <span className="text-gray-400">•</span>
              <a href="/westlake-village" className="text-two-trees-green hover:underline">
                Westlake Village Cleaning
              </a>
              <span className="text-gray-400">•</span>
              <a href="/contact" className="text-two-trees-green hover:underline">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default WestlakeVillagePostConstruction;