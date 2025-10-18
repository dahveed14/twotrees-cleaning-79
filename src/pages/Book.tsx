
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


const Book = () => {
  const handleBookingClick = (location: string) => {
    // Track booking clicks without console logging
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_click', {
        event_category: 'Book',
        event_label: location
      });
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:8054561421';
  };


  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-two-trees-green mb-4">
              Book Your Cleaning Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Schedule your professional house cleaning service in Ventura and Santa Barbara Counties
            </p>
          </div>

          {/* What's Included Link Section */}
          <div className="mb-8">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Want to know what's included in your cleaning?
              </h3>
              <p className="text-muted-foreground mb-4">
                See our comprehensive guide to what's included (and what's not) in each cleaning service
              </p>
              <Link to="/services/whats-included-in-cleaning">
                <Button variant="outline" className="inline-flex items-center gap-2">
                  View What's Included
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Book;
