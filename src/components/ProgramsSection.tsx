import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Heart, Zap, Users } from "lucide-react";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build lean muscle and increase your strength with expert-designed workouts tailored for women.",
  },
  {
    icon: Heart,
    title: "Wellbeing Focus",
    description: "Holistic approach to fitness including nutrition guidance and mental wellness practices.",
  },
  {
    icon: Zap,
    title: "Quick Workouts",
    description: "Efficient 15-45 minute sessions that fit perfectly into your busy lifestyle.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join thousands of women on the same journey with our supportive community.",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm tracking-wider uppercase mb-4">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4">
            Programs Built For You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to transform your fitness journey in one place
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary">{program.title}</h3>
                <p className="text-muted-foreground">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
