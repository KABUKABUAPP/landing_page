import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import SplitDownloadSection from "@/components/SplitDownloadSection";
import SupportSearch from "@/components/SupportSearch";
import { Helmet } from "react-helmet-async";
import { User, Car, Users, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { icon: User, label: "Riders", href: "/support/riders" },
  { icon: Car, label: "Drivers", href: "/support/drivers" },
  { icon: Users, label: "Fleet Owners", href: "/support/fleet-owners" },
  { icon: UserCheck, label: "Sharp Drivers", href: "/support/sharp-drivers" },
];

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Support - How can we help? | Kabukabu</title>
        <meta name="description" content="Get help and support for Kabukabu riders, drivers, fleet owners, and sharp drivers." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16 sm:pt-20">
          {/* Hero Section */}
          <section className="py-12 sm:py-16 bg-cream">
            <div className="container mx-auto px-4 lg:px-8 text-center">
              <h1 className="text-pageTitle font-bold text-foreground mb-8">
                How can we help?
              </h1>
              
              {/* Search bar */}
              <SupportSearch className="mb-12" />

              {/* Categories */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {categories.map((category) => (
                  <Link
                    key={category.label}
                    to={category.href}
                    className="bg-background border border-border rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all text-center group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cream rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                      <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-body font-medium text-foreground">{category.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <CommunitySection
            headingTag="h3"
            headingClassName="text-sectionTitle font-semibold text-[#1a1a1a]"
            paragraphClassName="mx-auto mt-4 max-w-[1013px] text-body leading-relaxed text-[#4a4a4a]"
          />

          {/* Split phones download */}
          <SplitDownloadSection sectionClassName="px-4 sm:px-6 lg:px-20" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Support;
