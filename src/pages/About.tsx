import Header from "@/components/Header";
import CommunitySection from "@/components/CommunitySection";
import SplitDownloadSection from "@/components/SplitDownloadSection";
import {
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  Heart,
  Users,
  Shield,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";

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
      title: "Empower Your Drive",
      body: "We priortize the well being and success of our drivers by offering reduced commision rates, flexible schedules and incentives to boost earnings. Whether you own a vehicle or drive through our Sharp Drivers Program, Kabukabu makes it easy for you to learn more.",
      image: "/designScreens/assets/about/about_person_car.png",
      alt: "Drive with confidence",
    },
    {
      key: "fleet",
      label: "For Fleet Owners",
      title: "Maximize Your Fleet's Potential",
      body: "Our platform allows fleet owners to maximize the potential of their vehicles. Partner with Kabukabu to streamline your fleet operations, gain valuable insights, and see hgher returns on your vehicles.",
      image: "/designScreens/assets/about/about_person_car.png",
      alt: "Manage your fleet",
    },
    {
      key: "sharp",
      label: "For Sharp Drivers",
      title: "Drive With Us, Without A Car",
      body: "Designed for individuals who don't own a car but want to drive, our Sharp Driver Program provides the vehicle, while you provide the service. Kabukabu takes care of the details from maintenance to insurance, so you can focus on earning.",
      image: "/designScreens/assets/about/about_person_car.png",
      alt: "Sharp drivers program",
    },
  ];
  const [activeServiceTab, setActiveServiceTab] = useState(serviceTabs[0]);
  const setsUsApartSlides = [
    {
      key: "driver-centric",
      title: "Driver-Centric Approach",
      body:
        "Kabukabu was built with drivers in mind. Our platform ensures drivers are fairly compensated with lower commission rates and additional incentives, allowing them to keep more of their earnings. We’re dedicated to creating a supportive and rewarding environment where drivers can thrive.",
      image: "/designScreens/assets/about/about_person_car.png",
      alt: "Driver-centric approach",
    },
    {
      key: "safety-first",
      title: "Affordable and Convenient Rides",
      body:
        "We believe that everyone deserves access to transportation without sacrificing quality and comfort. Kabukabu makes ride-hailing accessible to all, offering competitive prices with the added bonus of special perks and discounts for our riders.",
      image: "/designScreens/assets/about/about_person_car.png",
      alt: "Affordable and Convenient Rides",
    },
    {
      key: "affordable-rides",
      title: "Innovative Solutions For Everyone",
      body: "Whether you are rider looking for a smooth and stress-free journey, a driver wanting more control over your income, or a fleet-owner seeking better returns on your vehicles. Kabukabu offers tailored solutions that cater to your specific needs.",
      image: "/designScreens/assets/about/about_person_car.png",
      alt: "Innovative Solutions For Everyone",
    },
  ];
  const [activeSetsUsApartSlide, setActiveSetsUsApartSlide] = useState(0);
  const setsUsApartTrackRef = useRef<HTMLDivElement | null>(null);
  const setsUsApartSlideContentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [setsUsApartUniformHeight, setSetsUsApartUniformHeight] = useState<number | null>(null);

  const scrollToSetsUsApartSlide = (index: number, behavior: ScrollBehavior = "smooth") => {
    const track = setsUsApartTrackRef.current;
    if (!track) {
      return;
    }
    const slide = track.children.item(index) as HTMLElement | null;
    if (!slide) {
      return;
    }
    slide.scrollIntoView({ behavior, block: "nearest", inline: "center" });
    setActiveSetsUsApartSlide(index);
  };

  const handleSetsUsApartScroll = () => {
    const track = setsUsApartTrackRef.current;
    if (!track) {
      return;
    }

    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    Array.from(track.children).forEach((child, index) => {
      const slide = child as HTMLElement;
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
      const distance = Math.abs(slideCenter - trackCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeSetsUsApartSlide) {
      setActiveSetsUsApartSlide(closestIndex);
    }
  };

  useEffect(() => {
    scrollToSetsUsApartSlide(activeSetsUsApartSlide, "auto");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getSlideNodes = () =>
      setsUsApartSlideContentRefs.current.filter(
        (node): node is HTMLDivElement => node !== null,
      );

    const applyUniformHeight = () => {
      const slideNodes = getSlideNodes();
      if (slideNodes.length === 0) {
        return;
      }

      const maxHeight = Math.max(...slideNodes.map((node) => node.scrollHeight));
      setSetsUsApartUniformHeight((prevHeight) =>
        prevHeight === maxHeight ? prevHeight : maxHeight,
      );
    };

    const recalculateFromNaturalContent = () => {
      // Clear fixed heights first so measurements can shrink/grow with breakpoints.
      setSetsUsApartUniformHeight((prevHeight) =>
        prevHeight === null ? prevHeight : null,
      );
      window.requestAnimationFrame(applyUniformHeight);
    };

    const resizeObserver = new ResizeObserver(applyUniformHeight);
    getSlideNodes().forEach((node) => resizeObserver.observe(node));

    recalculateFromNaturalContent();
    window.addEventListener("resize", recalculateFromNaturalContent);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", recalculateFromNaturalContent);
    };
  }, [setsUsApartSlides.length]);

  const isFirstSetsUsApartSlide = activeSetsUsApartSlide === 0;
  const isLastSetsUsApartSlide = activeSetsUsApartSlide === setsUsApartSlides.length - 1;

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
                <p className="text-body text-white">About Kabukabu</p>
                <h1 className="mt-2 text-[2.75rem] md:text-[3rem] font-semibold leading-tight text-white">
                  Your Journey, Our Passion
                </h1>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-[100vw] px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
            <h2 className="text-sectionTitle font-semibold text-[#1a1a1a] text-start w-full">
              Redefining the Ride&ndash;Hailing Experience
            </h2>
            <p className="mt-4 w-full lg:w-[60vw] text-body leading-relaxed text-[#333] text-start">
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
                <h3 className="text-sectionTitle font-semibold text-[#1a1a1a]">
                  Our <span className="text-[#f7c332]">Mission</span>
                </h3>
                <p className="mt-4 max-w-[640px] text-body leading-relaxed text-[#4a4a4a]">
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

          <section className="py-14 sm:py-16 lg:py-20">
            <div className="mx-auto w-full max-w-[1720px]">
              <h3 className="text-center text-sectionTitle font-semibold text-[#111]">
                What Sets Us Apart
              </h3>

              <div className="mt-4 flex items-center justify-center gap-5">
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => scrollToSetsUsApartSlide(activeSetsUsApartSlide - 1)}
                  disabled={isFirstSetsUsApartSlide}
                  className={`flex h-[52px] w-[52px] items-center justify-center rounded-full border transition-colors ${
                    isFirstSetsUsApartSlide
                      ? "cursor-not-allowed border-[#d5d5d5] text-[#cfcfcf]"
                      : "border-[#d1d1d1] text-[#111] hover:bg-[#f0f0f0]"
                  }`}
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() => scrollToSetsUsApartSlide(activeSetsUsApartSlide + 1)}
                  disabled={isLastSetsUsApartSlide}
                  className={`flex h-[52px] w-[52px] items-center justify-center rounded-full border transition-colors ${
                    isLastSetsUsApartSlide
                      ? "cursor-not-allowed border-[#d5d5d5] text-[#cfcfcf]"
                      : "border-[#d1d1d1] text-[#111] hover:bg-[#f0f0f0]"
                  }`}
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              <div className="relative overflow-hidden bg-[#ececec]">
                <div className="pointer-events-none absolute left-1/2 top-0 z-20 h-[260px] w-[220%] -translate-x-1/2 -translate-y-[74%] rounded-[100%] bg-white sm:h-[300px] lg:h-[340px]" />
                <div className="pointer-events-none absolute left-1/2 bottom-0 z-20 h-[260px] w-[220%] -translate-x-1/2 translate-y-[74%] rounded-[100%] bg-white sm:h-[300px] lg:h-[340px]" />

                <div
                  ref={setsUsApartTrackRef}
                  onScroll={handleSetsUsApartScroll}
                  className="relative z-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[4%] py-[72px] sm:px-[5%] sm:py-[84px] lg:px-[7%] lg:py-[96px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                  {setsUsApartSlides.map((slide, index) => (
                    <article
                      key={slide.key}
                      className="w-[92%] shrink-0 snap-center md:w-[90%] lg:w-[86%]"
                      style={
                        setsUsApartUniformHeight
                          ? { height: `${setsUsApartUniformHeight}px` }
                          : undefined
                      }
                    >
                      <div
                        ref={(node) => {
                          setsUsApartSlideContentRefs.current[index] = node;
                        }}
                        className="grid h-full grid-cols-1 md:grid-cols-[1.02fr_1fr] lg:grid-cols-[1.08fr_1fr]"
                      >
                        <img
                          src={slide.image}
                          alt={slide.alt}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="flex items-center px-5 py-6 sm:px-8 sm:py-7 md:px-10 bg-[#ececec]">
                          <div className="max-w-[560px]">
                            <h4 className="text-subTitle font-semibold text-[#1f1f1f]">
                              {slide.title}
                            </h4>
                            <p className="mt-3 text-body leading-relaxed text-[#333]">
                              {slide.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Our Services */}
          <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
            <div className="mx-auto w-full max-w-[1428px] px-0">
              <h3 className="text-center text-sectionTitle font-semibold text-[#1a1a1a]">
                Our Services
              </h3>
              <p className="mt-3 text-center text-body text-[#4a4a4a]">
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
                      className={`rounded-full px-[22px] py-[8px] text-body ${
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
                  <h4 className="text-subTitle font-semibold text-[#1a1a1a]">
                    {activeServiceTab.title}
                  </h4>
                  <p className="mt-3 max-w-[520px] text-body leading-relaxed text-[#4a4a4a]">
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
              <h3 className="text-sectionTitle font-semibold text-[#1a1a1a]">
                Our Guiding Principles
              </h3>
              <p className="mt-3 max-w-[540px] text-body leading-relaxed text-[#4a4a4a]">
                At the heart of Kabukabu, our guiding principles shape every
                decision we make and every interaction we have. These core values
                reflect our commitment to innovation, integrity, community, and
                safety.
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="rounded-lg bg-[#f7f7f7] p-6 h-auto w-full lg:h-[50vh]">
                  <Lightbulb className="h-5 w-5 text-[#f7c332]" />
                  <h4 className="mt-4 text-bodyLg font-semibold text-[#1a1a1a]">
                    Innovation
                  </h4>
                  <p className="mt-3 text-caption leading-relaxed text-[#8a8a8a]">
                    We are constantly improving and evolving to meet the needs of
                    our users, providing the best tools and technologies for both
                    drivers and riders.
                  </p>
                </div>
                <div className="rounded-lg bg-[#f7f7f7] p-6 h-auto w-full lg:h-[50vh]">
                  <Heart className="h-5 w-5 text-[#f7c332]" />
                  <h4 className="mt-4 text-bodyLg font-semibold text-[#1a1a1a]">
                    Integrity
                  </h4>
                  <p className="mt-3 text-caption leading-relaxed text-[#8a8a8a]">
                    We believe in building trust through transparency and honesty,
                    ensuring a fair and reliable platform for all.
                  </p>
                </div>
                <div className="rounded-lg bg-[#f7f7f7] p-6 h-auto w-full lg:h-[50vh]">
                  <Users className="h-5 w-5 text-[#f7c332]" />
                  <h4 className="mt-4 text-bodyLg font-semibold text-[#1a1a1a]">
                    Community
                  </h4>
                  <p className="mt-3 text-caption leading-relaxed text-[#8a8a8a]">
                    Kabukabu isn&rsquo;t just a ride&ndash;hailing app; it&rsquo;s a
                    community. We&rsquo;re passionate about connecting people,
                    supporting drivers, and offering a service that everyone can
                    rely on.
                  </p>
                </div>
                <div className="rounded-lg bg-[#f7f7f7] p-6 h-auto w-full lg:h-[50vh]">
                  <Shield className="h-5 w-5 text-[#f7c332]" />
                  <h4 className="mt-4 text-bodyLg font-semibold text-[#1a1a1a]">
                    Safety
                  </h4>
                  <p className="mt-3 text-caption leading-relaxed text-[#8a8a8a]">
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
                <h3 className="text-sectionTitle font-semibold text-[#1a1a1a]">
                  Our <span className="text-[#f7c332]">Vision</span>
                </h3>
                <p className="mt-3 max-w-[540px] text-body leading-relaxed text-[#4a4a4a]">
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
              <h3 className="text-pageTitle font-semibold text-[#1a1a1a]">
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
                    <div className="text-pageTitle font-semibold leading-none text-[#f7c332] tracking-[6px]">
                      &ldquo;&ldquo;
                    </div>
                    <p className="mt-4 max-w-[520px] text-body leading-relaxed text-[#4a4a4a]">
                      We envision a world where transportation is simple,
                      affordable, and accessible to everyone. As we continue to
                      grow, our goal is to become the go-to platform for safe,
                      reliable, and rewarding rides across the region. Kabukabu aims
                      to transform the ride&ndash;hailing experience by making it
                      more inclusive, driver-friendly, and community-oriented.
                    </p>
                    <p className="mt-4 text-body font-semibold text-[#1a1a1a]">
                      John Doe
                    </p>
                    <p className="text-caption text-[#9b9b9b]">Position</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-6 lg:gap-10">
                  <div className="pt-6 lg:pt-[25vh]">
                    <div className="text-pageTitle font-semibold leading-none text-[#f7c332] tracking-[6px]">
                      &ldquo;&ldquo;
                    </div>
                    <p className="mt-4 max-w-[520px] text-body leading-relaxed text-[#4a4a4a]">
                      We envision a world where transportation is simple,
                      affordable, and accessible to everyone. As we continue to
                      grow, our goal is to become the go-to platform for safe,
                      reliable, and rewarding rides across the region. Kabukabu aims
                      to transform the ride&ndash;hailing experience by making it
                      more inclusive, driver-friendly, and community-oriented.
                    </p>
                    <p className="mt-4 text-body font-semibold text-[#1a1a1a]">
                      John Doe
                    </p>
                    <p className="text-caption text-[#9b9b9b]">Position</p>
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
                    <div className="text-pageTitle font-semibold leading-none text-[#f7c332] tracking-[6px]">
                      &ldquo;&ldquo;
                    </div>
                    <p className="mt-4 max-w-[520px] text-body leading-relaxed text-[#4a4a4a]">
                      We envision a world where transportation is simple,
                      affordable, and accessible to everyone. As we continue to
                      grow, our goal is to become the go-to platform for safe,
                      reliable, and rewarding rides across the region. Kabukabu aims
                      to transform the ride&ndash;hailing experience by making it
                      more inclusive, driver-friendly, and community-oriented.
                    </p>
                    <p className="mt-4 text-body font-semibold text-[#1a1a1a]">
                      John Doe
                    </p>
                    <p className="text-caption text-[#9b9b9b]">Position</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <CommunitySection
            headingTag="h3"
            headingClassName="text-sectionTitle font-semibold text-[#1a1a1a]"
            paragraphClassName="mx-auto mt-4 max-w-[1013px] text-body leading-relaxed text-[#4a4a4a]"
          />

          {/* Split phones download */}
          <SplitDownloadSection
            density="roomy"
            containerClassName="sm:px-6 gap-10"
          />
        </main>
      </div>
    </>
  );
};

export default About;
