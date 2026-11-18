import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE_TEL = "tel:+18054365868";
const PHONE_SMS = "sms:+18054365868";

const trackContact = (method: "call" | "text") => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "phone_click", {
      event_category: "Contact",
      event_label: `How It Works - ${method}`,
    });
  }
};

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-two-trees-green mb-4">
            Let's Talk About Your Home
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No forms to fill out and no waiting around for a quote. Just a friendly conversation with Kaleigh.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-two-trees-green text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold text-two-trees-green mb-4">Call or Text Kaleigh</h3>
            <p className="text-gray-600">
              Reach out at (805) 436-5868 and tell us a little about you and your home. We'd love to hear what you need.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-two-trees-gold text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold text-two-trees-green mb-4">Get Your Quote Right Then</h3>
            <p className="text-gray-600">
              Kaleigh puts together a quote based on your details and gives it to you right there. No waiting and no guessing.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-two-trees-green text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold text-two-trees-green mb-4">Pick Your Day</h3>
            <p className="text-gray-600">
              Happy with the quote? Schedule your cleaning with Kaleigh and we'll take it from there.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-two-trees-green hover:bg-two-trees-green/90 px-8"
          >
            <a href={PHONE_TEL} onClick={() => trackContact("call")}>
              <Phone className="w-5 h-5 mr-2" />
              Call (805) 436-5868
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-two-trees-green text-two-trees-green hover:bg-two-trees-green/10 px-8"
          >
            <a href={PHONE_SMS} onClick={() => trackContact("text")}>
              <MessageSquare className="w-5 h-5 mr-2" />
              Text Kaleigh
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
