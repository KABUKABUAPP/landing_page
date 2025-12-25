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
            className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center bg-header"
            style={{
              backgroundImage: "url(/designScreens/assets/sharp-driver/hero_sharp_driver.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-16 sm:pt-24 pb-12 sm:pb-16">
              <div className="max-w-xl">
                <p className="text-white/80 text-sm mb-2">Become a Sharp Driver with Kabukabu</p>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight">Drive with Our Cars, Earn with Us</h1>
                <p className="mt-3 text-white/80">No Car? No Problem! Drive with Kabukabu's Sharp Driver Program.</p>
                <div className="mt-8">
                  <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base">
                    <a href="#" className="inline-flex items-center gap-2">
                      Get The App
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Illustration with labels */}
          <section className="grid grid-cols-1 md:grid-cols-2 py-12 sm:py-16 bg-background">
            <div className="px-4 sm:px-8 lg:px-[10vw] py-8 sm:py-12 lg:py-[20vh]">
              <p>Are you eager to drive but you don't own a vehicle? Kabukabu's Sharp Driver program is designed just for you! We provide the cars, you provide the driving. Join our team of Sharp Drivers and start earning with ease.</p>
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="#download" className="inline-flex items-center gap-2">
                    Get The App
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
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
          <section className="py-12 sm:py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8">Why Choose the Sharp Driver Program</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Drive a Kabukabu vehicle", img: "/designScreens/assets/sharp-driver/car_white.png", text: "No need to worry about powning a car. Kabukabu provides the vehicle, fully equipped and ready to go. Just focus on providing excellent service and maximizing your earnings." },
                  { title: "Competitive Earnings", img: "/designScreens/assets/sharp-driver/car_green.png", text: "Enjoy competitive rates and earn more with every ride. Our Sharp Drivers are valued members of our team and we offer great earning potential to ensure you are rewarded for your hardwork." },
                  { title: "Flexible Scheduling", img: "/designScreens/assets/sharp-driver/car_yellow.png", text: "Choose your own hours and drive on your own terms. Whether you want to work full-time or part-time, the Sharp Driver program offers flexibility to fit your lifestyle." },
                  { title: "Easy Onboarding", img: "/designScreens/assets/sharp-driver/car_teal.png", text: "Our streamlined onboarding process get's you behind the wheel quickly. We provide all the necessary training and support to ensure you are ready to start driving in no time." },
                  { title: "Support and Maintenance", img: "/designScreens/assets/sharp-driver/car_white.png", text: "Kabukabu handles vehicle maintenance, insurance and support. Drive with confidence knowing that everything is taken care of, so you can focus on providing great rides and earning. " },
                ].map((item) => (
                  <div key={item.title} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border bg-card">
                    <div className="sm:mb-0">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.text}</p>
                    </div>
                    <img src={item.img} alt={item.title} className="w-16 sm:w-20 h-auto sm:mt-0" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Steps - dark band */}
          <section className="py-12 sm:py-16 lg:py-20 bg-header">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                How to <span className="text-primary">Get Started</span> with Kabuakabu?
              </h2>
              <p className="text-white/70 mb-6 sm:mb-10 max-w-2xl">
                Our driver app makes it easy to receive and manage ride
                requests, ensuring that you spend less time waiting for passengers
                and more time earning. Efficient trip distribution means more rides
                and better utilization of your time on the road.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((s) => (
                  <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6">
                    <div className="text-primary text-sm font-medium mb-3">{s.step}</div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <s.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-white mb-1 text-xs sm:text-sm">{s.title}</h3>
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

          {/* Community CTA text */}
          <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                More than an app, a community
              </h2>
              <p className="mt-4">
                At Kabukabu, we believe in building more than just a ride-hailing platform, we're creating a vibrant community where drivers and riders come together with shared goals of convenience, safety and mutual respect. Our platform offers a sense of belonging by offering tailored rewards, open communication and support for everyone. Whether you are a rider enjoying perks like student discounts or a driver benefiting from reduced commisions, Kabukabu ensures everyone is valued. Together we are shaving a community that thrives on connection, trust and the joy of every journey.
              </p>
            </div>
          </section>

          {/* Community section image */}
          <section className="py-12 sm:py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <img src="/designScreens/assets/sharp-driver/sharp_driver_community.png" alt="Community" className="rounded-2xl w-full h-auto object-cover" />
            </div>
          </section>

          {/* Split phones download */}
          <section id="download" className="py-12 sm:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-6 sm:gap-10 items-end">
              {/* Rider card */}
              <div className="bg-muted/40 rounded-2xl p-5 sm:p-6 border">
                <div className="flex justify-center">
                  <img
                    src="/designScreens/assets/ride-with-us/phone_card_rider.png"
                    alt="Rider app screenshot"
                    className="w-[220px] sm:w-[260px] md:w-[300px]"
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
              <div className="bg-muted/40 rounded-2xl p-5 sm:p-6 border">
                <div className="flex justify-center">
                  <img
                    src="/designScreens/assets/ride-with-us/phone_card_driver.png"
                    alt="Driver app screenshot"
                    className="w-[220px] sm:w-[260px] md:w-[300px]"
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

export default DriveForUs;
