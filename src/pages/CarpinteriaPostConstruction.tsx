import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CarpinteriaPostConstruction() {
  const handleBookingClick = (location: string) => {
    window.location.href = "/contact";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+18055555555";
  };

  return (
    <>
      <Helmet>
        <title>Carpinteria Post-Construction Cleaning | Two Trees Cleaning</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Post-construction cleaning in Carpinteria for homes, vacation rentals, and remodels. Licensed, insured, and trusted by builders and property owners."
        />
      </Helmet>

      <Navigation
        onBookingClick={handleBookingClick}
        onPhoneClick={handlePhoneClick}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Areas", href: "/service-areas" },
          { label: "Carpinteria", href: "/carpinteria" },
          {
            label: "Post-Construction Cleaning",
            href: "/carpinteria/post-construction-cleaning",
            current: true,
          },
        ]}
      />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 space-y-10 md:space-y-16">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
                Post-Construction Cleaning in Carpinteria
              </h1>
              <p className="text-xl text-muted-foreground max-w-[900px]">
                Whether you're wrapping up a coastal renovation or finishing a second home, our Carpinteria post-construction cleaning gets your space move-in ready with a spotless finish.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <Card className="p-6 space-y-4">
                <h2 className="text-xl font-semibold text-primary">What's Included</h2>
                <ul className="space-y-2">
                  {[
                    "Dust and fine debris removal",
                    "Wipe-down of cabinetry, baseboards, trim, and walls",
                    "Deep cleaning of bathrooms, kitchens, and floors",
                    "Final detail touches and light interior window cleaning (optional)",
                    "Haul-off of light debris if needed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 space-y-4">
                <h2 className="text-xl font-semibold text-primary">
                  Why Two Trees in Carpinteria
                </h2>
                <ul className="space-y-2">
                  {[
                    "Trusted by 200+ homeowners and contractors",
                    "Licensed, insured, and local to the coast",
                    "Great for vacation rentals and real estate preps",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Star className="w-5 h-5 mt-1 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-6 space-y-4">
                <h2 className="text-xl font-semibold text-primary">Service Areas</h2>
                <p>
                  We proudly serve Downtown Carpinteria, Concha Loma, Sandyland, and Toro Canyon (93013)
                </p>
                <div className="pt-4">
                  <Button asChild className="w-full">
                    <Link to="/contact">Get Your Quote Today</Link>
                  </Button>
                </div>
              </Card>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="p-6 space-y-6">
                <h2 className="text-2xl font-semibold text-primary">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">
                      Do you work with Airbnb or vacation rental turnovers?
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      Yes, we specialize in helping vacation rental owners prepare their properties after renovations or between tenants. We understand the importance of quick turnaround times and high cleaning standards for rental properties.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Can you clean during or after a contractor finishes?
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      We can coordinate with your contractor to clean either during the final stages of construction or after completion. We're flexible and will work around your schedule and the contractor's timeline.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">How far in advance should I book?</h3>
                    <p className="mt-1 text-muted-foreground">
                      We recommend booking 1-2 weeks in advance to ensure availability, though we can often accommodate last-minute requests. Contact us to discuss your timeline and we'll do our best to work with your schedule.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-semibold text-primary mb-6">
                  Request a Quote
                </h2>
                <ContactForm />
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Related Services & Areas
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Button variant="outline" asChild>
                  <Link to="/post-construction-cleaning">
                    Post-Construction Cleaning
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/carpinteria">Carpinteria Services</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            <FinalCTA 
              onBookingClick={handleBookingClick}
              onPhoneClick={handlePhoneClick}
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}