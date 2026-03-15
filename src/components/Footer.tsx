import { Facebook, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

import ContactSupportDialog from "@/components/ContactSupportDialog";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-6 lg:px-8 sm:py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-wrap gap-6 text-body">
            <Link
              to="/about"
              className="text-foreground transition-colors hover:text-primary"
            >
              About Kabukabu
            </Link>
            <ContactSupportDialog
              trigger={
                <button
                  type="button"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  Talk To Us
                </button>
              }
            />
            <a
              href="#"
              className="text-foreground transition-colors hover:text-primary"
            >
              Our Hubs
            </a>
          </div>

          <div className="flex gap-5">
            <a
              href="#"
              aria-label="Facebook"
              className="text-foreground transition-colors hover:text-primary"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-foreground transition-colors hover:text-primary"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-foreground transition-colors hover:text-primary"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border" />

      <div className="container mx-auto px-4 py-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-body text-muted-foreground">
            &copy; {new Date().getFullYear()} Kabukabu. All rights reserved.
          </p>

          <Link to="/" className="flex items-center" aria-label="Kabukabu Home">
            <img
              src="/designScreens/kabukabuLogoBlack.png"
              alt="Kabukabu"
              className="h-8 w-auto md:h-10"
              loading="lazy"
              decoding="async"
            />
          </Link>

          <div className="flex gap-6 text-body">
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
