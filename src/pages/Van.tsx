import { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, ShieldCheck, Flame, Clock, CheckCircle2 } from "lucide-react";
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

// Calculate days until end of month
const getDaysUntilEndOfMonth = () => {
  const now = new Date();
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const daysLeft = Math.ceil((lastDay.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(0, daysLeft);
};

const Van = () => {
  const [search, setSearch] = useState("");
  const [daysLeft, setDaysLeft] = useState(getDaysUntilEndOfMonth());

  useEffect(() => {
    if (typeof window === "undefined") return;

    const urlParams = new URLSearchParams(window.location.search);
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
      title: "FREE Oven Cleaning + First Cleaning | Two Trees Cleaning QR Offer",
      description:
        "Scanned our van? Get a FREE oven cleaning with your first house cleaning service. Ventura & Santa Barbara Counties. Offer expires end of month.",
      url: "https://twotreescleaning.com/van",
      image: "https://twotreescleaning.com/og-image.jpg",
      keywords: [
        "free oven cleaning",
        "house cleaning offer",
        "Ventura cleaning service",
        "free first cleaning",
        "two trees cleaning",
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

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Helmet>
        <title>FREE Oven Cleaning + First Cleaning | Two Trees Cleaning QR Offer</title>
        <meta
          name="description"
          content="Scanned our van? Get a FREE oven cleaning with your first house cleaning service. Ventura & Santa Barbara Counties. Offer expires end of month."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://twotreescleaning.com/van" />
      </Helmet>

      <main className="bg-gradient-to-b from-two-trees-green to-two-trees-green/95">
        {/* URGENT OFFER BANNER - Mobile First */}
        <section className="relative pt-8 pb-6 px-4 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-two-trees-gold/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -z-10"></div>

          {/* Urgency Badge */}
          <div className="flex justify-center mb-4">
            <Badge className="bg-two-trees-gold text-two-trees-green font-bold text-sm px-4 py-2">
              <Clock className="w-3.5 h-3.5 mr-1.5" />
              {daysLeft} days left — expires end of month
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            <span className="block mb-2">FREE</span>
            <span className="bg-two-trees-gold text-two-trees-green px-3 py-2 rounded-lg inline-block">
              Oven Cleaning
            </span>
          </h1>

          <p className="text-white text-lg font-semibold mb-2 mt-4">
            With Your First House Cleaning
          </p>

          <p className="text-white/90 text-base mb-8 max-w-sm mx-auto">
            Saw our van? Now's the perfect time. Get your home sparkling — plus a free professional oven cleaning.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col gap-3 mb-6">
            <Button
              size="lg"
              className="w-full bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-7 text-lg font-bold rounded-xl shadow-lg"
              onClick={handleQuoteClick}
            >
              Claim Your Free Offer
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full text-white border-white hover:bg-white/10 px-8 py-7 text-lg font-semibold rounded-xl"
              onClick={handlePhoneClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (805) 436-5868
            </Button>
          </div>

          {/* Social Proof - Compact */}
          <div className="bg-white/10 backdrop-blur rounded-lg py-3 px-4 inline-block">
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-two-trees-gold text-two-trees-gold" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5</span>
              <span className="text-white/80 text-sm">200+ reviews</span>
            </div>
          </div>
        </section>

        {/* OFFER DETAILS & T&Cs */}
        <section className="bg-white rounded-t-3xl mt-8 px-4 py-8">
          {/* What's Included */}
          <div className="max-w-md mx-auto mb-8">
            <h2 className="text-2xl font-bold text-two-trees-green mb-6 text-center">
              Here's What You Get
            </h2>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <Flame className="w-6 h-6 text-two-trees-gold mt-1" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Free Professional Oven Cleaning</h3>
                  <p className="text-sm text-gray-600">Deep cleaned, degreased, & sparkling</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-two-trees-green mt-1" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Complete House Cleaning</h3>
                  <p className="text-sm text-gray-600">Starting at just $140 for first-time customers</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-two-trees-green mt-1" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Licensed & Insured</h3>
                  <p className="text-sm text-gray-600">Professional, trustworthy, local team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="bg-gray-50 rounded-lg p-4 mb-8 max-w-md mx-auto">
            <h3 className="font-bold text-gray-900 mb-3 text-sm">Terms & Conditions</h3>
            <ul className="text-xs text-gray-600 space-y-2">
              <li>✓ First-time customers only</li>
              <li>✓ Valid through end of {new Date().toLocaleString("default", { month: "long" })}</li>
              <li>✓ Must mention "Van QR Code" and "Free Oven Cleaning" in booking form notes</li>
              <li>✓ Cannot be combined with other offers</li>
            </ul>
          </div>

          {/* Secondary CTA */}
          <div className="flex flex-col gap-2 max-w-md mx-auto mb-6">
            <Button
              size="lg"
              className="w-full bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-6 text-lg font-bold rounded-xl"
              onClick={handleQuoteClick}
            >
              Book Your Free Offer
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-two-trees-green text-two-trees-green hover:bg-two-trees-green/5 px-8 py-6 text-lg font-semibold rounded-xl"
              onClick={handlePhoneClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              (805) 436-5868
            </Button>
          </div>

          {/* Why Choose Us - Quick List */}
          <div className="max-w-md mx-auto mt-10 pt-8 border-t border-gray-200">
            <h3 className="font-bold text-two-trees-green mb-4 text-center">Why People Love Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2">
                <span className="text-two-trees-gold font-bold">✓</span>
                <span className="text-gray-600"><strong>Reliable:</strong> We show up on time, every time</span>
              </div>
              <div className="flex gap-2">
                <span className="text-two-trees-gold font-bold">✓</span>
                <span className="text-gray-600"><strong>Detailed:</strong> We notice what others miss</span>
              </div>
              <div className="flex gap-2">
                <span className="text-two-trees-gold font-bold">✓</span>
                <span className="text-gray-600"><strong>Local:</strong> Serving Ventura & Santa Barbara for 4+ years</span>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="max-w-md mx-auto mt-10 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm mb-4">
              Questions? Call us anytime — we're here to help.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-two-trees-green text-two-trees-green hover:bg-two-trees-green/5 px-8 py-5 font-semibold rounded-xl"
              onClick={handlePhoneClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (805) 436-5868
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Van;
