
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, User } from "lucide-react";
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

  const renderProfilePhoto = (review: GoogleReview) => {
    if (review.profile_photo_url) {
      return (
        <img 
          src={review.profile_photo_url} 
          alt={`${review.author_name} profile`}
          className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
          onError={(e) => {
            // Fallback to User icon if image fails to load
            e.currentTarget.style.display = 'none';
          }}
        />
      );
    }
    
    // Fallback to User icon when no profile photo is available
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
        <User className="w-5 h-5 text-gray-500" />
      </div>
    );
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
              <div className="text-left flex items-center gap-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-3 w-20" />
                </div>
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
            <div className="text-left flex items-center gap-3">
              {renderProfilePhoto(review)}
              <div className="flex-1">
                <p className="font-semibold text-two-trees-green">
                  {review.author_name}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  {getLocationFromName(review.author_name)} • {review.relative_time_description}
                </p>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Posted on Google</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
