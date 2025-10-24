import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import bobbiLogo from "@/assets/bobbi-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-secondary text-secondary-foreground py-3 text-center font-semibold text-sm md:text-base">
        SAVE 50% WITH A YEARLY PLAN
      </div>

      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center">
                <img src={bobbiLogo} alt="Bobbi" className="h-10 w-auto" />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="/blog" className="text-secondary hover:text-primary transition-colors font-medium">
                Blog
              </a>
              <a href="/podcast" className="text-secondary hover:text-primary transition-colors font-medium">
                Podcast
              </a>
              <a href="/about" className="text-secondary hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="/faq" className="text-secondary hover:text-primary transition-colors font-medium">
                FAQ
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button size="sm">
                Start Free Trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-3">
              <a
                href="/blog"
                className="block text-secondary hover:text-primary transition-colors font-medium py-2"
              >
                Blog
              </a>
              <a
                href="/podcast"
                className="block text-secondary hover:text-primary transition-colors font-medium py-2"
              >
                Podcast
              </a>
              <a
                href="/about"
                className="block text-secondary hover:text-primary transition-colors font-medium py-2"
              >
                About
              </a>
              <a
                href="/faq"
                className="block text-secondary hover:text-primary transition-colors font-medium py-2"
              >
                FAQ
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full">
                  Login
                </Button>
                <Button className="w-full">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
