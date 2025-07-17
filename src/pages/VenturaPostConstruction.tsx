import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { updateMetaTags } from '@/utils/metaTags';
import { Navigation } from '@/components/Navigation';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CheckCircle, Users, Building, MapPin, Clock, Truck, Wrench, Zap } from 'lucide-react';

const VenturaPostConstruction = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Ventura Post-Construction Cleaning | Two Trees Cleaning",
      description: "Post-construction cleaning in Ventura for remodels, new builds, and commercial spaces. Licensed, insured, and 5-star rated across Ventura County.",
      keywords: [
        "post construction cleaning Ventura",
        "construction cleanup Ventura", 
        "remodel cleaning Ventura",
        "new build cleaning Ventura",
        "contractor cleaning services Ventura",
        "debris removal Ventura",
        "drywall dust cleaning Ventura",
        "commercial construction cleaning Ventura"
      ],
      url: "https://twotreescleaning.com/ventura/post-construction-cleaning",
      cityName: "Ventura",
      cityCoordinates: { latitude: "34.2746", longitude: "-119.2290" }
    });
  }, []);

  const handleQuoteClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Request Quote', `Ventura Post Construction - ${location}`);
    }
    window.location.href = '/contact';
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Phone Call', 'Ventura Post Construction');
    }
    window.location.href = 'tel:8053405488';
  };

  const breadcrumbData = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Post-Construction Cleaning', url: '/services/post-construction-cleaning' },
    { name: 'Ventura', url: '/ventura/post-construction-cleaning' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup 
        cityName="Ventura"
        cityCoordinates={{ latitude: "34.2746", longitude: "-119.2290" }}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleQuoteClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: 'Post-Construction Cleaning', href: '/services/post-construction-cleaning' },
          { label: 'Ventura' }
        ]} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Post-Construction Cleaning in <span className="text-two-trees-green">Ventura</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Just completed a renovation or build in Ventura? Two Trees Cleaning offers detailed post-construction cleaning to eliminate dust, debris, and residue—leaving your space move-in ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                  onClick={() => handleQuoteClick('Hero')}
                >
                  Request a Post-Construction Quote
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green hover:text-white px-8 py-4 text-lg"
                  onClick={handlePhoneClick}
                >
                  Call (805) 340-5488
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <img 
                src="/lovable-uploads/bbe8108f-d132-4156-8869-023d6ebe830b.png" 
                alt="Post-construction cleaning services in Ventura"
                className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete post-construction cleanup to get your Ventura project ready for final inspection or move-in.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-two-trees-green" />,
                title: "Drywall Dust Removal",
                description: "Complete removal of drywall dust from floors, baseboards, and vents"
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-two-trees-green" />,
                title: "Cabinet & Fixture Cleaning",
                description: "Clean all cabinetry, windowsills, and light fixtures inside and out"
              },
              {
                icon: <Building className="w-8 h-8 text-two-trees-green" />,
                title: "Deep Bathroom & Kitchen",
                description: "Thorough cleaning of all bathrooms and kitchen areas post-construction"
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-two-trees-green" />,
                title: "Floor Care",
                description: "Professional vacuuming and mopping of all flooring surfaces"
              },
              {
                icon: <Truck className="w-8 h-8 text-two-trees-green" />,
                title: "Trash Removal",
                description: "Removal of construction debris and final site cleanup"
              },
              {
                icon: <Wrench className="w-8 h-8 text-two-trees-green" />,
                title: "Final Detailing",
                description: "Complete detailing to ensure your space is move-in ready"
              }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From residential remodels to commercial build-outs, we handle all types of post-construction cleanup in Ventura.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-two-trees-green" />,
                title: "Residential Remodels & Home Flips",
                description: "Kitchen remodels, bathroom renovations, whole house flips, and additions ready for market or move-in."
              },
              {
                icon: <Building className="w-12 h-12 text-two-trees-green" />,
                title: "General Contractors & Property Managers",
                description: "Reliable cleanup partner for contractors needing consistent, quality post-construction services."
              },
              {
                icon: <MapPin className="w-12 h-12 text-two-trees-green" />,
                title: "Commercial Build-Outs & Offices",
                description: "Retail spaces, office renovations, and commercial construction projects throughout Ventura."
              }
            ].map((clientType, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {clientType.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{clientType.title}</h3>
                  <p className="text-gray-600">{clientType.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Local Service Area</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We cover all Ventura neighborhoods: Midtown, East Ventura, The Avenue, Pierpont, Ventura Keys, 93001 / 93003 / 93004
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">We understand deadlines—get your Ventura project ready for inspection or turnover.</h3>
                  <p className="text-gray-600 mb-6">
                    Licensed, insured, and trusted by contractors throughout Ventura County for reliable post-construction cleanup.
                  </p>
                </div>
                <div className="text-center">
                  <Button 
                    size="lg" 
                    className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                    onClick={() => handleQuoteClick('Service Area')}
                  >
                    Get a Quote for Your Post-Construction Project Today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: "Do you clean construction debris or haul trash?",
                answer: "We handle cleanup of construction debris and light trash removal as part of our post-construction service. For major debris hauling, we can coordinate with disposal services or work with your contractor's preferred hauler."
              },
              {
                question: "Can you do rush or weekend jobs?",
                answer: "Yes, we understand construction deadlines. We offer expedited scheduling and weekend availability for urgent post-construction cleanups to meet your project timeline and inspection dates."
              },
              {
                question: "Do you bring HEPA vacuums and pro-grade supplies?",
                answer: "Absolutely. We use HEPA-filtered vacuums specifically designed for construction dust, along with professional-grade cleaning supplies to ensure thorough removal of all construction residue and debris."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-two-trees-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Partner with Two Trees Cleaning for dependable post-construction cleaning in Ventura—licensed, efficient, and contractor-trusted.
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to get your Ventura construction project cleaned and inspection-ready?
          </p>
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-white text-two-trees-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => handleQuoteClick('Final CTA')}
            >
              Request a Post-Construction Quote
            </Button>
            <div className="text-lg">
              <p>Or call us directly: <a href="tel:8053405488" className="font-semibold hover:underline">(805) 340-5488</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VenturaPostConstruction;