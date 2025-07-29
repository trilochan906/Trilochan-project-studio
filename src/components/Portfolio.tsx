import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Commercial Campaign",
    category: "Commercial",
    description: "High-end product commercial with dynamic editing and motion graphics",
    image: portfolio1,
    duration: "2:30",
    tags: ["After Effects", "Color Grading", "Motion Graphics"]
  },
  {
    id: 2,
    title: "Brand Documentary",
    category: "Documentary",
    description: "Compelling brand story with cinematic approach and emotional narrative",
    image: portfolio2,
    duration: "5:45",
    tags: ["Storytelling", "Interviews", "B-Roll"]
  },
  {
    id: 3,
    title: "Music Video",
    category: "Music Video",
    description: "Creative music video with dynamic cuts and visual effects",
    image: portfolio3,
    duration: "3:20",
    tags: ["Creative Editing", "VFX", "Color Correction"]
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            A curated selection of my best video editing work across different genres and styles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 shadow-card hover:shadow-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="cinema" size="lg" className="animate-bounce">
                    <Play className="w-6 h-6" />
                  </Button>
                </div>
                
                {/* Duration Badge */}
                <Badge className="absolute top-4 right-4 bg-black/70 text-white border-none">
                  {item.duration}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="text-xs border-primary/20 hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};