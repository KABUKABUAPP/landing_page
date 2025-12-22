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

          <section className="py-20 px-20">
            <div className="mx-auto w-full max-w-[1428px] px-6 text-center lg:px-0">
              <h3 className="text-[22px] font-semibold text-[#1a1a1a]">
                More than an app, a community
              </h3>
              <p className="mx-auto mt-4 max-w-[1013px] text-[14px] leading-relaxed text-[#4a4a4a]">
                At Kabukabu, we believe in building more than just a ride-hailing
                platform &mdash; we&rsquo;re creating a vibrant community where
                riders and drivers come together with shared goals of convenience,
                safety, and mutual respect. Our platform fosters a sense of
                belonging by offering tailored rewards, open communication, and
                support for everyone. Whether you&rsquo;re a rider enjoying perks
                like student discounts or a driver benefiting from reduced
                commissions, Kabukabu ensures everyone is valued. Together,
                we&rsquo;re shaping a community that thrives on connection, trust,
                and the joy of every journey.
              </p>
              <img
                src="/designScreens/assets/about/about_person_car.png"
                alt="Kabukabu community"
                className="mt-8 h-[613px] w-full rounded-[24px] object-cover"
              />
            </div>
          </section>

          {/* Split phones download */}
          <section id="download" className="py-20 px-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-end">
              {/* Rider card */}
              <div className="bg-muted/40 rounded-2xl p-6 border">
                <div className="flex justify-center">
                  <img
                    src="/designScreens/assets/ride-with-us/phone_card_rider.png"
                    alt="Rider app screenshot"
                    className="w-[260px] md:w-[300px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-semibold text-lg">Ride With Us</h3>
                  <p className="text-sm mt-1">Get Kabukabu rider app and enjoy the riding experience.</p>
                </div>
                <div className="mt-6 flex justify-center gap-3">
                  <img src="/designScreens/assets/ride-with-us/badge_app_store.png" alt="Download on App Store" className="h-10 w-auto" />
                  <img src="/designScreens/assets/ride-with-us/badge_google_play.png" alt="Get it on Google Play" className="h-10 w-auto" />
                </div>
              </div>

              {/* Driver card */}
              <div className="bg-muted/40 rounded-2xl p-6 border">
                <div className="flex justify-center">
                  <img
                    src="/designScreens/assets/ride-with-us/phone_card_driver.png"
                    alt="Driver app screenshot"
                    className="w-[260px] md:w-[300px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-semibold text-lg">Drive With Us</h3>
                  <p className="text-sm mt-1">Drive and earn seamlessly using the Kabukabu driver app.</p>
                </div>
                <div className="mt-6 flex justify-center gap-3">
                  <img src="/designScreens/assets/ride-with-us/badge_app_store.png" alt="Download on App Store" className="h-10 w-auto" />
                  <img src="/designScreens/assets/ride-with-us/badge_google_play.png" alt="Get it on Google Play" className="h-10 w-auto" />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Support;
