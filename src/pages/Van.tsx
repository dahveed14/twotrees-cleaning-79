import { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, Shield, Award, Calendar, CheckCircle, Sparkles, MapPin } from "lucide-react";
import { trackPhoneClick, trackBookingClick, trackPageView } from "@/utils/analytics";
import { updateMetaTags } from "@/utils/metaTags";

const VAN_UTMS = {
  utm_source: "vehicle",
  utm_medium: "qr",
  utm_campaign: "van_wrap",
};

const QUOTE_BASE_URL = "https://optin.twotreescleaning.com/complete-estimate-form-3642";
const PHONE_NUMBER = "805-436-5868";
const PHONE_HREF = `tel:${PHONE_NUMBER}`;

const Van = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
    // Default to the van-wrap UTMs if none are present, but preserve any overrides
    const merged = new URLSearchParams();
    Object.entries(VAN_UTMS).forEach(([key, value]) => {
      if (!urlParams.has(key)) {
        merged.set(key, value);
      }
    });
    urlParams.forEach((value, key) => {
      merged.set(key, value);
    });
    setSearch(merged.toString());

    updateMetaTags({
      title: "Saw Us Around Town? Get a Free House Cleaning Quote | Two Trees Cleaning",
      description:
        "Scanned our van? Welcome! Two Trees Cleaning serves Ventura & Santa Barbara Counties. Book professional house cleaning online or call (805) 436-5868.",
      url: "https://twotreescleaning.com/van",
      image: "https://twotreescleaning.com/og-image.jpg",
      keywords: [
        "house cleaning Ventura County",
        "house cleaning Santa Barbara County",
        "professional cleaning service",
        "van wrap QR code",
        "Two Trees Cleaning",
        "cleaning quote Ventura",
        "home cleaning service",
      ],
    });

    trackPageView("Van Wrap Landing Page");
  }, []);

  const quoteUrl = useMemo(() => {
    const url = new URL(QUOTE_BASE_URL);
    if (search) {
      const params = new URLSearchParams(search);
      params.forEach((value, key) => url.searchParams.set(key, value));
    }
    return url.toString();
  }, [search]);

  const handleQuoteClick = () => {
    trackBookingClick("Van Page - Get a Free Quote");
    window.open(quoteUrl, "_blank");
  };

  const handlePhoneClick = () => {
    trackPhoneClick("van");
    window.location.href = PHONE_HREF;
  };

  const handleBookingClick = (location: string) => {
    trackBookingClick(location);
    window.open(quoteUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Saw Us Around Town? Get a Free House Cleaning Quote | Two Trees Cleaning</title>
        <meta
          name="description"
          content="Scanned our van? Welcome! Two Trees Cleaning serves Ventura & Santa Barbara Counties. Book professional house cleaning online or call (805) 436-5868."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://twotreescleaning.com/van" />
      </Helmet>

      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-50 to-white py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-two-trees-gold text-two-trees-green font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Spotted on the Road
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-two-trees-green leading-tight mb-6">
              Saw Us Around Town? <br className="hidden md:block" />
              Let's Get Your Home Sparkling.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Thanks for scanning our van! Two Trees Cleaning is a locally trusted, licensed & insured
              cleaning team serving Ventura and Santa Barbara Counties. Get your time back with a
              spotless home — starting at just $140.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                size="lg"
                className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-6 text-lg font-semibold"
                onClick={handleQuoteClick}
              >
                Get a Free Quote
              </Button>
              <Button
                variant="outline-green"
                size="lg"
                className="px-8 py-6 text-lg"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (805) 436-5868
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-two-trees-gold text-two-trees-gold" />
                <span className="font-semibold">4.9/5 stars</span>
                <span>from 200+ reviews</span>
              </div>
              <span className="hidden sm:inline text-gray-300">|</span>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-two-trees-green" />
                <span>Licensed & Insured</span>
              </div>
              <span className="hidden sm:inline text-gray-300">|</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-two-trees-green" />
                <span>As featured in Montecito Journal</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick benefits */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-14 h-14 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-7 h-7 text-two-trees-green" />
                </div>
                <h3 className="text-xl font-bold text-two-trees-green mb-2">Easy Online Booking</h3>
                <p className="text-gray-600">
                  Get a personalized quote in minutes. No phone tag, no hassle.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-14 h-14 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-two-trees-green" />
                </div>
                <h3 className="text-xl font-bold text-two-trees-green mb-2">Detailed 72-Point Clean</h3>
                <p className="text-gray-600">
                  We clean the spots others miss — baseboards, ceiling fans, inside appliances, and more.
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-gray-50">
                <div className="w-14 h-14 bg-two-trees-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-two-trees-green" />
                </div>
                <h3 className="text-xl font-bold text-two-trees-green mb-2">Local & Reliable</h3>
                <p className="text-gray-600">
                  Serving Ventura, Oxnard, Camarillo, Thousand Oaks, Santa Barbara, and everywhere in between.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-two-trees-green">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for a Cleaner Home?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Mention you saw our van and get your first cleaning scheduled today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-6 text-lg font-semibold"
                onClick={handleQuoteClick}
              >
                Get a Free Quote
              </Button>
              <Button
                variant="outline-white"
                size="lg"
                className="px-8 py-6 text-lg"
                onClick={handlePhoneClick}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (805) 436-5868
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Van;
