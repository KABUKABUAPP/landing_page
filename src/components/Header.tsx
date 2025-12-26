import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Ride with us", href: "/" },
    { label: "Drive with us", href: "/drive-with-us" },
    { label: "Drive for us", href: "/drive-for-us" },
  ];

  const rightLinks = [
    { label: "About", href: "/about" },
    { label: "Support", href: "/support" },
  ];

  const menuTabs = [
    {
      key: "ride",
      label: "Ride with us",
      leftTitle: "Great rides,\n better comfort",
      middleTitle: "Rider Features",
      middleItems: ["Kabu Rider", "Rewards Program"],
      rightTitle: "Get Kabukabu Rider App",
    },
    {
      key: "drive",
      label: "Drive with us",
      leftTitle: "0% commission,\n unlimited incentives",
      middleTitle: "Driver Features",
      middleItems: ["Kabu Driver", "Sharp Program"],
      rightTitle: "Get Kabukabu Driver App",
    },
    {
      key: "company",
      label: "Company",
      leftTitle: "Building\n mobility for all",
      middleTitle: "Company Highlights",
      middleItems: ["Mission", "Vision"],
      rightTitle: "Learn More",
    },
    {
      key: "cities",
      label: "Cities",
      leftTitle: "Serving\n more communities",
      middleTitle: "Available Cities",
      middleItems: ["Coming Soon", "Coming Soon"],
      rightTitle: "Explore Cities",
    },
    {
      key: "safety",
      label: "Safety",
      leftTitle: "Safety-first\n rides and drives",
      middleTitle: "Safety Features",
      middleItems: ["In-app tools", "Trusted drivers"],
      rightTitle: "Safety Overview",
    },
    {
      key: "support",
      label: "Support",
      leftTitle: "Help when\n you need it",
      middleTitle: "Support Options",
      middleItems: ["Help Center", "Contact Us"],
      rightTitle: "Visit Support",
    },
  ];
  const [activeMenuTab, setActiveMenuTab] = useState(menuTabs[0]);

  // Pages that have a hero where the header should overlay/blend in
  const overlayRoutes = [
    "/",
    "/about",
    "/",
    "/drive-with-us",
    "/drive-for-us",
  ];
  const isOverlayRoute = overlayRoutes.includes(location.pathname);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const isOverlay = isOverlayRoute && !scrolled;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      isOverlay ? 'bg-transparent' : 'bg-background border-b border-border shadow-sm'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="Kabukabu Home">
            <img
              src={!scrolled ? "/designScreens/kabukabuLogo.png" : "/designScreens/kabukabuLogoBlack.png"}
              alt="Kabukabu"
              className="h-8 w-auto md:h-10"
              loading="eager"
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isOverlay 
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
                  isOverlay 
                    ? 'text-white/90 hover:text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className={`rounded-full px-6 ${
                isOverlay 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
              }`}
            >
              Sign Up
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${isOverlay ? 'text-white hover:text-primary' : 'text-foreground hover:text-primary'}`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden ${isOverlay ? 'text-white' : 'text-foreground'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Modal */}
        <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DialogContent className="w-screen h-[100dvh] sm:w-[95vw] sm:h-[90vh] max-w-5xl p-0 overflow-hidden bg-white rounded-none sm:rounded-3xl shadow-xl">
            <div className="flex flex-col h-full min-h-0">
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-4 md:px-8 bg-muted/40 border-b">
                <div className="flex items-center gap-6">
                  <Link to="/" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center">
                    <img src="/designScreens/kabukabuLogoBlack.png" alt="Kabukabu" className="h-8 w-auto" />
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:flex items-center gap-4 text-sm font-medium">
                    <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">
                      About
                    </Link>
                    <Link to="/support" onClick={() => setIsMenuOpen(false)} className="text-foreground hover:text-primary transition-colors">
                      Support
                    </Link>
                    <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-5">
                      Get The App
                    </Button>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Nav Tabs */}
              <nav className="flex flex-wrap items-center gap-2 my-4 md:my-5 mx-4 md:mx-10 md:flex-nowrap md:overflow-x-auto">
                {menuTabs.map((tab) => {
                  const isActive = activeMenuTab.key === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveMenuTab(tab)}
                      className={`text-xs sm:text-sm font-semibold px-3 py-2 rounded-full whitespace-nowrap transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </nav>

              {/* Content */}
              <div className="grid md:grid-cols-[1.1fr_1fr_0.9fr] gap-4 sm:gap-6 px-4 sm:px-5 py-5 sm:py-6 md:px-8 md:py-10 bg-muted/20 flex-1 min-h-0 overflow-y-auto">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex items-center min-w-0">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    {activeMenuTab.leftTitle.split("\n").map((line, index) => (
                      <span key={line}>
                        {line}
                        {index === 0 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {activeMenuTab.middleTitle}
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {activeMenuTab.middleItems.map((item) => (
                      <li key={item} className="text-foreground font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col items-center justify-center gap-4 min-w-0">
                  <p className="text-center text-sm font-semibold text-foreground">
                    {activeMenuTab.rightTitle}
                  </p>
                  <img src="/designScreens/assets/ride-with-us/badge_google_play.png" alt="Google Play" className="h-12 w-auto max-w-full" />
                  <img src="/designScreens/assets/ride-with-us/badge_app_store.png" alt="App Store" className="h-12 w-auto max-w-full" />
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

      </div>
    </header>
  );
};

export default Header;


