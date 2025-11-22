import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Clock, Shield, MapPin, Phone } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SchemaMarkup } from '@/components/SchemaMarkup';

const SantaBarbaraMoveOut = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Santa Barbara', href: '/santa-barbara' },
    { label: 'Move-Out Cleaning', href: '/santa-barbara/move-out-cleaning' }
  ];

  const includedServices = [
    "Interior of kitchen appliances",
    "Inside cabinets, drawers, and closets", 
    "Scrubbed bathrooms & tile",
    "Light fixtures, fans, trim, and baseboards",
    "Floors: vacuum and mop"
  ];

  const whyChooseUs = [
    {
      icon: MapPin,
      title: "Locally trusted across Ventura and Santa Barbara Counties",
      description: "We know the area and serve our neighbors with pride"
    },
    {
      icon: Shield,
      title: "Licensed, insured, professional team",
      description: "Fully bonded and insured for your peace of mind"
    },
    {
      icon: Clock,
      title: "Attention to detail + flexible scheduling",
      description: "We work around your moving timeline"
    }
  ];

  const faqs = [
    {
      question: "Do you clean luxury homes?",
      answer: "Absolutely! We have extensive experience with high-end properties in Montecito and throughout Santa Barbara. Our team is trained to handle luxury finishes and custom features with the utmost care."
    },
    {
      question: "Can you handle last-minute move-outs?",
      answer: "We understand that moving timelines can change quickly. While we recommend booking in advance, we do our best to accommodate urgent requests and last-minute scheduling needs."
    },
    {
      question: "Do you provide supplies and equipment?",
      answer: "Yes! We bring all professional-grade cleaning supplies and equipment. Our eco-friendly products are safe for all surfaces and leave your home fresh and chemical-free."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Santa Barbara Move-Out Cleaning Services | Two Trees Cleaning</title>
        <meta name="description" content="Move-out cleaning for Santa Barbara homes and apartments. Trusted, detailed, and 5-star rated. Serving Montecito, Mesa, and downtown areas." />
        <meta name="keywords" content="move out cleaning Santa Barbara, move out cleaners Santa Barbara, end of lease cleaning Santa Barbara, Montecito move out cleaning, Mesa move out cleaning" />
        
      </Helmet>

      <SchemaMarkup 
        cityName="Santa Barbara"
        cityCoordinates={{
          latitude: "34.4208",
          longitude: "-119.6982"
        }}
        breadcrumbs={breadcrumbItems.map(item => ({
          name: item.label,
          url: item.href
        }))}
      />

      <div className="min-h-screen bg-background">
        <Navigation 
          onBookingClick={(location) => window.location.href = '/contact'}
          onPhoneClick={() => window.location.href = 'tel:805-436-5868'}
        />
        
        <div className="pt-20">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <section 
            className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/lovable-uploads/7a231da2-6877-46a0-be55-52b1023419b0.png)' }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative max-w-4xl mx-auto text-center text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">Move-Out Cleaning in Santa Barbara</h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Santa Barbara renters, homeowners, and landlords—if you're preparing to move, Two Trees Cleaning can make your place sparkle. Our move-out cleanings are deep, thorough, and designed to help you recover deposits or prep for sale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-white text-lg px-8 py-4">
                  Get Free Quote
                </Button>
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 805-436-5868
                </Button>
              </div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">What's Included in Your Move-Out Clean</h2>
                <p className="text-xl text-gray-600">Complete deep cleaning to get your deposit back</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">Comprehensive Cleaning</CardTitle>
                    <CardDescription>Every detail covered for move-out success</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {includedServices.map((service, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-lg bg-primary text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl">Ready for Inspection</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Your place will be spotless and inspection-ready
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Star className="w-5 h-5" />
                        <span>5-star rated service</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5" />
                        <span>Deposit-back guarantee approach</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5" />
                        <span>Flexible scheduling</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Why Choose Two Trees Section */}
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">Why Two Trees in Santa Barbara</h2>
                <p className="text-xl text-gray-600">Trusted by homeowners and property managers throughout the area</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {whyChooseUs.map((item, index) => (
                  <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Booking Info Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold text-primary mb-6">Get Your Custom Quote</h2>
              <p className="text-xl text-gray-600 mb-8">
                Each job is unique. Fill out our quick form to get a custom quote tailored to your specific move-out cleaning needs.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="shadow-lg">
                  <CardContent className="pt-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Quick Response</h3>
                    <p className="text-gray-600">Get your custom quote within 24 hours</p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-lg">
                  <CardContent className="pt-8">
                    <h3 className="text-2xl font-semibold text-primary mb-4">Fair Pricing</h3>
                    <p className="text-gray-600">Transparent, competitive rates for Santa Barbara</p>
                  </CardContent>
                </Card>
              </div>
              
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-white text-lg px-8 py-4">
                Book Your Move-Out Clean
              </Button>
            </div>
          </section>

          {/* Local References Section */}
          <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">Serving All of Santa Barbara</h2>
                <p className="text-xl text-gray-600">From luxury estates to downtown apartments</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Montecito', 'The Mesa', 'San Roque', 'Downtown SB'].map((area, index) => (
                  <Card key={index} className="text-center shadow-lg">
                    <CardContent className="pt-6">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="text-lg font-semibold text-primary">{area}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <p className="text-lg italic text-gray-700 mb-2">
                      "Two Trees cleaned our luxury home in Montecito before we moved. Every detail was perfect - from the marble countertops to the custom cabinetry. They truly understand high-end properties."
                    </p>
                    <p className="text-primary font-medium">— Santa Barbara Homeowner, 93108</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Services & Other Locations */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12">
                
                {/* Related Services */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Related Services in Santa Barbara</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-primary mb-2">
                        <a href="/santa-barbara" className="hover:underline">Regular House Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Ongoing cleaning services for your Santa Barbara home</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-primary mb-2">
                        <a href="/services/deep-cleaning" className="hover:underline">Deep Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Comprehensive one-time cleaning service</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-primary mb-2">
                        <a href="/services/move-in-move-out" className="hover:underline">Move-In Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Fresh start cleaning for your new home</p>
                    </div>
                  </div>
                </div>

                {/* Other Locations */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-6">Move-Out Cleaning in Other Areas</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-primary mb-2">
                        <a href="/ojai/move-out-cleaning" className="hover:underline">Ojai Move-Out Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Eco-friendly move-out cleaning for Ojai properties</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-primary mb-2">
                        <a href="/oxnard/move-out-cleaning" className="hover:underline">Oxnard Move-Out Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Affordable move-out cleaning for Oxnard families</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-primary mb-2">
                        <a href="/santa-paula/move-out-cleaning" className="hover:underline">Santa Paula Move-Out Cleaning</a>
                      </h4>
                      <p className="text-gray-600 text-sm">Rural and residential move-out cleaning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">Everything you need to know about our Santa Barbara move-out cleaning</p>
              </div>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="shadow-lg">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-primary text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready for a Spotless Move-Out?</h2>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Let us help you leave your place spotless—move-out cleaning in Santa Barbara you can rely on.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
                >
                  Get Free Quote
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-gold hover:bg-gold/90 text-white text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 805-436-5868
                </Button>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SantaBarbaraMoveOut;