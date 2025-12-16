import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kabukabu - Your Premium Ride-Hailing Experience</title>
        <meta
          name="description"
          content="Discover the future of transportation with Kabukabu. Premium ride-hailing service offering safe, reliable, and comfortable rides."
        />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero */}
          <section
            className="relative min-h-screen flex items-center"
            style={{
              backgroundImage:
                "url(/designScreens/assets/ride-with-us/hero_rider_mask.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
            <div className="container mx-auto px-4 lg:px-8 relative">
              <div className="max-w-2xl pt-24 pb-16">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                  Your Premium Ride-Hailing Experience!
                </h1>
                <p className="mt-4 text-white/80 text-lg md:text-xl">
                  Safe, reliable and comfortable rides for every journey.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="#download" className="flex items-center gap-2">
                      Download the App
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Why You'll Love Us */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-center text-2xl md:text-3xl font-bold text-foreground mb-12">
                Here's Why You'll Love Us
              </h2>
              <div className="grid lg:grid-cols-3 gap-10 items-center">
                {/* Left features */}
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-muted/40 border border-border">
                    <h3 className="font-semibold text-foreground">Uncompromising Safety</h3>
                    <p className="text-sm text-muted-foreground mt-1">Verified drivers, in-ride tools and 24/7 support.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-muted/40 border border-border">
                    <h3 className="font-semibold text-foreground">Unbeatable Value</h3>
                    <p className="text-sm text-muted-foreground mt-1">Transparent pricing and rewarding perks for riders.</p>
                  </div>
                </div>

                {/* Center phone */}
                <div className="relative flex justify-center items-center">
                  {/* decorative rings behind phone */}
                  <div className="absolute -z-10 w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full border border-muted/40" />
                  <div className="absolute -z-10 w-[520px] h-[520px] md:w-[680px] md:h-[680px] rounded-full border border-muted/20" />
                  <img
                    src="/designScreens/assets/ride-with-us/phone_rider_full.png"
                    alt="Kabukabu app on phone"
                    className="w-[260px] md:w-[300px] drop-shadow-xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Right features */}
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-muted/40 border border-border">
                    <h3 className="font-semibold text-foreground">Clean Comfort</h3>
                    <p className="text-sm text-muted-foreground mt-1">Enjoy pleasant rides with well-kept vehicles.</p>
                  </div>
                  <div className="p-5 rounded-xl bg-muted/40 border border-border">
                    <h3 className="font-semibold text-foreground">Community-Driven</h3>
                    <p className="text-sm text-muted-foreground mt-1">Built for riders and drivers to thrive together.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src="/designScreens/assets/ride-with-us/community_businesswoman_car.png"
                  alt="Rider in car using phone"
                  className="rounded-2xl w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  We build a better community for all users
                </h2>
                <p className="mt-4 text-muted-foreground">
                  From flexible earnings for drivers to reliable rides for riders,
                  Kabukabu makes mobility fair, safe and accessible for everyone.
                </p>
                {/* Tabs */}
                <CommunityTabsBlock />
              </div>
            </div>
          </section>

          {/* Things we do */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Things we do</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Kabu Ride", img: "/designScreens/assets/ride-with-us/car_yellow.png" },
                  { title: "Kabu Premium", img: "/designScreens/assets/ride-with-us/car_red.png" },
                  { title: "Kabu Dispatch", img: "/designScreens/assets/ride-with-us/car_brown.png" },
                  { title: "Kabu Pink", img: "/designScreens/assets/ride-with-us/car_pink.png" },
                  { title: "Kabu Purple", img: "/designScreens/assets/ride-with-us/car_purple.png" },
                  { title: "Kabu Eco", img: "/designScreens/assets/ride-with-us/car_cream.png" },
                ].map((item) => (
                  <div key={item.title} className="flex items-center justify-between p-4 rounded-xl border bg-card">
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">Fast, safe and reliable rides</p>
                    </div>
                    <img src={item.img} alt={item.title} className="w-20 h-auto" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Community CTA text */}
          <section className="py-16 bg-cream">
            <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                More than an app, a community
              </h2>
              <p className="mt-4 text-muted-foreground">
                A reliable network of riders and drivers moving cities forward.
                Join us to enjoy better rides, better earnings and a better
                way to move every day.
              </p>
            </div>
          </section>

          {/* Wide rider image */}
          <section className="py-8 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <img
                src="/designScreens/assets/ride-with-us/community_businesswoman_car.png"
                alt="Rider using Kabukabu in a car"
                className="w-full h-auto rounded-2xl object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>

          {/* Split phones download */}
          <section id="download" className="py-20 bg-background">
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
                  <h3 className="font-semibold text-lg">Riders App</h3>
                  <p className="text-sm text-muted-foreground mt-1">More ways to ride</p>
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
                  <h3 className="font-semibold text-lg">Drivers App</h3>
                  <p className="text-sm text-muted-foreground mt-1">Drive to earn</p>
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

export default Index;

// Local component for community tabs block
const CommunityTabsBlock = () => {
  const [active, setActive] = useState<'riders' | 'drivers' | 'fleet'>('riders');

  const TabButton = ({ id, label }: { id: 'riders' | 'drivers' | 'fleet'; label: string }) => (
    <button
      onClick={() => setActive(id)}
      className={`px-4 py-2 text-sm font-semibold transition-colors${
        active === id
          ? ' bg-primary text-primary-foreground rounded-lg'
          : ' text-muted-foreground'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="mt-6">
      <div className="flex gap-3">
        <TabButton id="riders" label="Riders" />
        <TabButton id="drivers" label="Drivers" />
        <TabButton id="fleet" label="Fleet Owners" />
      </div>
      <div className="mt-4 text-muted-foreground">
        {active === 'riders' && (
          <ul className="space-y-2">
            <li>- Transparent pricing and respectful service standards</li>
            <li>- Seamless booking with in-ride safety tools</li>
            <li>- Comfortable vehicles and courteous drivers</li>
          </ul>
        )}
        {active === 'drivers' && (
          <ul className="space-y-2">
            <li>- Lower commissions so you keep more</li>
            <li>- Flexible hours with reliable demand</li>
            <li>- Helpful support and simple onboarding</li>
          </ul>
        )}
        {active === 'fleet' && (
          <ul className="space-y-2">
            <li>- Tools to manage and monitor vehicles</li>
            <li>- Access to riders to increase utilization</li>
            <li>- Support to grow and maintain your fleet</li>
          </ul>
        )}
      </div>
    </div>
  );
};
