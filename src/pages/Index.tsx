import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import HeroBanner from "@/components/HeroBanner";
import ImageCardGrid from "@/components/ImageCardGrid";
import SplitDownloadSection from "@/components/SplitDownloadSection";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

type CommunityTab = "riders" | "drivers" | "fleet";

const FADE_DURATION_MS = 350;
const thingsWeDoItems = [
  {
    title: "Kabu Ride",
    img: "/designScreens/assets/ride-with-us/car_yellow.png",
    text: "Get a private, comfortable ride, anytime, anywhere in the city",
  },
  {
    title: "Kabu Share",
    img: "/designScreens/assets/ride-with-us/car_red.png",
    text: "Share rides, cut costs and reduce emissions by traveling with others",
  },
  {
    title: "Kabu Later",
    img: "/designScreens/assets/ride-with-us/car_brown.png",
    text: "Schedule rides in advance for hassle-free, on-time arrival",
  },
  {
    title: "Kabu Drive",
    img: "/designScreens/assets/ride-with-us/car_pink.png",
    text: "Own a car? Drive more with Kabukabu and earn more with low commissions",
  },
  {
    title: "Kabu Sharp",
    img: "/designScreens/assets/ride-with-us/car_purple.png",
    text: "Drive for Kabukabu without owning a car, vehicle's provided, just drive and earn",
  },
  {
    title: "Kabu Fleet",
    img: "/designScreens/assets/ride-with-us/car_cream.png",
    text: "For fleet owners, list and manage multiple vehicles on Kabukabu for streamlined, optimized returns",
  },
];

const Index = () => {
  const [communityTab, setCommunityTab] = useState<CommunityTab>("riders");
  const [displayedCommunityTab, setDisplayedCommunityTab] = useState<CommunityTab>("riders");
  const [isCommunityImageFading, setIsCommunityImageFading] = useState(false);
  const fadeTimeoutRef = useRef<number | null>(null);
  const communityImages: Record<CommunityTab, { src: string; alt: string }> = {
    riders: {
      src: "/designScreens/assets/ride-with-us/community_businesswoman_car.png",
      alt: "Rider in car using phone",
    },
    drivers: {
      src: "/designScreens/assets/ride-with-us/drivers.png",
      alt: "Driver on the road",
    },
    fleet: {
      src: "/designScreens/assets/ride-with-us/fleet_owners.png",
      alt: "Fleet owner vehicles",
    },
  };
  const communityImage = communityImages[displayedCommunityTab];

  const handleCommunityTabChange = (nextTab: CommunityTab) => {
    if (nextTab === communityTab) {
      return;
    }
    setCommunityTab(nextTab);
    setIsCommunityImageFading(true);
    if (fadeTimeoutRef.current !== null) {
      window.clearTimeout(fadeTimeoutRef.current);
    }
    fadeTimeoutRef.current = window.setTimeout(() => {
      setDisplayedCommunityTab(nextTab);
      setIsCommunityImageFading(false);
      fadeTimeoutRef.current = null;
    }, FADE_DURATION_MS);
  };

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current !== null) {
        window.clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

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
          <HeroBanner
            backgroundImage="/designScreens/assets/ride-with-us/hero_rider_mask.png"
            overlayClassName="bg-gradient-to-b from-black/60 via-black/40 to-transparent"
            contentClassName="max-w-2xl"
            title="Your Premium Ride-Hailing Experience!"
            titleClassName="text-3xl sm:text-4xl md:text-6xl"
            description="Safe, reliable and comfortable rides for every journey."
            descriptionClassName="mt-4 text-white text-base sm:text-lg md:text-xl"
            actions={(
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-body"
                >
                  <a href="#download" className="flex items-center gap-2">
                    Download the App
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            )}
          />

          {/* Why You'll Love Us */}
          <section
            className="py-12 sm:py-16 lg:py-20 bg-background bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/designScreens/assets/ride-with-us/why-us-bg.png)",
              backgroundSize: "calc(100% - 20vw) calc(100% - 20vh)",
            }}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-center text-sectionTitle font-bold text-foreground mb-12">
                Here's Why You'll Love Us
              </h2>
              <div className="grid lg:grid-cols-3 gap-10 items-center">
                {/* Left features */}
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-muted/40 border border-border">
                    <h3 className="text-cardTitle font-semibold text-foreground">Amazing Incentives</h3>
                    <p className="text-body text-muted-foreground mt-1">
                      Take advantage of student discounts, exclusive deals for frequent riders and special promotions. <br />
                      Whether you are a first time user or a loyal rider, Kabukabu makes your experience even more rewarding.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-muted/40 border border-border">
                    <h3 className="text-cardTitle font-semibold text-foreground">Unbeatable Prices</h3>
                    <p className="text-body text-muted-foreground mt-1">
                      Enjoy the freedom of affordable rides without compromising on comfort. <br /> 
                      We believe everyone deserves a premium ride experience without breaking the bank.
                    </p>
                  </div>
                </div>

                {/* Center phone */}
                <div className="relative flex justify-center items-center">
                  {/* decorative rings behind phone */}
                <div className="absolute -z-10 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[480px] md:h-[480px] rounded-full border border-muted/40" />
                <div className="absolute -z-10 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] md:w-[680px] md:h-[680px] rounded-full border border-muted/20" />
                <img
                  src="/designScreens/assets/ride-with-us/phone_rider_full.png"
                  alt="Kabukabu app on phone"
                  className="w-[220px] sm:w-[240px] md:w-[300px] drop-shadow-xl"
                  loading="lazy"
                  decoding="async"
                />
                </div>

                {/* Right features */}
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-muted/40 border border-border">
                    <h3 className="text-cardTitle font-semibold text-foreground">Classy Comfort</h3>
                    <p className="text-body text-muted-foreground mt-1">
                      We blend fun with sophistication to deliver a ride that's both stylish and enjoyable. <br />
                      Expect clean, comfortable vehicles and professional, friendly drivers who ensure your satisfaction.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-muted/40 border border-border">
                    <h3 className="text-cardTitle font-semibold text-foreground">Reduced Commision For Drivers</h3>
                    <p className="text-body text-muted-foreground mt-1">Our drivers are the backbone of our service. With reduced commission rates, we make sure that they keep more of their earnings, motivating them to provide the best service possible.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community section */}
          <section className="py-12 sm:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-6 sm:gap-10 pt-4 sm:pt-5">
              <div>
                <img
                  src={communityImage.src}
                  alt={communityImage.alt}
                  className={`rounded-2xl w-full h-auto object-cover transition-opacity duration-[350ms] ease-in-out ${
                    isCommunityImageFading ? "opacity-0" : "opacity-100"
                  }`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h2 className="text-sectionTitle font-bold text-foreground">
                  We build a better community for all users
                </h2>
                {/* Tabs */}
                <CommunityTabsBlock active={communityTab} onChange={handleCommunityTabChange} />
              </div>
            </div>
          </section>

          {/* Things we do */}
          <ImageCardGrid
            title="Things we do"
            items={thingsWeDoItems}
            titleClassName="text-center"
          />

          <CommunitySection />

          {/* Split phones download */}
          <SplitDownloadSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

// Local component for community tabs block
const CommunityTabsBlock = ({
  active,
  onChange,
}: {
  active: CommunityTab;
  onChange: (tab: CommunityTab) => void;
}) => {
  const TabButton = ({ id, label }: { id: CommunityTab; label: string }) => (
    <button
      onClick={() => onChange(id)}
      className={`px-3 sm:px-4 py-2 text-caption font-semibold transition-colors whitespace-nowrap${
        active === id
          ? ' bg-primary text-primary-foreground rounded-full'
          : ' text-muted-foreground'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="mt-6">
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <TabButton id="riders" label="Riders" />
        <TabButton id="drivers" label="Drivers" />
        <TabButton id="fleet" label="Fleet Owners" />
      </div>
      <div className="mt-4">
        {active === 'riders' && (
          <>
            <p className="text-subTitle my-5">Convenience at Your Fingertips</p>

            <p className="text-body my-5">Getting from point A to B has never been easier. With the Kabukabu app, you can book a ride with just a few taps, track your driver in real-time and enjoy cachless payments. Whethere you are running late for a meeting or heading out for an evening with friends, we have you covered.</p>

            <ul className="space-y-4 text-body">
              <li>
                <span className="font-bold">Low Fare Guarantee</span><br />
                <span className="text-muted-foreground">Always know you are getting the best rate</span> 
              </li>
              <li>
                <span className="font-bold">Exclusive Discounts</span><br />
                <span className="text-muted-foreground">From student offers to loyalty rewards, we make your rides more affordable</span> 
              </li>
              <li>
                <span className="font-bold">Safety First</span><br />
                <span className="text-muted-foreground">Verified drivers and 24/7 support ensure a safe, secure journey every-time</span> 
              </li>
            </ul>
          </>
        )}
        {active === 'drivers' && (
          <>
            <p className="text-subTitle my-5">Your Success, Our Priority</p>

            <p className="text-body my-5">Join our community of drivers who enjoy reduced commisions, flexible schedules and fantastic earning potential. Kabukabu empowers you to earn more and provide better service to your riders.</p>

            <ul className="space-y-4 text-body">
              <li>
                <span className="font-bold">Keep More of Your Earnings</span><br />
                <span className="text-muted-foreground">Low commision rates means you earn more per trip.</span> 
              </li>
              <li>
                <span className="font-bold">Incentives & Bonuses</span><br />
                <span className="text-muted-foreground">Enjoy special bonuses for hitting milestones and delivering exceptional service.</span> 
              </li>
              <li>
                <span className="font-bold">Flexible Hours</span><br />
                <span className="text-muted-foreground">You decide when and where to drive. With Kabukabu, your schedule is yours to control</span> 
              </li>
            </ul>
          </>
        )}
        {active === 'fleet' && (
          <>
            <p className="text-subTitle my-5">Maximize Your Earnings With Kabukabu</p>

            <p className="text-body my-5">Are you a fleet owner looking to expand your business and increase profitablility? Kabukabu offers the perfect solution to help you optimize your fleet's potential and earn more without the hassle of managing every detail. With our platform, you can easily manage your vehicles, drivers and operations while maintaining a steady income stream.</p>

            <ul className="space-y-4 text-body">
              <li>
                <span className="font-bold">Higher Profits, Lower Commisions</span><br />
                <span className="text-muted-foreground">Kabukabu offers some of the lowest commision rates in the industry, allowing you to maximize your earnings. Keep more of what you earn on every trip your fleet makes</span> 
              </li>
              <li>
                <span className="font-bold">Seamless Fleet Management</span><br />
                <span className="text-muted-foreground">Our advanced platform offers multiple tools to manage multiple vehicles and drivers effortlessly. From tracking performance to monitoring driver behavior, Kabukabu makes fleet management simple and efficient.</span> 
              </li>
              <li>
                <span className="font-bold">Real Time Insights & Analytics</span><br />
                <span className="text-muted-foreground">Stay in control with real-time data on vehicle performance, earnings and driver efficiency. Kabukabu provides actionable insights to help you make informed decisions and optimize your operations</span> 
              </li>
            </ul>
            <Button className="rounded-sm bg-[#ffffff] text-[#000000] border border-[#000000] hover:bg-[#f0f0f0] mt-6 text-body" asChild>
              <a href="#" className="flex items-center gap-2">
                Learn More
              </a>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
