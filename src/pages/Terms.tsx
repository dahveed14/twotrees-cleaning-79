
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { updateMetaTags } from "@/utils/metaTags";

const Terms = () => {
  const handleBookingClick = (location: string) => {
    // Track booking clicks without console logging
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_click', {
        event_category: 'Terms',
        event_label: location
      });
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:8054365868';
  };

  useEffect(() => {
    updateMetaTags({
      title: "Terms and Conditions - Two Trees Cleaning | Service Terms",
      description: "Read our terms and conditions for house cleaning services in Ventura and Santa Barbara Counties. Service agreements, policies, and legal information.",
      url: "https://twotreescleaning.com/terms",
      keywords: [
        "Two Trees Cleaning terms",
        "house cleaning terms",
        "service agreement",
        "cleaning service policies",
        "Ventura cleaning terms",
        "terms and conditions"
      ]
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <main>
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-4 px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs 
              items={[
                { label: "Home", href: "/" },
                { label: "Terms & Conditions", href: "/terms" }
              ]} 
            />
          </div>
        </div>

        {/* Header */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-two-trees-green mb-6">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: March 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">1. Service Agreement</h2>
              <p className="text-gray-600 mb-4">
                By booking our cleaning services, you agree to these terms and conditions. Two Trees Cleaning provides residential and commercial cleaning services in Ventura County and Santa Barbara County, California.
              </p>
              <p className="text-gray-600">
                Our services include regular house cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, and commercial cleaning services. All services are performed by trained, insured professionals.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">2. Booking and Scheduling</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Services must be booked in advance through our website, phone, or text message</li>
                <li>We require at least 24 hours notice for cancellations or rescheduling</li>
                <li>Same-day cancellations may incur a cancellation fee</li>
                <li>We reserve the right to reschedule services due to weather or emergency situations</li>
                <li>Recurring service schedules are maintained unless otherwise notified</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">3. Pricing and Payment</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>All prices are estimates based on the information provided by the client</li>
                <li>Final pricing may vary based on actual home condition and size</li>
                <li>Payment is due upon completion of services unless other arrangements are made</li>
                <li>We accept cash, check, and major credit cards</li>
                <li>A travel fee may apply to locations outside our standard service area</li>
                <li>Prices are subject to change with 30 days written notice for recurring services</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">4. Access and Security</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Clients must provide safe and reasonable access to all areas to be cleaned</li>
                <li>If you will not be home, you must provide access instructions or keys</li>
                <li>We will secure your home upon departure and return any keys as instructed</li>
                <li>Clients are responsible for securing valuables and personal items</li>
                <li>We are not responsible for items that go missing if not secured by the client</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">5. Liability and Insurance</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Two Trees Cleaning is fully licensed, bonded, and insured</li>
                <li>We carry comprehensive liability insurance and workers' compensation</li>
                <li>Any damage caused by our negligence will be covered by our insurance</li>
                <li>Claims must be reported within 24 hours of service completion</li>
                <li>Our liability is limited to the cost of the cleaning service provided</li>
                <li>We are not liable for pre-existing damage or items in poor condition</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">6. Service Guarantee</h2>
              <p className="text-gray-600 mb-4">
                We stand behind our work with a 24-hour satisfaction guarantee. If you're not completely satisfied with our cleaning service, please contact us within 24 hours, and we'll return to re-clean any areas of concern at no additional charge.
              </p>
              <p className="text-gray-600">
                This guarantee applies only to areas specifically mentioned in your service agreement and does not cover areas that were inaccessible or items that could not be moved safely.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">7. Supplies and Equipment</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We provide all necessary cleaning supplies and equipment</li>
                <li>We use eco-friendly, non-toxic cleaning products safe for families and pets</li>
                <li>Clients may request we use their preferred products with advance notice</li>
                <li>We will not use products that may damage surfaces or finishes</li>
                <li>Special equipment needs should be discussed before service</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">8. Limitation of Services</h2>
              <p className="text-gray-600 mb-4">Our services do not include:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Cleaning of hazardous materials or biohazards</li>
                <li>Moving heavy furniture or appliances</li>
                <li>Cleaning of delicate or valuable items without specific instruction</li>
                <li>Exterior window cleaning above ground level</li>
                <li>Carpet or upholstery cleaning (unless specifically arranged)</li>
                <li>Organization of personal belongings</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">9. Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We respect your privacy and maintain strict confidentiality regarding your home and personal information. Our team members are trained to maintain professional discretion at all times.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Personal information is collected only as necessary to provide services</li>
                <li>We do not share client information with third parties</li>
                <li>Home access information is kept strictly confidential</li>
                <li>Photos may be taken for quality assurance with permission only</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">10. Dispute Resolution</h2>
              <p className="text-gray-600 mb-4">
                Any disputes arising from our services will first be addressed through direct communication. If resolution cannot be reached, disputes will be handled through binding arbitration in Ventura County, California.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">11. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these terms or our services, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">Two Trees Cleaning</p>
                <p className="text-gray-600">2252 Channel Dr., Ventura, CA 93001</p>
                <p className="text-gray-600">Phone: (805) 436-5868</p>
                <p className="text-gray-600">Email: hello@twotreescleaning.com</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                These terms and conditions are effective as of March 2024 and may be updated periodically. 
                Continued use of our services constitutes acceptance of any changes to these terms.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
