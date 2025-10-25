import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Users, Calendar, MessageCircle, Sparkles } from "lucide-react";
import communityHero from "@/assets/community-hero.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";
import communityGallery from "@/assets/community-gallery.jpg";

const Community = () => {
  const testimonials = [
    {
      name: "Amira K.",
      age: 29,
      location: "Manchester",
      quote: "Bobbi helped me understand my energy patterns — now I train smarter, not harder.",
      image: testimonial1,
    },
    {
      name: "Priya S.",
      age: 32,
      location: "London",
      quote: "I finally feel connected to my body and a community that gets it. Game changer!",
      image: testimonial2,
    },
    {
      name: "Emma L.",
      age: 26,
      location: "Bristol",
      quote: "The monthly challenges keep me motivated and the support from other women is incredible.",
      image: testimonial3,
    },
    {
      name: "Sofia M.",
      age: 28,
      location: "Birmingham",
      quote: "I've never felt more in tune with my cycle. Bobbi gave me the tools and the community.",
      image: testimonial4,
    },
  ];

  const features = [
    {
      icon: Calendar,
      title: "Group Challenges & Events",
      description: "Join monthly challenges like our Cycle Sync Challenge or Strength Through Every Phase programme. Set goals, track progress, and celebrate wins together.",
    },
    {
      icon: MessageCircle,
      title: "In-App Connection",
      description: "Share your journey, motivate each other, and join discussion groups. Connect with women who understand what you're going through.",
    },
    {
      icon: Sparkles,
      title: "Expert Q&As & Live Sessions",
      description: "Get access to expert insights, founder-led live events, and exclusive wellness content from industry leaders.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${communityHero})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
              Strong Alone. Unstoppable Together.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Join a community of women training in sync with their cycles.
            </p>
            <Button size="lg" className="text-lg">
              Join the Community
            </Button>
          </div>
        </section>

        {/* Welcome Message */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              We're so glad you're here!
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-foreground">
              The Bobbi Community
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bobbi isn't just an app — it's a supportive community of women learning, training, and thriving together. 
              We're breaking the taboo around women's cycles and helping you train, work, and live more in sync with your body.
            </p>
          </div>
        </section>

        {/* What the Community Offers */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                What the Community Offers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Connect, learn, and grow with women who understand your journey.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Stories / Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Real Stories from Our Community
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from women who are training in sync and thriving together.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.age}, {testimonial.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Gallery / Social Feed */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                From Our Community
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                #TrainInSync with Bobbi
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={communityGallery} 
                  alt="Community gallery showcasing diverse women working out"
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Follow @BobbiApp on Instagram
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Community Content Ecosystem */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                More Ways to Connect
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Explore our content ecosystem and stay connected with the Bobbi community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <a 
                href="/podcast"
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  In Sync Podcast
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Real conversations about women's health, fitness, and everything in between. Listen to inspiring stories and expert insights.
                </p>
              </a>

              <a 
                href="/blog"
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all hover:scale-105 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Bobbi Blog
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expert articles on cycle syncing, nutrition, training, and wellness. Get the science-backed info you need.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Join the Movement CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground">
              Join the Movement
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to train in sync with your body — and with thousands of other women?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-base">
                Download the App
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Follow Us on Instagram
              </Button>
            </div>
            <div className="pt-8 border-t border-border max-w-2xl mx-auto">
              <p className="text-sm text-muted-foreground italic">
                <strong>Community Guidelines:</strong> We're committed to creating a positive, supportive space. 
                All members are expected to treat each other with respect, kindness, and empathy.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Community;
