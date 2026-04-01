import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, MapPin, Phone, Mail, Users, CheckCircle, GraduationCap, BookOpen, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { updateMetaTags } from "@/utils/metaTags";

const Commercial = () => {
  const [utmParams, setUtmParams] = useState<any>({});
  
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const venturaCountyCoordinates = {
      latitude: "34.3705",
      longitude: "-119.1391"
    };

    updateMetaTags({
      title: "School Cleaning Services Ventura County | Two Trees Cleaning - Licensed & Insured",
      description: "Professional school cleaning services in Ventura County. Classrooms, cafeterias, gymnasiums & admin offices. Safe, non-toxic products. Licensed & insured. Serving schools since 2020.",
      cityName: "Ventura County",
      cityCoordinates: venturaCountyCoordinates,
      url: "https://twotreescleaning.com/commercial",
      image: "https://twotreescleaning.com/lovable-uploads/81626ea3-9e8e-4daf-be35-0776b0cb8870.png",
      keywords: [
        "school cleaning Ventura County",
        "school janitorial service",
        "classroom cleaning service",
        "school sanitization Ventura County",
        "education facility cleaning",
        "school deep cleaning",
        "daycare cleaning Ventura County",
        "preschool cleaning service"
      ]
    });

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
        page_title: 'Two Trees School Cleaning Landing Page',
        page_location: window.location.href
      });
    }
  }, []);
  const handleBookingClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).trackButtonClick) {
      (window as any).trackButtonClick('Email School Cleaning Inquiry', location);
    }

    const subject = encodeURIComponent('School Cleaning Quote Request');
    const body = encodeURIComponent('Hi Two Trees Cleaning,\n\nI would like to request a quote for school cleaning services.\n\nSchool/Facility Name:\nLocation:\nNumber of Classrooms:\nCleaning Frequency Needed:\n\nPlease contact me to discuss our needs.\n\nThank you!');
    window.location.href = `mailto:hello@twotreescleaning.com?subject=${subject}&body=${body}`;
  };
  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'school_phone_click', {
        event_category: 'School Contact',
        event_label: 'Phone Number Click'
      });
    }
    window.location.href = 'tel:805-436-5868';
  };
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs 
        items={[
          { label: "School Cleaning", current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-two-trees-gold text-two-trees-green font-medium">
                  School Cleaning Services in Ventura County
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-two-trees-green leading-tight">
                  Professional Cleaning for Schools & Educational Facilities
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Two Trees Cleaning keeps classrooms, hallways, and common areas spotless so students and staff can focus on what matters — learning. We serve schools across Ventura County including Santa Barbara, Thousand Oaks, Oxnard, and Camarillo.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-4 text-lg font-semibold" onClick={() => handleBookingClick('Hero Section')}>
                  <Mail className="w-5 h-5 mr-2" />
                  Get a School Cleaning Quote
                </Button>
                <Button variant="outline-green" size="lg" className="px-8 py-4 text-lg" onClick={handlePhoneClick}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="w-4 h-4 fill-two-trees-gold text-two-trees-gold" />
                <span className="font-semibold">4.9/5 stars</span>
                <span>from over 200+</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span>Reviews</span>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-600 mb-2">Need residential house cleaning?</p>
                <Link 
                  to="/" 
                  className="text-two-trees-green hover:text-two-trees-green/80 font-medium underline"
                >
                  Explore our house cleaning services for Ventura County families →
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/81626ea3-9e8e-4daf-be35-0776b0cb8870.png" 
                alt="Two Trees Cleaning team professionally cleaning a school facility in Ventura County" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[3/4]" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Schools Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-two-trees-green mb-4">
              Why Schools Trust Two Trees Cleaning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schools need more than just clean — they need safe, healthy environments where students can thrive. We understand the unique cleaning demands of educational facilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">Safe & Non-Toxic</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use child-safe, non-toxic cleaning products that effectively sanitize without exposing students or staff to harsh chemicals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-two-trees-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-two-trees-gold" />
                </div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">Healthier Students</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regular professional cleaning and sanitization reduces the spread of germs, keeping students healthier and reducing absenteeism.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-two-trees-green" />
                </div>
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">After-Hours Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  We clean after school hours and on weekends so there's zero disruption to classes, activities, or events.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Clean */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-two-trees-green mb-4">
              School Areas We Clean
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From classrooms to cafeterias, we handle every area of your school with care and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-two-trees-green/10 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-two-trees-green" />
                </div>
                <h3 className="text-xl font-bold text-two-trees-green mb-4">Classrooms</h3>
                <div className="space-y-3">
                  {[
                    "Desks, tables, and chairs sanitized",
                    "Whiteboards and chalkboards cleaned",
                    "Floors vacuumed and mopped",
                    "Trash emptied and bins sanitized",
                    "Doorknobs and light switches disinfected",
                    "Windows and window sills wiped"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-two-trees-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-two-trees-gold" />
                </div>
                <h3 className="text-xl font-bold text-two-trees-green mb-4">Common Areas</h3>
                <div className="space-y-3">
                  {[
                    "Cafeteria tables and seating deep cleaned",
                    "Gymnasium floors maintained",
                    "Hallways swept and mopped",
                    "Locker areas sanitized",
                    "Entryways and lobbies kept spotless",
                    "Library shelves and reading areas dusted"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-two-trees-green/10 rounded-full flex items-center justify-center mb-6">
                  <GraduationCap className="w-6 h-6 text-two-trees-green" />
                </div>
                <h3 className="text-xl font-bold text-two-trees-green mb-4">Staff & Restrooms</h3>
                <div className="space-y-3">
                  {[
                    "Admin offices and teacher lounges",
                    "Restrooms fully sanitized daily",
                    "Soap and paper product restocking",
                    "Staff break rooms cleaned",
                    "Front office and reception areas",
                    "Nurse's office deep sanitized"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section with Team Photo */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-two-trees-green">
                A Cleaning Team Schools Can Count On
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a family-owned business, we understand how important it is to keep children in a clean, safe environment. We've been serving Ventura County since 2020, and we bring the same care and attention to every school we clean.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team is fully background-checked, insured, and bonded. We're trained specifically in educational facility cleaning protocols, including proper sanitization of high-touch surfaces and safe product usage around children.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-5 h-5 fill-two-trees-gold text-two-trees-gold" />
                  ))}
                </div>
                <span className="text-gray-600 italic">Trusted by schools & families across Ventura County</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/753bc8de-6a12-41a5-9eb4-067177715fdf.png" 
                alt="Two Trees Cleaning team owners - professional school cleaning service providers serving Ventura County educational facilities" 
                className="rounded-2xl shadow-xl w-full h-auto" 
                onError={e => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-two-trees-green mb-4">
              How Our School Cleaning Service Works
            </h2>
            <p className="text-xl text-gray-600">
              Getting your school professionally cleaned is simple
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-two-trees-green text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-two-trees-green mb-4">Free Walkthrough</h3>
              <p className="text-gray-600">
                We visit your school to assess the facility, understand your needs, and provide a customized cleaning plan and quote.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-two-trees-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-two-trees-green mb-4">After-Hours Cleaning</h3>
              <p className="text-gray-600">
                Our team arrives after school hours and on weekends, cleaning every classroom, hallway, and restroom to our high standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-two-trees-green text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-two-trees-green mb-4">Ready for Students</h3>
              <p className="text-gray-600">
                Every morning, students and staff walk into a clean, sanitized, and welcoming school — ready to learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Options */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-two-trees-green mb-4">
              Flexible Scheduling for Schools
            </h2>
            <p className="text-xl text-gray-600">
              We work around your school's schedule — not the other way around
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { frequency: "Daily", description: "Monday through Friday after dismissal" },
              { frequency: "Weekly", description: "Deep cleaning on a set day each week" },
              { frequency: "Summer Break", description: "Full facility deep clean during breaks" },
              { frequency: "Event Cleanup", description: "Before and after school events" }
            ].map((option, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-two-trees-green mb-2">{option.frequency}</h3>
                  <p className="text-gray-600 text-sm">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Schools */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-two-trees-green mb-4">
            Schools & Educational Facilities We Serve
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We clean all types of educational environments across Ventura County
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Elementary Schools",
              "Middle Schools",
              "High Schools",
              "Preschools & Daycare Centers",
              "Private & Charter Schools",
              "After-School Programs",
              "Tutoring Centers",
              "Dance & Music Studios",
              "Community Learning Centers"
            ].map((type, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg">
                <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0" />
                <span className="text-gray-700 font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-two-trees-green mb-4">
            Serving Schools Across Ventura County
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We proudly clean schools throughout these communities
          </p>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Santa Barbara", href: "/santa-barbara" },
              { name: "Ventura", href: "/ventura" },
              { name: "Oxnard", href: "/oxnard" },
              { name: "Thousand Oaks", href: "/thousand-oaks" },
              { name: "Camarillo", href: "/camarillo" },
              { name: "Ojai", href: "/ojai" },
              { name: "Carpinteria", href: "/carpinteria" },
              { name: "Montecito", href: "/montecito" }
            ].map((area) => (
              <Link
                key={area.name}
                to={area.href}
                className="bg-white px-4 py-3 rounded-lg shadow hover:shadow-md transition-shadow text-two-trees-green hover:text-two-trees-green/80 font-medium"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-two-trees-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Give Your Students a Cleaner, Healthier School
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Partner with Two Trees Cleaning and provide a safe, spotless learning environment. Get your free walkthrough and customized quote today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold" onClick={() => handleBookingClick('Final CTA')}>
              <Mail className="w-5 h-5 mr-2" />
              Get a School Cleaning Quote
            </Button>
            <Button variant="outline-white" size="lg" onClick={handlePhoneClick} className="px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call (805) 436-5868
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm opacity-75">
            <MapPin className="w-4 h-4" />
            <span>Proudly serving Ventura County schools since 2020</span>
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
                Professional school cleaning services for Ventura County educational facilities.
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
                  <span>(805) 436-5868</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@twotreescleaning.com</span>
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
            <p>© 2025 Two Trees Cleaning. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Commercial;
