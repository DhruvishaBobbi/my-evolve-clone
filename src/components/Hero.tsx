import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-trainers.jpg";
const Hero = () => {
  return <section className="relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <div className="text-left">
                <div className="text-secondary font-bold text-sm">4.8 stars out of 5</div>
                <div className="text-muted-foreground text-xs">40,000+ reviews</div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <p className="text-primary font-bold text-sm tracking-wider uppercase">
                Challenge. Overcome. Evolve.
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary leading-tight">Empowering women through cycle informed fitness</h1>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">Join the Waitlist now!</Button>
              <Button size="lg" variant="outline" className="text-base group">
                Find Your Program
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* As Seen On */}
            <div className="pt-8">
              <p className="text-muted-foreground text-sm font-semibold mb-4 uppercase tracking-wider">
                As Seen On:
              </p>
              <div className="flex flex-wrap items-center gap-8 opacity-60">
                <div className="text-secondary font-bold text-xl">SAMSUNG</div>
                <div className="text-secondary font-bold text-xl">Women's Health</div>
                <div className="text-secondary font-bold text-xl">BBC</div>
                <div className="text-secondary font-bold text-xl">Forbes</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={heroImage} alt="Diverse group of confident women fitness trainers" className="w-full h-auto object-cover" />
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute -z-10 top-8 left-8 right-8 bottom-8 bg-primary/20 rounded-3xl blur-3xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;