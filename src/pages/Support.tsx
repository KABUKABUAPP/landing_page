import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import { Helmet } from "react-helmet-async";
import { Search, User, Car, Users, UserCheck } from "lucide-react";
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
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-16 bg-cream">
            <div className="container mx-auto px-4 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                How can we help?
              </h1>
              
              {/* Search bar */}
              <div className="max-w-xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input 
                    type="text"
                    placeholder="Type your question"
                    className="w-full pl-12 pr-4 py-4 border border-border rounded-lg text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {categories.map((category) => (
                  <Link
                    key={category.label}
                    to={category.href}
                    className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all text-center group"
                  >
                    <div className="w-12 h-12 bg-cream rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                      <category.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-medium text-foreground">{category.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <CommunitySection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Support;
