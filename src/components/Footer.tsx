import { Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Top section */}
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-sm">
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Kabukabu
            </Link>
            <Link to="/support" className="text-foreground hover:text-primary transition-colors">
              Talk To Us
            </Link>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Our Hubs
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background hover:bg-primary transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background hover:bg-primary transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background hover:bg-primary transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background hover:bg-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center text-background hover:bg-primary transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Bottom section */}
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Kabukabu. All rights reserved.
          </p>
          
          {/* Center logo */}
          <Link to="/" className="flex items-center" aria-label="Kabukabu Home">
            <img 
              src="/designScreens/kabukabuLogo.png" 
              alt="Kabukabu" 
              className="h-8 w-auto md:h-10"
              loading="lazy"
              decoding="async"
            />
          </Link>

          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
