import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import HeroBanner from "@/components/HeroBanner";
import ImageCardGrid from "@/components/ImageCardGrid";
import StepsSection from "@/components/StepsSection";
import SplitDownloadSection from "@/components/SplitDownloadSection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Download, UserPlus, FileCheck, Play } from "lucide-react";

const steps = [
  { icon: Download, step: "01", title: "Download the Driver App", description: "Grab the Kabukabu Driver app and get started.", link: "Get The App" },
  { icon: UserPlus, step: "02", title: "Apply for Sharp Driver", description: "Choose Sharp Driver in the app and submit details.", link: "View Requirements" },
  { icon: FileCheck, step: "03", title: "Complete onboarding", description: "Quick verification and training to set you up." },
  { icon: Play, step: "04", title: "Start driving & earning", description: "Pick trips, drive confidently and earn more." },
];
const sharpDriverReasons = [
  {
    title: "Drive a Kabukabu vehicle",
    img: "/designScreens/assets/sharp-driver/car_white.png",
    text: "No need to worry about powning a car. Kabukabu provides the vehicle, fully equipped and ready to go. Just focus on providing excellent service and maximizing your earnings.",
  },
  {
    title: "Competitive Earnings",
    img: "/designScreens/assets/sharp-driver/car_green.png",
    text: "Enjoy competitive rates and earn more with every ride. Our Sharp Drivers are valued members of our team and we offer great earning potential to ensure you are rewarded for your hardwork.",
  },
  {
    title: "Flexible Scheduling",
    img: "/designScreens/assets/sharp-driver/car_yellow.png",
    text: "Choose your own hours and drive on your own terms. Whether you want to work full-time or part-time, the Sharp Driver program offers flexibility to fit your lifestyle.",
  },
  {
    title: "Easy Onboarding",
    img: "/designScreens/assets/sharp-driver/car_teal.png",
    text: "Our streamlined onboarding process get's you behind the wheel quickly. We provide all the necessary training and support to ensure you are ready to start driving in no time.",
  },
  {
    title: "Support and Maintenance",
    img: "/designScreens/assets/sharp-driver/car_white.png",
    text: "Kabukabu handles vehicle maintenance, insurance and support. Drive with confidence knowing that everything is taken care of, so you can focus on providing great rides and earning. ",
  },
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
          <HeroBanner
            backgroundImage="/designScreens/assets/sharp-driver/hero_sharp_driver.png"
            overlayClassName="bg-black/50"
            sectionClassName="bg-header"
            minHeightClassName="min-h-[70vh] sm:min-h-[80vh]"
            eyebrow="Become a Sharp Driver with Kabukabu"
            title="Drive with Our Cars, Earn with Us"
            description="No Car? No Problem! Drive with Kabukabu's Sharp Driver Program."
            eyebrowClassName="text-white text-sm mb-2"
            titleClassName="text-3xl sm:text-4xl md:text-6xl"
            descriptionClassName="mt-3 text-white text-base"
            contentClassName="max-w-xl"
            actions={(
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-body"
              >
                <a href="#" className="inline-flex items-center gap-2">
                  Get The App
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            )}
          />

          {/* Illustration with labels */}
          <section className="grid grid-cols-1 md:grid-cols-2 py-12 sm:py-16 bg-background">
            <div className="px-4 sm:px-8 lg:px-[10vw] py-8 sm:py-12 lg:py-[20vh]">
              <p className="text-body">Are you eager to drive but you don't own a vehicle? Kabukabu's Sharp Driver program is designed just for you! We provide the cars, you provide the driving. Join our team of Sharp Drivers and start earning with ease.</p>
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
          <ImageCardGrid
            title="Why Choose the Sharp Driver Program"
            items={sharpDriverReasons}
          />

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

          <CommunitySection />

          {/* Split phones download */}
          <SplitDownloadSection size="compact" />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DriveForUs;
