import Header from "@/components/Header";
import {
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  Heart,
  Users,
  Shield,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const About = () => {
  const serviceTabs = [
    {
      key: "riders",
      label: "For Riders",
      title: "Ride with Ease",
      body:
        "With just a few taps, you can book a comfortable, reliable, and affordable ride. Enjoy perks like discounts for students and frequent riders, all while traveling in style.",
      image: "/designScreens/assets/about/about_person_car.png",
      alt: "Ride with ease",
    },
    {
      key: "drivers",
      label: "For Drivers",
      title: "Drive with Confidence",
      body: "Placeholder content for drivers tab.",
      image: "/designScreens/assets/about/about_person_car.png",
      alt: "Drive with confidence",
    },
    {
      key: "fleet",
      label: "For Fleet Owners",
      title: "Manage Your Fleet",
      body: "Placeholder content for fleet owners tab.",
      image: "/designScreens/assets/about/about_person_car.png",
      alt: "Manage your fleet",
    },
    {
      key: "sharp",
      label: "For Sharp Drivers",
      title: "Sharp Drivers Program",
      body: "Placeholder content for sharp drivers tab.",
      image: "/designScreens/assets/about/about_person_car.png",
      alt: "Sharp drivers program",
    },
  ];
  const [activeServiceTab, setActiveServiceTab] = useState(serviceTabs[0]);

  return (
    <>
      <Helmet>
        <title>About Kabukabu</title>
        <meta
          name="description"
          content="Read about how Kabukabu works."
        />
      </Helmet>
      <div className="min-h-screen">
        <Header />      
        <main className="bg-white text-[#1a1a1a]">
          <section
            className="relative h-[65vh] w-full bg-cover bg-center"
            style={{ backgroundImage: "url(/designScreens/assets/about/hero_about.png)" }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 flex h-full items-center justify-center px-6">
              <div className="text-center">
                <p className="text-[14px] text-white/80">About Kabukabu</p>
                <h1 className="mt-2 text-[44px] font-semibold leading-tight text-white md:text-[48px]">
                  Your Journey, Our Passion
                </h1>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-[100vw] px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
            <h2 className="text-[22px] font-semibold text-[#1a1a1a] text-start w-full">
              Redefining the Ride&ndash;Hailing Experience
            </h2>
            <p className="mt-4 w-full lg:w-[60vw] text-[14px] leading-relaxed text-[#333] text-start">
              Welcome to Kabukabu, where we&rsquo;re redefining the ride-hailing
              experience for drivers and passengers alike. Kabukabu was founded
              with a simple vision: to create a seamless, enjoyable, and affordable
              transportation service that benefits both riders and drivers. We
              believe in empowering drivers with better earning opportunities while
              providing riders with a reliable, comfortable, and accessible way to
              get around.
            </p>
          </section>

          <section className="mx-auto w-full max-w-[100vw] px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-6 lg:gap-10">
              <img
                src="/designScreens/assets/about/about_person_car.png"
                alt="Kabukabu mission"
                className="h-auto w-full rounded-lg object-cover"
              />
              <div className="pt-6 lg:pt-[25vh]">
                <h3 className="text-[22px] font-semibold text-[#1a1a1a]">
                  Our <span className="text-[#f7c332]">Mission</span>
                </h3>
                <p className="mt-4 max-w-[640px] text-[14px] leading-relaxed text-[#4a4a4a]">
                  At Kabukabu, our mission is to make every journey a joyful one.
                  We are committed to connecting communities by offering affordable
                  rides, creating sustainable earning opportunities for drivers,
                  and fostering a sense of trust and safety for everyone who uses
                  our platform. Whether you&rsquo;re a student heading to class, a
                  professional on your daily commute, or a driver looking to
                  maximize your earnings, Kabukabu is here to make every ride count.
                </p>
              </div>
            </div>
          </section>

          {/*<section className="py-20">
            <div className="mx-auto w-full max-w-[100vw] px-20">
              <h3 className="text-center text-lg font-semibold text-[#1a1a1a]">
                What Sets Us Apart
              </h3>
              <div className="mt-4 flex items-center justify-center gap-6">
                <button
                  type="button"
                  className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#e5e5e5] text-[#c7c7c7]"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#e5e5e5] text-[#111]"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-12 flex justify-center">
                <div className="relative h-[650px] w-full max-w-[1452px] overflow-hidden rounded-[325px] bg-[#f8f8f8]">
                  <div className="grid h-full items-center lg:grid-cols-[766px_1fr]">
                    <img
                      src="/designScreens/assets/about/about_person_car.png"
                      alt="Driver-centric approach"
                      className="h-full w-full object-cover"
                    />
                    <div className="flex h-full items-center px-10 pr-[90px]">
                      <div className="max-w-[520px]">
                        <h4 className="text-[20px] font-semibold text-[#1a1a1a]">
                          Driver-Centric Approach
                        </h4>
                        <p className="mt-3 text-[14px] leading-relaxed text-[#4a4a4a]">
                          Kabukabu was built with drivers in mind. Our platform
                          ensures drivers are fairly compensated with lower
                          commission rates and additional incentives, allowing them
                          to keep more of their earnings. We&rsquo;re dedicated to
                          creating a supportive and rewarding environment where
                          drivers can thrive.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    src="/designScreens/assets/about/about_person_car.png"
                    alt=""
                    className="absolute right-0 top-0 hidden h-full w-[185px] object-cover lg:block"
                  />
                </div>
              </div>
            </div>
          </section>*/}

          {/* Our Services */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
            <div className="mx-auto w-full max-w-[1428px] px-0">
              <h3 className="text-center text-[22px] font-semibold text-[#1a1a1a]">
                Our Services
              </h3>
              <p className="mt-3 text-center text-[14px] text-[#4a4a4a]">
                Kabukabu offers a range of services designed to meet the
                transportation needs of different groups:
              </p>
              {/* Tab Buttons */}
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {serviceTabs.map((tab) => {
                  const isActive = activeServiceTab.key === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveServiceTab(tab)}
                      className={`rounded-full px-[22px] py-[8px] text-[14px] ${
                        isActive
                          ? "bg-[#f7c332] font-semibold text-black"
                          : "border border-[#e5e5e5] text-[#9b9b9b]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              {/* Tab Content */}
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 items-start gap-6 lg:gap-10">
                <img
                  src={activeServiceTab.image}
                  alt={activeServiceTab.alt}
                  className="h-auto w-full rounded-[24px] object-cover"
                />
                <div className="pt-6 lg:pt-[25vh]">
                  <h4 className="text-[20px] font-semibold text-[#1a1a1a]">
                    {activeServiceTab.title}
                  </h4>
                  <p className="mt-3 max-w-[520px] text-[14px] leading-relaxed text-[#4a4a4a]">
                    {activeServiceTab.body}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
            <div
              className="relative mx-auto w-full max-w-[1428px] px-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 30%, rgba(0,0,0,0.06) 1px, transparent 2px), radial-gradient(circle at 80% 30%, rgba(0,0,0,0.05) 1px, transparent 2px), radial-gradient(circle at 80% 30%, rgba(0,0,0,0.04) 1px, transparent 2px)",
                backgroundSize: "240px 240px, 340px 340px, 440px 440px",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h3 className="text-[22px] font-semibold text-[#1a1a1a]">
                Our Guiding Principles
              </h3>
              <p className="mt-3 max-w-[540px] text-[14px] leading-relaxed text-[#4a4a4a]">
                At the heart of Kabukabu, our guiding principles shape every
                decision we make and every interaction we have. These core values
                reflect our commitment to innovation, integrity, community, and
                safety.
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="rounded-lg bg-[#f7f7f7] p-6 h-auto w-full lg:h-[50vh]">
                  <Lightbulb className="h-5 w-5 text-[#f7c332]" />
                  <h4 className="mt-4 text-[16px] font-semibold text-[#1a1a1a]">
                    Innovation
                  </h4>
                  <p className="mt-3 text-[13px] leading-relaxed text-[#8a8a8a]">
                    We are constantly improving and evolving to meet the needs of
                    our users, providing the best tools and technologies for both
                    drivers and riders.
                  </p>
                </div>
                <div className="rounded-lg bg-[#f7f7f7] p-6 h-auto w-full lg:h-[50vh]">
                  <Heart className="h-5 w-5 text-[#f7c332]" />
                  <h4 className="mt-4 text-[16px] font-semibold text-[#1a1a1a]">
                    Integrity
                  </h4>
                  <p className="mt-3 text-[13px] leading-relaxed text-[#8a8a8a]">
                    We believe in building trust through transparency and honesty,
                    ensuring a fair and reliable platform for all.
                  </p>
                </div>
                <div className="rounded-lg bg-[#f7f7f7] p-6 h-auto w-full lg:h-[50vh]">
                  <Users className="h-5 w-5 text-[#f7c332]" />
                  <h4 className="mt-4 text-[16px] font-semibold text-[#1a1a1a]">
                    Community
                  </h4>
                  <p className="mt-3 text-[13px] leading-relaxed text-[#8a8a8a]">
                    Kabukabu isn&rsquo;t just a ride&ndash;hailing app; it&rsquo;s a
                    community. We&rsquo;re passionate about connecting people,
                    supporting drivers, and offering a service that everyone can
                    rely on.
                  </p>
                </div>
                <div className="rounded-lg bg-[#f7f7f7] p-6 h-auto w-full lg:h-[50vh]">
                  <Shield className="h-5 w-5 text-[#f7c332]" />
                  <h4 className="mt-4 text-[16px] font-semibold text-[#1a1a1a]">
                    Safety
                  </h4>
                  <p className="mt-3 text-[13px] leading-relaxed text-[#8a8a8a]">
                    Your safety is our priority. Our platform ensures all drivers
                    and vehicles are thoroughly vetted, and we provide in-app safety
                    features for both drivers and riders.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
            <div className="mx-auto w-full max-w-[100vw] grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
              <div className="pt-6 lg:pt-[25vh]">
                <h3 className="text-[22px] font-semibold text-[#1a1a1a]">
                  Our <span className="text-[#f7c332]">Vision</span>
                </h3>
                <p className="mt-3 max-w-[540px] text-[14px] leading-relaxed text-[#4a4a4a]">
                  We envision a world where transportation is simple, affordable,
                  and accessible to everyone. As we continue to grow, our goal is
                  to become the go-to platform for safe, reliable, and rewarding
                  rides across the region. Kabukabu aims to transform the
                  ride&ndash;hailing experience by making it more inclusive,
                  driver-friendly, and community-oriented.
                </p>
              </div>
              <img
                src="/designScreens/assets/about/about_person_car.png"
                alt="Kabukabu vision"
                className="mt-8 h-auto w-full rounded-[24px] object-cover lg:mt-0"
              />
            </div>
          </section>

          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
            <div className="mx-auto w-full max-w-[100vw] px-0">
              <h3 className="text-[28px] font-semibold text-[#1a1a1a]">
                Our People
              </h3>
              <div className="mt-8 space-y-8 lg:space-y-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-6 lg:gap-10">
                  <img
                    src="/designScreens/assets/about/about_person_car.png"
                    alt="Kabukabu people"
                    className="h-auto w-full rounded-lg object-cover"
                  />
                  <div className="pt-6 lg:pt-[25vh]">
                    <div className="text-[32px] font-semibold leading-none text-[#f7c332] tracking-[6px]">
                      &ldquo;&ldquo;
                    </div>
                    <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-[#4a4a4a]">
                      We envision a world where transportation is simple,
                      affordable, and accessible to everyone. As we continue to
                      grow, our goal is to become the go-to platform for safe,
                      reliable, and rewarding rides across the region. Kabukabu aims
                      to transform the ride&ndash;hailing experience by making it
                      more inclusive, driver-friendly, and community-oriented.
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#1a1a1a]">
                      John Doe
                    </p>
                    <p className="text-sm text-[#9b9b9b]">Position</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-6 lg:gap-10">
                  <div className="pt-6 lg:pt-[25vh]">
                    <div className="text-[32px] font-semibold leading-none text-[#f7c332] tracking-[6px]">
                      &ldquo;&ldquo;
                    </div>
                    <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-[#4a4a4a]">
                      We envision a world where transportation is simple,
                      affordable, and accessible to everyone. As we continue to
                      grow, our goal is to become the go-to platform for safe,
                      reliable, and rewarding rides across the region. Kabukabu aims
                      to transform the ride&ndash;hailing experience by making it
                      more inclusive, driver-friendly, and community-oriented.
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#1a1a1a]">
                      John Doe
                    </p>
                    <p className="text-sm text-[#9b9b9b]">Position</p>
                  </div>
                  <img
                    src="/designScreens/assets/about/about_person_car.png"
                    alt="Kabukabu people"
                    className="h-auto w-full rounded-lg object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-6 lg:gap-10">
                  <img
                    src="/designScreens/assets/about/about_person_car.png"
                    alt="Kabukabu people"
                    className="h-auto w-full rounded-lg object-cover"
                  />
                  <div className="pt-6 lg:pt-[25vh]">
                    <div className="text-[32px] font-semibold leading-none text-[#f7c332] tracking-[6px]">
                      &ldquo;&ldquo;
                    </div>
                    <p className="mt-4 max-w-[520px] text-[14px] leading-relaxed text-[#4a4a4a]">
                      We envision a world where transportation is simple,
                      affordable, and accessible to everyone. As we continue to
                      grow, our goal is to become the go-to platform for safe,
                      reliable, and rewarding rides across the region. Kabukabu aims
                      to transform the ride&ndash;hailing experience by making it
                      more inclusive, driver-friendly, and community-oriented.
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#1a1a1a]">
                      John Doe
                    </p>
                    <p className="text-sm text-[#9b9b9b]">Position</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
            <div className="mx-auto w-full max-w-[1428px] px-0 text-center">
              <h3 className="text-[22px] font-semibold text-[#1a1a1a]">
                More than an app, a community
              </h3>
              <p className="mx-auto mt-4 max-w-[1013px] text-[14px] leading-relaxed text-[#4a4a4a]">
                At Kabukabu, we believe in building more than just a ride-hailing
                platform &mdash; we&rsquo;re creating a vibrant community where
                riders and drivers come together with shared goals of convenience,
                safety, and mutual respect. Our platform fosters a sense of
                belonging by offering tailored rewards, open communication, and
                support for everyone. Whether you&rsquo;re a rider enjoying perks
                like student discounts or a driver benefiting from reduced
                commissions, Kabukabu ensures everyone is valued. Together,
                we&rsquo;re shaping a community that thrives on connection, trust,
                and the joy of every journey.
              </p>
              <img
                src="/designScreens/assets/about/about_person_car.png"
                alt="Kabukabu community"
                className="mt-8 h-[280px] w-full rounded-[24px] object-cover sm:h-[420px] lg:h-[613px]"
              />
            </div>
          </section>

          {/* Split phones download */}
          <section id="download" className="py-12 sm:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
              {/* Rider card */}
              <div className="bg-muted/40 rounded-2xl p-6 border">
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
              <div className="bg-muted/40 rounded-2xl p-6 border">
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
      </div>
    </>
  );
};

export default About;
