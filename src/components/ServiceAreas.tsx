import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const ServiceAreas = () => {
  const serviceAreas = [
    { name: "Santa Barbara", href: "/santa-barbara", description: "Professional house cleaning in the beautiful coastal city" },
    { name: "Thousand Oaks", href: "/thousand-oaks", description: "Reliable cleaning services for busy families" },
    { name: "Ventura", href: "/ventura", description: "Top-rated cleaning company serving downtown and surrounding areas" },
    { name: "Oxnard", href: "/oxnard", description: "Quality house cleaning for homes and apartments" },
    { name: "Camarillo", href: "/camarillo", description: "Trusted cleaning services for residential properties" },
    { name: "Ojai", href: "/ojai", description: "Eco-friendly cleaning in the heart of the valley" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(var(--primary))] mb-6">
            Serving All of Ventura County
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We proudly serve <Link to="/santa-barbara" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-glow))] transition-colors underline">Santa Barbara</Link>, <Link to="/thousand-oaks" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-glow))] transition-colors underline">Thousand Oaks</Link>, <Link to="/ventura" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-glow))] transition-colors underline">Ventura</Link>, <Link to="/oxnard" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-glow))] transition-colors underline">Oxnard</Link>, <Link to="/camarillo" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-glow))] transition-colors underline">Camarillo</Link>, <Link to="/ojai" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-glow))] transition-colors underline">Ojai</Link>, and surrounding areas with professional house cleaning services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceAreas.map((area) => (
            <Card key={area.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[hsl(var(--primary))] mb-2 group-hover:text-[hsl(var(--primary-glow))] transition-colors">
                      <Link to={area.href} className="hover:underline">
                        {area.name}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    <Link 
                      to={area.href}
                      className="inline-flex items-center text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-glow))] font-medium transition-colors group"
                    >
                      View Services
                      <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/service-areas"
            className="inline-flex items-center px-8 py-4 bg-[hsl(var(--primary))] text-white rounded-lg hover:bg-[hsl(var(--primary-glow))] transition-colors font-medium shadow-lg hover:shadow-xl"
          >
            View All Service Areas
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};