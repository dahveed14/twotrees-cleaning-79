
import { supabase } from '@/integrations/supabase/client';

export interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export interface GoogleReviewsResponse {
  html_attributions: string[];
  result: {
    name: string;
    rating: number;
    reviews: GoogleReview[];
    user_ratings_total: number;
  };
  status: string;
}

export const fetchGoogleReviews = async (): Promise<GoogleReview[]> => {
  try {
    console.log('Calling Supabase Edge Function to fetch Google Reviews...');
    
    const { data, error } = await supabase.functions.invoke('fetch-google-reviews');
    
    if (error) {
      console.error('Supabase function error:', error);
      throw new Error('Failed to fetch reviews from Edge Function');
    }

    if (data && data.reviews && data.reviews.length > 0) {
      console.log('Successfully fetched Google reviews via Edge Function:', data.reviews.length);
      return data.reviews;
    }
    
    console.log('No reviews returned from Edge Function, using fallback');
    return [];
  } catch (error) {
    console.error('Error calling Edge Function for Google reviews:', error);
    return [];
  }
};

// Fallback reviews in case API fails
export const fallbackReviews: GoogleReview[] = [
  {
    author_name: "Sarah M.",
    rating: 5,
    text: "Two Trees Cleaning has been a game-changer for our family. With two kids and demanding careers, we finally have our weekends back. Their attention to detail is incredible!",
    relative_time_description: "2 weeks ago",
    language: "en",
    time: Date.now() - (14 * 24 * 60 * 60 * 1000)
  },
  {
    author_name: "Jennifer K.",
    rating: 5,
    text: "Reliable, professional, and thorough. They clean places I didn't even know needed cleaning! I can't recommend Two Trees Cleaning enough.",
    relative_time_description: "3 weeks ago",
    language: "en",
    time: Date.now() - (21 * 24 * 60 * 60 * 1000)
  },
  {
    author_name: "Michael R.",
    rating: 5,
    text: "Best cleaning service in Ventura County! They're always on time and do an amazing job. My house has never looked better.",
    relative_time_description: "1 month ago", 
    language: "en",
    time: Date.now() - (30 * 24 * 60 * 60 * 1000)
  },
  {
    author_name: "Lisa T.",
    rating: 5,
    text: "Professional, reliable, and thorough. Two Trees Cleaning gives me peace of mind knowing my home is in expert hands.",
    relative_time_description: "1 month ago",
    language: "en", 
    time: Date.now() - (35 * 24 * 60 * 60 * 1000)
  }
];
