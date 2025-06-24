
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchGoogleReviews, fallbackReviews, type GoogleReview } from '@/services/googleReviews';

export const CompactGoogleReviews = () => {
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
          setReviews(fetchedReviews.slice(0, 2)); // Show only 2 reviews for compact layout
        } else {
          setReviews(fallbackReviews.slice(0, 2));
        }
      } catch (err) {
        setError('Failed to load reviews');
        setReviews(fallbackReviews.slice(0, 2));
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
        className={`w-3 h-3 ${
          i < rating 
            ? 'fill-two-trees-gold text-two-trees-gold' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleReviewClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'google_review_click', {
        event_category: 'Social Proof',
        event_label: 'Google Business Profile'
      });
    }
    
    window.open(GOOGLE_BUSINESS_URL, '_blank');
  };

  const renderProfilePhoto = (review: GoogleReview) => {
    if (review.profile_photo_url) {
      return (
        <img 
          src={review.profile_photo_url} 
          alt={`${review.author_name} profile`}
          className="w-8 h-8 rounded-full object-cover border border-gray-200"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      );
    }
    
    return (
      <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center">
        <User className="w-4 h-4 text-gray-500" />
      </div>
    );
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <CheckCircle className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-semibold text-gray-700">Verified Reviews</span>
        </div>
        <div className="grid gap-4">
          {[1, 2].map(i => (
            <Card key={i} className="border-none shadow-md">
              <CardContent className="p-4">
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Skeleton key={star} className="w-3 h-3 mr-1" />
                  ))}
                </div>
                <Skeleton className="h-12 mb-3" />
                <div className="flex items-center gap-2">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Verified Reviews Badge with Google Logo */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <CheckCircle className="w-5 h-5 text-blue-500" />
        <span className="text-sm font-semibold text-gray-700">Verified Reviews</span>
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>

      {/* Compact Reviews Grid */}
      <div className="grid gap-4">
        {reviews.map((review, index) => (
          <Card 
            key={index} 
            className="border-none shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
            onClick={handleReviewClick}
          >
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3 italic line-clamp-2">
                "{review.text}"
              </p>
              <div className="flex items-center gap-2">
                {renderProfilePhoto(review)}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-two-trees-green text-sm truncate">
                    {review.author_name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {review.relative_time_description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View All Reviews Link */}
      <div className="text-center">
        <button
          onClick={handleReviewClick}
          className="text-sm text-two-trees-green hover:text-two-trees-gold transition-colors font-medium"
        >
          View all reviews on Google →
        </button>
      </div>
    </div>
  );
};
