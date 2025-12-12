import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommunitySection from "@/components/CommunitySection";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const SupportArticle = () => {
  const { category } = useParams();
  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ') : 'Riders';

  return (
    <>
      <Helmet>
        <title>How do i open a rider account? | Kabukabu Support</title>
        <meta name="description" content="Learn how to open a Kabukabu rider account step by step." />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          {/* Breadcrumb */}
          <div className="bg-cream py-4">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex items-center gap-2 text-sm">
                <Link to="/support" className="text-primary hover:underline">Support</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <Link to={`/support/${category}`} className="text-primary hover:underline">{categoryTitle}</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">How do i open a rider account?</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <section className="py-12 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  How do i open a rider account?
                </h1>
                
                <p className="text-muted-foreground mb-8">
                  Getting started with Kabukabu is quick and easy! Follow these simple steps to create your rider account and start enjoying seamless, affordable rides.
                </p>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-3">Step 1: Download the Kabukabu App</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li><strong>For iOS Users:</strong> Go to the <a href="#" className="text-primary underline">App Store</a> and search for "Kabukabu." Tap "Download" to install the app on your iPhone or iPad.</li>
                      <li><strong>For Android Users:</strong> Visit the Google Play Store and search for "Kabukabu." Tap "Install" to add the app to your Android device.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-3">Step 2: Open the App and Sign Up</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li><strong>Launch the App:</strong> Open the Kabukabu app on your device.</li>
                      <li><strong>Create an Account:</strong> Tap on "Sign Up" to start the registration process. You'll need to provide your basic information, including your name, email address, and phone number.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-3">Step 3: Verify Your Information</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li><strong>Email Verification:</strong> Check your email for a verification link from Kabukabu. Click on the link to confirm your email address.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-3">Step 4: Start Booking Rides</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li><strong>Book a Ride:</strong> Use the app to set your pickup location and destination. Review ride options, select your preferred vehicle type, and confirm your booking.</li>
                      <li><strong>Track Your Ride:</strong> Once your ride is confirmed, you can track your driver's location in real-time and get updates on your ride status.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-foreground mb-3">Step 5: Customize Your Profile</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li><strong>Profile Picture:</strong> Upload a profile picture to personalize your account.</li>
                      <li><strong>Address Information:</strong> Enter your default pickup and drop-off locations to make booking rides even easier.</li>
                    </ul>
                  </div>
                </div>
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

export default SupportArticle;
