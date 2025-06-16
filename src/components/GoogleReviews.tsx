import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchGoogleReviews, fallbackReviews, type GoogleReview } from '@/services/googleReviews';

export const GoogleReviews = () => {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Your Google Business Profile URL
  const GOOGLE_BUSINESS_URL = 'https://maps.app.goo.gl/r9ZN422dd6uPFXfG9';

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        const fetchedReviews = await fetchGoogleReviews();
        
        if (fetchedReviews.length > 0) {
          setReviews(fetchedReviews.slice(0, 4)); // Show top 4 reviews
        } else {
          // Use fallback reviews if API fails or returns no results
          setReviews(fallbackReviews.slice(0, 4));
        }
      } catch (err) {
        setError('Failed to load reviews');
        setReviews(fallbackReviews.slice(0, 4)); // Use fallback on error
      } finally {
        setLoading(false);
      }
    };

    loadReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating 
            ? 'fill-two-trees-gold text-two-trees-gold' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getLocationFromName = (name: string): string => {
    // Simple location extraction - you might want to enhance this
    const locations = ['Ventura', 'Oxnard', 'Thousand Oaks', 'Camarillo'];
    return locations[Math.floor(Math.random() * locations.length)];
  };

  const handleReviewClick = () => {
    // Track the click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'google_review_click', {
        event_category: 'Social Proof',
        event_label: 'Google Business Profile'
      });
    }
    
    // Open Google Business Profile
    window.open(GOOGLE_BUSINESS_URL, '_blank');
  };

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map(i => (
          <Card key={i} className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map(star => (
                  <Skeleton key={star} className="w-4 h-4 mr-1" />
                ))}
              </div>
              <Skeleton className="h-20 mb-6" />
              <div className="text-left">
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-3 w-20" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {reviews.map((review, index) => (
        <Card 
          key={index} 
          className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
          onClick={handleReviewClick}
        >
          <CardContent className="p-8 relative">
            <div className="flex justify-between items-start mb-4">
              <div className="flex">
                {renderStars(review.rating)}
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-gray-600 mb-6 italic line-clamp-4">
              "{review.text}"
            </p>
            <div className="text-left">
              <p className="font-semibold text-two-trees-green">
                {review.author_name}
              </p>
              <p className="text-sm text-gray-500">
                {getLocationFromName(review.author_name)} • {review.relative_time_description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
