import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2, AlertCircle } from "lucide-react";
import { trackPhoneClick } from "@/utils/analytics";
import { updateMetaTags } from "@/utils/metaTags";

const MoveServiceAgreement = () => {
  useEffect(() => {
    updateMetaTags({
      title: "Move-In/Move-Out Service Agreement & Checklist | Two Trees Cleaning",
      description:
        "Complete service agreement, checklist, and terms for move-in and move-out cleaning services. What's included, what's not, and how to prepare.",
      url: "https://twotreescleaning.com/move-service-agreement",
      keywords: [
        "move-out service agreement",
        "move-in service agreement",
        "cleaning checklist",
        "service terms",
      ],
    });
  }, []);

  const handlePhoneClick = () => {
    trackPhoneClick("move-service-agreement");
    window.location.href = "tel:805-436-5868";
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Move-In/Move-Out Service Agreement & Checklist | Two Trees Cleaning</title>
        <meta
          name="description"
          content="Complete service agreement, checklist, and terms for move-in and move-out cleaning services. What's included, what's not, and how to prepare."
        />
        <link rel="canonical" href="https://twotreescleaning.com/move-service-agreement" />
      </Helmet>

      <Navigation onBookingClick={() => {}} onPhoneClick={handlePhoneClick} />

      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-slate-50 to-white py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-two-trees-green mb-4">
              Move-In & Move-Out Service Agreement
            </h1>
            <p className="text-lg text-gray-600">
              Complete checklist, requirements, and terms for your moving cleaning service
            </p>
            <p className="text-sm text-gray-500 mt-4">
              This document outlines exactly what's included in your service, what to expect, and how to prepare. Please review before your scheduled cleaning.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-8 px-4 bg-slate-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-bold text-two-trees-green mb-4">Quick Links</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <a href="#whats-included" className="text-two-trees-green hover:underline">→ What's Included</a>
              <a href="#whats-not-included" className="text-two-trees-green hover:underline">→ What's Not Included</a>
              <a href="#requirements" className="text-two-trees-green hover:underline">→ Property Requirements</a>
              <a href="#preparation" className="text-two-trees-green hover:underline">→ How to Prepare</a>
              <a href="#add-ons" className="text-two-trees-green hover:underline">→ Add-Ons Menu</a>
              <a href="#terms" className="text-two-trees-green hover:underline">→ Terms & Conditions</a>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section id="whats-included" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-two-trees-green mb-8">What's Included in Your Service</h2>
            <p className="text-gray-600 mb-8">
              Every move-in and move-out cleaning includes the following items, completed room by room. This is our standard scope for all customers.
            </p>

            {/* Kitchen */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-two-trees-green mb-4">Kitchen</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Inside and outside refrigerator (must be emptied beforehand)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Oven and stovetop deep clean</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Inside microwave</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Dishwasher exterior and interior wipe-down</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Cabinet fronts and insides</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Sink, faucet, countertops, and backsplash sanitizing</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Range hood exterior</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Light switches and outlets</span>
                </li>
              </ul>
            </div>

            {/* Bathrooms */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-two-trees-green mb-4">Bathrooms</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Toilet deep cleaning (inside and out)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Shower/tub scrubbing, tile and grout</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Mirrors and glass fixtures</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Sink, vanity, and cabinet interior/exterior</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Floor sanitization</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Light fixtures and exhaust fan</span>
                </li>
              </ul>
            </div>

            {/* Throughout Home */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-two-trees-green mb-4">Throughout the Home</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Baseboards and trim: dust and wipe-down</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Door frames: dust and wipe-down</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Ceiling fans (within reach of standard step ladder)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Window sills and tracks (interior)</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Light fixtures and switches</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Closet shelves and rods</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Vacuum all carpets and rugs</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>Mop all hard floors</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-two-trees-green flex-shrink-0 mt-0.5" />
                  <span>General dusting of all surfaces</span>
                </li>
              </ul>
            </div>

            {/* What "Clean" Means */}
            <div className="bg-slate-50 p-6 rounded-lg mb-10">
              <h4 className="font-bold text-two-trees-green mb-2">What We Mean By "Cleaning"</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                For wipe-down surfaces (baseboards, door frames, trim, walls): cleaning means dust removal with attention to top edges where dust collects, followed by a wipe-down with a damp cloth and all-purpose cleaner to lift surface grime. Marks that come off with a normal single wipe pass come off. Anything beyond that is excluded from standard scope.
              </p>
            </div>
          </div>
        </section>

        {/* What's NOT Included */}
        <section id="whats-not-included" className="py-16 px-4 bg-red-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3 mb-6">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <h2 className="text-3xl font-bold text-red-900">What's NOT Included</h2>
            </div>
            <p className="text-gray-700 mb-6">
              The following are explicitly excluded from all move-in and move-out cleanings unless specifically purchased as an add-on. This list prevents scope disputes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Exterior structures (garage, sheds, detached units)</li>
                  <li>• Outdoor areas (patios, balconies, walkways)</li>
                  <li>• Wall stains beyond standard wipe-down</li>
                  <li>• Ceiling cleaning or ceiling stains</li>
                  <li>• Scuff/mark scrubbing (Magic Eraser work)</li>
                  <li>• Carpet shampooing or steam cleaning</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Wall hole repair or paint touch-up</li>
                  <li>• Personal item removal or decluttering</li>
                  <li>• Metal vertical blinds</li>
                  <li>• Pet waste or biohazard cleanup</li>
                  <li>• Furniture moving</li>
                  <li>• Any task requiring multiple wipe passes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Property Requirements */}
        <section id="requirements" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-two-trees-green mb-8">Property Requirements</h2>
            <p className="text-gray-600 mb-8">
              To complete your move-in/move-out cleaning to standard, the following conditions must be met at the start of the job. Failure to meet any results in a $79 same-day cancellation fee.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-two-trees-green p-4 bg-slate-50">
                <h4 className="font-bold text-two-trees-green mb-2">Property Must Be Completely Empty</h4>
                <p className="text-gray-700 text-sm">
                  No remaining belongings, furniture, trash, boxes, or personal items. All cupboards, refrigerator, and storage spaces must be cleared.
                </p>
              </div>

              <div className="border-l-4 border-two-trees-green p-4 bg-slate-50">
                <h4 className="font-bold text-two-trees-green mb-2">No People On-Site</h4>
                <p className="text-gray-700 text-sm">
                  No movers, contractors, workers, or other personnel may be on-site during the cleaning. Our team needs unobstructed access to work efficiently.
                </p>
              </div>

              <div className="border-l-4 border-two-trees-green p-4 bg-slate-50">
                <h4 className="font-bold text-two-trees-green mb-2">Running Water & Electricity</h4>
                <p className="text-gray-700 text-sm">
                  The property must have running water and electricity available throughout the job. Our equipment and supplies require both.
                </p>
              </div>

              <div className="border-l-4 border-two-trees-green p-4 bg-slate-50">
                <h4 className="font-bold text-two-trees-green mb-2">Access & Entry</h4>
                <p className="text-gray-700 text-sm">
                  All access codes, keys, or lockbox information must be provided in advance and be functional upon arrival.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Prepare */}
        <section id="preparation" className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-two-trees-green mb-8">How to Prepare Before We Arrive</h2>
            <p className="text-gray-600 mb-8">
              Preparing your home ahead of time ensures our team can work efficiently and deliver the best results.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-two-trees-green mb-4">Kitchen</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Empty refrigerator completely</li>
                  <li>✓ Empty freezer completely</li>
                  <li>✓ Clear all cabinet shelves</li>
                  <li>✓ Clear countertops</li>
                  <li>✓ Remove trash from under sink</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-two-trees-green mb-4">Bathrooms</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Remove personal items from medicine cabinet</li>
                  <li>✓ Clear shelves and storage</li>
                  <li>✓ Remove shower caddy/organizers</li>
                  <li>✓ Clear under-sink storage</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-two-trees-green mb-4">Throughout Home</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Remove all personal items</li>
                  <li>✓ Remove all furniture</li>
                  <li>✓ Clear all closets</li>
                  <li>✓ Remove trash and bags</li>
                  <li>✓ Clear all floor space</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-two-trees-green mb-4">General</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Provide access instructions</li>
                  <li>✓ Ensure water is on</li>
                  <li>✓ Ensure electricity is on</li>
                  <li>✓ Leave doors unlocked</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-sm text-yellow-900">
                <strong>Important:</strong> Properties that don't meet these requirements may result in a cancellation fee. Our team cannot remove personal items, furniture, or trash — these must be done before we arrive.
              </p>
            </div>
          </div>
        </section>

        {/* Add-Ons Menu */}
        <section id="add-ons" className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-two-trees-green mb-8">Add-Ons Menu</h2>
            <p className="text-gray-600 mb-8">
              Customize your service with these available add-ons. Must be requested in advance. Add-ons requested after work begins are subject to availability.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-two-trees-green text-white">
                    <th className="p-3 text-left">Add-On Service</th>
                    <th className="p-3 text-left">Price</th>
                    <th className="p-3 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-semibold text-gray-900">Garage Sweep</td>
                    <td className="p-3 text-gray-700">$35</td>
                    <td className="p-3 text-gray-600">Floor sweep only. No shelving, no cobwebs.</td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-3 font-semibold text-gray-900">Garage Deep Clean</td>
                    <td className="p-3 text-gray-700">$75</td>
                    <td className="p-3 text-gray-600">Includes cobweb removal, shelf wipe-down, floor sweep.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold text-gray-900">Exterior Laundry Room</td>
                    <td className="p-3 text-gray-700">$25</td>
                    <td className="p-3 text-gray-600">Sweep, wipe-down of washer/dryer, surface clean.</td>
                  </tr>
                  <tr className="border-b bg-slate-50">
                    <td className="p-3 font-semibold text-gray-900">Interior Window Cleaning</td>
                    <td className="p-3 text-gray-700">$5/pane</td>
                    <td className="p-3 text-gray-600">Per individual pane. Quote based on pane count.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-semibold text-gray-900">Blind Deep Cleaning</td>
                    <td className="p-3 text-gray-700">$30–$50/set</td>
                    <td className="p-3 text-gray-600">Pricing varies by size. Confirmed at quote.</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 font-semibold text-gray-900">Targeted Wall Spot-Cleaning</td>
                    <td className="p-3 text-gray-700">$50/hour</td>
                    <td className="p-3 text-gray-600">For marks beyond standard scope. 30-minute increments.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Terms & Conditions */}
        <section id="terms" className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-two-trees-green mb-8">Terms & Conditions</h2>

            <div className="space-y-8">
              {/* Condition Policy */}
              <div>
                <h3 className="text-xl font-bold text-two-trees-green mb-4">Condition Policy</h3>
                <p className="text-gray-700 mb-4">
                  Base pricing assumes <strong>Standard condition</strong>: normal wear, prior occupant cleaned before leaving, no heavy buildup.
                </p>
                <div className="bg-white p-4 rounded border border-gray-200 text-sm text-gray-700 space-y-3">
                  <p><strong>Heavy Condition:</strong> Tenant did not clean, visible grime in kitchen/bath, soap scum, dust accumulation.</p>
                  <p><strong>Severe Condition:</strong> Neglected for extended period, grease layers, mold spots, heavy staining.</p>
                  <p><strong>Time Overage Rate:</strong> If actual condition exceeds Standard, time beyond estimated hours bills at <strong>$100/hour</strong> (30-minute increments).</p>
                </div>
              </div>

              {/* Callback Policy */}
              <div>
                <h3 className="text-xl font-bold text-two-trees-green mb-4">Callback Policy</h3>
                <div className="bg-white p-4 rounded border border-gray-200 text-sm text-gray-700 space-y-3">
                  <p>
                    <strong>Within 5 business days:</strong> If a missed or below-standard item from original scope is reported in writing (email acceptable), we'll return to correct it at no charge. Report must specify room and item.
                  </p>
                  <p>
                    <strong>After 5 business days:</strong> A touch-up fee applies (minimum $150 plus applicable add-on rates).
                  </p>
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <h3 className="text-xl font-bold text-two-trees-green mb-4">Payment Terms</h3>
                <div className="bg-white p-4 rounded border border-gray-200 text-sm text-gray-700 space-y-3">
                  <p><strong>Payment Due:</strong> Net 15 (within 15 calendar days of invoice)</p>
                  <p><strong>Accepted Methods:</strong> Check or ACH. Credit card payments incur 3% processing fee.</p>
                  <p><strong>Invoicing:</strong> Issued upon job completion. Itemizes base estimate, any condition overage, and add-ons.</p>
                  <p><strong>Late Payments:</strong> Invoices unpaid after 30 days are subject to 1.5% monthly late fee and may pause future scheduling.</p>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div>
                <h3 className="text-xl font-bold text-two-trees-green mb-4">Cancellation & Changes</h3>
                <div className="bg-white p-4 rounded border border-gray-200 text-sm text-gray-700 space-y-3">
                  <p><strong>Same-Day Cancellation Fee:</strong> $79 if property doesn't meet requirements at time of arrival (not empty, people on-site, no water/electricity, etc.)</p>
                  <p><strong>Lead Time:</strong> Minimum 7 days from request date. Same-day or under-7-day requests subject to availability and rush fee.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-two-trees-green/10 border border-two-trees-green/20 rounded-lg">
              <p className="text-sm text-gray-800">
                <strong>Questions?</strong> Contact us at (805) 436-5868 or email hello@twotreescleaning.com. We're happy to clarify anything in this agreement.
              </p>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="py-12 px-4 bg-gradient-to-br from-two-trees-green to-two-trees-green/90">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Questions About Your Service?</h2>
            <p className="mb-6 text-white/90">
              We want to make sure everything is clear. Contact us anytime.
            </p>
            <Button
              size="lg"
              className="bg-two-trees-gold hover:bg-two-trees-gold/90 text-two-trees-green px-8 py-6 font-semibold"
              onClick={handlePhoneClick}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (805) 436-5868
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MoveServiceAgreement;
