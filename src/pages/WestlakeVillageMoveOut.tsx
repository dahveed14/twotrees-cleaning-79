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

const WestlakeVillageMoveOut = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Westlake Village Move-Out Cleaning Services | Two Trees Cleaning",
      description: "Move-out cleaning for homes and apartments in Westlake Village. Trusted, licensed, and locally loved. 5-star rated and move-in ready results.",
      cityName: "Westlake Village",
      cityCoordinates: {
        latitude: "34.1456",
        longitude: "-118.8053"
      },
      url: "https://twotreescleaning.com/westlake-village/move-out-cleaning",
      keywords: ["move-out cleaning Westlake Village", "end of lease cleaning", "deposit cleaning", "Westlake Village cleaning services", "move out cleaning 91361", "move out cleaning 91362", "North Ranch cleaning", "First Neighborhood cleaning", "Westlake Trails cleaning"]
    });
  }, []);

  const handleBookingClick = () => {
    // Track booking button clicks for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'CTA',
        event_label: 'Westlake Village Move-Out Booking'
      });
    }
  };

  const handlePhoneClick = () => {
    // Track phone clicks for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click', {
        event_category: 'Phone',
        event_label: 'Westlake Village Move-Out Phone'
      });
    }
  };

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'Westlake Village', href: '/westlake-village' },
    { label: 'Move-Out Cleaning', href: '/westlake-village/move-out-cleaning' }
  ];

  return (
    <>
      <Helmet>
        <title>Westlake Village Move-Out Cleaning Services | Two Trees Cleaning</title>
        <meta name="description" content="Move-out cleaning for homes and apartments in Westlake Village. Trusted, licensed, and locally loved. 5-star rated and move-in ready results." />
        
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
                      Move-Out Cleaning in Westlake Village
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Moving out of your home in Westlake Village? Whether you're a renter, homeowner, or real estate agent, our move-out cleaning service is designed to leave your space spotless and inspection-ready.
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
                      <a href="tel:805-436-5868">805-436-5868</a>
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
                    alt="Professional move-out cleaning service in Westlake Village by Two Trees Cleaning team"
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
                  Our comprehensive move-out cleaning ensures every detail is covered for your Westlake Village property.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-6">Kitchen Deep Clean</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Inside fridge, oven, microwave</span>
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
                        <span className="text-muted-foreground">Full bathroom scrub down</span>
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
                        <span className="text-muted-foreground">Baseboards, doors, trim, and switches</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Floors vacuumed and mopped</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Light fixtures dusted</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Closets cleaned inside</span>
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
                  Why Choose Two Trees Cleaning
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Local expertise meets professional excellence in every move-out cleaning.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Over 200 Families Served</h3>
                  <p className="text-muted-foreground">Trusted by families across Ventura County</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Friendly, Trained & Insured</h3>
                  <p className="text-muted-foreground">Professional team you can trust in your home</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">On-Time, Detailed & Reliable</h3>
                  <p className="text-muted-foreground">Consistent, thorough service every time</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Transparent Pricing for Westlake Village Move-Out Cleaning
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
                      <a href="/book">Get a Free Move-Out Cleaning Quote</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Local Testimonials Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Local Testimonials from Westlake Village
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We're proud to serve families and property managers throughout Westlake Village's neighborhoods.
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
                        "Two Trees Cleaning was fantastic for our move-out clean in North Ranch. They were professional, thorough, and made sure everything was inspection-ready. Our landlord was impressed!"
                      </p>
                      <div className="text-sm">
                        <p className="font-semibold text-foreground">Jennifer K.</p>
                        <p className="text-muted-foreground">North Ranch, Westlake Village</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Areas We Serve in Westlake Village:</h3>
                    <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                      <div>• North Ranch</div>
                      <div>• First Neighborhood</div>
                      <div>• Westlake Trails</div>
                      <div>• The Promenade area</div>
                      <div>• Westlake Lake vicinity</div>
                      <div>• 91361 & 91362 zip codes</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <img 
                    src="/lovable-uploads/81626ea3-9e8e-4daf-be35-0776b0cb8870.png"
                    alt="Move-out cleaning before and after in Westlake Village by Two Trees Cleaning"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Related Services Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Related Services in Westlake Village
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Explore our other professional cleaning services for Westlake Village residents.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Regular House Cleaning</h3>
                    <p className="text-muted-foreground mb-6">Luxury home maintenance cleaning for Westlake Village properties</p>
                    <Button variant="outline" asChild>
                      <a href="/westlake-village">Learn More</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Deep Cleaning Service</h3>
                    <p className="text-muted-foreground mb-6">Comprehensive seasonal cleaning for luxury homes</p>
                    <Button variant="outline" asChild>
                      <a href="/services/deep-cleaning">Learn More</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Post-Construction Cleanup</h3>
                    <p className="text-muted-foreground mb-6">Specialized cleaning after home renovations</p>
                    <Button variant="outline" asChild>
                      <a href="/services/post-construction">Learn More</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Other Locations Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Move-Out Cleaning in Other Locations
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We also provide specialized move-out cleaning services in these nearby areas.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-2">Thousand Oaks Move-Out</h3>
                    <p className="text-sm text-muted-foreground mb-4">Family-focused Conejo Valley service</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/thousand-oaks/move-out-cleaning">View Details</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-2">Camarillo Move-Out</h3>
                    <p className="text-sm text-muted-foreground mb-4">Professional family cleaning</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/camarillo/move-out-cleaning">View Details</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-2">Santa Barbara Move-Out</h3>
                    <p className="text-sm text-muted-foreground mb-4">Luxury coastal property cleaning</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/santa-barbara/move-out-cleaning">View Details</a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-foreground mb-2">Ventura Move-Out</h3>
                    <p className="text-sm text-muted-foreground mb-4">Historic & coastal cleaning</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="/ventura/move-out-cleaning">View Details</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Common questions about our Westlake Village move-out cleaning services.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">How soon can you schedule a move-out clean?</h3>
                    <p className="text-muted-foreground">
                      We typically can schedule move-out cleanings within 2-3 days, but we often accommodate urgent requests. Same-day and next-day service may be available based on our current schedule.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">What if I'm not done packing yet?</h3>
                    <p className="text-muted-foreground">
                      We can work around your packing schedule. While we prefer the property to be completely empty for the most thorough clean, we can carefully clean around remaining items and return for a final touch-up if needed.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Do you bring your own supplies?</h3>
                    <p className="text-muted-foreground">
                      Yes! We bring all professional-grade cleaning supplies and equipment. Our team comes fully equipped with everything needed to get your property inspection-ready.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 max-w-6xl text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                We'll Handle the Cleaning So You Can Focus on the Move
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Book your Westlake Village move-out clean today. Professional, reliable service from your trusted neighborhood team.
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
                  <a href="tel:805-436-5868">Call 805-436-5868</a>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WestlakeVillageMoveOut;