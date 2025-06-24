
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GoogleReview {
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GoogleReviewsResponse {
  html_attributions: string[];
  result: {
    name: string;
    rating: number;
    reviews: GoogleReview[];
    user_ratings_total: number;
  };
  status: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const googlePlacesApiKey = Deno.env.get('GOOGLE_PLACES_API_KEY');
    const placeId = 'ChIJu4j5t6sASQARPfEuLicUNA4'; // Two Trees Cleaning Place ID

    if (!googlePlacesApiKey) {
      console.error('GOOGLE_PLACES_API_KEY not found in environment variables');
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Fetching Google Reviews for Place ID:', placeId);

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${googlePlacesApiKey}`
    );

    if (!response.ok) {
      console.error('Google Places API response not ok:', response.status, response.statusText);
      throw new Error(`Google Places API error: ${response.status}`);
    }

    const data: GoogleReviewsResponse = await response.json();
    console.log('Google Places API response status:', data.status);

    if (data.status === 'OK' && data.result.reviews) {
      console.log('Successfully fetched reviews:', data.result.reviews.length);
      // Filter for 4+ star reviews
      const filteredReviews = data.result.reviews.filter(review => review.rating >= 4);
      
      return new Response(
        JSON.stringify({ 
          reviews: filteredReviews,
          total_rating: data.result.rating,
          total_reviews: data.result.user_ratings_total
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    } else {
      console.log('Google Places API returned no reviews or error status:', data.status);
      return new Response(
        JSON.stringify({ 
          reviews: [],
          error: `Google Places API status: ${data.status}` 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

  } catch (error) {
    console.error('Error in fetch-google-reviews function:', error);
    return new Response(
      JSON.stringify({ 
        reviews: [],
        error: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
