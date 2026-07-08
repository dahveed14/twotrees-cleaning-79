
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Truck, CheckCircle, Home, X, AlertCircle, Star } from "lucide-react";
import { updateMetaTags } from "@/utils/metaTags";
import { Link } from "react-router-dom";

const MoveInMoveOut = () => {
  useEffect(() => {
    const venturaCountyCoordinates = {
      latitude: "34.3705",
      longitude: "-119.1391"
    };

    updateMetaTags({
      title: "Move In Move Out Cleaning Services | Two Trees Cleaning | Ventura County Moving Cleaners",
      description: "Professional move-in and move-out cleaning services in Ventura County. Make your transition smooth with thorough cleaning. Perfect for rentals, real estate, and relocations.",
      cityName: "Ventura County",
      cityCoordinates: venturaCountyCoordinates,
      url: "https://twotreescleaning.com/services/move-in-move-out",
      keywords: [
        "move out cleaning Ventura County",
        "move in cleaning service",
        "rental cleaning service",
        "end of lease cleaning",
        "real estate cleaning",
        "relocation cleaning service",
        "tenant cleaning Ventura County",
        "property cleaning service"
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
    { name: "Move In Move Out", url: "https://twotreescleaning.com/services/move-in-move-out" }
  ];

  const kitchenChecklist = [
    "Inside/outside refrigerator",
    "Oven and stovetop deep clean",
    "Inside microwave",
    "Dishwasher cleaning",
    "Cabinet fronts and insides",
    "Sink and faucet sanitizing",
    "Countertops and backsplash",
    "Range hood exterior",
    "Light switches and outlets"
  ];

  const bathroomChecklist = [
    "Toilet deep cleaning (inside & out)",
    "Shower/tub scrubbing",
    "Tile and grout cleaning",
    "Mirror and glass fixtures",
    "Sink and vanity cleaning (exterior)",
    "Cabinet cleaning inside and out",
    "Floor sanitization",
    "Light fixtures and exhaust fan"
  ];

  const throughoutChecklist = [
    "Baseboards and trim throughout",
    "Ceiling fans",
    "Window sills and tracks",
    "Light fixtures and switches",
    "Door frames (full clean)",
    "Closet cleaning (shelves and rods)",
    "Vacuum all carpets and rugs",
    "Mop all hard floors",
    "Dust all surfaces"
  ];

  const addOnServices = [
    { service: "Inside Refrigerator Cleaning", note: "Included in move-out by default" },
    { service: "Interior Window Cleaning", note: "Available add-on" },
    { service: "Blind/Shade Deep Cleaning ($50/set)", note: "Available add-on" },
    { service: "Garage Cleaning", note: "Available add-on" },
    { service: "Load of Laundry", note: "Available add-on" }
  ];

  const notIncluded = [
    "Personal organization or decluttering",
    "Exterior window cleaning",
    "Pet waste cleanup",
    "Biohazard cleanup",
    "Home repairs or maintenance",
    "Carpet shampooing or steam cleaning",
    "Furniture moving",
    "Outdoor area cleaning"
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
          { label: "Move In Move Out", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Move-In & Move-Out Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Make your move stress-free with our comprehensive cleaning services. Perfect for tenants, landlords, and real estate professionals who need properties spotless for transitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Move In Out Hero')}
              >
                Book Moving Cleaning - Starting at $200
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 px-8 py-4 text-lg"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                (805) 436-5868
              </Button>
            </div>
          </div>

          {/* Unified Moving Cleaning Service */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-12">
              Move-In/Move-Out Cleaning Service
            </h2>
            <div className="max-w-2xl mx-auto">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-two-trees-green text-center">
                    Moving Cleaning — Whether Coming or Going
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 text-center text-lg">
                    Whether you're getting your deposit back on move-out or starting fresh in a new home, we deliver the same comprehensive clean. Professional, thorough, and move-ready.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Deep clean all rooms",
                      "Inside appliances cleaning",
                      "Cabinet and drawer cleaning",
                      "Closet cleaning",
                      "Garage cleaning (if applicable)",
                      "Final walk-through ready"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-two-trees-green hover:bg-two-trees-green/90 mt-6 py-6 text-lg"
                    onClick={() => handleBookingClick('Move-In/Move-Out Cleaning')}
                  >
                    Book Your Moving Cleaning
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-4">
              Comprehensive Move-Out Cleaning Checklist
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Every move-out clean includes the following — room by room, surface by surface. No shortcuts.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green">Kitchen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {kitchenChecklist.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-two-trees-gold flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green">Bathrooms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {bathroomChecklist.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-two-trees-gold flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-two-trees-green">Throughout Home</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {throughoutChecklist.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-two-trees-gold flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Move-Out Cleaning Requirements */}
          <div className="mb-16">
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
              </div>
            </div>
          </div>

          {/* Available Add-Ons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-two-trees-green text-center mb-8">
              Available Add-Ons
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Customize your move-out clean with these additional services. Pricing available upon request.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {addOnServices.map((addon, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Star className="w-5 h-5 text-two-trees-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">{addon.service}</p>
                    <p className="text-xs text-gray-500">{addon.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What We Don't Include */}
          <div className="mb-16 bg-red-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-red-700 text-center mb-8">
              What We Don't Include
            </h2>
            <p className="text-center text-red-700/80 mb-6">
              We believe in complete transparency. The following are outside the scope of all Two Trees Cleaning services:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notIncluded.map((item, index) => (
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

          {/* Service Areas */}
          <div className="mb-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-two-trees-green text-center mb-6">
              Location-Specific Move-Out Cleaning Services
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Click for specialized move-out cleaning information for your area:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { name: "Santa Barbara Move-Out", href: "/santa-barbara/move-out-cleaning", description: "Luxury home & condo cleaning" },
                { name: "Ojai Move-Out", href: "/ojai/move-out-cleaning", description: "Eco-friendly & artistic space cleaning" },
                { name: "Oxnard Move-Out", href: "/oxnard/move-out-cleaning", description: "Affordable & reliable family service" },
                { name: "Santa Paula Move-Out", href: "/santa-paula/move-out-cleaning", description: "Rural & residential cleaning" },
                { name: "Ventura Move-Out", href: "/ventura/move-out-cleaning", description: "Historic & coastal property cleaning" },
                { name: "Camarillo Move-Out", href: "/camarillo/move-out-cleaning", description: "Professional family-focused service" },
                { name: "Thousand Oaks Move-Out", href: "/thousand-oaks/move-out-cleaning", description: "Conejo Valley family cleaning" },
                { name: "Westlake Village Move-Out", href: "/westlake-village/move-out-cleaning", description: "Luxury property specialists" }
              ].map((area) => (
                <Link
                  key={area.name}
                  to={area.href}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200 hover:border-two-trees-green/30"
                >
                  <h3 className="font-semibold text-two-trees-green mb-2">{area.name}</h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </Link>
              ))}
            </div>
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-two-trees-green text-center mb-4">
                All Service Areas
              </h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                {[
                  { name: "Santa Barbara", href: "/santa-barbara" },
                  { name: "Montecito", href: "/montecito" },
                  { name: "Thousand Oaks", href: "/thousand-oaks" },
                  { name: "Westlake Village", href: "/westlake-village" },
                  { name: "Oxnard", href: "/oxnard" },
                  { name: "Camarillo", href: "/camarillo" },
                  { name: "Ventura", href: "/ventura" },
                  { name: "Ojai", href: "/ojai" },
                  { name: "Santa Paula", href: "/santa-paula" },
                  { name: "Summerland", href: "/summerland" },
                  { name: "Carpinteria", href: "/carpinteria" },
                  { name: "Port Hueneme", href: "/port-hueneme" }
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
          </div>

          {/* CTA Section */}
          <div className="bg-two-trees-green text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Make Your Move Stress-Free
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us handle the cleaning so you can focus on your move
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-4 text-lg font-semibold"
                onClick={() => handleBookingClick('Move In Out CTA')}
              >
                Book Your Moving Clean Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
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

export default MoveInMoveOut;
