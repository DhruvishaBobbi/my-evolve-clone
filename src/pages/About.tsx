import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Lightbulb, Scale } from "lucide-react";
import founderOne from "@/assets/founder-1.jpg";
import founderTwo from "@/assets/founder-2.jpg";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={aboutHero} 
              alt="Women training together" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Training in sync with your body
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Because your fitness journey should work with you, not against you
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-center">Our Mission</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              At Bobbi, we believe that fitness should be as unique as you are. We help women understand and work with their menstrual cycles to reach their goals — whether that's building strength, improving energy, or finding balance. By personalizing workouts to match your body's natural rhythm, we empower you to train smarter, feel better, and achieve more.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Bobbi was born from a simple frustration: generic fitness plans that didn't account for the realities of being a woman. As athletes and trainers ourselves, we experienced firsthand how our energy, strength, and recovery fluctuated throughout the month — yet the fitness industry acted like one size fits all.
              </p>
              <p>
                We knew there had to be a better way. After years of research, personal experimentation, and conversations with thousands of women, we created Bobbi — a platform that personalizes training based on your menstrual cycle and individual goals.
              </p>
              <p>
                Today, Bobbi is helping women around the world unlock their full potential by working with their bodies, not against them. We're building a community where cycle syncing isn't a trend — it's a fundamental part of how we approach fitness and wellbeing.
              </p>
            </div>
          </div>
        </section>

        {/* Meet the Founders */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Meet the Founders</h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Founder 1 */}
              <Card className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={founderOne} 
                    alt="Sarah Mitchell - Co-Founder & CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">Sarah Mitchell</h3>
                    <p className="text-primary font-semibold">Co-Founder & CEO</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Former Olympic athlete and certified personal trainer with a degree in Exercise Science from Stanford. Sarah spent 10 years coaching elite athletes before realizing that traditional training methods weren't designed with women's physiology in mind. Her mission is to make cycle-synced training accessible to every woman.
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    "I started Bobbi because I believe every woman deserves to feel strong, energized, and in tune with her body — not fighting against it."
                  </p>
                </CardContent>
              </Card>

              {/* Founder 2 */}
              <Card className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={founderTwo} 
                    alt="Emma Chen - Co-Founder & CTO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">Emma Chen</h3>
                    <p className="text-primary font-semibold">Co-Founder & CTO</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Tech innovator with a background in biomedical engineering from MIT and a passion for women's health tech. Emma has built AI-powered health platforms used by millions. She combines cutting-edge technology with evidence-based science to create personalized experiences that actually work.
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    "Technology should empower us to understand our bodies better. Bobbi bridges the gap between data and daily life in a way that feels natural and supportive."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Empowerment</h3>
                  <p className="text-muted-foreground">
                    We believe knowledge is power. Understanding your body's rhythm helps you take control of your fitness journey.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Body Literacy</h3>
                  <p className="text-muted-foreground">
                    We educate and inform, helping you understand the 'why' behind every workout and wellness recommendation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Balance</h3>
                  <p className="text-muted-foreground">
                    Fitness isn't about pushing harder every day. It's about listening to your body and training smart.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Community</h3>
                  <p className="text-muted-foreground">
                    You're not alone on this journey. We're building a supportive space where women lift each other up.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-muted-foreground">
                    We combine cutting-edge science with intuitive design to create experiences that feel effortless.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Inclusivity</h3>
                  <p className="text-muted-foreground">
                    Every body is different. We celebrate diversity and create solutions that work for all women.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
