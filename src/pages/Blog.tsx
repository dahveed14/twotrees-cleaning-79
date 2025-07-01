
import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { updateMetaTags } from "@/utils/metaTags";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const handleBookingClick = (location: string) => {
    // Track booking clicks without console logging
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'booking_click', {
        event_category: 'Blog',
        event_label: location
      });
    }
    window.open('https://twotreescleaning.com/book', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:8054561421';
  };

  useEffect(() => {
    updateMetaTags({
      title: "House Cleaning Blog - Tips & Guides | Two Trees Cleaning",
      description: "Expert house cleaning tips, seasonal guides, and local insights from Two Trees Cleaning. Learn professional cleaning techniques for your Ventura County home.",
      url: "https://twotreescleaning.com/blog",
      keywords: [
        "house cleaning blog",
        "cleaning tips",
        "home maintenance blog",
        "Ventura cleaning advice",
        "professional cleaning tips",
        "seasonal cleaning guides",
        "eco-friendly cleaning tips",
        "home organization tips"
      ]
    });
  }, []);

  const blogPosts = [
    {
      title: "The Ultimate Spring Cleaning Checklist for Ventura County Homes",
      excerpt: "Get your home ready for spring with our comprehensive cleaning checklist. From deep cleaning tips to organizing strategies, we cover everything you need for a fresh start.",
      date: "2024-03-15",
      author: "Two Trees Cleaning Team",
      category: "Seasonal Cleaning",
      readTime: "8 min read",
      image: "/lovable-uploads/753bc8de-6a12-41a5-9eb4-067177715fdf.png",
      slug: "spring-cleaning-checklist-ventura-county"
    },
    {
      title: "Eco-Friendly Cleaning Products: Safe for Your Family and the Environment",
      excerpt: "Discover the benefits of eco-friendly cleaning products and learn how to maintain a spotless home while protecting your family's health and the environment.",
      date: "2024-03-10",
      author: "Two Trees Cleaning Team",
      category: "Green Cleaning",
      readTime: "6 min read",
      image: "/lovable-uploads/302e16f3-2dcf-4fc9-ac5a-d4aa2eb97027.png",
      slug: "eco-friendly-cleaning-products-guide"
    },
    {
      title: "How Often Should You Deep Clean Your Home? A Professional's Guide",
      excerpt: "Learn from professional cleaners about the optimal frequency for deep cleaning different areas of your home to maintain a healthy living environment.",
      date: "2024-03-05",
      author: "Two Trees Cleaning Team",
      category: "Cleaning Tips",
      readTime: "5 min read",
      image: "/lovable-uploads/4042e633-3464-473f-8856-715aa7b5b0f1.png",
      slug: "how-often-deep-clean-home"
    },
    {
      title: "Preparing Your Santa Barbara Home for Holiday Guests",
      excerpt: "Make your home guest-ready with our holiday preparation checklist. From deep cleaning to last-minute touch-ups, ensure your home sparkles for the holidays.",
      date: "2024-02-28",
      author: "Two Trees Cleaning Team",
      category: "Holiday Cleaning",
      readTime: "7 min read",
      image: "/lovable-uploads/77a0b0f4-7cad-4fdf-ad34-f5def09d3d9b.png",
      slug: "holiday-guest-preparation-santa-barbara"
    },
    {
      title: "The Hidden Health Benefits of Professional House Cleaning",
      excerpt: "Explore the surprising ways professional house cleaning can improve your family's health, from reducing allergens to creating a stress-free environment.",
      date: "2024-02-20",
      author: "Two Trees Cleaning Team",
      category: "Health & Wellness",
      readTime: "6 min read",
      image: "/lovable-uploads/854ae905-37ee-4e73-a5f8-a01c6f2e9bb4.png",
      slug: "health-benefits-professional-cleaning"
    },
    {
      title: "Move-In Cleaning: Starting Fresh in Your New Ventura County Home",
      excerpt: "Moving to a new home? Our comprehensive move-in cleaning guide ensures your new space is pristine and ready for your family from day one.",
      date: "2024-02-15",
      author: "Two Trees Cleaning Team",
      category: "Moving Tips",
      readTime: "9 min read",
      image: "/lovable-uploads/7a231da2-6877-46a0-be55-52b1023419b0.png",
      slug: "move-in-cleaning-guide-ventura-county"
    }
  ];

  const categories = ["All", "Seasonal Cleaning", "Green Cleaning", "Cleaning Tips", "Holiday Cleaning", "Health & Wellness", "Moving Tips"];

  return (
    <div className="min-h-screen bg-white">
      <Navigation onBookingClick={handleBookingClick} onPhoneClick={handlePhoneClick} />
      
      <main>
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-4 px-4">
          <div className="max-w-6xl mx-auto">
            <Breadcrumbs 
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" }
              ]} 
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-two-trees-green mb-6">
              House Cleaning Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert cleaning tips, seasonal guides, and professional insights to keep your home spotless year-round.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={`cursor-pointer px-4 py-2 ${
                    category === "All" 
                      ? "bg-two-trees-green hover:bg-two-trees-green/90" 
                      : "hover:bg-two-trees-green hover:text-white"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-two-trees-green">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </div>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-two-trees-green mb-3 group-hover:text-two-trees-gold transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-two-trees-green hover:text-two-trees-gold transition-colors font-semibold"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-two-trees-green mb-4">
              Stay Updated with Cleaning Tips
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest cleaning tips, seasonal guides, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-gray-300 flex-1"
              />
              <button className="bg-two-trees-green text-white px-6 py-3 rounded-lg hover:bg-two-trees-green/90 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
