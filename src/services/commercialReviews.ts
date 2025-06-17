
export interface CommercialReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  business_title: string;
  business_type: string;
}

export const fallbackCommercialReviews: CommercialReview[] = [
  {
    author_name: "Sarah Martinez",
    rating: 5,
    text: "Two Trees Cleaning has been exceptional for our office. Our clients always comment on how professional and spotless our workspace looks. They work around our schedule and never disrupt our operations.",
    relative_time_description: "2 weeks ago",
    business_title: "Office Manager",
    business_type: "Law Firm"
  },
  {
    author_name: "Michael Chen",
    rating: 5,
    text: "As a business owner, I need reliable service that I can count on. Two Trees delivers consistently high-quality cleaning that maintains our professional image. Our employees love the clean, healthy work environment.",
    relative_time_description: "1 month ago",
    business_title: "CEO",
    business_type: "Tech Company"
  },
  {
    author_name: "Jennifer Walsh",
    rating: 5,
    text: "Outstanding commercial cleaning service! They understand the specific needs of office spaces and maintain the highest standards. Our conference rooms and common areas are always pristine for client meetings.",
    relative_time_description: "3 weeks ago",
    business_title: "Facility Manager",
    business_type: "Corporate Office"
  },
  {
    author_name: "David Rodriguez",
    rating: 5,
    text: "Professional team that truly understands commercial cleaning standards. They've helped us maintain a workspace that reflects our company values. Highly recommend for any serious business looking for reliable cleaning services.",
    relative_time_description: "2 months ago",
    business_title: "Operations Director",
    business_type: "Financial Services"
  }
];

export const fetchCommercialReviews = async (): Promise<CommercialReview[]> => {
  // In a real implementation, this would fetch from Google My Business API
  // For now, return the fallback reviews
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fallbackCommercialReviews);
    }, 500);
  });
};
