import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import StepsSection from "@/components/StepsSection";
import SplitDownloadSection from "@/components/SplitDownloadSection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Download, UserPlus, FileCheck, Car } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download the Kabukabu Driver App",
    description: "Get started by downloading the Kabukabu Driver App from App Store or Google Play. It's quick and easy free to install.",
    link: "Get The App",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Sign Up Online",
    description: "Join Kabukabu by filling out a simple registration form within the app. Tell us about yourself, your vehicle and submit your required documents for verification.",
    link: "View Requirements",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Complete Your Onboarding",
    description: "Once approved, we'll guide you through our onboarding process, which includes app training, saftey guidelines and tips on how to maximize your earnings.",
  },
  {
    icon: Car,
    step: "04",
    title: "Start Driving And Earning",
    description: "You are ready to hit the road accept ride requests, provide great service and watch your earnings grow. With Kabukabu every ride you complete brings you closer to your financial goals.",
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
          <HeroBanner
            backgroundImage="/designScreens/assets/drive-with-us/hero_driver.png"
            overlayClassName="bg-black/40"
            sectionClassName="bg-header"
            eyebrow="Drive with Kabukabu"
            title="Earn More, Drive Less Stress"
            description="Unlock new earning opportunities with Kabukabu."
            eyebrowClassName="text-white text-sm mb-2"
            titleClassName="text-3xl sm:text-4xl md:text-6xl"
            descriptionClassName="mt-3 text-white text-base"
            contentClassName="max-w-xl"
            actions={(
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="#download" className="inline-flex items-center gap-2">
                  Get The App
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            )}
          />

          {/* Intro */}
          <section className="py-12 sm:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-body leading-relaxed">
                  At Kabukabu we know drivers are the backbone of our service. That's why we have created a platform that empowers you to earn more, enjoy flexible hours and benefit from better opportunites. Whether you are looking for a full-time income or a part-time hustle, Kabukabu gives you the freedom and tools you need to thrive.
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
          <section className="py-10 sm:py-12 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-6">
              <div className="grid gap-6">
                <div className="rounded-2xl bg-cream flex justify-center items-center h-[40vh] sm:h-[50vh] lg:h-[70vh]">
                  <h3 className="text-subTitle font-bold text-foreground">Make money when you want</h3>
                </div>
                <div className="rounded-2xl border bg-card p-5 sm:p-6">
                  <h4 className="text-cardTitle font-semibold text-foreground">Streamlined Trip Requests</h4>
                  <p className="text-body mt-1">
                    Our driver app makes it very easy to receive and manage ride requests, ensuring that you spend less time waiting for passengers and more time earning. Efficient trip distribution means more rides and better utilization on the road.
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="rounded-2xl border bg-card p-5 sm:p-6">
                  <h4 className="text-cardTitle font-semibold text-foreground">Higher Earnings with Every Ride</h4>
                  <p className="text-body mt-1">
                    At Kabukabu, we believe drivers should keep more of what they earn. That's why we offer one of the most driver-friendly platforms, allowing you to maximize your earnings without having to work extra hours.
                  </p>
                </div>
                <div className="rounded-2xl border bg-card p-5 sm:p-6">
                  <h4 className="text-cardTitle font-semibold text-foreground">Flexible Driving Hours</h4>
                  <p className="text-body mt-1">
                    You're in control! Whether your prefer to drive mornings, nights or weekends, Kabukabu let's you choose when you want to drive. You have the freedom to set your schedule around your life, not the other way around.
                  </p>
                </div>
                <div className="rounded-2xl border bg-card p-5 sm:p-6">
                  <h4 className="text-cardTitle font-semibold text-foreground">Driver Incentives & Bonuses</h4>
                  <p className="text-body mt-1">
                    We appreciate the hard work of our drivers, which is why we offer regular bonuses and incentives. From special milestone rewards to referral bonuses, Kabukabu helps to increase your earnings with ease.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Steps - dark band */}
          <StepsSection
            title={<>How to <span className="text-primary">Get Started</span> with Kabuakabu?</>}
            description={(
              <>
                Our driver app makes it easy to receive and manage ride
                requests, ensuring that you spend less time waiting for passengers
                and more time earning. Efficient trip distribution means more rides
                and better utilization of your time on the road.
              </>
            )}
            steps={steps}
            linkHref="#download"
            theme="dark"
          />

          {/* No car? Sharp Driver block */}
          <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
              <h2 className="text-sectionTitle font-bold text-foreground">
                No Car? No Problem!
              </h2>
              <p className="mt-4 text-body">
                Are you eager to drive but don't own a vehicle? Kabukabu's sharp driver program is designed just for you! We provide the cars, you provide the driving. Join our team of Sharp Drivers and start earning wih ease.
              </p>
              <Button className="rounded-sm bg-[#ffffff] text-[#000000] border border-[#000000] hover:bg-[#f0f0f0] mt-6 text-body" asChild>
                <a href="#" className="flex items-center gap-2">
                  Learn More
                </a>
              </Button>
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

          {/* Alternating highlights */}
          <section className="py-12 sm:py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
              <div>
                <img
                  src="/designScreens/assets/drive-with-us/driver_businesswoman_car.png"
                  alt="Driver focus"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div>
                <>
                  <p className="text-subTitle my-5 font-bold">Safety Comes First</p>

                  <p className="text-body my-5">At Kabukabu, we priortize your safety as much as we do our riders. Our app includes real-time trip tracking, emergency assistance features and a robust driver verification process to ensure that every ride is as safe as it is smooth. Whether you are driving in the city or the suburbs, you can count on Kabukabu to support you every step of the way.</p>

                  <p className="text-subTitle my-5 font-bold">Safety Features Include</p>

                  <ul className="space-y-4 text-body">
                    <li>
                      <span className="font-bold">Driver Background Checks</span><br />
                      <span className="text-muted-foreground">Verified drivers only</span> 
                    </li>
                    <li>
                      <span className="font-bold">In-App Safety Tools</span><br />
                      <span className="text-muted-foreground">Instant emergency assistance and trip sharing</span> 
                    </li>
                    <li>
                      <span className="font-bold">Cashless Payments</span><br />
                      <span className="text-muted-foreground">Reduce the risk of handling cash by accepting payments securely through the app</span> 
                    </li>
                  </ul>
                </>
              </div>
            </div>
          </section>

          {/* Split phones download */}
          <SplitDownloadSection size="compact" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DriveWithUs;
