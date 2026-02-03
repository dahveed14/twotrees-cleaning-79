import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CheckCircle, Clock, Star, Shield, Award, Users } from 'lucide-react';
import { updateMetaTags } from '@/utils/metaTags';

const CamarilloMoveOut = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Camarillo Move-Out Cleaning Services | Two Trees Cleaning",
      description: "Professional move-out cleaning in Camarillo. Trusted by 200+ families. Licensed, insured, and ready to help you leave your space spotless.",
      cityName: "Camarillo",
      cityCoordinates: {
        latitude: "34.2164",
        longitude: "-119.0376"
      },
      url: "https://twotreescleaning.com/camarillo/move-out-cleaning",
      keywords: ["move-out cleaning Camarillo", "end of lease cleaning", "deposit cleaning", "Camarillo cleaning services", "move out cleaning 93010", "move out cleaning 93012", "Mission Oaks cleaning", "Spanish Hills cleaning", "Las Posas Estates cleaning", "Old Town Camarillo cleaning"]
    });
  }, []);

  const handleBookingClick = () => {
    // Track booking button clicks for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Camarillo Move-Out Booking'
      });
    }
  };

  const handlePhoneClick = () => {
    // Track phone clicks for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Phone',
        event_label: 'Camarillo Move-Out Phone'
      });
    }
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Camarillo', href: '/camarillo' },
    { label: 'Move-Out Cleaning', href: '/camarillo/move-out-cleaning' }
  ];

  return (
    <>
      <Helmet>
        <title>Camarillo Move-Out Cleaning Services | Two Trees Cleaning</title>
        <meta name="description" content="Professional move-out cleaning in Camarillo. Trusted by 200+ families. Licensed, insured, and ready to help you leave your space spotless." />
        
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
        
        <main>
          {/* Breadcrumbs */}
          <div className="bg-muted/50 py-4">
            <div className="container mx-auto px-4 max-w-6xl">
              <Breadcrumbs items={breadcrumbItems} />
            </div>
          </div>

          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-background to-muted/30 py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="text-sm font-medium">
                      Professional Move-Out Cleaning
                    </Badge>
                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                      Move-Out Cleaning in Camarillo
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Moving out of your Camarillo home or apartment? Our expert team provides top-to-bottom move-out cleaning services to help you get your deposit back and leave a great impression.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      size="lg" 
                      className="text-lg px-8 py-6"
                      onClick={handleBookingClick}
                      asChild
                    >
                      <a href="/book">Get Free Quote</a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="text-lg px-8 py-6"
                      onClick={handlePhoneClick}
                      asChild
                    >
                      <a href="tel:805-764-2394">805-764-2394</a>
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span>Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>200+ Happy Families</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src="/lovable-uploads/854ae905-37ee-4e73-a5f8-a01c6f2e9bb4.png"
                    alt="Professional move-out cleaning service in Camarillo by Two Trees Cleaning team"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  What's Included in Our Move-Out Cleaning
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our comprehensive move-out cleaning ensures every detail is covered for your Camarillo property.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-6">Kitchen Deep Clean</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Inside kitchen appliances (oven, refrigerator, microwave)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Inside cabinets and drawers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Countertops and backsplash</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Sink and faucet deep clean</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-6">Bathroom Deep Clean</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Bathrooms deep cleaned</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Toilet, tub, and shower scrubbed</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Mirrors and fixtures polished</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Floor mopped and sanitized</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-6">Throughout Home</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Inside cabinets, drawers, and closets</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Baseboards, windowsills, doors, trim</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">All floors vacuumed and mopped</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Light switches and outlet covers</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Why Choose Two Trees Cleaning in Camarillo
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Local expertise meets professional excellence in every move-out cleaning.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Family-Owned & Trusted</h3>
                  <p className="text-muted-foreground">Trusted by 200+ local Camarillo clients</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Licensed & Insured</h3>
                  <p className="text-muted-foreground">Licensed, bonded, and insured for your peace of mind</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Fast & Reliable</h3>
                  <p className="text-muted-foreground">We know the move-out process—fast, thorough, and reliable</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-muted-foreground">100% satisfaction guarantee on all our work</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Transparent Pricing for Camarillo Move-Out Cleaning
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Get a free, detailed quote tailored to your specific property and cleaning needs.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-12 text-center">
                    <div className="mb-8">
                      <div className="text-5xl font-bold text-primary mb-2">Starting at $200</div>
                      <p className="text-xl text-muted-foreground">For standard move-out cleaning</p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Factors affecting price:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Property size</li>
                          <li>• Current condition</li>
                          <li>• Special requests</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">What's included:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• All cleaning supplies</li>
                          <li>• Professional equipment</li>
                          <li>• Quality guarantee</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Free estimate includes:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li>• Detailed assessment</li>
                          <li>• Custom cleaning plan</li>
                          <li>• No hidden fees</li>
                        </ul>
                      </div>
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="text-lg px-8 py-6"
                      onClick={handleBookingClick}
                      asChild
                    >
                      <a href="/book">Request a Quote Today</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Local Work Examples Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Recent Cleanings in Camarillo
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We're proud to serve families and property managers throughout Camarillo's neighborhoods.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4 italic">
                        "Two Trees Cleaning did an amazing job on our move-out clean in Mission Oaks. They were thorough, professional, and helped us get our full deposit back. Highly recommend!"
                      </p>
                      <div className="text-sm">
                        <p className="font-semibold text-foreground">Sarah M.</p>
                        <p className="text-muted-foreground">Mission Oaks, Camarillo</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Areas We Serve in Camarillo:</h3>
                    <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                      <div>• Mission Oaks</div>
                      <div>• Spanish Hills</div>
                      <div>• Las Posas Estates</div>
                      <div>• Old Town</div>
                      <div>• Pleasant Valley</div>
                      <div>• Village at the Park</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src="/lovable-uploads/81626ea3-9e8e-4daf-be35-0776b0cb8870.png"
                    alt="Move-out cleaning before and after in Camarillo by Two Trees Cleaning"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Common questions about our Camarillo move-out cleaning services.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">How much notice do you need?</h3>
                    <p className="text-muted-foreground">
                      We recommend booking at least 2-3 days in advance, but we often accommodate same-day or next-day requests based on availability. Contact us as soon as you know your move-out date for the best scheduling options.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Do you clean carpets?</h3>
                    <p className="text-muted-foreground">
                      We provide thorough vacuuming of all carpeted areas as part of our standard move-out cleaning. For deep carpet cleaning or stain removal, we can recommend trusted local carpet cleaning specialists.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Do I need to remove all furniture first?</h3>
                    <p className="text-muted-foreground">
                      For the most thorough cleaning, we prefer the property to be completely empty. However, we can work around furniture if needed. Just let us know during booking what items will remain so we can plan accordingly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Related Services & Other Locations */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid md:grid-cols-2 gap-12">
                
                {/* Related Services */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Related Services in Camarillo</h3>
                  <div className="space-y-4">
                    <div className="bg-background p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-primary mb-2">
                        <a href="/camarillo" className="hover:underline">Regular House Cleaning</a>
                      </h4>
                      <p className="text-muted-foreground text-sm">Ongoing cleaning services for your Camarillo home</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-primary mb-2">
                        <a href="/services/deep-cleaning" className="hover:underline">Deep Cleaning</a>
                      </h4>
                      <p className="text-muted-foreground text-sm">Comprehensive one-time cleaning service</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-primary mb-2">
                        <a href="/services/move-in-move-out" className="hover:underline">Move-In Cleaning</a>
                      </h4>
                      <p className="text-muted-foreground text-sm">Fresh start cleaning for your new home</p>
                    </div>
                  </div>
                </div>

                {/* Other Locations */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Move-Out Cleaning in Other Areas</h3>
                  <div className="space-y-4">
                    <div className="bg-background p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-primary mb-2">
                        <a href="/thousand-oaks/move-out-cleaning" className="hover:underline">Thousand Oaks Move-Out</a>
                      </h4>
                      <p className="text-muted-foreground text-sm">Premium move-out cleaning for Thousand Oaks properties</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-primary mb-2">
                        <a href="/westlake-village/move-out-cleaning" className="hover:underline">Westlake Village Move-Out</a>
                      </h4>
                      <p className="text-muted-foreground text-sm">Luxury property move-out cleaning services</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-primary mb-2">
                        <a href="/ventura/move-out-cleaning" className="hover:underline">Ventura Move-Out Cleaning</a>
                      </h4>
                      <p className="text-muted-foreground text-sm">Coastal property move-out cleaning services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 max-w-6xl text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Schedule Your Camarillo Move-Out Clean Today
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Let us handle the dirty work while you focus on your next move. Get your deposit back with our professional move-out cleaning service.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6"
                  onClick={handleBookingClick}
                  asChild
                >
                  <a href="/book">Book Your Clean</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-lg px-8 py-6"
                  onClick={handlePhoneClick}
                  asChild
                >
                  <a href="tel:805-764-2394">Call 805-764-2394</a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer location="camarillo" />
      </div>
    </>
  );
};

export default CamarilloMoveOut;