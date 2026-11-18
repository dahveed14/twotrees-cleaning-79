import { GoogleReviewsWidget } from "@/components/GoogleReviewsWidget";

export const ReviewsSection = () => (
  <section className="py-20 px-4 bg-gray-50">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-two-trees-green mb-12 text-center">
        What Our Customers Say
      </h2>
      <GoogleReviewsWidget />
    </div>
  </section>
);
