import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Phone, CheckCircle, Star, BookOpen, ArrowRight, RotateCcw, Crown } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const SignatureClean = () => {
  const [activeRotationVisit, setActiveRotationVisit] = useState(0);

  useEffect(() => {
    updateMetaTags({
      title: "Signature Clean | Essential + Rotating Deep Clean | Two Trees Cleaning | Ventura County",
      description: "Our most popular tier. Essential Clean plus one rotating deep clean item every visit. Your entire home gets deep cleaned every 4.5 months, automatically. Ventura County.",
      cityName: "Ventura County",
      cityCoordinates: { latitude: "34.3705", longitude: "-119.1391" },
      url: "https://twotreescleaning.com/services/signature-clean",
      keywords: [
        "signature cleaning service Ventura County",
        "recurring deep cleaning",
        "rotating deep clean",
        "best house cleaning service",
        "premium recurring cleaning Ventura County"
      ]
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRotationVisit((prev) => (prev + 1) % 9);
    }, 3000);
    return () => clearInterval(interval);
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
    { name: "Signature Clean", url: "https://twotreescleaning.com/services/signature-clean" }
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

  const rotationSchedule = [
    { visit: 1, area: "Throughout Home", item: "Baseboards" },
    { visit: 2, area: "Throughout Home", item: "Ceiling Fans" },
    { visit: 3, area: "Kitchen", item: "Cabinet Fronts (Full Clean)" },
    { visit: 4, area: "Bathrooms", item: "Shower Tile & Grout Scrubbing" },
    { visit: 5, area: "Throughout Home", item: "Window Sills" },
    { visit: 6, area: "Throughout Home", item: "Light Fixtures" },
    { visit: 7, area: "Throughout Home", item: "Door Frames (Full Clean)" },
    { visit: 8, area: "Throughout Home", item: "Light Switches & Outlets (Full)" },
    { visit: 9, area: "Kitchen", item: "Inside Oven" }
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
          { label: "Signature Clean", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block bg-two-trees-gold text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
              MOST POPULAR
            </div>
            <div className="w-16 h-16 bg-two-trees-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-two-trees-gold" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Signature Clean
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              Essential Clean + one rotating deep clean item every visit.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              The smart middle ground for homeowners who care about the details without paying for a full deep clean every visit. Your entire home gets a deep clean every 4.5 months, automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-white px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Signature Clean Hero')}
              >
                Book Signature Clean
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

          {/* Essential Base */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-4">
              Everything in Essential Clean
            </h2>
            <p className="text-center text-muted-foreground mb-10">Every Signature Clean visit starts with the full Essential Clean:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {essentialItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rotation Schedule */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-4">
              Plus One Deep Clean Item Per Visit
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Each visit, your cleaner tackles one predetermined deep clean item from a fixed 9-visit rotation. The order never changes, so your home is systematically maintained over time.
            </p>

            {/* Animated Preview */}
            <Card className="border-2 border-two-trees-gold/30 shadow-lg mb-8 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <p className="text-xs text-muted-foreground mb-3 font-medium flex items-center gap-1">
                  <RotateCcw className="w-3 h-3" />
                  Live rotation preview:
                </p>
                <div className="space-y-1">
                  {rotationSchedule.map((r, i) => (
                    <div 
                      key={i} 
                      className={`flex items-center justify-between text-sm px-3 py-2 rounded transition-all duration-500 ${
                        i === activeRotationVisit 
                          ? 'bg-two-trees-gold/20 text-primary font-semibold scale-[1.02]' 
                          : 'text-muted-foreground'
                      }`}
                    >
                      <span>Visit {r.visit}: {r.item}</span>
                      <span className="text-xs opacity-70">{r.area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Full Table */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold text-primary">Visit</TableHead>
                    <TableHead className="font-semibold text-primary">Area</TableHead>
                    <TableHead className="font-semibold text-primary">Deep Clean Item</TableHead>
                    <TableHead className="font-semibold text-primary text-right">Frequency (Bi-Weekly)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rotationSchedule.map((r, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">Visit {r.visit}</TableCell>
                      <TableCell className="text-muted-foreground">{r.area}</TableCell>
                      <TableCell>{r.item}</TableCell>
                      <TableCell className="text-right text-muted-foreground">~2× per year</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-4 italic">
              You'll receive a heads-up message before each visit letting you know which deep clean item is scheduled.
            </p>
          </div>

          {/* Tier Navigation */}
          <div className="mb-16 grid md:grid-cols-2 gap-6">
            <Card className="border-none shadow-lg p-6 text-center">
              <h3 className="text-lg font-bold text-two-trees-green mb-2">Need Something Simpler?</h3>
              <p className="text-muted-foreground text-sm mb-4">Our Essential Clean covers all the core tasks without deep clean extras.</p>
              <Link to="/services/essential-clean">
                <Button variant="outline" className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green hover:text-white">
                  View Essential Clean
                </Button>
              </Link>
            </Card>
            <Card className="border-none shadow-lg bg-primary text-primary-foreground p-6 text-center">
              <h3 className="text-lg font-bold mb-2">Want Everything Done at Once?</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">Our Total Deep Clean covers every deep clean item in a single visit.</p>
              <Link to="/services/total-deep-clean">
                <Button className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-white">
                  View Total Deep Clean
                  <Crown className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </Card>
          </div>

          {/* Service Areas */}
          <div className="mb-16 bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-6">
              Signature Clean Service Areas
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
              Ready for a Smarter Clean?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              The Signature Clean is our most popular tier for a reason — the best value for a consistently detailed home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Signature Clean CTA')}
              >
                Start Your Signature Clean Today
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

export default SignatureClean;