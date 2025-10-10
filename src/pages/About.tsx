
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Users, Heart } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { GoogleMapLocator } from "@/components/GoogleMapLocator";

const About = () => {
  useEffect(() => {
    updateMetaTags({
      title: "About Two Trees Cleaning - David & Eli's Story | Family-Owned Ventura County Cleaning Service",
      description: "Meet David and Eli, the husband-and-wife team behind Two Trees Cleaning. Serving Ventura County families since 2020 with professional, reliable house cleaning services. Licensed & insured.",
      url: "https://twotreescleaning.com/about",
      keywords: [
        "family owned cleaning service Ventura County",
        "David and Eli Two Trees Cleaning",
        "professional house cleaners Santa Barbara",
        "licensed insured cleaning service",
        "husband wife cleaning team",
        "local cleaning business Ventura County"
      ]
    });
  }, []);

  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', location);
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Phone Number Click'
      });
    }
    window.location.href = 'tel:805-456-1421';
  };

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "About", url: "https://twotreescleaning.com/about" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup breadcrumbs={breadcrumbData} />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "About", current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We're David and Eli, the husband-and-wife team behind Two Trees Cleaning. We understand the challenge of balancing work, family, and maintaining a clean home because we've been there ourselves.
          </p>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-two-trees-green">
                Meet David & Eli
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                As busy professionals ourselves, we know how precious time is. After years of struggling to keep our own home clean while managing demanding careers, we realized there had to be a better way.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                That's when we decided to start Two Trees Cleaning in 2020 - not just as a business, but as a solution for families like ours who value their time and want to come home to a spotless house without sacrificing their weekends.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we're proud to serve over 200+ families across Ventura County, giving them back their most valuable asset - time to spend with the people they love.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-two-trees-gold text-two-trees-gold" />)}
                </div>
                <span className="text-gray-600 italic">Trusted by 200+ Ventura County families</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/753bc8de-6a12-41a5-9eb4-067177715fdf.png" 
                alt="David and Eli, the husband-and-wife team behind Two Trees Cleaning - professional house cleaning service owners in Ventura County" 
                className="rounded-2xl shadow-xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-two-trees-green mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Two Trees Cleaning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">Detail-Oriented</h3>
                <p className="text-gray-600">
                  We treat every home like it's our own, paying attention to the details that make the difference between clean and truly spotless.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">Reliable Service</h3>
                <p className="text-gray-600">
                  When we say we'll be there, we'll be there. Our clients count on us, and we never let them down. Consistency you can trust.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">Locally Owned</h3>
                <p className="text-gray-600">
                  We're your neighbors in Ventura County. We understand our community and are committed to providing exceptional service to our friends and neighbors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-two-trees-green mb-12">
            Why Choose Two Trees Cleaning?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-two-trees-gold rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-lg text-gray-700">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-two-trees-gold rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-lg text-gray-700">Serving 200+ Happy Families</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-two-trees-gold rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-lg text-gray-700">Eco-Friendly Products</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-two-trees-gold rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-lg text-gray-700">Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-two-trees-gold rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-lg text-gray-700">Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-two-trees-gold rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-lg text-gray-700">Competitive Pricing</span>
              </div>
            </div>
          </div>

          <div className="bg-two-trees-green/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-two-trees-green mb-4">
              Ready to Get Your Time Back?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join the 200+ families who trust Two Trees Cleaning with their homes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('About Page')}
              >
                Book Your Cleaning Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 px-8 py-4 text-lg"
                onClick={handlePhoneClick}
              >
                Call (805) 456-1421
              </Button>
            </div>
          </div>
        </div>
      </section>

      <GoogleMapLocator 
        title="Our Location & Service Area"
        subtitle="Based in Ventura County, we're proud to serve families throughout Santa Barbara and Ventura Counties"
      />

      <Footer />
    </div>
  );
};

export default About;
