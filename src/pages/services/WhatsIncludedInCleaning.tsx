import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, CheckCircle, X, Star, BookOpen, AlertCircle, Sparkles, RotateCcw, Crown } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const WhatsIncludedInCleaning = () => {
  const [activeRotationVisit, setActiveRotationVisit] = useState(0);

  useEffect(() => {
    updateMetaTags({
      title: "What's Included in House Cleaning Services | Two Trees Cleaning Guide",
      description: "Choose the clean that fits your home. Compare our Essential, Signature, and Total Deep Clean tiers. No mandatory deep clean required. Transparent, honest service.",
      cityName: "Ventura County",
      cityCoordinates: { latitude: "34.3705", longitude: "-119.1391" },
      url: "https://twotreescleaning.com/services/whats-included-in-cleaning",
      keywords: [
        "house cleaning services included",
        "cleaning service tiers",
        "essential cleaning service",
        "signature cleaning service",
        "deep cleaning service",
        "cleaning service comparison",
        "Two Trees Cleaning services"
      ]
    });
  }, []);

  // Auto-rotate the signature clean visits
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
    { name: "What's Included", url: "https://twotreescleaning.com/services/whats-included-in-cleaning" }
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
    { visit: 4, area: "Bathrooms", item: "Tile & Grout Scrubbing" },
    { visit: 5, area: "Throughout Home", item: "Window Sills" },
    { visit: 6, area: "Throughout Home", item: "Light Fixtures" },
    { visit: 7, area: "Throughout Home", item: "Door Frames (Full Clean)" },
    { visit: 8, area: "Throughout Home", item: "Light Switches & Outlets (Full)" },
    { visit: 9, area: "Kitchen", item: "Inside Oven" }
  ];

  const deepCleanItems = rotationSchedule.map(r => r.item);

  const addOnServices = [
    { service: "Inside Refrigerator Cleaning", availability: "All Tiers" },
    { service: "Inside Oven Cleaning*", availability: "Essential & Signature only" },
    { service: "Interior Window Cleaning", availability: "All Tiers" },
    { service: "Vacuum Upholstered Furniture", availability: "All Tiers" },
    { service: "Blind/Shade Deep Cleaning ($50/set)", availability: "All Tiers" },
    { service: "Load of Laundry", availability: "All Tiers" },
    { service: "Dishes", availability: "All Tiers" }
  ];

  const comparisonTasks = [
    { task: "Wipe down countertops", essential: "included", signature: "included", deep: "included" },
    { task: "Clean sink & faucet", essential: "included", signature: "included", deep: "included" },
    { task: "Exterior appliance cleaning", essential: "included", signature: "included", deep: "included" },
    { task: "Inside microwave", essential: "included", signature: "included", deep: "included" },
    { task: "Range hood exterior", essential: "included", signature: "included", deep: "included" },
    { task: "Toilet cleaning", essential: "included", signature: "included", deep: "included" },
    { task: "Shower/tub cleaning", essential: "included", signature: "included", deep: "included" },
    { task: "Mirror & glass cleaning", essential: "included", signature: "included", deep: "included" },
    { task: "Sink & vanity (exterior)", essential: "included", signature: "included", deep: "included" },
    { task: "Vacuum carpets/rugs", essential: "included", signature: "included", deep: "included" },
    { task: "Mop hard floors", essential: "included", signature: "included", deep: "included" },
    { task: "Dust furniture surfaces", essential: "included", signature: "included", deep: "included" },
    { task: "Make beds", essential: "included", signature: "included", deep: "included" },
    { task: "Empty trash bins", essential: "included", signature: "included", deep: "included" },
    { task: "Baseboards", essential: "not", signature: "visit1", deep: "included" },
    { task: "Ceiling fans", essential: "not", signature: "visit2", deep: "included" },
    { task: "Cabinet fronts (full)", essential: "not", signature: "visit3", deep: "included" },
    { task: "Tile & grout scrubbing", essential: "not", signature: "visit4", deep: "included" },
    { task: "Window sills", essential: "not", signature: "visit5", deep: "included" },
    { task: "Light fixtures", essential: "not", signature: "visit6", deep: "included" },
    { task: "Door frames (full)", essential: "not", signature: "visit7", deep: "included" },
    { task: "Light switches & outlets", essential: "not", signature: "visit8", deep: "included" },
    { task: "Inside oven", essential: "not", signature: "visit9", deep: "included" }
  ];

  const getComparisonIcon = (status: string) => {
    if (status === "included") return <CheckCircle className="w-5 h-5 text-green-600" />;
    if (status === "not") return <span className="text-muted-foreground">—</span>;
    if (status.startsWith("visit")) return (
      <div className="flex items-center gap-1">
        <RotateCcw className="w-4 h-4 text-two-trees-gold" />
        <span className="text-xs text-two-trees-gold font-medium">Visit {status.replace("visit", "")}</span>
      </div>
    );
    return null;
  };

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup 
        cityName="Ventura County"
        cityCoordinates={{ latitude: "34.3705", longitude: "-119.1391" }}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Services", href: "/services" },
          { label: "What's Included", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Choose the Clean That Fits Your Home.
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              No mandatory deep clean required. No surprises. Just honest, transparent service — done right, every time.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              At Two Trees Cleaning, we believe you should be in control. That's why we offer three distinct service tiers — each clearly defined, professionally delivered, and priced for what you actually need.
            </p>
          </div>

          {/* Three Tier Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Essential Clean */}
            <Card className="border-2 border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardHeader className="text-center pb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">Essential Clean</CardTitle>
                <p className="text-sm text-two-trees-gold font-semibold mt-2">
                  Everything your home needs, done consistently — every visit.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  For clients who maintain a generally tidy home and want reliable, professional upkeep on a recurring schedule. This is the entry point — not the lesser option.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary">What's Included:</h4>
                  <ul className="space-y-1.5">
                    {essentialItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground italic">
                    Baseboards, ceiling fans, cabinet fronts, tile & grout, window sills, light fixtures, door frames, light switches, and inside oven are not included. These are covered in the Signature Clean rotation or the Total Deep Clean.
                  </p>
                </div>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => handleBookingClick('Essential Clean Card')}
                >
                  Get a Quote
                </Button>
              </CardContent>
            </Card>

            {/* Signature Clean */}
            <Card className="border-2 border-two-trees-gold shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in relative" style={{ animationDelay: "0.1s" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-two-trees-gold text-white text-xs font-bold px-4 py-1 rounded-full">
                MOST POPULAR
              </div>
              <CardHeader className="text-center pb-4">
                <div className="w-14 h-14 bg-two-trees-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-7 h-7 text-two-trees-gold" />
                </div>
                <CardTitle className="text-2xl text-primary">Signature Clean</CardTitle>
                <p className="text-sm text-two-trees-gold font-semibold mt-2">
                  Essential Clean + one rotating deep clean item every visit.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our most popular tier. The smart middle ground for homeowners who care about the details without paying for a full deep clean every visit. Your entire home gets a deep clean every 4.5 months, automatically.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary">Includes everything in Essential, plus:</h4>
                  <p className="text-sm text-muted-foreground">
                    One predetermined deep clean item per visit from a 9-visit rotation. On biweekly service, every deep clean item is completed twice per year.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-2 font-medium">
                    <RotateCcw className="w-3 h-3 inline mr-1" />
                    Current rotation preview:
                  </p>
                  <div className="space-y-1">
                    {rotationSchedule.map((r, i) => (
                      <div 
                        key={i} 
                        className={`flex items-center justify-between text-xs px-2 py-1 rounded transition-all duration-500 ${
                          i === activeRotationVisit 
                            ? 'bg-two-trees-gold/20 text-primary font-semibold scale-[1.02]' 
                            : 'text-muted-foreground'
                        }`}
                      >
                        <span>Visit {r.visit}: {r.item}</span>
                        <span className="text-[10px] opacity-70">{r.area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground italic">
                  You'll receive a heads-up message before each visit letting you know which deep clean item is scheduled.
                </p>
                <Button 
                  className="w-full bg-two-trees-gold hover:bg-two-trees-gold/90 text-white"
                  onClick={() => handleBookingClick('Signature Clean Card')}
                >
                  Get a Quote
                </Button>
              </CardContent>
            </Card>

            {/* Total Deep Clean */}
            <Card className="border-2 border-primary bg-primary text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="text-center pb-4">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-7 h-7 text-two-trees-gold" />
                </div>
                <CardTitle className="text-2xl text-primary-foreground">Total Deep Clean</CardTitle>
                <p className="text-sm text-two-trees-gold font-semibold mt-2">
                  Every deep clean item. Every surface. One visit. The complete reset.
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-primary-foreground/80">
                  Ideal for move-ins, seasonal resets, post-renovation refresh, or homeowners who simply want the best. No compromises, no rotation — everything done at once.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-primary-foreground">Everything in Essential, plus all 9 deep items:</h4>
                  <ul className="space-y-1.5">
                    {deepCleanItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-primary-foreground/80">
                        <CheckCircle className="w-4 h-4 text-two-trees-gold flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-xs text-primary-foreground/60 italic">
                    Does not include inside refrigerator cleaning. Available as an add-on.
                  </p>
                </div>
                <Button 
                  className="w-full bg-two-trees-gold hover:bg-two-trees-gold/90 text-primary font-semibold"
                  onClick={() => handleBookingClick('Total Deep Clean Card')}
                >
                  Get a Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Signature Clean Rotation Detail */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-4">
              How the Signature Clean Rotation Works
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
              Every visit, your cleaner completes your full Essential Clean plus one predetermined deep clean item. The order never changes, so your home is systematically maintained over time.
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold text-primary">Visit</TableHead>
                    <TableHead className="font-semibold text-primary">Area</TableHead>
                    <TableHead className="font-semibold text-primary">Deep Clean Item</TableHead>
                    <TableHead className="font-semibold text-primary text-right">Frequency</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rotationSchedule.map((r, i) => (
                    <TableRow 
                      key={i} 
                      className={`cursor-pointer transition-all duration-300 ${
                        i === activeRotationVisit ? 'bg-two-trees-gold/10' : ''
                      }`}
                      onClick={() => setActiveRotationVisit(i)}
                    >
                      <TableCell className="font-semibold text-primary">{r.visit}</TableCell>
                      <TableCell className="text-muted-foreground">{r.area}</TableCell>
                      <TableCell className="font-medium">{r.item}</TableCell>
                      <TableCell className="text-right text-sm text-muted-foreground">Every 9 visits</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-4 italic">
              On biweekly service, every deep clean item is completed twice per year.
            </p>
          </div>

          {/* Full Comparison Chart */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-4">
              Service Comparison Chart
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              See exactly what's included in each tier at a glance.
            </p>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Included</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-two-trees-gold" />
                <span className="text-sm">Rotating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">—</span>
                <span className="text-sm">Not Included</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold text-primary">Task</TableHead>
                    <TableHead className="text-center font-semibold text-primary">Essential</TableHead>
                    <TableHead className="text-center font-semibold text-two-trees-gold">Signature</TableHead>
                    <TableHead className="text-center font-semibold text-primary">Total Deep</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonTasks.map((t, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{t.task}</TableCell>
                      <TableCell className="text-center">{getComparisonIcon(t.essential)}</TableCell>
                      <TableCell className="text-center">{getComparisonIcon(t.signature)}</TableCell>
                      <TableCell className="text-center">{getComparisonIcon(t.deep)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Add-Ons */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Available Add-Ons
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              The following services are available as add-ons across all three tiers. Pricing available upon request.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {addOnServices.map((addon, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <Star className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">{addon.service}</p>
                    <p className="text-xs text-muted-foreground">{addon.availability}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4 italic">
              * Inside Oven Cleaning is included in the Total Deep Clean at no extra charge.
            </p>
          </div>

          {/* Move-Out Cleaning Requirements Section */}
          <div className="mb-20">
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-amber-800 mb-2">
                    Move-Out Cleaning Requirements
                  </h2>
                  <p className="text-amber-700">
                    Please read these requirements carefully to ensure your move-out cleaning goes smoothly and avoid cancellation fees.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    The Home Must Be Completely Empty
                  </h3>
                  <p className="text-gray-700 mb-3">
                    For our cleaners to do their best work, the home must be completely empty with no one inside moving or packing. This includes:
                  </p>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>• All cupboards, fridge, and storage spaces must be cleared</li>
                    <li>• No garbage should remain in the property</li>
                    <li>• No belongings or furniture should be present</li>
                    <li>• No movers or other people should be on-site during cleaning</li>
                  </ul>
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 font-medium text-sm">
                      ⚠️ If movers are present or belongings remain, our team will leave and a same-day cancellation fee of $79 will apply.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Running Water and Electricity Required
                  </h3>
                  <p className="text-gray-700">
                    The property must have running water and electricity for our cleaning equipment and supplies to work properly.
                  </p>
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 font-medium text-sm">
                      ⚠️ Failure to provide water or electricity will result in a cancellation fee of $79.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">
                    Important Notes About Our Service
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>• Our cleaners do not remove garbage or clean fridges with items inside</p>
                    <p>• Two Trees Cleaning is not responsible for cleaning metal vertical blinds</p>
                    <p>• Horizontal blinds will receive light dusting only</p>
                    <p>• Deep blind cleaning is available for $50 per set if heavily soiled</p>
                    <p>• No refunds or price reductions will be provided due to restricted access caused by unprepared spaces</p>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-amber-700 font-medium mb-4">
                    Questions about move-out cleaning requirements? Contact us before your scheduled appointment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={handlePhoneClick}
                      className="bg-amber-600 hover:bg-amber-700 text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (805) 436-5868
                    </Button>
                    <Link to="/services/move-in-move-out">
                      <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                        View Move-Out Service Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What We DON'T Include */}
          <div className="mb-20 bg-red-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-red-700 text-center mb-8">
              What We Don't Include
            </h2>
            <p className="text-center text-red-700/80 mb-6">
              We believe in complete transparency. The following are outside the scope of all Two Trees Cleaning services:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Personal organization or decluttering",
                "Exterior window cleaning",
                "Pet waste cleanup",
                "Biohazard cleanup",
                "Home repairs or maintenance",
                "Carpet shampooing or steam cleaning",
                "Furniture moving",
                "Garage or basement cleaning",
                "Outdoor area cleaning"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-red-800">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-red-700 text-sm">
                Need something not on the list? <Link to="/contact" className="underline hover:no-underline font-medium">Contact us</Link> — we're happy to discuss custom requests.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I prepare my home for cleaning?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Clear surfaces of personal items, secure valuables, pick up clutter, and ensure we have access to all areas you want cleaned. For pet owners, please secure pets during service.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>What if something isn't cleaned to my satisfaction?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We offer a 24-hour satisfaction guarantee. If you're not happy with any aspect of our service, contact us within 24 hours and we'll return to address the issue at no charge.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Do I have to start with a deep clean?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    No! That's the beauty of our tier system. You can start with any tier that fits your needs. The Essential Clean is a great entry point, and the Signature Clean gradually deep cleans your home over time without a large upfront cost.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>How does the Signature Clean rotation work?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Each visit, your cleaner completes the full Essential Clean plus one deep clean item from a fixed 9-visit schedule. The order never changes, so every area of your home gets deep cleaned systematically. On biweekly service, each item is completed twice per year.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>Do you bring your own cleaning supplies?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, we bring all necessary cleaning supplies and equipment. We use professional-grade, eco-friendly products. If you have specific product preferences, please let us know in advance.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* CTA Section */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Choose your tier and book your first clean today. No contracts, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Whats Included CTA')}
              >
                Get a Quote
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-primary border-2 border-white hover:bg-transparent hover:text-white px-8 py-4 text-lg font-semibold"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (805) 436-5868
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Link to="/services" className="text-primary-foreground hover:text-secondary transition-colors underline hover:no-underline">
                <div className="text-center">
                  <h3 className="font-semibold">All Services</h3>
                  <p className="text-sm opacity-75">Browse all cleaning options</p>
                </div>
              </Link>
              <Link to="/service-areas" className="text-primary-foreground hover:text-secondary transition-colors underline hover:no-underline">
                <div className="text-center">
                  <h3 className="font-semibold">Service Areas</h3>
                  <p className="text-sm opacity-75">Check if we serve your area</p>
                </div>
              </Link>
              <Link to="/contact" className="text-primary-foreground hover:text-secondary transition-colors underline hover:no-underline">
                <div className="text-center">
                  <h3 className="font-semibold">Custom Quote</h3>
                  <p className="text-sm opacity-75">Need something specific?</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WhatsIncludedInCleaning;
