import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Shield, Users, Clock, Quote } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Kabukabu - Building Mobility For All</title>
        <meta name="description" content="Learn about Kabukabu’s mission, vision and people. We’re building safe, reliable mobility for riders and drivers." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero */}
          <section
            className="relative min-h-[50vh] flex items-end"
            style={{
              backgroundImage: "url(/designScreens/assets/about/hero_about.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10 pb-10">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white">Building Mobility for People, Businesses and Cities</h1>
              <p className="text-white/85 max-w-2xl mt-3">
                Our story is about safe, simple and reliable movement for
                everyone — riders, drivers and partners.
              </p>
            </div>
          </section>

          {/* Mission */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src="/designScreens/assets/about/about_person_car.png"
                  alt="About Kabukabu"
                  className="rounded-2xl w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <span className="inline-block bg-primary/15 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">Our Mission</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Making everyday journeys better</h2>
                <p className="text-muted-foreground mt-3">
                  We’re building a ride-hailing platform centered on people —
                  combining trusted drivers, clear pricing and thoughtful
                  product design to make every trip feel smooth and safe.
                </p>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block bg-primary/15 text-primary text-xs font-medium px-3 py-1 rounded-full mb-3">Our Vision</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Mobility that works for everyone</h2>
                <p className="text-muted-foreground mt-3">
                  A future where getting around is simpler, safer and more
                  inclusive for riders and drivers in every city we serve.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src="/designScreens/assets/about/about_person_car.png"
                  alt="Kabukabu vision"
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* Core strengths */}
          <section className="py-16 bg-cream">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="rounded-2xl bg-background p-6 border">
                  <Shield className="w-6 h-6 text-primary" />
                  <h3 className="mt-3 font-semibold text-foreground">Safety & Trust</h3>
                  <p className="text-sm text-muted-foreground mt-1">In‑ride tools, verified drivers and helpful support.</p>
                </div>
                <div className="rounded-2xl bg-background p-6 border">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="mt-3 font-semibold text-foreground">On‑time & Reliable</h3>
                  <p className="text-sm text-muted-foreground mt-1">Smart dispatch and fair prices for every trip.</p>
                </div>
                <div className="rounded-2xl bg-background p-6 border">
                  <Users className="w-6 h-6 text-primary" />
                  <h3 className="mt-3 font-semibold text-foreground">Community First</h3>
                  <p className="text-sm text-muted-foreground mt-1">Benefits that help riders and drivers thrive together.</p>
                </div>
              </div>
            </div>
          </section>

          {/* People quotes */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8 space-y-12">
              {[0,1].map((i) => (
                <div key={i} className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className={i % 2 ? "lg:order-2" : ""}>
                    <img src="/designScreens/assets/about/about_person_car.png" alt="Rider in car" className="rounded-2xl w-full h-auto object-cover" />
                  </div>
                  <div className={i % 2 ? "lg:order-1" : ""}>
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      “Kabukabu makes it easy to move around the city. The
                      rides are comfortable and I always feel safe.”
                    </p>
                    <p className="font-semibold text-foreground">Community member</p>
                    <p className="text-sm text-muted-foreground">Rider</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Wide image */}
          <section className="py-8 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <img src="/designScreens/assets/about/about_person_car.png" alt="Kabukabu community" className="rounded-2xl w-full h-auto object-cover" />
            </div>
          </section>

          {/* Download */}
          <section id="download" className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-end">
              <div className="bg-muted/40 rounded-2xl p-6 border">
                <div className="flex justify-center">
                  <img src="/designScreens/assets/about/phone_card_rider.png" alt="Rider app" className="w-[260px] md:w-[300px]" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-semibold text-lg">Riders App</h3>
                  <p className="text-sm text-muted-foreground mt-1">More ways to ride</p>
                </div>
                <div className="mt-6 flex justify-center gap-3">
                  <img src="/designScreens/assets/about/badge_app_store.png" alt="App Store" className="h-10 w-auto" />
                  <img src="/designScreens/assets/about/badge_google_play.png" alt="Google Play" className="h-10 w-auto" />
                </div>
              </div>
              <div className="bg-muted/40 rounded-2xl p-6 border">
                <div className="flex justify-center">
                  <img src="/designScreens/assets/about/phone_card_driver.png" alt="Driver app" className="w-[260px] md:w-[300px]" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-semibold text-lg">Drivers App</h3>
                  <p className="text-sm text-muted-foreground mt-1">Drive to earn</p>
                </div>
                <div className="mt-6 flex justify-center gap-3">
                  <img src="/designScreens/assets/about/badge_app_store.png" alt="App Store" className="h-10 w-auto" />
                  <img src="/designScreens/assets/about/badge_google_play.png" alt="Google Play" className="h-10 w-auto" />
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

export default About;
