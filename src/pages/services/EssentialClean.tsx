import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, CheckCircle, Clock, BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const EssentialClean = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Essential Clean | Recurring House Cleaning | Two Trees Cleaning | Ventura County",
      description: "Professional recurring house cleaning in Ventura County. Our Essential Clean covers every core task — countertops, floors, bathrooms, kitchen — done consistently every visit. Starting at $140.",
      cityName: "Ventura County",
      cityCoordinates: { latitude: "34.3705", longitude: "-119.1391" },
      url: "https://twotreescleaning.com/services/essential-clean",
      keywords: [
        "essential house cleaning Ventura County",
        "recurring cleaning service",
        "weekly house cleaning",
        "bi-weekly cleaning service",
        "regular maid service Ventura County"
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
    { name: "Essential Clean", url: "https://twotreescleaning.com/services/essential-clean" }
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

  const notIncluded = [
    "Baseboards",
    "Ceiling fans",
    "Cabinet fronts (full clean)",
    "Shower tile & grout scrubbing",
    "Window sills",
    "Light fixtures",
    "Door frames (full clean)",
    "Light switches & outlets (full)",
    "Inside oven"
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
          { label: "Essential Clean", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Essential Clean
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              Reliable upkeep for tidy homes — done consistently, every visit.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              For clients who maintain a generally tidy home and want reliable, professional upkeep on a recurring schedule. This is the entry point — not the lesser option.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Essential Clean Hero')}
              >
                Book Essential Clean - Starting at $140
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

          {/* What's Included Link */}
          <div className="mb-16 flex justify-center">
            <div className="max-w-lg p-6 bg-primary/5 border border-primary/20 rounded-xl text-center">
              <BookOpen className="w-6 h-6 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-primary mb-2">
                Want to compare all three tiers?
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                See exactly what's included in Essential, Signature, and Total Deep Clean side by side.
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
              What's Included Every Visit
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {essentialItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-two-trees-gold flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not Included */}
          <div className="mb-16 bg-muted/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-4">
              Not Included in Essential Clean
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              These items are covered in the <Link to="/services/signature-clean" className="text-two-trees-gold font-semibold hover:underline">Signature Clean</Link> rotation or included every visit with the <Link to="/services/total-deep-clean" className="text-two-trees-gold font-semibold hover:underline">Total Deep Clean</Link>.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {notIncluded.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <span className="text-muted-foreground">—</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Frequency Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Choose Your Cleaning Schedule
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-8">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-two-trees-green mb-2">Weekly</h3>
                  <p className="text-muted-foreground mb-4">Perfect for busy families and high-traffic homes</p>
                  <div className="text-3xl font-bold text-two-trees-gold mb-1">$140</div>
                  <p className="text-sm text-muted-foreground mb-6">Starting price</p>
                  <Button 
                    className="w-full bg-two-trees-green hover:bg-two-trees-green/90"
                    onClick={() => handleBookingClick('Weekly Essential')}
                  >
                    Book Weekly Service
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-two-trees-gold shadow-xl hover:shadow-2xl transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="bg-two-trees-gold text-white px-4 py-1 rounded-full text-sm font-semibold mx-auto w-fit mb-4">
                    Most Popular
                  </div>
                  <Clock className="w-8 h-8 text-two-trees-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-two-trees-green mb-2">Bi-Weekly</h3>
                  <p className="text-muted-foreground mb-4">The sweet spot for most households</p>
                  <div className="text-3xl font-bold text-two-trees-gold mb-1">$160</div>
                  <p className="text-sm text-muted-foreground mb-6">Starting price</p>
                  <Button 
                    className="w-full bg-two-trees-gold hover:bg-two-trees-gold/90 text-white font-semibold"
                    onClick={() => handleBookingClick('Bi-Weekly Essential')}
                  >
                    Book Bi-Weekly Service
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-8">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-two-trees-green mb-2">Monthly</h3>
                  <p className="text-muted-foreground mb-4">Great for maintenance and touch-ups</p>
                  <div className="text-3xl font-bold text-two-trees-gold mb-1">$180</div>
                  <p className="text-sm text-muted-foreground mb-6">Starting price</p>
                  <Button 
                    className="w-full bg-two-trees-green hover:bg-two-trees-green/90"
                    onClick={() => handleBookingClick('Monthly Essential')}
                  >
                    Book Monthly Service
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Upgrade CTA */}
          <div className="mb-16 bg-two-trees-gold/10 border border-two-trees-gold/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-two-trees-green mb-4">
              Want More Than the Essentials?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Upgrade to our <strong>Signature Clean</strong> and get one rotating deep clean item every visit — your entire home gets a deep clean every 4.5 months, automatically.
            </p>
            <Link to="/services/signature-clean">
              <Button size="lg" className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-white">
                Explore Signature Clean
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Service Areas */}
          <div className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-6">
              Essential Clean Service Areas
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
              Ready for a Consistently Clean Home?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join over 200+ families who trust Two Trees Cleaning with their recurring housekeeping
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Essential Clean CTA')}
              >
                Start Your Essential Clean Today
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

export default EssentialClean;