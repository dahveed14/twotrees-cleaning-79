import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, CheckCircle, Crown, Home, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const TotalDeepClean = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Total Deep Clean | Every Surface, Every Detail | Two Trees Cleaning | Ventura County",
      description: "The complete home reset. Every deep clean item, every surface — done in one visit. Perfect for move-ins, seasonal resets, or homeowners who want the best. Ventura County.",
      cityName: "Ventura County",
      cityCoordinates: { latitude: "34.3705", longitude: "-119.1391" },
      url: "https://twotreescleaning.com/services/total-deep-clean",
      keywords: [
        "total deep cleaning Ventura County",
        "comprehensive house cleaning",
        "deep clean service",
        "spring cleaning Ventura County",
        "complete house cleaning service"
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
    window.location.href = 'tel:805-436-5868';
  };

  const breadcrumbData = [
    { name: "Home", url: "https://twotreescleaning.com/" },
    { name: "Services", url: "https://twotreescleaning.com/services" },
    { name: "Total Deep Clean", url: "https://twotreescleaning.com/services/total-deep-clean" }
  ];

  const essentialItems = [
    "Wipe down all countertops",
    "Clean sink and faucet",
    "Exterior appliance cleaning",
    "Inside microwave cleaning",
    "Range hood exterior cleaning",
    "Toilet cleaning (inside & out)",
    "Shower/tub cleaning",
    "Mirror and glass cleaning",
    "Sink and vanity cleaning (exterior)",
    "Vacuum all carpets and rugs",
    "Mop all hard floors",
    "Dust all furniture surfaces",
    "Make beds (if linens present)",
    "Empty all trash bins"
  ];

  const deepCleanItems = [
    "Baseboards",
    "Ceiling Fans",
    "Cabinet Fronts (Full Clean)",
    "Shower Tile & Grout Scrubbing",
    "Window Sills",
    "Light Fixtures",
    "Door Frames (Full Clean)",
    "Light Switches & Outlets (Full)",
    "Inside Oven"
  ];

  const addOns = [
    "Inside Refrigerator Cleaning",
    "Interior Window Cleaning",
    "Vacuum Upholstered Furniture",
    "Blind/Shade Deep Cleaning ($50/set)",
    "Load of Laundry",
    "Dishes"
  ];

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup 
        cityName="Ventura County"
        cityCoordinates={{ latitude: "34.3705", longitude: "-119.1391" }}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Services", href: "/services" },
          { label: "Total Deep Clean", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Crown className="w-8 h-8 text-two-trees-gold" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Total Deep Clean
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              Every surface, every detail — the complete home reset in one visit.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Ideal for move-ins, seasonal resets, post-renovation refresh, or homeowners who simply want the best. No compromises, no rotation — everything done at once.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Total Deep Clean Hero')}
              >
                Book Total Deep Clean - Starting at $220
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green hover:text-white px-8 py-4 text-lg"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                (805) 436-5868
              </Button>
            </div>
          </div>

          {/* Compare Link */}
          <div className="mb-16 flex justify-center">
            <div className="max-w-lg p-6 bg-primary/5 border border-primary/20 rounded-xl text-center">
              <BookOpen className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-primary mb-2">
                Compare all three tiers side by side
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                See exactly what's included in Essential, Signature, and Total Deep Clean.
              </p>
              <Link to="/services/whats-included-in-cleaning">
                <Button variant="outline" className="inline-flex items-center gap-2">
                  View Full Comparison
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Everything Included in Total Deep Clean
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green flex items-center gap-2">
                    <Home className="w-6 h-6" />
                    Full Essential Clean
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {essentialItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-2 border-primary bg-primary text-primary-foreground shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-primary-foreground flex items-center gap-2">
                    <Crown className="w-6 h-6 text-two-trees-gold" />
                    All 9 Deep Clean Items
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {deepCleanItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90 text-sm">{item}</span>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-white/20 mt-4">
                    <p className="text-xs text-primary-foreground/60 italic">
                      Does not include inside refrigerator cleaning. Available as an add-on.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Kitchen & Bathroom Detail */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Room-by-Room Deep Clean Detail
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green flex items-center gap-2">
                    <Home className="w-6 h-6" />
                    Kitchen Deep Clean
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Exterior of all appliances (plus inside microwave)",
                    "Cabinet fronts and handles (full clean)",
                    "Countertops and backsplash scrubbing",
                    "Sink and faucet deep sanitizing",
                    "Range hood and exhaust fan",
                    "Inside oven",
                    "Light fixtures and ceiling fans"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green flex items-center gap-2">
                    <Sparkles className="w-6 h-6" />
                    Bathroom Deep Clean
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Shower tile & grout scrubbing (non-restorative)",
                    "Shower/tub deep cleaning",
                    "Toilet cleaning inside and out",
                    "Mirror and glass cleaning",
                    "Exhaust fan cleaning",
                    "Floor scrubbing and sanitizing"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-two-trees-green mb-6 text-center">
                Plus Throughout Your Home
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Baseboards throughout",
                  "Light switches and outlets",
                  "Door frames and handles",
                  "Ceiling fan blades",
                  "Detailed furniture dusting",
                  "Window sills",
                  "Light fixtures"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add-Ons */}
          <div className="mb-16 bg-muted/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-6">
              Available Add-Ons
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {addOns.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-foreground text-sm">
                  <span className="text-two-trees-gold">+</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* When to Book */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-8">
              When to Book a Total Deep Clean
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Spring cleaning season",
                "Before hosting events",
                "Moving into a new home",
                "Starting recurring service"
              ].map((occasion, index) => (
                <div key={index} className="text-center">
                  <div className="bg-muted/50 p-6 rounded-xl shadow-md">
                    <h3 className="font-semibold text-two-trees-green">{occasion}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-6">
              Total Deep Clean Service Areas
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              {[
                { name: "Santa Barbara", href: "/santa-barbara" },
                { name: "Montecito", href: "/montecito" },
                { name: "Thousand Oaks", href: "/thousand-oaks" },
                { name: "Oxnard", href: "/oxnard" },
                { name: "Camarillo", href: "/camarillo" },
                { name: "Ventura", href: "/ventura" },
                { name: "Summerland", href: "/summerland" },
                { name: "Carpinteria", href: "/carpinteria" }
              ].map((area) => (
                <Link
                  key={area.name}
                  to={area.href}
                  className="bg-white px-4 py-3 rounded-lg shadow hover:shadow-md transition-shadow text-two-trees-green hover:text-two-trees-green/80"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-two-trees-green text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for a Complete Home Reset?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Experience the difference a professional total deep clean makes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Total Deep Clean CTA')}
              >
                Book Your Total Deep Clean Today
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-two-trees-green hover:bg-white/90 px-8 py-4 text-lg font-semibold"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (805) 436-5868
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TotalDeepClean;