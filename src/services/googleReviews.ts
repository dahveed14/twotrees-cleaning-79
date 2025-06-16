
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

// Google Places API configuration
const GOOGLE_PLACES_API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY';
const PLACE_ID = 'YOUR_PLACE_ID'; // You'll need to find your Google Places ID

export const fetchGoogleReviews = async (): Promise<GoogleReview[]> => {
  try {
    // Note: This requires a CORS proxy or backend service due to CORS restrictions
    // For production, you should implement this on your backend
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    
    const data: GoogleReviewsResponse = await response.json();
    
    if (data.status === 'OK' && data.result.reviews) {
      return data.result.reviews.filter(review => review.rating >= 4); // Only show 4+ star reviews
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
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
