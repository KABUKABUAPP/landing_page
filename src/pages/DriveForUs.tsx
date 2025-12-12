import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { Car, DollarSign, Calendar, Check, Download, UserPlus, FileCheck, Play } from "lucide-react";

const benefits = [
  {
    icon: Car,
    title: "Drive a Kabukabu Vehicle",
    description: "No need to worry about finding your own Kabukabu vehicle - just focus on driving. We handle all of your essential vehicle needs so you can stay active in the flow and earn."
  },
  {
    icon: DollarSign,
    title: "Competitive Earnings",
    description: "Experience daily, weekly or even same day payments with our commission rates. Let it be driver terms instead of ours while still getting the most value for your driving hours."
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose to work when it suits you. Our flexible scheduling options mean you're not tied to a 9-to-5 if you don't want. Hit the Sharp Driver program whenever fits your lifestyle."
  }
];

const whyChoose = [
  {
    icon: Car,
    title: "Drive a Kabukabu Vehicle",
    description: "No need to worry about finding your own Kabukabu vehicle - just focus on driving. We handle all of your essential vehicle needs so you can stay in the flow and earn."
  },
  {
    icon: DollarSign,
    title: "Competitive Earnings",
    description: "Experience daily, weekly or even same day payments with our commission rates. Let it be driver terms instead of ours while still getting the most value for your driving hours."
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose to work when it suits you. Our flexible scheduling options mean you're not tied to a 9-to-5 if you don't want. Hit the Sharp Driver program whenever fits your lifestyle."
  }
];

const steps = [
  {
    icon: Download,
    title: "Download the Kabukabu Driver App",
    description: "Get started by downloading the Kabukabu Driver app from the App Store or Google Play. It's quick, easy to install.",
    link: "Get The App →"
  },
  {
    icon: UserPlus,
    title: "Sign Up & Apply for the Sharp Driver Program",
    description: "Within the app, select the Sharp Driver option, complete the required details, and submit your application with any requested documents.",
    link: "View Requirements →"
  },
  {
    icon: FileCheck,
    title: "Complete Your Onboarding",
    description: "Once your application is approved, you'll receive full onboarding, training, and access to your assigned vehicle and earnings page.",
  },
  {
    icon: Play,
    title: "Start Driving and Earning!",
    description: "Pick up requests, hit the roads, and start earning. With our tools and low commission rates, you're set to make money like the masters on the road."
  }
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
                <p className="text-white/80 text-sm mb-2">Become a Sharp Driver with Kabukabu</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  Drive with Our Cars, Earn with Us
                </h1>
                <p className="text-white/80 mb-6">
                  🚗 No Car? No Problem! Drive with Kabukabu's Sharp Driver Program! 🚗
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
                    Are you eager to drive but don't own a vehicle? Kabukabu's Sharp Driver program is designed just for you! We provide the cars, you provide the driving. Join our team of Sharp Drivers and start earning with ease.
                  </p>
                  <Button className="border-foreground text-foreground hover:bg-foreground hover:text-background" variant="outline">
                    Get The App
                  </Button>
                </div>
                
                {/* Form mockup */}
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-border">
                    <h3 className="font-semibold text-foreground mb-4">Drive a Kabukabu Vehicle</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground">House Address *</label>
                        <input type="text" className="w-full border border-border rounded-lg px-3 py-2 mt-1" placeholder="House address here" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-muted-foreground">City *</label>
                          <input type="text" className="w-full border border-border rounded-lg px-3 py-2 mt-1" placeholder="City" />
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground">State *</label>
                          <input type="text" className="w-full border border-border rounded-lg px-3 py-2 mt-1" placeholder="State/city" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">Do you have a car? *</label>
                        <div className="flex gap-4 mt-2">
                          <button className="px-6 py-2 border border-border rounded-lg text-sm">Yes</button>
                          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm">No I don't</button>
                        </div>
                      </div>
                      <Button className="w-full bg-primary text-primary-foreground">Continue</Button>
                    </div>
                  </div>
                  
                  {/* Feature badges */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium">Easy Onboarding</span>
                  </div>
                  <div className="absolute top-1/3 -left-4 bg-white rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium">Flexible Screening</span>
                  </div>
                  <div className="absolute bottom-1/4 -right-4 bg-white rounded-lg shadow-lg px-3 py-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium">Competitive Earnings</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="py-20 bg-cream">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Why Choose the Sharp Driver Program?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {whyChoose.map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How to Get Started */}
          <section className="py-20 bg-header">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How to <span className="text-primary">Get Started</span> with Kabukabu:
              </h2>
              <p className="text-white/70 mb-12 max-w-2xl">
                Our driver app makes it easy to receive and manage ride requests, ensuring you save time and effort while staying flexible. Here are the key steps to getting started on the road.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step) => (
                  <div key={step.title} className="bg-white/5 rounded-xl p-6">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-white/60 mb-3">{step.description}</p>
                    {step.link && (
                      <a href="#" className="text-primary text-sm font-medium hover:underline">
                        {step.link}
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

export default DriveForUs;
