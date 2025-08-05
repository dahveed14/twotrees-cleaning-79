import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How much does cleaning cost?",
    answer: "Our services start at $140 and vary based on home size, frequency, and specific cleaning needs. We offer regular house cleaning, deep cleaning, move-in/move-out, and post-construction services."
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Ventura County and Santa Barbara County, including Santa Barbara, Thousand Oaks, Ventura, Oxnard, Camarillo, Ojai, Montecito, and surrounding areas."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, Two Trees Cleaning is fully licensed and insured. We've been serving the community since 2020 and are trusted by over 200+ families throughout Ventura and Santa Barbara Counties."
  },
  {
    question: "Do you provide your own cleaning supplies?",
    answer: "Yes, we bring all necessary cleaning supplies and equipment. We use professional-grade, eco-friendly products that are safe for your family and pets."
  },
  {
    question: "How do I book a cleaning service?",
    answer: "You can book online through our website or call us at (805) 456-1421. We'll schedule a convenient time and provide a free estimate based on your specific needs."
  }
];

export const HomepageFAQ = () => {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[hsl(var(--primary))] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our professional cleaning services in Ventura and Santa Barbara Counties.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-glow))] py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Have more questions?</p>
            <a 
              href="tel:805-456-1421"
              className="inline-flex items-center px-6 py-3 bg-[hsl(var(--primary))] text-white rounded-lg hover:bg-[hsl(var(--primary-glow))] transition-colors font-medium"
            >
              Call Us: (805) 456-1421
            </a>
          </div>
        </div>
      </section>
    </>
  );
};