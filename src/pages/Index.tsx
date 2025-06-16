
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Shield, Award, MapPin, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [utmParams, setUtmParams] = useState<any>({});

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

    // Track page view
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: 'Two Trees Cleaning Landing Page',
        page_location: window.location.href
      });
    }
  }, []);

  const handleBookingClick = (location: string) => {
    // Track the conversion
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Book a Cleaning', location);
    }
    
    // For now, we'll just show an alert. Replace with actual booking page URL later
    alert('Booking page will be integrated here. Conversion tracked!');
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Phone Number Click'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* UTM Parameter Display (for testing - remove in production) */}
      {(utmParams.utm_source || utmParams.utm_medium || utmParams.utm_campaign) && (
        <div className="bg-yellow-100 border-yellow-400 border p-2 text-xs">
          <strong>UTM Tracking Active:</strong> Source: {utmParams.utm_source || 'N/A'} | Medium: {utmParams.utm_medium || 'N/A'} | Campaign: {utmParams.utm_campaign || 'N/A'}
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-two-trees-gold text-two-trees-green font-medium">
                  Serving Ventura County
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green leading-tight">
                  Get Your Time Back with Professional House Cleaning
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Two Trees Cleaning helps busy Ventura County families reclaim their weekends. Our reliable, detail-oriented team delivers spotless homes so you can focus on what matters most.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-4 text-lg font-semibold"
                  onClick={() => handleBookingClick('Hero Section')}
                >
                  Book a Cleaning
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green hover:text-white px-8 py-4 text-lg"
                  onClick={handlePhoneClick}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="w-4 h-4 fill-two-trees-gold text-two-trees-gold" />
                <span className="font-semibold">4.9/5 stars</span>
                <span>from over 200+ Google Reviews</span>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/854ae905-37ee-4e73-a5f8-a01c6f2e9bb4.png" 
                alt="Two Trees Cleaning professional cleaning a beautiful Ventura County home"
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
              Why Busy Professionals Choose Two Trees Cleaning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand your time is valuable. That's why we've built our service around reliability, quality, and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">Reliable</h3>
                <p className="text-gray-600 leading-relaxed">
                  We show up on time, every time. Your cleaning is scheduled around your busy life, not the other way around.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-two-trees-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-two-trees-gold" />
                </div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">High Standards</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't cut corners. Every surface, every room gets the thorough cleaning your family deserves.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">Attention to Detail</h3>
                <p className="text-gray-600 leading-relaxed">
                  From baseboards to ceiling fans, we notice what others miss. Your home gets the detailed care it deserves.
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
                Meet the Two Trees Cleaning Team
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're a family-owned business serving Ventura County families who value their time. We understand the challenge of balancing work, family, and maintaining a clean home.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                That's why we created Two Trees Cleaning - to give you back your weekends and peace of mind, knowing your home is in expert hands.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-two-trees-gold text-two-trees-gold" />
                  ))}
                </div>
                <span className="text-gray-600">Trusted by 200+ Ventura County families</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/753bc8de-6a12-41a5-9eb4-067177715fdf.png" 
                alt="Two Trees Cleaning team - professional house cleaning service owners"
                className="rounded-2xl shadow-xl w-full h-auto"
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
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Getting your time back is just three simple steps away
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-two-trees-green text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-two-trees-green mb-4">Book Online</h3>
              <p className="text-gray-600">
                Choose your cleaning package and schedule a time that works for your busy life.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-two-trees-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-two-trees-green mb-4">We Clean</h3>
              <p className="text-gray-600">
                Our reliable team arrives on time and cleans your home to our high standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-two-trees-green text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-two-trees-green mb-4">Enjoy Your Time</h3>
              <p className="text-gray-600">
                Come home to a spotless house and spend your weekend doing what you love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-two-trees-green mb-4">
            What Our Ventura County Customers Say
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Don't just take our word for it - here's what busy families like yours are saying
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-two-trees-gold text-two-trees-gold" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Two Trees Cleaning has been a game-changer for our family. With two kids and demanding careers, we finally have our weekends back. Their attention to detail is incredible!"
                </p>
                <div className="text-left">
                  <p className="font-semibold text-two-trees-green">Sarah M.</p>
                  <p className="text-sm text-gray-500">Thousand Oaks</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-two-trees-gold text-two-trees-gold" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Reliable, professional, and thorough. They clean places I didn't even know needed cleaning! I can't recommend Two Trees Cleaning enough."
                </p>
                <div className="text-left">
                  <p className="font-semibold text-two-trees-green">Jennifer K.</p>
                  <p className="text-sm text-gray-500">Ventura</p>
                </div>
              </CardContent>
            </Card>
          </div>

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
            Ready to Get Your Weekends Back?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of Ventura County families who trust Two Trees Cleaning with their homes. Book your first cleaning today and discover the difference professional care makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
              onClick={() => handleBookingClick('Final CTA')}
            >
              Book a Cleaning
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-two-trees-green px-8 py-4 text-lg"
              onClick={handlePhoneClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (805) 123-4567
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm opacity-75">
            <MapPin className="w-4 h-4" />
            <span>Proudly serving Ventura County families since 2020</span>
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
                Professional house cleaning services for busy Ventura County families.
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
                  <span>(805) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@twotreescleaning.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Ventura County, CA</span>
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
                <p>Simi Valley</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Two Trees Cleaning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
