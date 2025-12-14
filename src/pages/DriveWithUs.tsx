import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Check, DollarSign, Clock, TrendingUp, Download, UserPlus, FileCheck, Car, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Better Earnings with Every Ride",
    description: "Unlike other ride-sharing apps that eat into your profits, Kabukabu only charges a minimal commission structure, allowing you to keep more money for every trip, every month."
  },
  {
    icon: Clock,
    title: "Flexible Driving Hours",
    description: "Enjoy convenient and flexible driving hours as long as you want. Kabukabu lets you set your own schedule, so you're always in control of when you work."
  },
  {
    icon: TrendingUp,
    title: "Grow Your Income & Business",
    description: "Kabukabu offers various incentive programs, bonuses, and tips that help boost your earnings. We're all about putting more money in your pocket."
  }
];

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download the Kabukabu Driver App",
    description: "Get started by downloading the Kabukabu Driver app from the App Store or Google Play. It's quick, easy to install.",
    link: "Get The App"
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Sign Up Online",
    description: "Within the app, select the Sharp Driver option, complete the required details, and submit your application with any requested documents.",
    link: "View Requirements"
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Complete Your Onboarding",
    description: "Once your application is approved, you'll receive full onboarding, training, and access to your assigned vehicle and earnings page.",
  },
  {
    icon: Car,
    step: "04",
    title: "Start Driving and Earning!",
    description: "Pick up requests, hit the roads, and start earning. With our tools and low commission rates, you're set to make money like the masters on the road."
  }
];

const DriveWithUs = () => {
  return (
    <>
      <Helmet>
        <title>Drive with Kabukabu - Earn More, Drive Less Stress</title>
        <meta name="description" content="Join Kabukabu as a driver. Enjoy flexible hours, better earnings, and 24/7 support." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[70vh] flex items-center bg-header">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')"
              }}
            />
            <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
              <div className="max-w-xl">
                <p className="text-white/80 text-sm mb-2">Drive with Kabukabu</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  Earn More, Drive Less Stress
                </h1>
                <p className="text-white/80 mb-6 flex items-center gap-2">
                  <span>🚗</span> Unlock New Earning Opportunities with Kabukabu! <span>🚗</span>
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-lg">
                  Get The App
                </Button>
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    At Kabukabu, we focus on drivers as the backbone of our service. That's why we've created a platform that lets our drivers earn more, enjoy flexible hours and benefit. If you own your car and want to generate steady income, or want to partner with us as a fleet owner or even apply for our Sharp Driver program, Kabukabu gives you the freedom and tools you need to thrive.
                  </p>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Make money when you want
                  </h3>
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-5 h-5 bg-primary rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Enhanced Trip Requests</h4>
                      <p className="text-sm text-muted-foreground">
                        Our innovative Ride-Kabukabu algorithm manages the number of car service requests by efficiently distributing them among our drivers.
                      </p>
                    </div>
                  </div>
                </div>
                <div 
                  className="aspect-[4/3] rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070')"
                  }}
                />
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-cream">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div 
                  className="aspect-[4/3] rounded-2xl bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070')"
                  }}
                />
                <div className="space-y-6">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-primary rounded flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* No Car Section */}
          <section className="py-16 bg-primary">
            <div className="container mx-auto px-4 lg:px-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 flex items-center justify-center gap-2">
                <span>🚗</span> No Car? No Problem!
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                Are you eager to drive and earn, but have been kept out by those pesky upfront costs? Join us, we make it accessible for you to start earning with Kabukabu even if you don't own a vehicle.
              </p>
            </div>
          </section>

          {/* How to Get Started */}
          <section className="py-20 bg-header">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How to <span className="text-primary">Get Started</span> with Kabukabu:
              </h2>
              <p className="text-white/70 mb-12 max-w-2xl">
                Our driver app makes it easy to receive and manage ride requests, ensuring you save time and effort while staying flexible. Here are the key steps to getting started in just a few minutes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step) => (
                  <div key={step.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="text-primary text-sm font-medium mb-3">{step.step}</div>
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-white mb-2 text-sm">{step.title}</h3>
                    <p className="text-xs text-white/60 mb-3">{step.description}</p>
                    {step.link && (
                      <a href="#" className="text-primary text-xs font-medium hover:underline inline-flex items-center gap-1">
                        {step.link} <ArrowRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
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

export default DriveWithUs;
