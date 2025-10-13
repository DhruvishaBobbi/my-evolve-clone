import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    result: "Lost 25 lbs in 3 months",
    quote: "Bobbi changed my life. The trainers are incredible and the community support kept me motivated every single day.",
  },
  {
    name: "Jessica L.",
    result: "Gained confidence & strength",
    quote: "I've tried many fitness apps but this is the only one that truly understands women's needs. The programs are perfect.",
  },
  {
    name: "Emma K.",
    result: "Transformed my lifestyle",
    quote: "Not just about workouts - the holistic approach to wellbeing made all the difference for me.",
  },
];

const TransformationsSection = () => {
  return (
    <section id="transformations" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm tracking-wider uppercase mb-4">
            Real Results
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4">
            Amazing Transformations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what our community has achieved with Bobbi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-primary" />
                <p className="text-muted-foreground italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold text-secondary">{testimonial.name}</p>
                  <p className="text-primary text-sm font-semibold">{testimonial.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection;
