import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Apple, Music, Youtube } from "lucide-react";
import podcastHero from "@/assets/podcast-hero.jpg";
import podcastCover from "@/assets/podcast-cover.jpg";

const Podcast = () => {
  const featuredEpisodes = [
    {
      number: "EP 01",
      title: "Cycle Syncing 101: Training Smarter, Not Harder",
      description: "Discover how to align your workouts with your menstrual cycle for better results and less burnout. We break down each phase and what your body needs.",
      duration: "42 min"
    },
    {
      number: "EP 05",
      title: "Burnout, Balance, and Boundaries — with Grace Beverley",
      description: "Entrepreneur and fitness influencer Grace Beverley joins us to talk about building a business while prioritising mental health and wellbeing.",
      duration: "38 min"
    },
    {
      number: "EP 08",
      title: "Nutrition Across Your Cycle — What the Science Says",
      description: "Registered nutritionist breaks down how hormonal shifts affect your appetite, cravings, and energy — and how to fuel each phase properly.",
      duration: "45 min"
    }
  ];

  const allEpisodes = [
    {
      number: "EP 12",
      title: "How to Build Confidence in the Gym",
      description: "From gym anxiety to strength training confidence — our practical guide to feeling empowered in any fitness space."
    },
    {
      number: "EP 10",
      title: "Periods and Productivity: How Hormones Impact Performance",
      description: "Understanding the link between your cycle and work performance, and how to plan your schedule accordingly."
    },
    {
      number: "EP 09",
      title: "Why Rest Days Are Non-Negotiable",
      description: "Rest isn't lazy — it's essential. We explore recovery, muscle growth, and why doing less can help you achieve more."
    },
    {
      number: "EP 07",
      title: "Managing PMS: Movement, Mindset & Self-Care",
      description: "Practical strategies for navigating the luteal phase with grace — from gentle movement to mood management."
    },
    {
      number: "EP 04",
      title: "Strength Training Myths Every Woman Should Know",
      description: "Busting common misconceptions about women and weights — from bulking up to cardio vs. strength."
    },
    {
      number: "EP 03",
      title: "Finding Your Why: Motivation Beyond Aesthetics",
      description: "Building a sustainable fitness practice rooted in how you feel, not just how you look."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={podcastHero} 
            alt="In Sync: The Bobbi Podcast" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">In Sync: The Bobbi Podcast</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Real conversations about women's health, fitness, and everything in between
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Play className="h-5 w-5" />
              Listen Now
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* About Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={podcastCover} 
                alt="Podcast Cover" 
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Podcast</h2>
              <p className="text-lg text-muted-foreground mb-4">
                We're breaking the taboo around women's cycles and helping you train, work, and live more in sync with your body. Each episode dives into the science, stories, and strategies behind hormonal health, strength training, and holistic wellbeing.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Hosted by Bobbi co-founders Saffron Howdle and Jessica Menahem, alongside expert guests, we're here to empower you with knowledge and practical tools to feel your best — no matter what phase you're in.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Music className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Apple className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Episodes */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Episodes</h2>
            <p className="text-lg text-muted-foreground">Start here — our most popular conversations</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredEpisodes.map((episode, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-primary mb-2">{episode.number}</div>
                  <h3 className="text-xl font-bold mb-3">{episode.title}</h3>
                  <p className="text-muted-foreground mb-4">{episode.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{episode.duration}</span>
                    <Button size="sm" className="gap-2">
                      <Play className="h-4 w-4" />
                      Play
                    </Button>
                  </div>
                  {/* Placeholder for Spotify/Apple embed */}
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg text-center text-sm text-muted-foreground">
                    Audio Player Embed
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Episodes Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">More Episodes</h2>
            <p className="text-lg text-muted-foreground">Explore our full library of conversations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allEpisodes.map((episode, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-sm font-semibold text-primary">{episode.number}</div>
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{episode.title}</h3>
                  <p className="text-sm text-muted-foreground">{episode.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-20">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl font-medium mb-4 italic">
                  "This podcast changed how I approach my training. I finally understand my body and feel so much more empowered in the gym."
                </p>
                <p className="text-muted-foreground">— Emily R., Bobbi Community Member</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Behind the Mic */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Behind the Mic</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Co-founded by Saffron Howdle and Jessica Menahem, two fitness professionals passionate about empowering women through education, evidence-based training, and body literacy. We started Bobbi because we believe every woman deserves to understand her body and train in a way that truly works for her.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Conversation</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of women learning to live in sync. Subscribe wherever you listen to podcasts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Music className="h-5 w-5" />
              Spotify
            </Button>
            <Button size="lg" variant="secondary" className="gap-2">
              <Apple className="h-5 w-5" />
              Apple Podcasts
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Youtube className="h-5 w-5" />
              YouTube
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Podcast;
