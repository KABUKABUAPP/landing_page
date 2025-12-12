import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Ride with us", href: "/ride-with-us" },
    { label: "Drive with us", href: "/drive-with-us" },
    { label: "Drive for us", href: "/drive-for-us" },
  ];

  const rightLinks = [
    { label: "About", href: "/about" },
    { label: "Support", href: "/support" },
  ];

  // Check if we're on a dark header page
  const isDarkHeader = location.pathname === "/" || 
                       location.pathname === "/drive-with-us" || 
                       location.pathname === "/drive-for-us";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${isDarkHeader ? 'bg-header' : 'bg-background border-b border-border'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={`text-xl font-bold ${isDarkHeader ? 'text-white' : 'text-foreground'}`}>
              <span className="text-primary">K</span>abukabu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isDarkHeader 
                    ? 'text-white/90 hover:text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {rightLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isDarkHeader 
                    ? 'text-white/90 hover:text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className={`rounded-full px-6 ${
                isDarkHeader 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
              }`}
            >
              Sign Up
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${isDarkHeader ? 'text-white hover:text-primary' : 'text-foreground hover:text-primary'}`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${isDarkHeader ? 'text-white' : 'text-foreground'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden py-4 border-t ${isDarkHeader ? 'bg-header border-white/10' : 'bg-background border-border'}`}>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 transition-colors ${isDarkHeader ? 'text-white hover:text-primary' : 'text-foreground hover:text-primary'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {rightLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 transition-colors ${isDarkHeader ? 'text-white hover:text-primary' : 'text-foreground hover:text-primary'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full">
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
