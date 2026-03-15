import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SplitDownloadSection from "@/components/SplitDownloadSection";
import SupportBreadcrumb from "@/components/SupportBreadcrumb";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const SupportArticle = () => {
  const { category } = useParams();
  const categoryTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")
    : "Riders";

  return (
    <>
      <Helmet>
        <title>How do i open a rider account? | Kabukabu Support</title>
        <meta
          name="description"
          content="Learn how to open a Kabukabu rider account step by step."
        />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16 sm:pt-20">
          <SupportBreadcrumb
            items={[
              { label: "Support", href: "/support" },
              { label: categoryTitle, href: `/support/${category}` },
              { label: "How do i open a rider account?" },
            ]}
          />

          <section className="py-14 sm:py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <article className="mx-auto max-w-[760px]">
                <h1 className="text-center text-pageTitle font-semibold text-[#121212] sm:text-[3rem]">
                  How do i open a rider account?
                </h1>

                <p className="mt-6 text-bodyLg leading-[1.8] text-[#2b2b2b]">
                  Getting started with Kabukabu is quick and easy! Follow these
                  simple steps to create your rider account and start enjoying
                  seamless, affordable rides.
                </p>

                <div className="mt-8 space-y-8 text-bodyLg leading-[1.8] text-[#2b2b2b]">
                  <section>
                    <h2 className="font-semibold text-[#1a1a1a]">
                      Step 1: Download the Kabukabu App
                    </h2>
                    <ul className="mt-2 list-disc space-y-1 pl-6">
                      <li>
                        <strong>For iOS Users:</strong> Go to the App Store and
                        search for &quot;Kabukabu.&quot; Tap &quot;Download&quot; to
                        install the app on your iPhone or iPad.
                      </li>
                      <li>
                        <strong>For Android Users:</strong> Visit the Google Play
                        Store and search for &quot;Kabukabu.&quot; Tap
                        &quot;Install&quot; to download the app to your Android
                        device.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-semibold text-[#1a1a1a]">
                      Step 2: Open the App and Sign Up
                    </h2>
                    <ul className="mt-2 list-disc space-y-1 pl-6">
                      <li>
                        <strong>Launch the App:</strong> Open the Kabukabu app on
                        your device.
                      </li>
                      <li>
                        <strong>Create an Account:</strong> Tap on &quot;Sign Up&quot;
                        to start the registration process. You&apos;ll need to provide
                        your basic information, including your name, email
                        address, and phone number.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-semibold text-[#1a1a1a]">
                      Step 3: Verify Your Information
                    </h2>
                    <ul className="mt-2 list-disc space-y-1 pl-6">
                      <li>
                        <strong>Email Verification:</strong> Check your email for a
                        verification link from Kabukabu. Click on the link to
                        confirm your email address.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-semibold text-[#1a1a1a]">
                      Step 4: Start Booking Rides
                    </h2>
                    <ul className="mt-2 list-disc space-y-1 pl-6">
                      <li>
                        <strong>Book a Ride:</strong> Use the app to set your
                        pickup location and destination. Review ride options,
                        select your preferred vehicle type, and confirm your
                        booking.
                      </li>
                      <li>
                        <strong>Track Your Ride:</strong> Once your ride is
                        confirmed, you can track your driver&apos;s location in
                        real-time and get updates on your ride status.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-semibold text-[#1a1a1a]">
                      Step 5: Customize Your Profile
                    </h2>
                    <ul className="mt-2 list-disc space-y-1 pl-6">
                      <li>
                        <strong>Profile Picture:</strong> Upload a profile picture
                        to personalize your account.
                      </li>
                      <li>
                        <strong>Address Information:</strong> Enter your default
                        pickup and drop-off locations to make booking rides even
                        easier.
                      </li>
                    </ul>
                  </section>
                </div>
              </article>
            </div>
          </section>

          <SplitDownloadSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SupportArticle;
