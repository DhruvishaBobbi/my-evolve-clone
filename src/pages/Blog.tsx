import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import cycleSyncingImage from "@/assets/blog/cycle-syncing-training.jpg";
import restRecoveryImage from "@/assets/blog/rest-recovery.jpg";
import hormoneMoodImage from "@/assets/blog/hormone-mood.jpg";
import nutritionImage from "@/assets/blog/nutrition.jpg";
import balancedRoutineImage from "@/assets/blog/balanced-routine.jpg";
import founderStoryImage from "@/assets/blog/founder-story.jpg";

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  author: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Train Smarter During Each Phase of Your Cycle",
    summary: "Discover the power of cycle syncing and learn how to adjust your workouts to match your body's natural rhythm. From high-energy strength training to restorative movement, we'll guide you through each phase.",
    author: "By the Bobbi Team",
    date: "May 15, 2025",
    category: "Cycle Syncing",
    image: cycleSyncingImage,
    featured: true,
  },
  {
    id: 2,
    title: "Why Rest Is Part of Progress",
    summary: "Pushing harder isn't always better. Learn why rest days are essential for hormonal balance, muscle recovery, and long-term fitness success. It's time to redefine what progress really means.",
    author: "By the Bobbi Team",
    date: "May 12, 2025",
    category: "Mind & Body",
    image: restRecoveryImage,
    featured: true,
  },
  {
    id: 3,
    title: "The Hormone-Mood Connection: How Exercise Can Help",
    summary: "Feeling low energy or anxious? Your hormones might be the reason — and movement can help. Explore practical tips for using exercise to support your mood and mental wellbeing throughout your cycle.",
    author: "By the Bobbi Team",
    date: "May 10, 2025",
    category: "Mind & Body",
    image: hormoneMoodImage,
    featured: true,
  },
  {
    id: 4,
    title: "Fuel Your Follicular Phase",
    summary: "The follicular phase is your time to shine — energy is high and strength is building. Learn which foods will support your workouts and keep you feeling your best during this power phase.",
    author: "By Saffron Howdle, Co-Founder",
    date: "May 8, 2025",
    category: "Nutrition",
    image: nutritionImage,
  },
  {
    id: 5,
    title: "Building a Balanced Routine: From Workouts to Wellbeing",
    summary: "Fitness isn't just about what happens in the gym. From sleep and stress management to mindful movement and nutrition, discover how to create a holistic self-care routine that works.",
    author: "By the Bobbi Team",
    date: "May 5, 2025",
    category: "Lifestyle",
    image: balancedRoutineImage,
  },
  {
    id: 6,
    title: "Founder Spotlight: Why We Started Bobbi",
    summary: "Meet the founders behind Bobbi and hear the personal story that inspired us to create a fitness platform designed for women's bodies. It's time for training that works with you, not against you.",
    author: "By Saffron Howdle, Co-Founder",
    date: "May 1, 2025",
    category: "Lifestyle",
    image: founderStoryImage,
  },
];

const Blog = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

  const getPostsByCategory = (category: string) => {
    if (category === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === category);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
              The Bobbi Journal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your go-to space for science, movement, and self-care. Explore insights on cycle syncing, fitness, nutrition, and living in harmony with your body.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-black">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <h3 className="text-xl font-bold leading-tight">{post.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.summary}
                    </p>
                    <div className="text-xs text-muted-foreground pt-2">
                      {post.author} • {post.date}
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Category Tabs & Articles */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">
              Explore by Category
            </h2>
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-transparent mb-8">
                <TabsTrigger value="All" className="rounded-full">All</TabsTrigger>
                <TabsTrigger value="Cycle Syncing" className="rounded-full">Cycle Syncing</TabsTrigger>
                <TabsTrigger value="Fitness" className="rounded-full">Fitness</TabsTrigger>
                <TabsTrigger value="Nutrition" className="rounded-full">Nutrition</TabsTrigger>
                <TabsTrigger value="Mind & Body" className="rounded-full">Mind & Body</TabsTrigger>
                <TabsTrigger value="Lifestyle" className="rounded-full">Lifestyle</TabsTrigger>
              </TabsList>

              {["All", "Cycle Syncing", "Fitness", "Nutrition", "Mind & Body", "Lifestyle"].map(
                (category) => (
                  <TabsContent key={category} value={category} className="space-y-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {getPostsByCategory(category).map((post) => (
                        <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="aspect-video overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <CardContent className="p-6 space-y-3">
                            <Badge variant="secondary">{post.category}</Badge>
                            <h3 className="text-lg font-bold leading-tight">{post.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                              {post.summary}
                            </p>
                            <div className="text-xs text-muted-foreground pt-2">
                              {post.author} • {post.date}
                            </div>
                          </CardContent>
                          <CardFooter className="px-6 pb-6">
                            <Button variant="outline" size="sm" className="w-full">
                              Read More
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                )
              )}
            </Tabs>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-none">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-black">
                  Join the Bobbi Community
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Get weekly insights on cycle syncing, fitness tips, and exclusive updates from our team delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 h-12"
                  />
                  <Button size="lg" className="sm:w-auto w-full">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  No spam, ever. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
              Ready to Train Smarter?
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of women who are transforming their fitness journey with cycle-synced training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="text-base">
                Start Your Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-base border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download the App
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
