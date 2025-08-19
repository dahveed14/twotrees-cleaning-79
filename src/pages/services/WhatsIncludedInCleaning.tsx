import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, CheckCircle, X, Star, BookOpen, AlertCircle } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const WhatsIncludedInCleaning = () => {
  useEffect(() => {
    const venturaCountyCoordinates = {
      latitude: "34.3705",
      longitude: "-119.1391"
    };

    updateMetaTags({
      title: "What's Included in House Cleaning Services | Two Trees Cleaning Guide",
      description: "Comprehensive guide to what's included and not included in our cleaning services. Compare Regular, Deep, Move-Out, Post-Construction, and Commercial cleaning services.",
      cityName: "Ventura County",
      cityCoordinates: venturaCountyCoordinates,
      url: "https://twotreescleaning.com/services/whats-included-in-cleaning",
      keywords: [
        "house cleaning services included",
        "what's included cleaning service",
        "cleaning service comparison",
        "house cleaning checklist",
        "cleaning service guide",
        "Two Trees Cleaning services",
        "Ventura County cleaning guide"
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
    { name: "Services", url: "https://twotreescleaning.com/services" },
    { name: "What's Included", url: "https://twotreescleaning.com/services/whats-included-in-cleaning" }
  ];

  // Service comparison data
  const cleaningTasks = [
    // Kitchen Tasks
    { category: "Kitchen", task: "Wipe down countertops", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "Kitchen", task: "Clean sink and faucet", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "Kitchen", task: "Exterior appliance cleaning", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "Kitchen", task: "Inside microwave cleaning", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "Kitchen", task: "Cabinet fronts and handles", regular: "spot", firstTime: true, moveout: true, construction: true },
    { category: "Kitchen", task: "Inside refrigerator cleaning", regular: "addon", firstTime: "addon", moveout: true, construction: true },
    { category: "Kitchen", task: "Inside oven cleaning", regular: "addon", firstTime: "addon", moveout: true, construction: true },
    { category: "Kitchen", task: "Range Hood Exterior Cleaning", regular: true, firstTime: true, moveout: true, construction: true },
    
    // Bathroom Tasks
    { category: "Bathroom", task: "Toilet cleaning (inside & out)", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "Bathroom", task: "Shower/tub cleaning", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "Bathroom", task: "Mirror and glass cleaning", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "Bathroom", task: "Sink and vanity cleaning", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "Bathroom", task: "Tile and grout scrubbing", regular: false, firstTime: true, moveout: true, construction: true },
    
    // Living Areas
    { category: "Living Areas", task: "Vacuum carpets/rugs", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "Living Areas", task: "Mop hard floors", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "Living Areas", task: "Dust furniture surfaces", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "Living Areas", task: "Vacuum upholstered furniture", regular: "addon", firstTime: "addon", moveout: "addon", construction: true },
    { category: "Living Areas", task: "Ceiling fan cleaning", regular: false, firstTime: true, moveout: true, construction: true },
    
    // Bedrooms
    { category: "Bedrooms", task: "Make beds (if linens present)", regular: true, firstTime: true, moveout: false, construction: false },
    { category: "Bedrooms", task: "Vacuum floors", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "Bedrooms", task: "Dust surfaces", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "Bedrooms", task: "Closet cleaning", regular: false, firstTime: false, moveout: true, construction: false },
    
    // General Tasks
    { category: "General", task: "Empty trash bins", regular: true, firstTime: true, moveout: true, construction: true },
    { category: "General", task: "Light switch/outlet cleaning", regular: "spot", firstTime: true, moveout: true, construction: true },
    { category: "General", task: "Door frames and handles", regular: "spot", firstTime: true, moveout: true, construction: true },
    { category: "General", task: "Window sill cleaning", regular: false, firstTime: true, moveout: true, construction: true },
    { category: "General", task: "Interior windows", regular: "addon", firstTime: "addon", moveout: "addon", construction: true },
    { category: "General", task: "Light fixture cleaning", regular: false, firstTime: true, moveout: true, construction: true },
    { category: "General", task: "Blind/shade cleaning", regular: false, firstTime: true, moveout: true, construction: false },
    
    // Construction Specific
    { category: "Construction", task: "Dust removal from all surfaces", regular: false, firstTime: false, moveout: false, construction: true },
    { category: "Construction", task: "Construction debris cleanup", regular: false, firstTime: false, moveout: false, construction: true },
    { category: "Construction", task: "Paint overspray removal", regular: false, firstTime: false, moveout: false, construction: true },
  ];

  const getStatusIcon = (status: boolean | string) => {
    if (status === true) return <CheckCircle className="w-4 h-4 text-green-600" />;
    if (status === false) return <X className="w-4 h-4 text-red-500" />;
    if (status === "addon") return <Star className="w-4 h-4 text-amber-500" />;
    if (status === "spot") return <CheckCircle className="w-4 h-4 text-blue-500" />;
    return <X className="w-4 h-4 text-red-500" />;
  };

  const getStatusText = (status: boolean | string) => {
    if (status === true) return "Included";
    if (status === false) return "Not Included";
    if (status === "addon") return "Add-On";
    if (status === "spot") return "Spot Clean";
    return "Not Included";
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
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <BookOpen className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              What's Included in a Cleaning?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive guide to understanding exactly what's included (and what's not) in each of our cleaning services. No surprises, just transparent service expectations.
            </p>
          </div>

          {/* Service Comparison Table */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Service Comparison Chart
            </h2>
            
            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span className="text-sm">Spot Clean Only</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500" />
                <span className="text-sm">Available Add-On</span>
              </div>
              <div className="flex items-center gap-2">
                <X className="w-4 h-4 text-red-500" />
                <span className="text-sm">Not Included</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold text-primary">Task</TableHead>
                    <TableHead className="text-center font-semibold text-primary">Regular</TableHead>
                    <TableHead className="text-center font-semibold text-primary">First Time</TableHead>
                    <TableHead className="text-center font-semibold text-primary">Move-Out</TableHead>
                    <TableHead className="text-center font-semibold text-primary">Post-Construction</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(
                    cleaningTasks.reduce((acc, task) => {
                      if (!acc[task.category]) acc[task.category] = [];
                      acc[task.category].push(task);
                      return acc;
                    }, {} as Record<string, typeof cleaningTasks>)
                  ).map(([category, tasks]) => (
                    <>
                      <TableRow key={category} className="bg-gray-50">
                        <TableCell colSpan={5} className="font-semibold text-primary text-center py-3">
                          {category}
                        </TableCell>
                      </TableRow>
                      {tasks.map((task, index) => (
                        <TableRow key={`${category}-${index}`}>
                          <TableCell className="font-medium">{task.task}</TableCell>
                          <TableCell className="text-center">
                            <div className="flex flex-col items-center gap-1">
                              {getStatusIcon(task.regular)}
                              <span className="text-xs text-muted-foreground">
                                {getStatusText(task.regular)}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex flex-col items-center gap-1">
                              {getStatusIcon(task.firstTime)}
                              <span className="text-xs text-muted-foreground">
                                {getStatusText(task.firstTime)}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex flex-col items-center gap-1">
                              {getStatusIcon(task.moveout)}
                              <span className="text-xs text-muted-foreground">
                                {getStatusText(task.moveout)}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex flex-col items-center gap-1">
                              {getStatusIcon(task.construction)}
                              <span className="text-xs text-muted-foreground">
                                {getStatusText(task.construction)}
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Service Breakdown Cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Service Details & Expectations
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Regular House Cleaning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Perfect for maintaining a clean home on a regular basis.</p>
                  <div>
                    <h4 className="font-semibold mb-2">Always Included:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• All basic cleaning tasks</li>
                      <li>• Kitchen and bathroom cleaning</li>
                      <li>• Vacuuming and mopping</li>
                      <li>• Dusting surfaces</li>
                      <li>• Trash removal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time Required:</h4>
                    <p className="text-sm text-muted-foreground">1-3 hours depending on home size</p>
                  </div>
                  <Link to="/services/regular-house-cleaning">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">First Time Cleaning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Comprehensive top-to-bottom cleaning for special occasions or first-time service.</p>
                  <div>
                    <h4 className="font-semibold mb-2">Always Included:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Everything in regular cleaning</li>
                      <li>• Detailed scrubbing and sanitizing</li>
                      <li>• Light fixtures and ceiling fans</li>
                      <li>• Inside microwave cleaning</li>
                      <li>• Range hood exterior cleaning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time Required:</h4>
                    <p className="text-sm text-muted-foreground">3-6 hours depending on home size</p>
                  </div>
                  <Link to="/services/deep-cleaning">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Move-In/Move-Out Cleaning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Thorough cleaning for property transitions.</p>
                  <div>
                    <h4 className="font-semibold mb-2">Always Included:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Deep cleaning of all areas</li>
                      <li>• Inside appliance cleaning</li>
                      <li>• Cabinet interior cleaning</li>
                      <li>• Detailed sanitizing</li>
                      <li>• Window sill cleaning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time Required:</h4>
                    <p className="text-sm text-muted-foreground">4-8 hours depending on condition</p>
                  </div>
                  <Link to="/services/move-in-move-out">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Post-Construction Cleaning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">Specialized cleaning after renovation or construction work.</p>
                  <div>
                    <h4 className="font-semibold mb-2">Always Included:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Construction dust removal</li>
                      <li>• Debris and material cleanup</li>
                      <li>• Paint overspray removal</li>
                      <li>• Deep sanitizing</li>
                      <li>• Window cleaning (interior)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Time Required:</h4>
                    <p className="text-sm text-muted-foreground">4-12 hours depending on scope</p>
                  </div>
                  <Link to="/services/post-construction">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* What We DON'T Do Section */}
          <div className="mb-16 bg-red-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-red-700 text-center mb-8">
              What We DON'T Include
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Personal organization/decluttering",
                "Exterior window cleaning",
                "Pet waste cleanup",
                "Biohazard cleanup",
                "Home repairs or maintenance",
                "Laundry or ironing",
                "Dish washing (unless empty)",
                "Carpet shampooing",
                "Furniture moving"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-red-800">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-red-700 text-sm">
                Some of these services may be available as special add-ons. Contact us for custom requests.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
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
                <AccordionTrigger>Can I request specific tasks not on the list?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes! Many additional services are available as add-ons. Contact us to discuss custom cleaning needs and we'll provide a quote for additional services.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Do you bring your own cleaning supplies?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, we bring all necessary cleaning supplies and equipment. We use professional-grade, eco-friendly products. If you have specific product preferences, please let us know in advance.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How long does each type of cleaning take?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Regular cleaning: 1-3 hours, Deep cleaning: 3-6 hours, Move-out cleaning: 4-8 hours, Post-construction: 4-12 hours. Times vary based on home size, condition, and specific requirements.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Next Steps Section */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Book Your Service?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Now that you know what's included, choose the perfect cleaning service for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Whats Included CTA')}
              >
                Book Your Cleaning Today
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg font-semibold"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (805) 456-1421
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <Link to="/services" className="text-primary-foreground hover:text-secondary transition-colors">
                <div className="text-center">
                  <h3 className="font-semibold">All Services</h3>
                  <p className="text-sm opacity-75">Browse all cleaning options</p>
                </div>
              </Link>
              <Link to="/service-areas" className="text-primary-foreground hover:text-secondary transition-colors">
                <div className="text-center">
                  <h3 className="font-semibold">Service Areas</h3>
                  <p className="text-sm opacity-75">Check if we serve your area</p>
                </div>
              </Link>
              <Link to="/contact" className="text-primary-foreground hover:text-secondary transition-colors">
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