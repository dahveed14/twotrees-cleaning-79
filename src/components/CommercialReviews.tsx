
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ExternalLink, Building } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchCommercialReviews, fallbackCommercialReviews, type CommercialReview } from '@/services/commercialReviews';

export const CommercialReviews = () => {
  const [reviews, setReviews] = useState<CommercialReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Your Google Business Profile URL
  const GOOGLE_BUSINESS_URL = 'https://maps.app.goo.gl/r9ZN422dd6uPFXfG9';

  // Profile images for commercial reviewers
  const profileImages = [
    '/lovable-uploads/bbe8108f-d132-4156-8869-023d6ebe830b.png', // Sarah M.
    '/lovable-uploads/cdfe0a8d-53c5-4665-8343-4375c59e96ad.png', // Michael C.
    '/lovable-uploads/302e16f3-2dcf-4fc9-ac5a-d4aa2eb97027.png', // Jennifer W.
    '/lovable-uploads/77a0b0f4-7cad-4fdf-ad34-f5def09d3d9b.png', // David R.
  ];

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        const fetchedReviews = await fetchCommercialReviews();
        
        if (fetchedReviews.length > 0) {
          setReviews(fetchedReviews.slice(0, 4)); // Show top 4 reviews
        } else {
          // Use fallback reviews if API fails or returns no results
          setReviews(fallbackCommercialReviews.slice(0, 4));
        }
      } catch (err) {
        setError('Failed to load reviews');
        setReviews(fallbackCommercialReviews.slice(0, 4)); // Use fallback on error
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

  const handleReviewClick = () => {
    // Track the click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'commercial_google_review_click', {
        event_category: 'Commercial Social Proof',
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
              <img 
                src={profileImages[index] || profileImages[0]} 
                alt={`${review.author_name} profile`}
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <p className="font-semibold text-two-trees-green">
                  {review.author_name}
                </p>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Building className="w-3 h-3" />
                  <span>{review.business_title} • {review.relative_time_description}</span>
                </div>
                <p className="text-xs text-gray-400">
                  {review.business_type}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
