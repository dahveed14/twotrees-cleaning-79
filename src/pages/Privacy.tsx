
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { updateMetaTags } from "@/utils/metaTags";

const Privacy = () => {
  const handleBookingClick = (location: string) => {
    // Track booking clicks without console logging
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_click', {
        event_category: 'Privacy',
        event_label: location
      });
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:8054561421';
  };

  useEffect(() => {
    updateMetaTags({
      title: "Privacy Policy - Two Trees Cleaning | Your Privacy Matters",
      description: "Read our privacy policy to understand how Two Trees Cleaning collects, uses, and protects your personal information. We are committed to your privacy and data security.",
      url: "https://twotreescleaning.com/privacy",
      keywords: [
        "Two Trees Cleaning privacy",
        "privacy policy",
        "data protection",
        "personal information",
        "CCPA compliance",
        "cleaning service privacy"
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
                { label: "Privacy Policy", href: "/privacy" }
              ]} 
            />
          </div>
        </div>

        {/* Header */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-two-trees-green mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: January 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Two Trees Cleaning ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our cleaning services.
              </p>
              <p className="text-gray-600">
                By using our services or website, you consent to the data practices described in this policy. If you do not agree with this policy, please do not access our website or use our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Personal Information</h3>
              <p className="text-gray-600 mb-3">
                We collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Request a cleaning service quote or book an appointment</li>
                <li>Contact us via phone, email, text message, or contact forms</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Create an account on our website</li>
                <li>Provide access instructions for your property</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Types of Information Collected</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                <li><strong>Property Information:</strong> Property address, access codes, special instructions, property size, number of rooms</li>
                <li><strong>Service Information:</strong> Service type requested, scheduling preferences, special cleaning requirements</li>
                <li><strong>Payment Information:</strong> Billing address, payment method (processed securely through third-party payment processors)</li>
                <li><strong>Communication Records:</strong> Records of your communications with us, including emails, text messages, and phone calls</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-gray-600 mb-3">
                When you visit our website, we automatically collect certain information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, referring website</li>
                <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance user experience and analyze website traffic</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service Delivery:</strong> To provide, schedule, and perform cleaning services at your property</li>
                <li><strong>Communication:</strong> To respond to inquiries, send appointment confirmations, and provide customer support</li>
                <li><strong>Payment Processing:</strong> To process payments and send invoices and receipts</li>
                <li><strong>Service Improvement:</strong> To understand customer needs and improve our services</li>
                <li><strong>Marketing:</strong> To send promotional materials, special offers, and newsletters (you may opt out at any time)</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our legal rights</li>
                <li><strong>Safety and Security:</strong> To maintain the safety and security of our services, customers, and employees</li>
                <li><strong>Website Analytics:</strong> To analyze website usage and improve user experience</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">4. How We Share Your Information</h2>
              <p className="text-gray-600 mb-4">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business (e.g., payment processors, scheduling software, email services). These providers are bound by confidentiality agreements.</li>
                <li><strong>Cleaning Team:</strong> With our employees and cleaning team members who need access to your information to perform services at your property</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or legal process, or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, sale, or transfer of company assets</li>
                <li><strong>With Your Consent:</strong> When you have given us explicit permission to share information</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">5. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                <li>Secure servers and encrypted databases</li>
                <li>Access controls and authentication procedures</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection and confidentiality</li>
                <li>Background checks for all cleaning team members</li>
              </ul>
              <p className="text-gray-600 mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">6. Your Privacy Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">California Residents (CCPA)</h3>
              <p className="text-gray-600 mb-3">
                Under the California Consumer Privacy Act (CCPA), California residents have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Right to Know:</strong> Request disclosure of the personal information we collect, use, and share</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal information (subject to certain exceptions)</li>
                <li><strong>Right to Opt-Out:</strong> Opt out of the sale of personal information (we do not sell personal information)</li>
                <li><strong>Right to Non-Discrimination:</strong> You will not receive discriminatory treatment for exercising your privacy rights</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">General Privacy Rights</h3>
              <p className="text-gray-600 mb-3">
                All users have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
              </ul>

              <p className="text-gray-600 mt-4">
                To exercise these rights, please contact us using the information provided in Section 13. We will respond to your request within 30 days.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Types of Cookies We Use</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (Google Analytics)</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Track your activity to show relevant advertisements</li>
              </ul>

              <p className="text-gray-600 mt-4">
                You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">8. Third-Party Services</h2>
              <p className="text-gray-600 mb-4">
                Our website and services may integrate with third-party services that have their own privacy policies:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics and traffic analysis</li>
                <li><strong>Payment Processors:</strong> For secure payment processing (we do not store credit card information)</li>
                <li><strong>Social Media Platforms:</strong> Links to our social media profiles (Instagram, Facebook)</li>
                <li><strong>Email Services:</strong> For sending newsletters and communications</li>
                <li><strong>Booking Systems:</strong> For online appointment scheduling</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We encourage you to review the privacy policies of these third-party services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">9. Children's Privacy (COPPA Compliance)</h2>
              <p className="text-gray-600 mb-4">
                Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we have collected information from your child, please contact us immediately, and we will delete such information.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">10. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide services to you</li>
                <li>Comply with legal obligations (e.g., tax records, business records)</li>
                <li>Resolve disputes and enforce our agreements</li>
                <li>Maintain business records and customer history</li>
              </ul>
              <p className="text-gray-600 mt-4">
                When information is no longer needed, we securely delete or anonymize it. Inactive customer accounts may be deleted after a reasonable period of inactivity.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">11. Email Communications</h2>
              <p className="text-gray-600 mb-4">
                In compliance with the CAN-SPAM Act, all marketing emails from us will:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Clearly identify the sender (Two Trees Cleaning)</li>
                <li>Include our physical business address</li>
                <li>Provide a clear and easy way to unsubscribe</li>
                <li>Honor opt-out requests promptly (within 10 business days)</li>
                <li>Not use deceptive subject lines or misleading information</li>
              </ul>
              <p className="text-gray-600 mt-4">
                You may opt out of marketing emails at any time by clicking the "unsubscribe" link in our emails or contacting us directly. Note that you will still receive transactional emails related to your service appointments.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make changes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>We will update the "Last Updated" date at the top of this policy</li>
                <li>Significant changes will be communicated via email or website notice</li>
                <li>Continued use of our services after changes constitutes acceptance of the updated policy</li>
              </ul>
              <p className="text-gray-600 mt-4">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">13. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions or concerns about this Privacy Policy, or if you wish to exercise your privacy rights, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 font-semibold mb-2">Two Trees Cleaning</p>
                <p className="text-gray-600 mb-1">Privacy Officer</p>
                <p className="text-gray-600 mb-1">2252 Channel Dr., Ventura, CA 93001</p>
                <p className="text-gray-600 mb-1">Phone: (805) 456-1421</p>
                <p className="text-gray-600 mb-1">Email: hello@twotreescleaning.com</p>
                <p className="text-gray-600 mt-3 text-sm">
                  For privacy-related inquiries, please include "Privacy Request" in your email subject line or mention it when calling.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-two-trees-green mb-4">14. California "Do Not Track" Disclosure</h2>
              <p className="text-gray-600">
                Our website does not currently respond to "Do Not Track" signals from browsers. However, you can control cookies and tracking through your browser settings and opt out of marketing communications as described in this policy.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500">
                This Privacy Policy is effective as of January 2025 and governs our collection, use, and disclosure of your personal information. 
                By using our services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
