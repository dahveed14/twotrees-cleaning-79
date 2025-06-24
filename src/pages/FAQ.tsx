
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { updateMetaTags } from "@/utils/metaTags";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";

const FAQ = () => {
  const handleBookingClick = (location: string) => {
    console.log(`Booking clicked from: ${location}`);
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:8054561421';
  };

  useEffect(() => {
    updateMetaTags({
      title: "Frequently Asked Questions - Two Trees Cleaning | House Cleaning FAQ",
      description: "Get answers to common questions about our professional house cleaning services in Ventura and Santa Barbara Counties. Pricing, scheduling, and service details.",
      url: "https://twotreescleaning.com/faq",
      keywords: [
        "house cleaning FAQ",
        "cleaning service questions",
        "Two Trees Cleaning FAQ",
        "Ventura cleaning FAQ",
        "Santa Barbara cleaning questions",
        "house cleaning pricing",
        "cleaning service scheduling",
        "professional cleaning FAQ"
      ]
    });
  }, []);

  const faqData = [
    {
      category: "Pricing & Services",
      questions: [
        {
          question: "How much does house cleaning cost?",
          answer: "Our house cleaning services start at $140 for regular cleaning. Pricing varies based on home size, cleaning frequency, and specific services requested. We offer regular house cleaning, deep cleaning, move-in/move-out cleaning, and post-construction cleaning. Contact us for a personalized quote."
        },
        {
          question: "What's included in your regular house cleaning service?",
          answer: "Our regular house cleaning includes dusting all surfaces, vacuuming carpets and rugs, mopping hard floors, cleaning bathrooms (toilets, sinks, tubs, showers), kitchen cleaning (counters, appliances, sink), and trash removal. We use eco-friendly cleaning products and bring all necessary supplies."
        },
        {
          question: "What's the difference between regular and deep cleaning?",
          answer: "Regular cleaning maintains your home's cleanliness with weekly, bi-weekly, or monthly service. Deep cleaning is more thorough and includes cleaning inside appliances, baseboards, light fixtures, window sills, and other areas not covered in regular cleaning. We recommend starting with a deep clean for first-time customers."
        },
        {
          question: "Do you offer one-time cleaning services?",
          answer: "Yes! We offer one-time cleaning services including move-in/move-out cleaning, post-construction cleanup, and special event cleaning. One-time services are priced higher than recurring cleaning services."
        }
      ]
    },
    {
      category: "Scheduling & Booking",
      questions: [
        {
          question: "How do I schedule a cleaning service?",
          answer: "You can schedule cleaning services three ways: book online through our website, call us at (805) 456-1421, or text us. We typically respond within a few hours and can often schedule same-week service."
        },
        {
          question: "How far in advance do I need to book?",
          answer: "We recommend booking at least 3-5 days in advance, especially during busy seasons. However, we often accommodate last-minute requests when possible. Holiday periods and spring cleaning season book up faster."
        },
        {
          question: "What if I need to reschedule or cancel?",
          answer: "We understand plans change! Please give us at least 24 hours notice for cancellations or rescheduling to avoid any fees. Same-day cancellations may incur a charge. You can reach us by phone or text to make changes."
        },
        {
          question: "Do you clean on weekends?",
          answer: "Yes, we offer Saturday cleaning services by appointment. Sunday service is limited and available for special circumstances. Weekday appointments are most readily available."
        }
      ]
    },
    {
      category: "Service Areas & Coverage",
      questions: [
        {
          question: "Which areas do you serve?",
          answer: "We provide house cleaning services throughout Ventura County and parts of Santa Barbara County, including Santa Barbara, Montecito, Summerland, Carpinteria, Ventura, Oxnard, Camarillo, Thousand Oaks, Newbury Park, Westlake Village, and Ojai. Contact us to confirm service in your specific area."
        },
        {
          question: "Do you charge extra for travel to certain areas?",
          answer: "Our standard pricing covers our main service areas. Some remote locations may have a small travel fee, which we'll discuss upfront. Most areas in Ventura and Santa Barbara Counties have no additional charges."
        }
      ]
    },
    {
      category: "Cleaning Process & Supplies",
      questions: [
        {
          question: "Do you bring your own cleaning supplies?",
          answer: "Yes, we bring all necessary cleaning supplies and equipment. We use professional-grade, eco-friendly cleaning products that are safe for your family and pets. If you prefer us to use your specific products, just let us know."
        },
        {
          question: "Are your cleaning products safe for children and pets?",
          answer: "Absolutely! We use eco-friendly, non-toxic cleaning products that are safe for children and pets. Our products are effective yet gentle, providing a clean and healthy environment for your family."
        },
        {
          question: "Do I need to be home during the cleaning?",
          answer: "No, you don't need to be home during cleaning. Many clients provide us with access instructions or a spare key. We're fully licensed, bonded, and insured for your peace of mind. We'll secure your home when we leave."
        },
        {
          question: "How long does a typical cleaning take?",
          answer: "Cleaning time varies by home size and service type. A typical 2-3 bedroom home takes 2-3 hours for regular cleaning and 3-5 hours for deep cleaning. We'll provide an estimated timeframe when scheduling your service."
        }
      ]
    },
    {
      category: "Trust & Insurance",
      questions: [
        {
          question: "Are you licensed and insured?",
          answer: "Yes, Two Trees Cleaning is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation insurance to protect both our clients and team members."
        },
        {
          question: "What if something gets damaged during cleaning?",
          answer: "While rare, accidents can happen. We're fully insured and will take responsibility for any damage caused by our team. Please report any concerns immediately so we can address them promptly and professionally."
        },
        {
          question: "Do you do background checks on your cleaners?",
          answer: "Yes, all our team members undergo thorough background checks and are carefully screened before joining our team. We maintain high standards for professionalism and trustworthiness."
        }
      ]
    }
  ];

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
                { label: "FAQ", href: "/faq" }
              ]} 
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-two-trees-green mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get answers to the most common questions about our professional house cleaning services 
              in Ventura and Santa Barbara Counties.
            </p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/book"
                className="inline-flex items-center justify-center bg-two-trees-green text-white px-8 py-4 rounded-lg hover:bg-two-trees-green/90 transition-colors font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Online Now
              </Link>
              <button
                onClick={handlePhoneClick}
                className="inline-flex items-center justify-center border-2 border-two-trees-green text-two-trees-green px-8 py-4 rounded-lg hover:bg-two-trees-green hover:text-white transition-colors font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (805) 456-1421
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-two-trees-green mb-8">
                  {category.category}
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border border-gray-200 rounded-2xl px-6"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-two-trees-green py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {/* Contact Section */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-two-trees-green mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? We're here to help! 
                Contact us directly and we'll get back to you promptly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center bg-two-trees-green text-white px-6 py-3 rounded-lg hover:bg-two-trees-green/90 transition-colors"
                >
                  Contact Us
                </Link>
                <button
                  onClick={handlePhoneClick}
                  className="inline-flex items-center justify-center border border-two-trees-green text-two-trees-green px-6 py-3 rounded-lg hover:bg-two-trees-green hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (805) 456-1421
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.flatMap(category =>
              category.questions.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
          })
        }}
      />
    </div>
  );
};

export default FAQ;
