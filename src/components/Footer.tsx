import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Top section */}
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About Kabukabu
            </a>
            <a href="/support" className="text-foreground hover:text-primary transition-colors">
              Talk To Us
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Our Hubs
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              <Youtube className="w-5 h-5" />
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
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-foreground">
              <span className="text-primary">K</span>abukabu
            </span>
          </a>

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
