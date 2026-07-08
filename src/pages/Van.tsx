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

    // Load the review widget script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://links.twotreescleaning.com/reputation/assets/review-widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
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
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>FREE Oven Cleaning + First Cleaning | Two Trees Cleaning QR Offer</title>
        <meta
          name="description"
          content="Scanned our van? Get a FREE oven cleaning with your first house cleaning service. Ventura & Santa Barbara Counties. Offer expires end of month."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://twotreescleaning.com/van" />
      </Helmet>

      <main>
        {/* Hero - Urgent Offer */}
        <section className="bg-gradient-to-br from-slate-50 to-white py-16 md:py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-two-trees-gold text-two-trees-green font-bold mb-6">
              <Clock className="w-3.5 h-3.5 mr-1.5" />
              {daysLeft} days left — expires end of month
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-two-trees-green leading-tight mb-6">
              Scanned Our Van?
              <br />
              Get a FREE Oven Cleaning
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Thanks for noticing! Two Trees Cleaning is offering new customers a complimentary professional oven cleaning with your first house cleaning service. It's our way of welcoming you to the Two Trees family.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                size="lg"
                className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-6 text-lg font-semibold"
                onClick={handleQuoteClick}
              >
                Claim Your Free Offer
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
                <ShieldCheck className="w-4 h-4 text-two-trees-green" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof - Team & Reviews */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-two-trees-green text-center mb-12">
              Meet the Team
            </h2>

            {/* Team Photo */}
            <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://twotreescleaning.com/lovable-uploads/van-team.jpg"
                alt="Two Trees Cleaning team in front of the van"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Reviews Widget */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-two-trees-green mb-6 text-center">
                What Our Customers Say
              </h3>
              <div className="lc_reviews_widget_container">
                <iframe
                  className="lc_reviews_widget"
                  src="https://links.twotreescleaning.com/reputation/widgets/review_widget/ntG4xxs61YZCKPtne4SP"
                  frameBorder="0"
                  scrolling="no"
                  style={{
                    minWidth: "100%",
                    width: "100%",
                    height: "600px",
                  }}
                  title="Two Trees Cleaning Reviews"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's Included - The Offer */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-two-trees-green text-center mb-12">
              What You Get
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Offer 1: Free Oven Cleaning */}
              <div className="rounded-lg border border-gray-200 p-6 hover:border-two-trees-green/30 transition">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Flame className="w-8 h-8 text-two-trees-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-two-trees-green mb-2">
                      Free Professional Oven Cleaning
                    </h3>
                    <p className="text-gray-600">
                      Deep cleaned, degreased, and sparkling. A $150+ value included free with your first booking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Offer 2: House Cleaning */}
              <div className="rounded-lg border border-gray-200 p-6 hover:border-two-trees-green/30 transition">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-8 h-8 text-two-trees-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-two-trees-green mb-2">
                      Complete House Cleaning
                    </h3>
                    <p className="text-gray-600">
                      Starting at just $140. Choose from Essential, Signature, or Total Deep Clean packages.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="bg-slate-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-two-trees-green mb-6">Why Two Trees Cleaning?</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-two-trees-green mb-2">Reliable</h4>
                  <p className="text-sm text-gray-600">
                    We show up on time, every time. Your cleaning is scheduled around your busy life.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-two-trees-green mb-2">High Standards</h4>
                  <p className="text-sm text-gray-600">
                    We don't cut corners. Every surface gets the thorough cleaning your home deserves.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-two-trees-green mb-2">Attention to Detail</h4>
                  <p className="text-sm text-gray-600">
                    From baseboards to ceiling fans, we notice what others miss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-two-trees-gold/10 border border-two-trees-gold/30 rounded-lg p-6">
              <h3 className="font-bold text-two-trees-green mb-4">Terms & Conditions</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex gap-2">
                  <span className="text-two-trees-gold font-bold">✓</span>
                  <span><strong>First-time customers only</strong> — Can't be combined with other offers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-two-trees-gold font-bold">✓</span>
                  <span><strong>Valid through end of {new Date().toLocaleString("default", { month: "long" })}</strong></span>
                </li>
                <li className="flex gap-2">
                  <span className="text-two-trees-gold font-bold">✓</span>
                  <span><strong>How to claim:</strong> Mention "Van QR Code" and "Free Oven Cleaning" in your booking form notes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-two-trees-green mb-4">
              Ready to Book?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get your home sparkling and enjoy your free oven cleaning today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-two-trees-green hover:bg-two-trees-green/90 text-white px-8 py-6 text-lg font-semibold"
                onClick={handleQuoteClick}
              >
                Claim Your Free Offer
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default Van;
