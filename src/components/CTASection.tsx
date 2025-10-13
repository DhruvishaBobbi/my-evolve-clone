import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Join 40,000+ women who are transforming their lives with EvolveYou. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button size="lg" variant="secondary" className="text-base">
            Start Your Free Trial
          </Button>
          <Button size="lg" variant="outline" className="text-base border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
