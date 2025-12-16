import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, Download, UserPlus, FileCheck, Play } from "lucide-react";

const steps = [
  { icon: Download, step: "01", title: "Download the Driver App", description: "Grab the Kabukabu Driver app and get started.", link: "Get The App" },
  { icon: UserPlus, step: "02", title: "Apply for Sharp Driver", description: "Choose Sharp Driver in the app and submit details.", link: "View Requirements" },
  { icon: FileCheck, step: "03", title: "Complete onboarding", description: "Quick verification and training to set you up." },
  { icon: Play, step: "04", title: "Start driving & earning", description: "Pick trips, drive confidently and earn more." },
];

const DriveForUs = () => {
  return (
    <>
      <Helmet>
        <title>Sharp Driver Program - Drive with Our Cars, Earn with Us | Kabukabu</title>
        <meta name="description" content="No car? No problem! Join Kabukabu's Sharp Driver program and start earning with our vehicles." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero */}
          <section
            className="relative min-h-[70vh] flex items-center bg-header"
            style={{
              backgroundImage: "url(/designScreens/assets/sharp-driver/hero_sharp_driver.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-16">
              <div className="max-w-xl">
                <p className="text-white/80 text-sm mb-2">Sharp Driver Program</p>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">Drive with Our Cars, Earn with Us</h1>
                <p className="mt-3 text-white/80">No car? Start earning with Kabukabu supplied vehicles.</p>
                <div className="mt-8">
                  <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="#get-started" className="inline-flex items-center gap-2">
                      Get The App
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Illustration with labels */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8 flex justify-center">
              <img
                src="/designScreens/assets/sharp-driver/illustration_sharp_driver.png"
                alt="Sharp Driver program highlights"
                className="max-w-3xl w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>

          {/* Why choose cards */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">Why choose the Sharp Driver Program?</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { title: "Drive a Kabukabu Vehicle", img: "/designScreens/assets/sharp-driver/car_white.png", desc: "We handle vehicles so you can focus on trips." },
                  { title: "Easy Onboarding", img: "/designScreens/assets/sharp-driver/car_teal.png", desc: "Simple application with quick verification." },
                  { title: "Flexible Scheduling", img: "/designScreens/assets/sharp-driver/car_green.png", desc: "Choose hours that work for you." },
                  { title: "Competitive Earnings", img: "/designScreens/assets/sharp-driver/car_yellow.png", desc: "Fair commissions to maximize take‑home." },
                ].map((c) => (
                  <div key={c.title} className="rounded-xl border bg-card p-5 text-center">
                    <img src={c.img} alt={c.title} className="w-24 h-auto mx-auto" />
                    <h3 className="font-semibold text-foreground mt-3">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Steps */}
          <section id="get-started" className="py-20 bg-header">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How to <span className="text-primary">Get Started</span></h2>
              <p className="text-white/70 mb-10 max-w-2xl">Follow these simple steps to apply and begin your journey.</p>
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

          {/* Community section image */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <img src="/designScreens/assets/sharp-driver/sharp_driver_community.png" alt="Community" className="rounded-2xl w-full h-auto object-cover" />
            </div>
          </section>

          {/* Download cards */}
          <section id="download" className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-10 items-end">
              <div className="bg-muted/40 rounded-2xl p-6 border">
                <div className="flex justify-center">
                  <img src="/designScreens/assets/sharp-driver/phone_card_rider.png" alt="Rider app" className="w-[260px] md:w-[300px]" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-semibold text-lg">Riders App</h3>
                  <p className="text-sm text-muted-foreground mt-1">More ways to ride</p>
                </div>
                <div className="mt-6 flex justify-center gap-3">
                  <img src="/designScreens/assets/sharp-driver/badge_app_store.png" alt="App Store" className="h-10 w-auto" />
                  <img src="/designScreens/assets/sharp-driver/badge_google_play.png" alt="Google Play" className="h-10 w-auto" />
                </div>
              </div>
              <div className="bg-muted/40 rounded-2xl p-6 border">
                <div className="flex justify-center">
                  <img src="/designScreens/assets/sharp-driver/phone_card_driver.png" alt="Driver app" className="w-[260px] md:w-[300px]" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="font-semibold text-lg">Drivers App</h3>
                  <p className="text-sm text-muted-foreground mt-1">Drive to earn</p>
                </div>
                <div className="mt-6 flex justify-center gap-3">
                  <img src="/designScreens/assets/sharp-driver/badge_app_store.png" alt="App Store" className="h-10 w-auto" />
                  <img src="/designScreens/assets/sharp-driver/badge_google_play.png" alt="Google Play" className="h-10 w-auto" />
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

export default DriveForUs;
