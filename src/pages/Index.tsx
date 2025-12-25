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
            className="relative min-h-[70vh] sm:min-h-screen flex items-center"
            style={{
              backgroundImage:
                "url(/designScreens/assets/ride-with-us/hero_rider_mask.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
            <div className="container mx-auto px-4 lg:px-8 relative">
              <div className="max-w-2xl pt-16 sm:pt-24 pb-12 sm:pb-16">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight">
                  Your Premium Ride-Hailing Experience!
                </h1>
                <p className="mt-4 text-white/80 text-base sm:text-lg md:text-xl">
                  Safe, reliable and comfortable rides for every journey.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base">
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
          <section className="py-12 sm:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-12">
                Here's Why You'll Love Us
              </h2>
              <div className="grid lg:grid-cols-3 gap-10 items-center">
                {/* Left features */}
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-muted/40 border border-border">
                    <h3 className="font-semibold text-foreground">Amazing Incentives</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Take advantage of student discounts, exclusive deals for frequent riders and special promotions. <br />
                      Whether you are a first time user or a loyal rider, Kabukabu makes your experience even more rewarding.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-muted/40 border border-border">
                    <h3 className="font-semibold text-foreground">Unbeatable Prices</h3>
                    <p className="text-sm text-muted-foreground mt-1">
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
                    <h3 className="font-semibold text-foreground">Classy Comfort</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We blend fun with sophistication to deliver a ride that's both stylish and enjoyable. <br />
                      Expect clean, comfortable vehicles and professional, friendly drivers who ensure your satisfaction.
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-muted/40 border border-border">
                    <h3 className="font-semibold text-foreground">Reduced Commision For Drivers</h3>
                    <p className="text-sm text-muted-foreground mt-1">Our drivers are the backbone of our service. With reduced commission rates, we make sure that they keep more of their earnings, motivating them to provide the best service possible.</p>
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
                  src="/designScreens/assets/ride-with-us/community_businesswoman_car.png"
                  alt="Rider in car using phone"
                  className="rounded-2xl w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  We build a better community for all users
                </h2>
                {/* Tabs */}
                <CommunityTabsBlock />
              </div>
            </div>
          </section>

          {/* Things we do */}
          <section className="py-12 sm:py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-8">Things we do</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Kabu Ride", img: "/designScreens/assets/ride-with-us/car_yellow.png", text: "Get a private, comfortable ride, anytime, anywhere in the city" },
                  { title: "Kabu Share", img: "/designScreens/assets/ride-with-us/car_red.png", text: "Share rides, cut costs and reduce emissions by traveling with others" },
                  { title: "Kabu Later", img: "/designScreens/assets/ride-with-us/car_brown.png", text: "Schedule rides in advance for hassle-free, on-time arrival" },
                  { title: "Kabu Drive", img: "/designScreens/assets/ride-with-us/car_pink.png", text: "Own a car? Drive more with Kabukabu and earn more with low commissions" },
                  { title: "Kabu Sharp", img: "/designScreens/assets/ride-with-us/car_purple.png", text: "Drive for Kabukabu without owning a car, vehicle's provided, just drive and earn" },
                  { title: "Kabu Fleet", img: "/designScreens/assets/ride-with-us/car_cream.png", text: "For fleet owners, list and manage multiple vehicles on Kabukabu for streamlined, optimized returns" },
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
          <section id="download" className="py-12 sm:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-6 sm:gap-10 items-end">
              {/* Rider card */}
              <div className="bg-muted/40 rounded-2xl p-5 sm:p-6 border">
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
                    className="w-[260px] md:w-[300px]"
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

export default Index;

// Local component for community tabs block
const CommunityTabsBlock = () => {
  const [active, setActive] = useState<'riders' | 'drivers' | 'fleet'>('riders');

  const TabButton = ({ id, label }: { id: 'riders' | 'drivers' | 'fleet'; label: string }) => (
    <button
      onClick={() => setActive(id)}
      className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap${
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
            <p className="text-base sm:text-lg my-5">Convenience at Your Fingertips</p>

            <p className="text-sm sm:text-base my-5">Getting from point A to B has never been easier. With the Kabukabu app, you can book a ride with just a few taps, track your driver in real-time and enjoy cachless payments. Whethere you are running late for a meeting or heading out for an evening with friends, we have you covered.</p>

            <ul className="space-y-4">
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
            <p className="text-base sm:text-lg my-5">Your Success, Our Priority</p>

            <p className="text-sm sm:text-base my-5">Join our community of drivers who enjoy reduced commisions, flexible schedules and fantastic earning potential. Kabukabu empowers you to earn more and provide better service to your riders.</p>

            <ul className="space-y-4">
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
            <p className="text-base sm:text-lg my-5">Maximize Your Earnings With Kabukabu</p>

            <p className="text-sm sm:text-base my-5">Are you a fleet owner looking to expand your business and increase profitablility? Kabukabu offers the perfect solution to help you optimize your fleet's potential and earn more without the hassle of managing every detail. With our platform, you can easily manage your vehicles, drivers and operations while maintaining a steady income stream.</p>

            <ul className="space-y-4">
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
            <Button className="rounded-sm bg-[#ffffff] text-[#000000] border border-[#000000] hover:bg-[#f0f0f0] mt-6" asChild>
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
