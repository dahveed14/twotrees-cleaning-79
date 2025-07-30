import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, MapPin, Clock, Star, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NiceJobWidget } from "@/components/NiceJobWidget";
import { FinalCTA } from "@/components/FinalCTA";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const CamarilloPostConstruction = () => {
  const handleBookingClick = () => {
    // Analytics tracking would go here
  };

  const handlePhoneClick = () => {
    window.open('tel:8054308548', '_self');
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Camarillo", href: "/camarillo" },
    { label: "Post-Construction Cleaning", href: "/camarillo/post-construction-cleaning" }
  ];


  return (
    <>
      <Helmet>
        <title>Camarillo Post-Construction Cleaning | Two Trees Cleaning</title>
        <meta name="description" content="Post-construction cleaning in Camarillo for new builds and remodels. Trusted by builders, contractors, and homeowners. 5-star rated and insured." />
        <meta name="keywords" content="post construction cleaning Camarillo, construction cleanup Camarillo, move in cleaning Camarillo, contractor cleaning services" />
        <link rel="canonical" href="https://twotreescleaning.com/camarillo/post-construction-cleaning" />
        <meta property="og:title" content="Camarillo Post-Construction Cleaning | Two Trees Cleaning" />
        <meta property="og:description" content="Post-construction cleaning in Camarillo for new builds and remodels. Trusted by builders, contractors, and homeowners. 5-star rated and insured." />
        <meta property="og:url" content="https://twotreescleaning.com/camarillo/post-construction-cleaning" />
        <meta property="og:type" content="website" />
      </Helmet>

      <SchemaMarkup cityName="Camarillo" />

      <div className="min-h-screen bg-background">
        <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
        
        <main className="pt-8">
          <div className="max-w-7xl mx-auto px-4">
            <Breadcrumbs items={breadcrumbItems} />
            
            {/* Hero Section */}
            <div className="py-12 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Post-Construction Cleaning in Camarillo
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Finished a remodel or construction project in Camarillo? Two Trees Cleaning helps contractors and homeowners prepare their spaces for move-in with detailed post-construction cleaning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4">
                  <Link to="/contact">Get a Free Post-Construction Quote</Link>
                </Button>
                <Button variant="outline" size="lg" onClick={handlePhoneClick} className="px-8 py-4">
                  Call (805) 430-8548
                </Button>
              </div>
            </div>

            {/* What's Included Section */}
            <section className="py-16 bg-gray-50 rounded-2xl mb-16">
              <div className="max-w-4xl mx-auto px-8">
                <h2 className="text-4xl font-bold text-primary text-center mb-12">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg">Fine Dust Removal</h3>
                        <p className="text-muted-foreground">Complete removal from baseboards, walls, outlets, and vents</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg">Cabinet & Trim Cleaning</h3>
                        <p className="text-muted-foreground">Wipe-down of all cabinetry, doors, and trim work</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg">Deep Bathroom & Kitchen Cleaning</h3>
                        <p className="text-muted-foreground">Thorough cleaning of all fixtures and surfaces</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg">Floor Cleaning</h3>
                        <p className="text-muted-foreground">Vacuuming, mopping, and debris removal from all surfaces</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg">Optional Finishing Services</h3>
                        <p className="text-muted-foreground">Interior window cleaning and post-paint polish available</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Choose Two Trees Section */}
            <section className="py-16">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-primary text-center mb-12">Why Choose Two Trees in Camarillo</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                    <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Trusted by 200+ Local Families</h3>
                    <p className="text-muted-foreground">Proven track record with contractors and homeowners throughout Camarillo</p>
                  </Card>
                  <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                    <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Licensed & Construction-Ready</h3>
                    <p className="text-muted-foreground">Fully insured and equipped for construction site environments</p>
                  </Card>
                  <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                    <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Fast Turnarounds</h3>
                    <p className="text-muted-foreground">Reliable scheduling that works with your project deadlines</p>
                  </Card>
                </div>
              </div>
            </section>

            {/* Local Coverage Section */}
            <section className="py-16 bg-gray-50 rounded-2xl mb-16">
              <div className="max-w-4xl mx-auto px-8 text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-primary mb-8">Local Coverage</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Serving Mission Oaks, Las Posas, Spanish Hills, and Old Town Camarillo (93010, 93012)
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg">
                  <div className="bg-white p-4 rounded-lg">Mission Oaks</div>
                  <div className="bg-white p-4 rounded-lg">Las Posas</div>
                  <div className="bg-white p-4 rounded-lg">Spanish Hills</div>
                  <div className="bg-white p-4 rounded-lg">Old Town</div>
                </div>
              </div>
            </section>

            {/* Booking CTA Section */}
            <section className="py-16 text-center">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-primary mb-6">Need a cleaning partner to help you wrap up a build?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  We work with your timeline to ensure your Camarillo project is ready for inspection or turnover.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4">
                  <Link to="/contact">Get a Free Post-Construction Quote</Link>
                </Button>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-8">
                  <Card className="p-8">
                    <h3 className="text-xl font-semibold mb-4">Do you clean during or after construction?</h3>
                    <p className="text-muted-foreground">We specialize in final post-construction cleaning after your project is complete. This ensures we can provide the thorough, detailed clean needed for move-in readiness without interfering with ongoing work.</p>
                  </Card>
                  <Card className="p-8">
                    <h3 className="text-xl font-semibold mb-4">Can you handle both residential and commercial?</h3>
                    <p className="text-muted-foreground">Yes! We provide post-construction cleaning for residential remodels, home flips, commercial build-outs, and office spaces throughout Camarillo.</p>
                  </Card>
                  <Card className="p-8">
                    <h3 className="text-xl font-semibold mb-4">How much time do you need for a full cleaning?</h3>
                    <p className="text-muted-foreground">Timing depends on the project size and scope. We typically need 1-3 days for residential projects and can accommodate rush jobs with advance notice. We'll provide a detailed timeline with your quote.</p>
                  </Card>
                </div>
              </div>
            </section>

            {/* Reviews Section */}
            <NiceJobWidget compact />

            {/* Internal Links Section */}
            <section className="py-16">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-primary mb-8">Related Services</h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild variant="outline" className="px-6 py-3">
                    <Link to="/services/post-construction">Post-Construction Cleaning</Link>
                  </Button>
                  <Button asChild variant="outline" className="px-6 py-3">
                    <Link to="/camarillo">Camarillo Cleaning Services</Link>
                  </Button>
                  <Button asChild variant="outline" className="px-6 py-3">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>

        <FinalCTA 
          onBookingClick={handleBookingClick}
          onPhoneClick={handlePhoneClick}
        />

        <Footer />
      </div>
    </>
  );
};

export default CamarilloPostConstruction;