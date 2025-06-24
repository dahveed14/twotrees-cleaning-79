
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";
import { updateMetaTags, generateCityKeywords } from "@/utils/metaTags";

const ServiceAreas = () => {
  useEffect(() => {
    const venturaCountyCoordinates = {
      latitude: "34.3705",
      longitude: "-119.1391"
    };

    updateMetaTags({
      title: "Ventura County House Cleaning Services | Two Trees Cleaning | All Areas Served",
      description: "Professional house cleaning services throughout Ventura County, CA. Serving Santa Barbara, Thousand Oaks, Oxnard, Camarillo, Ventura & more. Licensed & insured since 2020.",
      cityName: "Ventura County",
      cityCoordinates: venturaCountyCoordinates,
      url: "https://twotreescleaning.com/service-areas",
      keywords: [
        ...generateCityKeywords("Santa Barbara"),
        ...generateCityKeywords("Thousand Oaks"),
        ...generateCityKeywords("Oxnard"),
        ...generateCityKeywords("Camarillo"),
        ...generateCityKeywords("Ventura"),
        ...generateCityKeywords("Summerland"),
        ...generateCityKeywords("Carpinteria"),
        ...generateCityKeywords("Port Hueneme"),
        ...generateCityKeywords("Newbury Park"),
        ...generateCityKeywords("Westlake Village"),
        "Ventura County cleaning service",
        "house cleaning Ventura County"
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
    { name: "Service Areas", url: "https://twotreescleaning.com/service-areas" }
  ];

  const venturaCountyCoordinates = {
    latitude: "34.3705",
    longitude: "-119.1391"
  };

  const serviceAreas = [
    {
      name: "Santa Barbara",
      description: "Professional house cleaning services in Santa Barbara and surrounding areas.",
      highlights: ["Historic downtown", "Beach communities", "Residential neighborhoods"],
      href: "/santa-barbara"
    },
    {
      name: "Montecito",
      description: "Luxury home cleaning services for Montecito's exclusive estates.",
      highlights: ["Luxury estates", "Premium service", "Exclusive community"],
      href: "/montecito"
    },
    {
      name: "Summerland",
      description: "Specialized cleaning for beachside homes and coastal properties.",
      highlights: ["Beachfront homes", "Vacation rentals", "Coastal community"],
      href: "/summerland"
    },
    {
      name: "Carpinteria",
      description: "Family-friendly cleaning services for the 'World's Safest Beach' community.",
      highlights: ["Family neighborhoods", "Beach homes", "Safe community"],
      href: "/carpinteria"
    },
    {
      name: "Thousand Oaks",
      description: "Reliable cleaning services for Thousand Oaks families and businesses.",
      highlights: ["Family neighborhoods", "Conejo Valley", "Premium home cleaning"],
      href: "/thousand-oaks"
    },
    {
      name: "Newbury Park",
      description: "Trusted cleaning for suburban families in Conejo Valley.",
      highlights: ["Suburban homes", "Family-friendly", "Residential focus"],
      href: "/newbury-park"
    },
    {
      name: "Westlake Village",
      description: "Premium cleaning services for upscale homes and luxury properties.",
      highlights: ["Luxury homes", "Upscale community", "Premium service"],
      href: "/westlake-village"
    },
    {
      name: "Ventura",
      description: "Comprehensive cleaning services for Ventura's diverse neighborhoods.",
      highlights: ["Downtown areas", "Residential districts", "Family homes"],
      href: "/ventura"
    },
    {
      name: "Oxnard",
      description: "Trusted house cleaning in Oxnard with flexible scheduling.",
      highlights: ["Coastal communities", "Family-owned businesses", "Affordable rates"],
      href: "/oxnard"
    },
    {
      name: "Port Hueneme",
      description: "Reliable cleaning for military families and working professionals.",
      highlights: ["Military families", "Working professionals", "Affordable service"],
      href: "/port-hueneme"
    },
    {
      name: "Camarillo",
      description: "Detail-oriented cleaning services throughout Camarillo.",
      highlights: ["Suburban homes", "Family-friendly service", "Regular maintenance"],
      href: "/camarillo"
    },
    {
      name: "Ojai",
      description: "Personalized cleaning services for Ojai's unique community.",
      highlights: ["Artistic community", "Rural homes", "Personalized service"],
      href: "/ojai"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SchemaMarkup 
        cityName="Ventura County"
        cityCoordinates={venturaCountyCoordinates}
        breadcrumbs={breadcrumbData}
      />
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <Breadcrumbs 
        items={[
          { label: "Service Areas", current: true }
        ]} 
      />

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-two-trees-green mb-6">
              Professional House Cleaning Throughout Ventura County
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Two Trees Cleaning proudly serves families and businesses across Ventura County. 
              Licensed, insured, and trusted by over 200+ satisfied customers since 2020.
            </p>
          </div>

          {/* Service Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {serviceAreas.map((area) => (
              <Card key={area.name} className="hover:shadow-xl transition-shadow border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-two-trees-green text-xl">
                    <MapPin className="w-5 h-5" />
                    {area.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{area.description}</p>
                  <ul className="space-y-1">
                    {area.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-two-trees-gold rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 pt-3">
                    <Button 
                      size="sm"
                      className="bg-two-trees-green hover:bg-two-trees-green/90 text-xs"
                      onClick={() => handleBookingClick(`Service Areas - ${area.name}`)}
                    >
                      Book {area.name}
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 text-xs"
                      onClick={handlePhoneClick}
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-two-trees-green mb-4">
              Ready to Get Your Time Back?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join over 200+ satisfied customers across Ventura County who trust Two Trees Cleaning 
              with their homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-two-trees-green hover:bg-two-trees-green/90 px-8 py-4 text-lg"
                onClick={() => handleBookingClick('Service Areas CTA')}
              >
                Book Your Cleaning Today
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 px-8 py-4 text-lg"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                (805) 456-1421
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceAreas;
