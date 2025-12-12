import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Ride with us", href: "#ride" },
    { label: "Drive with us", href: "#drive" },
    { label: "Drive for us", href: "#drive-for-us" },
  ];

  const rightLinks = [
    { label: "About", href: "#about" },
    { label: "Support", href: "#support" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo placeholder - you can replace with actual logo */}
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-header-foreground">Kabukabu</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-header-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {rightLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-header-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button 
              variant="outline" 
              className="border-white text-white bg-transparent hover:bg-white hover:text-black rounded-full px-6"
            >
              Sign Up
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-header-foreground hover:text-primary transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-header-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-header border-t border-header-foreground/10 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-header-foreground hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              {rightLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-header-foreground hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  variant="outline" 
                  className="border-white text-white bg-transparent hover:bg-white hover:text-black rounded-full w-full"
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
