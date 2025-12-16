import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, Download, UserPlus, FileCheck, Car } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download the Driver App",
    description: "Grab the Kabukabu Driver app from your store to get started.",
    link: "Get The App",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Create your driver account",
    description: "Sign up and submit the required details right in the app.",
    link: "View Requirements",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Complete onboarding",
    description: "Verification and short training help you hit the road confident.",
  },
  {
    icon: Car,
    step: "04",
    title: "Start earning",
    description: "Accept trip requests and enjoy fair commissions and tools.",
  },
];

const DriveWithUs = () => {
  return (
    <>
      <Helmet>
        <title>Drive with Kabukabu - Earn More, Drive Less Stress</title>
        <meta
          name="description"
          content="Join Kabukabu as a driver. Enjoy flexible hours, better earnings, and 24/7 support."
        />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero */}
          <section
            className="relative min-h-screen flex items-center bg-header"
            style={{
              backgroundImage: "url(/designScreens/assets/drive-with-us/hero_driver.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
              <div className="max-w-xl">
                <p className="text-white/80 text-sm mb-2">Drive with Kabukabu</p>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                  Earn More, Drive Less Stress
                </h1>
                <p className="mt-3 text-white/80">
                  Unlock new earning opportunities with Kabukabu.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="#download" className="inline-flex items-center gap-2">
                      Get The App
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Intro */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Drivers are the backbone of Kabukabu. We designed our platform
                  to help you earn more with flexible hours, helpful tools and
                  lower commissions. Whether you drive your own car, run a fleet
                  or want to join our Sharp Driver program, you’ll find a fair
                  way to work and win.
                </p>
              </div>
              <div>
                <img
                  src="/designScreens/assets/drive-with-us/driver_businesswoman_car.png"
                  alt="Professional in a ride"
                  className="rounded-2xl w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </section>

          {/* Callouts */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-cream p-8">
                <h3 className="text-xl font-bold text-foreground">Make money when you want</h3>
                <p className="mt-2 text-muted-foreground">
                  Choose your schedule and keep more of what you earn.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="rounded-2xl border bg-card p-6">
                  <h4 className="font-semibold text-foreground">Flexible Driving Hours</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Drive on your terms and fit trips around your life.
                  </p>
                </div>
                <div className="rounded-2xl border bg-card p-6">
                  <h4 className="font-semibold text-foreground">Enhanced Trip Requests</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Smart dispatch helps balance demand so you waste less time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Steps - dark band */}
          <section className="py-20 bg-header">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How to <span className="text-primary">Get Started</span>
              </h2>
              <p className="text-white/70 mb-10 max-w-2xl">
                Our driver app makes it easy to receive and manage ride
                requests. Follow these simple steps to start earning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((s) => (
                  <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <div className="text-primary text-sm font-medium mb-3">{s.step}</div>
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-white mb-1 text-sm">{s.title}</h3>
                    <p className="text-xs text-white/70">{s.description}</p>
                    {s.link && (
                      <div className="mt-3">
                        <a href="#download" className="text-primary text-xs inline-flex items-center gap-1">
                          {s.link} <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* No car? Sharp Driver block */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-3 gap-6 items-stretch">
              <div className="lg:col-span-1">
                <div className="h-full rounded-2xl bg-cream border border-primary/30 p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground leading-tight">No car? No problem.</h3>
                    <p className="text-sm text-foreground font-semibold">Get started as a Sharp Driver with Kabukabu.</p>
                    <p className="text-sm text-muted-foreground">
                      Access a Kabukabu vehicle and hit the road without owning a car.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-6">
                      Get started
                    </Button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 space-y-4">
                {[
                  {
                    title: "A car for flexible hours",
                    desc: "Choose vehicle options and plans that match your schedule.",
                  },
                  {
                    title: "Protect your earnings",
                    desc: "Fair pricing, transparent commissions and timely payouts.",
                  },
                  {
                    title: "Tools to help you grow",
                    desc: "In-app support and safety features that keep trips smooth.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border bg-card p-5">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Alternating highlights */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src="/designScreens/assets/drive-with-us/driver_businesswoman_car.png"
                  alt="Driver focus"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Safety Comes First</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-1"/> In‑ride safety tools and support</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-1"/> Verified riders and ratings</li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-1"/> Clear pricing and fair policies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Download */}
          <section id="download" className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-end">
              <div className="bg-muted/40 rounded-2xl p-6 border">
                <div className="flex justify-center">
                  <img
                    src="/designScreens/assets/drive-with-us/phone_card_driver.png"
                    alt="Driver app"
                    className="w-[260px] md:w-[300px]"
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
              <div className="bg-muted/40 rounded-2xl p-6 border">
                <div className="flex justify-center">
                  <img
                    src="/designScreens/assets/drive-with-us/phone_card_rider.png"
                    alt="Rider app"
                    className="w-[260px] md:w-[300px]"
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
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DriveWithUs;
