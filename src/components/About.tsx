import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Film, Scissors, Palette } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const skills = [
  { icon: Film, name: "Video Editing", level: "Expert" },
  { icon: Palette, name: "Color Grading", level: "Advanced" },
  { icon: Camera, name: "Motion Graphics", level: "Advanced" },
  { icon: Scissors, name: "Post Production", level: "Expert" }
];

const software = [
  "Adobe Premiere Pro", "DaVinci Resolve", "After Effects", 
  "Final Cut Pro", "Avid Media Composer", "Cinema 4D"
];

export const About = () => {
  return (
    <section className="py-24 px-6 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 opacity-20"></div>
              <img 
                src={profileImage} 
                alt="Video Editor Profile"
                className="relative rounded-2xl w-full max-w-md mx-auto shadow-cinema"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About 
              <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 8 years of experience in video editing and post-production, I specialize in 
              creating compelling visual narratives that captivate audiences. From commercial campaigns 
              to music videos, I bring stories to life through precise editing, stunning color grading, 
              and innovative motion graphics.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My passion lies in the art of storytelling through visual media, combining technical 
              expertise with creative vision to deliver exceptional results that exceed client expectations.
            </p>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <Card key={skill.name} className="bg-card/50 border-border hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <skill.icon className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-sm">{skill.name}</h4>
                      <p className="text-xs text-muted-foreground">{skill.level}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Software */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Software Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {software.map((tool) => (
                  <Badge 
                    key={tool} 
                    variant="secondary" 
                    className="bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};