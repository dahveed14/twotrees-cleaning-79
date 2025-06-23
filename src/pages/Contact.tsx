
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Shield, Users } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";

const Contact = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Contact Two Trees Cleaning - Get Your Free Quote | Ventura County House Cleaning",
      description: "Get a free quote for professional house cleaning services in Ventura County. Contact David and Eli at Two Trees Cleaning. Licensed, insured, and serving 200+ families.",
      url: "https://twotreescleaning.com/contact",
      keywords: [
        "contact cleaning service Ventura County",
        "free quote house cleaning",
        "Two Trees Cleaning contact",
        "professional cleaners phone number",
        "house cleaning estimate Santa Barbara",
        "cleaning service contact form"
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
    { name: "Contact", url: "https://twotreescleaning.com/contact" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup breadcrumbs={breadcrumbData} />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Contact", current: true }
        ]} 
      />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
            Contact Two Trees Cleaning
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Ready to get your time back? Contact David and Eli for a free quote on professional house cleaning services in Ventura County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
              onClick={() => handleBookingClick('Contact Hero')}
            >
              Book Online Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 px-8 py-4 text-lg"
              onClick={handlePhoneClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (805) 456-1421
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-two-trees-green mb-6">
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-two-trees-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-two-trees-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                        <p className="text-gray-600">
                          <a href="tel:805-456-1421" className="hover:text-two-trees-green transition-colors">
                            (805) 456-1421
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-two-trees-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-two-trees-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                        <p className="text-gray-600">
                          <a href="mailto:hello@twotreescleaning.com" className="hover:text-two-trees-green transition-colors">
                            hello@twotreescleaning.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-two-trees-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-two-trees-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Service Area</h4>
                        <p className="text-gray-600">
                          Ventura County, CA<br />
                          Santa Barbara County, CA
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-two-trees-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-two-trees-green" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
                        <p className="text-gray-600">
                          Free quotes within 24 hours<br />
                          Same-day callback guarantee
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-two-trees-green mb-6">
                    Why Choose Us?
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-two-trees-gold" />
                      <span className="text-gray-700">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-two-trees-gold" />
                      <span className="text-gray-700">200+ Happy Families</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-two-trees-gold" />
                      <span className="text-gray-700">Flexible Scheduling</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-two-trees-green/5 rounded-lg">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Satisfaction Guaranteed</strong><br />
                      Not happy? We'll come back for free!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
