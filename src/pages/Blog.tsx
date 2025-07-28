
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

  const blogPosts: any[] = [];

  const categories = ["All", "Cleaning Tips", "Seasonal Cleaning", "Green Cleaning"];

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
            {blogPosts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold text-two-trees-green mb-4">
                  Coming Soon!
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  We're working on creating helpful cleaning tips and guides for you. 
                  Check back soon for expert advice from our professional cleaning team.
                </p>
                <button 
                  onClick={() => handleBookingClick('blog')}
                  className="bg-two-trees-green text-white px-8 py-3 rounded-lg hover:bg-two-trees-green/90 transition-colors font-semibold"
                >
                  Schedule Your Cleaning Today
                </button>
              </div>
            ) : (
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
            )}
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
