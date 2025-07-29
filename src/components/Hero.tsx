import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Crafting Stories Through
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Cinema
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-silver-accent mb-8 max-w-2xl mx-auto text-balance">
            Professional video editor specializing in commercials, music videos, and narrative storytelling
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cinema" 
              size="lg"
              className="text-lg px-8 py-4 h-auto animate-glow"
            >
              <Play className="w-5 h-5" />
              View My Reel
            </Button>
            
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToPortfolio}
              className="text-lg px-8 py-4 h-auto"
            >
              Explore Portfolio
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown 
          className="w-8 h-8 text-primary cursor-pointer hover:text-primary/80 transition-smooth"
          onClick={scrollToPortfolio}
        />
      </div>
    </section>
  );
};