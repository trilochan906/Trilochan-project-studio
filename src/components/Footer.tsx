import { Button } from "@/components/ui/button";
import { Play, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export const Footer = () => {
  return (
    <footer className="bg-cinema-darker border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Play className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">VideoEditor</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional video editing services for commercials, music videos, 
              and storytelling that captivates audiences worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Portfolio", "About", "Services", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>hello@videoeditor.com</p>
              <p>+91 9064781961</p>
              <p>Puruliya, WB, India</p>
            </div>
            <div className="flex space-x-2 mt-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 hover:bg-primary/10 hover:text-primary"
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 VideoEditor. All rights reserved. Crafted with passion for visual storytelling.
          </p>
        </div>
      </div>
    </footer>
  );
};