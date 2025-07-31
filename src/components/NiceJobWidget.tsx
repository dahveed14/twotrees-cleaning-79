import { useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface NiceJobWidgetProps {
  compact?: boolean;
  showBadge?: boolean;
  title?: string;
  description?: string;
}

export const NiceJobWidget = ({ 
  compact = false, 
  showBadge = true, 
  title = "What Our Customers Say",
  description = "Real reviews from real customers - see what busy families like yours are saying"
}: NiceJobWidgetProps) => {
  useEffect(() => {
    // Load NiceJob SDK if not already loaded
    const existingScript = document.querySelector('script[src*="nicejob.co"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://cdn.nicejob.co/js/sdk.min.js?id=5598836875984896';
      script.defer = true;
      document.head.appendChild(script);
    }

    // Track analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'view_reviews', {
        event_category: 'Reviews',
        event_label: 'NiceJob Widget Loaded'
      });
    }
  }, []);

  if (compact) {
    return (
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-two-trees-green mb-4">Trusted by Happy Customers</h2>
          <div className="nj-stories" style={{ minHeight: '200px' }}></div>
          {showBadge && (
            <div className="mt-8">
              <Badge variant="secondary" className="bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
                <Star className="w-4 h-4 mr-1 fill-two-trees-gold text-two-trees-gold" />
                Verified Reviews
              </Badge>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-two-trees-green mb-4">{title}</h2>
        <p className="text-xl text-gray-600 mb-12">{description}</p>

        <div className="nj-stories" style={{ minHeight: '400px' }}></div>

        {showBadge && (
          <div className="mt-12">
            <Badge variant="secondary" className="bg-two-trees-gold/10 text-two-trees-green border-two-trees-gold/20">
              <Star className="w-4 h-4 mr-1 fill-two-trees-gold text-two-trees-gold" />
              4.9/5 stars on Google Reviews
            </Badge>
          </div>
        )}
      </div>
    </section>
  );
};