import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Shield, Award, MapPin, Phone, Mail, X, Building2, Users, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { CommercialReviews } from "@/components/CommercialReviews";

const Commercial = () => {
  const [utmParams, setUtmParams] = useState<any>({});
  const [showPromoBar, setShowPromoBar] = useState(true);

  useEffect(() => {
    // Capture UTM parameters for display
    const urlParams = new URLSearchParams(window.location.search);
    const params = {
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_term: urlParams.get('utm_term'),
      utm_content: urlParams.get('utm_content')
    };
    setUtmParams(params);

    // Track page view for commercial
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Two Trees Commercial Cleaning Landing Page',
        page_location: window.location.href
      });
    }
  }, []);

  const handleBookingClick = (location: string) => {
    // Track the commercial conversion
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book Commercial Cleaning', location);
    }

    // Redirect to commercial booking page
    window.open('https://twotreescleaning.com/book-commercial', '_blank');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'commercial_phone_click', {
        event_category: 'Commercial Contact',
        event_label: 'Phone Number Click'
      });
    }
    // Make the phone call
    window.location.href = 'tel:805-456-1421';
  };

  return <div className="min-h-screen bg-white">
      {/* Promotional Banner */}
      {showPromoBar && (
        <div className="bg-two-trees-gold text-two-trees-green py-3 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base font-semibold">
              🏢 Special offer for new commercial clients! Get 20% OFF your first month of service. Book by July 31st to secure your rate!
            </p>
          </div>
          <button 
            onClick={() => setShowPromoBar(false)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-two-trees-green hover:text-two-trees-green/70 transition-colors"
            aria-label="Close promotional banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-two-trees-gold text-two-trees-green font-medium">
                  Commercial Cleaning Services
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green leading-tight">
                  Professional Office Cleaning for Busy Businesses
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Two Trees Cleaning helps Ventura County businesses maintain spotless, professional workspaces. Our reliable commercial cleaning team ensures your office always makes the right impression.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-4 text-lg font-semibold" onClick={() => handleBookingClick('Hero Section')}>
                  Get Free Quote
                </Button>
                <Button variant="outline" size="lg" className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 hover:text-two-trees-green px-8 py-4 text-lg" onClick={handlePhoneClick}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="w-4 h-4 fill-two-trees-gold text-two-trees-gold" />
                <span className="font-semibold">4.9/5 stars</span>
                <span>from over 200+</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>Reviews</span>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Two Trees Cleaning team professionally cleaning a Ventura County office space" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-two-trees-green mb-4">
              Why Ventura County Businesses Choose Two Trees Cleaning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that your workspace reflects your professionalism. That's why we've built our commercial service around reliability, quality, and maintaining the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">Professional Image</h3>
                <p className="text-gray-600 leading-relaxed">
                  A clean office creates the right impression for clients, customers, and employees. We help maintain your professional reputation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-two-trees-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-two-trees-gold" />
                </div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">Healthy Workplace</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular professional cleaning reduces sick days and creates a healthier environment for your team to be productive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">Reliable Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  We show up when scheduled and maintain consistent quality. Your business operations continue smoothly without interruption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section with Team Photo */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-two-trees-green">
                Commercial Cleaning Experts You Can Trust
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a family-owned business, we understand the importance of maintaining professional standards. We've been serving Ventura County businesses since 2020, helping companies create clean, productive work environments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team is fully insured, bonded, and trained to handle the unique needs of commercial spaces. From small offices to large facilities, we deliver consistent, reliable service.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-two-trees-gold text-two-trees-gold" />)}
                </div>
                <span className="text-gray-600 italic">Trusted by 50+ Ventura County businesses</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/753bc8de-6a12-41a5-9eb4-067177715fdf.png" 
                alt="Two Trees Cleaning team - professional commercial cleaning service owners" 
                className="rounded-2xl shadow-xl w-full h-auto"
                onError={(e) => {
                  console.log('Team image failed to load:', e.currentTarget.src);
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-two-trees-green mb-4">
              How Our Commercial Service Works
            </h2>
            <p className="text-xl text-gray-600">
              Getting professional office cleaning is simple and straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-two-trees-green text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-two-trees-green mb-4">Free Consultation</h3>
              <p className="text-gray-600">
                We visit your facility to understand your specific needs and provide a customized cleaning plan and quote.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-two-trees-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-two-trees-green mb-4">Scheduled Service</h3>
              <p className="text-gray-600">
                Our professional team arrives at your preferred times and cleans your office to our high commercial standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-two-trees-green text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-two-trees-green mb-4">Professional Results</h3>
              <p className="text-gray-600">
                Your workspace is consistently clean and professional, creating the right environment for productivity and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section with Commercial Reviews */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-two-trees-green mb-4">
            What Our Commercial Clients Say
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Real reviews from business owners and office managers across Ventura County
          </p>

          <CommercialReviews />

          <div className="mt-12">
            <Badge variant="secondary" className="bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
              <Star className="w-4 h-4 mr-1 fill-two-trees-gold text-two-trees-gold" />
              4.9/5 stars on Google Reviews
            </Badge>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-two-trees-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Elevate Your Office Environment?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join dozens of Ventura County businesses who trust Two Trees Cleaning with their workspace. Get your free consultation today and discover the difference professional commercial cleaning makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold" onClick={() => handleBookingClick('Final CTA')}>
              Get Free Quote
            </Button>
            <Button variant="outline" size="lg" onClick={handlePhoneClick} className="border-white text-white hover:text-white px-8 py-4 text-lg bg-emerald-950 hover:bg-emerald-800">
              <Phone className="w-5 h-5 mr-2" />
              Call (805) 456-1421
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm opacity-75">
            <MapPin className="w-4 h-4" />
            <span>Proudly serving Ventura County businesses since 2020</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-two-trees-gold mb-4">Two Trees Cleaning</h3>
              <p className="text-gray-300 mb-4">
                Professional commercial cleaning services for Ventura County businesses.
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-two-trees-gold text-two-trees-gold" />
                <span className="text-sm text-gray-300">4.9/5 stars on Google</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(805) 456-1421</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>commercial@twotreescleaning.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Ventura, CA</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <div className="text-gray-300 space-y-1">
                <p>Ventura</p>
                <p>Oxnard</p>
                <p>Thousand Oaks</p>
                <p>Camarillo</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Two Trees Cleaning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>;
};

export default Commercial;
