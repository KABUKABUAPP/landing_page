import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#blog" },
    { label: "Press", href: "#press" },
  ],
  services: [
    { label: "Ride with us", href: "#ride" },
    { label: "Drive with us", href: "#drive" },
    { label: "Kabukabu Premium", href: "#premium" },
    { label: "Kabukabu Dispatch", href: "#dispatch" },
  ],
  support: [
    { label: "Help Center", href: "#help" },
    { label: "Safety", href: "#safety" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-header text-header-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="text-2xl font-bold text-white mb-4 inline-block">
              Kabukabu
            </a>
            <p className="text-white/70 mb-6 max-w-sm">
              Your premium ride-hailing experience. Safe, reliable, and comfortable rides at your fingertips.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-primary" />
                <span>support@kabukabu.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-primary" />
                <span>+234 800 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Kabukabu. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#terms" className="text-white/60 hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#privacy" className="text-white/60 hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#cookies" className="text-white/60 hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
