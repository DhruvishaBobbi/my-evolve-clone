import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/how-it-works-hero.jpg";
import step1Image from "@/assets/step-1-profile.jpg";
import step2Image from "@/assets/step-2-questionnaire.jpg";
import step3Image from "@/assets/step-3-workouts.jpg";
import step4Image from "@/assets/step-4-tracking.jpg";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create a Profile",
      description: "Sign up and tell us about yourself. It takes just 2 minutes to set up your personal profile and get started on your fitness journey.",
      image: step1Image,
      highlights: ["Quick signup", "Personal details", "Fitness preferences"]
    },
    {
      number: "02",
      title: "Complete Your Onboarding",
      description: "Answer a few questions about your fitness level, goals, and menstrual cycle. This helps us create the perfect plan for you.",
      image: step2Image,
      highlights: ["Fitness assessment", "Goal setting", "Cycle information"]
    },
    {
      number: "03",
      title: "Get Personalized Workouts",
      description: "Bobbi generates workouts tailored to your cycle phase and fitness goals. Every workout adapts to where you are in your cycle.",
      image: step3Image,
      highlights: ["Cycle-synced plans", "Custom workouts", "Expert guidance"]
    },
    {
      number: "04",
      title: "Track Your Progress",
      description: "Log workouts, track progress, and adjust your plan as you go. See how your body responds across different cycle phases.",
      image: step4Image,
      highlights: ["Progress tracking", "Regular check-ins", "Adapt as you grow"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Bobbi App Interface" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            How Bobbi Works
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Personalized workouts designed for your cycle and your goals
          </p>
          <Button size="lg" className="gap-2">
            Start Your Free Trial
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Steps Section */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-primary font-bold">Step {step.number}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold">{step.title}</h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                <ul className="space-y-3">
                  {step.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {index === steps.length - 1 && (
                  <Button size="lg" className="mt-4 gap-2">
                    Get Started Now
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                )}
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="relative mx-auto max-w-sm">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
                  <Card className="relative overflow-hidden shadow-2xl">
                    <CardContent className="p-0">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-auto"
                      />
                    </CardContent>
                  </Card>
                </div>

                {/* Arrow connector (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -bottom-24 left-1/2 transform -translate-x-1/2">
                    <ArrowRight className="h-12 w-12 text-primary/30 rotate-90" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Features Overview */}
        <section className="mt-32 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Bobbi?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Training that adapts to you — because your body isn't the same every day
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cycle-Synced Training</h3>
                <p className="text-muted-foreground">
                  Workouts designed around your hormones for better results and less burnout
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Science-Backed Approach</h3>
                <p className="text-muted-foreground">
                  Evidence-based training created by fitness professionals and women's health experts
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Built for Women</h3>
                <p className="text-muted-foreground">
                  Finally, a fitness app that understands your body and works with your cycle, not against it
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Training Smarter?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your first cycle-informed workout today — download Bobbi now and join thousands of women training in sync with their bodies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • 7-day free trial
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
